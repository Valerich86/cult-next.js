import { readdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ master: string }> }
) {
  const { master } = await params;
  const galleryPath = join(process.cwd(), 'public', master);

  try {
    const files = await readdir(galleryPath);
    console.log(files);

    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json({ error: 'Не удалось прочитать папку' }, { status: 500 });
  }
}
