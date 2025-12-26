import { createSessionToken } from "@/lib/auth";

export async function POST(req: Request) {
  const {password} = await req.json();
  const isAdmin = password === process.env.ADMIN_PASSWORD;
  if (!password || typeof password !== 'string' || password.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: "Введи хоть что-нибудь!" }), { status: 406 }
    );
  }
  if (!isAdmin) {
    return new Response(
      JSON.stringify({ error: "Ты самозванец!" }), { status: 406 }
    );
  }
  const token = await createSessionToken();
  if (!token) {
    return new Response(
      JSON.stringify({ error: "Разраб накосячил. Сорян." }), { status: 406 }
    );
  }
  return new Response(
    JSON.stringify({ success: true }),
    {
      status: 200,
      headers: {
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
        'Content-Type': 'application/json',
      },
    }
  );
}