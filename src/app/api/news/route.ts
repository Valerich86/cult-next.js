import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  try {
    const result = await pool.query(
      `INSERT INTO news (title, content)
       VALUES ($1, $2) RETURNING id;
      `,
      [title, content]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Ошибка добавления данных:", error);
    return NextResponse.json({ status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const news = await pool.query(
      `SELECT * FROM news ORDER BY id DESC;`
    );
    return NextResponse.json(news.rows);
  } catch (error) {
    console.error("Ошибка получения данных: ", error);
    return NextResponse.json({ status: 500 });
  }
}