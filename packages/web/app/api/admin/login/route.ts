import { NextRequest, NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setSessionCookie } from "@/lib/auth";
import { logPrismaError, toPublicPrismaMessage } from "@/lib/prisma-errors";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email и пароль обязательны" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Неверные учетные данные" },
        { status: 401 }
      );
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Неверные учетные данные" },
        { status: 401 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Доступ запрещен" },
        { status: 403 }
      );
    }

    await setSessionCookie({
      userId: user.id,
      email: user.email,
      role: user.role as "ADMIN" | "USER",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logPrismaError(error, "POST /api/admin/login");
    return NextResponse.json(
      { error: "Ошибка входа" },
      { status: 500 }
    );
  }
}
