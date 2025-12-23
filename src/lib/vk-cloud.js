import {
  S3Client,
  ListBucketsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

export const baseUrl = process.env.VK_CLOUD_ENDPOINT;
export const bucketName = process.env.VK_CLOUD_BUCKET;

export const s3Client = new S3Client({
  region: "ru-msk", // или другой регион
  endpoint: baseUrl, // домен вашего региона
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

export async function getObjects(key) {
  const command = new ListObjectsV2Command({
    Bucket: bucketName, // имя вашего бакета
    Prefix: `${key}/`, // путь к папке (обязательно с / в конце!)
    Delimiter: '/', // опционально: ограничивает вывод только объектами в указанной папке (без подпапок)
  });

  try {
    const response = await s3Client.send(command);
    const photos = response.Contents || [];
    if (photos.length > 0 && photos[0].Key === `${key}/`) photos.splice(0, 1);
    return photos;
  } catch (error) {
    console.error("Ошибка при получении списка файлов:", error);
  }
}

export async function deleteObject(key) {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: key,
  });
  await s3Client.send(command);
}
