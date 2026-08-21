"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function markMessageAsReadAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    const message = await prisma.contactMessage.findUnique({
      where: { id: parseInt(id) },
    });

    if (message) {
      await prisma.contactMessage.update({
        where: { id: parseInt(id) },
        data: { isRead: !message.isRead },
      });
    }

    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Error marking message as read:", error);
    return { error: "Ошибка при обновлении" };
  }
}

export async function deleteMessageAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    await prisma.contactMessage.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Error deleting message:", error);
    return { error: "Ошибка при удалении" };
  }
}
