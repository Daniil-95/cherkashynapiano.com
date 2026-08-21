import { Prisma } from "@prisma/client";

export function logPrismaError(error: unknown, context: string): void {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.error(`[${context}] Prisma Error - Code: ${error.code}`, {
      message: error.message,
      meta: error.meta,
    });
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.error(`[${context}] Prisma Validation Error`, error.message);
  } else {
    console.error(`[${context}] Unknown error`, error);
  }
}

export function toPublicPrismaMessage(error: unknown): string {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return "Запись с таким значением уже существует.";
    }
    if (error.code === "P2025") {
      return "Запись не найдена.";
    }
  }
  return "Произошла ошибка при сохранении. Пожалуйста, попробуйте позже.";
}
