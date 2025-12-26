import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query("SELECT * FROM news WHERE id = $1", [
      id,
    ]);
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    return NextResponse.json({ status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const {title, content} = await request.json();
    await pool.query("UPDATE news SET title=$1, content=$2 WHERE id = $3", [
        title,
        content,
        id
      ]);
    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Ошибка изменения данных:", error);
    return NextResponse.json({ status: 500 });
  }
}

// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;
//     await pool.query("DELETE FROM surveys WHERE id = $1", [id]);
//     return NextResponse.json({ status: 204 });
//   } catch (error) {
//     console.error("Ошибка удаления данных:", error);
//     return NextResponse.json({ status: 500 });
//   }
// }