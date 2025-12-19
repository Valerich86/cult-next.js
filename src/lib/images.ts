import { readdir } from 'fs/promises';
import { join } from 'path';

export function getTattoosForWatermark (master:string) {
  let arr:string[] = [];
  for (let i = 0; i < 49; i++) {
    arr.push(`tattoo-${master}-${i+1}.jpg`);
  }
  return arr;
}


export async function getGallery(master:string) {
  const galleryPath = join(process.cwd(), 'public', master);
  try {
    const files = await readdir(galleryPath);
    return files;
  } catch (error) {
    console.error(error);
  }
}


