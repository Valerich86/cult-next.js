// app/api/watermark/route.js
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { getTattoosForWatermark } from "@/lib/images";

const CURRENT_DESTINATION = "news";           // меняем только здесь
const CURRENT_COLLECTION = ["news-1.jpg", "news-2.png", "news-3.png"]; // меняем только здесь
const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "garbage"); // Оригиналы: public/images/photo.jpg
const WATERMARKED_DIR = path.join(PUBLIC_DIR, CURRENT_DESTINATION); // Результат: public/watermarked/photo.webp

export async function GET() {
  const text = "© CULT • Пермь";
  let arrayToString = "";
  try {
    // Создаём папку, если её нет
    await fs.mkdir(WATERMARKED_DIR, { recursive: true });

    for (let filename of CURRENT_COLLECTION) {
      const inputPath = path.join(IMAGES_DIR, filename);
      const outputPath = path.join(
        WATERMARKED_DIR,
        `${path.parse(filename).name}.webp`
      );
      arrayToString += filename + ", ";

      try {
        // Проверяем, существует ли оригинал
        await fs.access(inputPath);

        // Читаем изображение
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Создаём SVG с текстом (масштабируемый водяной знак)
        const fontSize = Math.max(16, Math.floor(metadata.width / 35));
        const svg = `
      <svg width="${metadata.width}" height="${metadata.height}">
        <style>
          text {
            font: bold ${fontSize}px 'Helvetica', sans-serif;
            fill: rgba(255, 255, 255, 0.15);
            pointer-events: none;
          }
        </style>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          ${text}
        </text>
      </svg>
    `;

        const svgBuffer = Buffer.from(svg);

        // Обработка: накладываем водяной знак и сохраняем как webp
        await image
          .composite([{ input: svgBuffer, gravity: "center" }])
          .toFormat("webp")
          .webp({ quality: 85 })
          .toFile(outputPath);

        // Путь для доступа из браузера
        const publicUrl = `/watermarked/${path.parse(filename).name}.webp`;
        console.log(publicUrl);
      } catch (error) {
        return NextResponse.json(
          { error: `не удалось обработать изображение ${filename}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      message: `Изображения ${arrayToString} готовы`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Не удалось обработать изображения" },
      { status: 500 }
    );
  }
}
