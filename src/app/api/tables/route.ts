import { pool } from "@/lib/db";

async function createNewsTable() {
  try {
    pool.query(
      `CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        published_at DATE DEFAULT CURRENT_DATE
      );`
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

async function createIndexes() {
  try {
    pool.query(
      `CREATE INDEX IF NOT EXISTS idx_news_id ON news(id);`
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await createNewsTable();
    await createIndexes();
    return Response.json({ message: "База данных создана / обновлена" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}