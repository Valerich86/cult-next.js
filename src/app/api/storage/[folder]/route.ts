import { NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { bucketName, s3Client } from "@/lib/vk-cloud";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ folder: string }> }
) {
  try {
    let { folder } = await params;
    if (folder.startsWith("news")) {
      folder = "news/" + folder;
    }
    const command = new ListObjectsV2Command({
      Bucket: bucketName, // имя вашего бакета
      Prefix: `${folder}/`, // путь к папке (обязательно с / в конце!)
      Delimiter: "/", // опционально: ограничивает вывод только объектами в указанной папке (без подпапок)
    });
    const response = await s3Client.send(command);
    const result = response.Contents || [];
    let photos: string[] = [];
    if (result.length > 0) {
      if (result[0].Key === `${folder}/`)
        result.splice(0, 1);
      result.forEach((element) => {
        photos.push(element.Key!);
      });
    }
    return NextResponse.json(photos);
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    return NextResponse.json({ status: 500 });
  }
}
