"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function createVideoAction(formData: FormData) {
  await requireAdminSession();

  const title = formData.get("title")?.toString();
  const youtubeId = formData.get("youtubeId")?.toString();
  const category = formData.get("category")?.toString();
  const description = formData.get("description")?.toString();
  const order = formData.get("order")?.toString();

  if (!title || !youtubeId) {
    return { error: "Название и YouTube ID обязательны" };
  }

  try {
    const maxOrder = await prisma.video.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    await prisma.video.create({
      data: {
        title,
        youtubeId,
        category: category || null,
        description: description || null,
        order: order ? parseInt(order) : (maxOrder?.order ?? 0) + 1,
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/media");

    redirect("/admin/videos?saved=1");
  } catch (error) {
    console.error("Error creating video:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function updateVideoAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const youtubeId = formData.get("youtubeId")?.toString();
  const category = formData.get("category")?.toString();
  const description = formData.get("description")?.toString();
  const order = formData.get("order")?.toString();

  if (!id || !title || !youtubeId) {
    return { error: "Название и YouTube ID обязательны" };
  }

  try {
    await prisma.video.update({
      where: { id: parseInt(id) },
      data: {
        title,
        youtubeId,
        category: category || null,
        description: description || null,
        order: order ? parseInt(order) : 0,
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/media");

    redirect("/admin/videos?saved=1");
  } catch (error) {
    console.error("Error updating video:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function deleteVideoAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    await prisma.video.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/media");

    redirect("/admin/videos?saved=1");
  } catch (error) {
    console.error("Error deleting video:", error);
    return { error: "Ошибка при удалении" };
  }
}
