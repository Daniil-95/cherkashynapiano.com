import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { logPrismaError, toPublicPrismaMessage } from "@/lib/prisma-errors";

export async function POST(request: NextRequest) {
  try {
    const setupKey = process.env.ADMIN_SETUP_KEY;

    if (!setupKey) {
      return NextResponse.json(
        { error: "Setup не доступен" },
        { status: 403 }
      );
    }

    const { key, email, password } = await request.json();

    if (key !== setupKey) {
      return NextResponse.json(
        { error: "Неверный ключ setup" },
        { status: 403 }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email и пароль обязательны" },
        { status: 400 }
      );
    }

    // Check if admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Администратор уже создан" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    return NextResponse.json({ success: true, userId: user.id });
  } catch (error) {
    logPrismaError(error, "POST /api/admin/setup");
    return NextResponse.json(
      { error: toPublicPrismaMessage(error) },
      { status: 500 }
    );
  }
}
