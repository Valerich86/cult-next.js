import { NextRequest, NextResponse } from "next/server";
// import { uploadFile } from '@/lib/vk-cloud';
import { randomUUID } from "crypto";
import sharp from "sharp";
import { Jimp, JimpMime } from "jimp";
import { s3Client } from "@/lib/vk-cloud";
import { PutObjectCommand, ObjectCannedACL } from "@aws-sdk/client-s3";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const targetFolder = formData.get("targetFolder") as string;
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json(
        { error: "Файлы не предоставлены" },
        { status: 400 }
      );
    }

    const uploadedFiles: string[] = [];

    for (const file of files) {
      try {
        // Проверяем, что файл — изображение
        if (!file.type.startsWith("image/")) {
          console.warn(
            `Файл ${file.name} не является изображением, пропускаем`
          );
          continue;
        }

        // Обрабатываем изображение
        const processedBuffer = await processImage(file);
        // Генерируем уникальное имя
        const fileName = `${randomUUID()}.webp`;

        // Параметры для загрузки (в папку "uploads")
        const params = {
          Bucket: process.env.VK_CLOUD_BUCKET!,
          Key: `${targetFolder}/${fileName}`, // Файл попадёт в папку "uploads"
          Body: processedBuffer,
          ContentType: file.type,
          ACL: ObjectCannedACL.public_read,
        };

        // Отправляем в VK Cloud
        await s3Client.send(new PutObjectCommand(params));

        // Сохраняем URL успешного файла
        uploadedFiles.push(
          `${process.env.VK_CLOUD_ENDPOINT}/${process.env.VK_CLOUD_BUCKET}/${targetFolder}/${fileName}`
        );
      } catch (fileError) {
        console.error(`Ошибка загрузки файла ${file.name}:`, fileError);
        continue;
      }
    }
    return NextResponse.json({
      message: "Файлы загружены",
      uploadedFiles, // Список URL успешных загрузок
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Произошла ошибка при загрузке файла" },
      { status: 500 }
    );
  }
}

async function processImage(file: File): Promise<Buffer> {
  // 1. Читаем файл как Buffer
  const arrayBuffer = await file.arrayBuffer();
  const inputBuffer = Buffer.from(arrayBuffer);

  const image = sharp(inputBuffer);
  const metadata = await image.metadata();

  // Создаём SVG с текстом (масштабируемый водяной знак)
  const fontSize = Math.max(16, Math.floor(metadata.width / 35));

  // 2. Создаём водяной знак как SVG (текст в векторной форме)
  const watermarkText = "© CULT studio-Perm";
  const svgWatermark = `
    <svg width="${metadata.width}" height="${metadata.height}">
        <style>
          text {
            font: bold ${fontSize}px 'Helvetica', sans-serif;
            fill: rgba(255, 255, 255, 0.15);
            pointer-events: none;
          }
        </style>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          ${watermarkText}
        </text>
      </svg>
  `;

  const svgBuffer = Buffer.from(svgWatermark);

  // 3. Обрабатываем изображение:
  // - конвертируем в WebP,
  // - накладываем SVG‑текст как оверлей,
  // - сохраняем метаданные (опционально)
  const processedBuffer = await sharp(inputBuffer)
    .toFormat("webp")
    .withMetadata({})
    .composite([
      {
        input: svgBuffer,
        gravity: "center", // правый нижний угол
        blend: "over",
      },
    ])
    .toBuffer();

  return processedBuffer;
}
