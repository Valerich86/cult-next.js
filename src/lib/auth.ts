import { randomBytes } from "crypto";
import { cookies } from "next/headers";

// Создание токена (вход)
export async function createSessionToken() {
  try {
    const token = randomBytes(32).toString("hex");
    const cookieStore = await cookies();
    cookieStore.set({
      name: "session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 день
      path: "/",
      sameSite: "lax",
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Проверка токена (получение пользователя)
export async function verifySession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) return false;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
