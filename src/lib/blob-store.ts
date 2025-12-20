
import { list } from '@vercel/blob';

export async function getBlobs(folderPath: string) {
  const { blobs } = await list({ prefix: folderPath, token: process.env.BLOB_READ_WRITE_TOKEN });
  console.log(blobs)
  return blobs;
}