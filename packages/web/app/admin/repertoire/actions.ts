"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function createRepertoireAction(formData: FormData) {
  await requireAdminSession();

  const title = formData.get("title")?.toString();
  const composer = formData.get("composer")?.toString();
  const year = formData.get("year")?.toString();
  const duration = formData.get("duration")?.toString();
  const description = formData.get("description")?.toString();

  if (!title || !composer) {
    return { error: "Название и композитор обязательны" };
  }

  try {
    await prisma.repertoire.create({
      data: {
        title,
        composer,
        year: year ? parseInt(year) : null,
        duration: duration ? parseInt(duration) : null,
        description: description || null,
      },
    });

    revalidatePath("/admin/repertoire");
    revalidatePath("/repertoire");

    redirect("/admin/repertoire?saved=1");
  } catch (error) {
    console.error("Error creating repertoire:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function updateRepertoireAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const composer = formData.get("composer")?.toString();
  const year = formData.get("year")?.toString();
  const duration = formData.get("duration")?.toString();
  const description = formData.get("description")?.toString();

  if (!id || !title || !composer) {
    return { error: "Название и композитор обязательны" };
  }

  try {
    await prisma.repertoire.update({
      where: { id: parseInt(id) },
      data: {
        title,
        composer,
        year: year ? parseInt(year) : null,
        duration: duration ? parseInt(duration) : null,
        description: description || null,
      },
    });

    revalidatePath("/admin/repertoire");
    revalidatePath("/repertoire");

    redirect("/admin/repertoire?saved=1");
  } catch (error) {
    console.error("Error updating repertoire:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function deleteRepertoireAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    await prisma.repertoire.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin/repertoire");
    revalidatePath("/repertoire");

    redirect("/admin/repertoire?saved=1");
  } catch (error) {
    console.error("Error deleting repertoire:", error);
    return { error: "Ошибка при удалении" };
  }
}
