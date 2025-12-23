import { readdir } from 'fs/promises';
import { join } from 'path';

export function getTattoosForWatermark (master:string) {
  let arr:string[] = [];
  for (let i = 0; i < 49; i++) {
    arr.push(`tattoo-${master}-${i+1}.jpg`);
  }
  return arr;
}


export async function getFiles(folder:string) {
  const targetPath = join(process.cwd(), 'public', folder);
  try {
    const files = await readdir(targetPath);
    return files;
  } catch (error) {
    console.error(error);
  }
}

export const news1 = ["news-3.webp", "news-2.webp", "news-1.webp"];


