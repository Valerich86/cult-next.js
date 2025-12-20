import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || "";
  const targetDir = searchParams.get('targetDir') || "";
  const body = await request.arrayBuffer();

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(targetDir + "/" + filename, body, {
    access: 'public', token: process.env.BLOB_READ_WRITE_TOKEN, contentType: 'image/webp'
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

  return NextResponse.json(blob);
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
