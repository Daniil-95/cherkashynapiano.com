import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

const COOKIE_NAME = "admin_session";

export interface SessionPayload {
  userId: number;
  email: string;
  role: "ADMIN" | "USER";
}

export async function signToken(payload: SessionPayload): Promise<string> {
  return sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const verified = verify(token, JWT_SECRET) as SessionPayload;
    return verified;
  } catch (error) {
    return null;
  }
}

export async function getSessionPayload(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export async function requireAdminSession(): Promise<SessionPayload> {
  const session = await getSessionPayload();

  if (!session || session.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return session;
}

export async function setSessionCookie(payload: SessionPayload): Promise<void> {
  const token = await signToken(payload);
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
