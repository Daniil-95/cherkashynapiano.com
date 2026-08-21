"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function createPhotoAction(formData: FormData) {
  await requireAdminSession();

  const title = formData.get("title")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const category = formData.get("category")?.toString();
  const description = formData.get("description")?.toString();
  const order = formData.get("order")?.toString();

  if (!title || !imageUrl) {
    return { error: "Название и URL изображения обязательны" };
  }

  try {
    const maxOrder = await prisma.photo.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    await prisma.photo.create({
      data: {
        title,
        imageUrl,
        category: category || null,
        description: description || null,
        order: order ? parseInt(order) : (maxOrder?.order ?? 0) + 1,
      },
    });

    revalidatePath("/admin/photos");
    revalidatePath("/gallery");

    redirect("/admin/photos?saved=1");
  } catch (error) {
    console.error("Error creating photo:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function updatePhotoAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const category = formData.get("category")?.toString();
  const description = formData.get("description")?.toString();
  const order = formData.get("order")?.toString();

  if (!id || !title || !imageUrl) {
    return { error: "Название и URL изображения обязательны" };
  }

  try {
    await prisma.photo.update({
      where: { id: parseInt(id) },
      data: {
        title,
        imageUrl,
        category: category || null,
        description: description || null,
        order: order ? parseInt(order) : 0,
      },
    });

    revalidatePath("/admin/photos");
    revalidatePath("/gallery");

    redirect("/admin/photos?saved=1");
  } catch (error) {
    console.error("Error updating photo:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function deletePhotoAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    await prisma.photo.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin/photos");
    revalidatePath("/gallery");

    redirect("/admin/photos?saved=1");
  } catch (error) {
    console.error("Error deleting photo:", error);
    return { error: "Ошибка при удалении" };
  }
}
