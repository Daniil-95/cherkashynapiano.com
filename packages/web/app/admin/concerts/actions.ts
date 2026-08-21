"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function createConcertAction(formData: FormData) {
  await requireAdminSession();

  const title = formData.get("title")?.toString();
  const date = formData.get("date")?.toString();
  const location = formData.get("location")?.toString();
  const venue = formData.get("venue")?.toString();
  const time = formData.get("time")?.toString();
  const description = formData.get("description")?.toString();
  const isUpcoming = formData.get("isUpcoming") === "on";

  if (!title || !date || !location || !venue) {
    return { error: "Название, дата, место и заведение обязательны" };
  }

  try {
    await prisma.concert.create({
      data: {
        title,
        date: new Date(date),
        location,
        venue,
        time: time || null,
        description: description || null,
        isUpcoming,
      },
    });

    revalidatePath("/admin/concerts");
    revalidatePath("/concerts");

    redirect("/admin/concerts?saved=1");
  } catch (error) {
    console.error("Error creating concert:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function updateConcertAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const date = formData.get("date")?.toString();
  const location = formData.get("location")?.toString();
  const venue = formData.get("venue")?.toString();
  const time = formData.get("time")?.toString();
  const description = formData.get("description")?.toString();
  const isUpcoming = formData.get("isUpcoming") === "on";

  if (!id || !title || !date || !location || !venue) {
    return { error: "Название, дата, место и заведение обязательны" };
  }

  try {
    await prisma.concert.update({
      where: { id: parseInt(id) },
      data: {
        title,
        date: new Date(date),
        location,
        venue,
        time: time || null,
        description: description || null,
        isUpcoming,
      },
    });

    revalidatePath("/admin/concerts");
    revalidatePath("/concerts");

    redirect("/admin/concerts?saved=1");
  } catch (error) {
    console.error("Error updating concert:", error);
    return { error: "Ошибка при сохранении" };
  }
}

export async function deleteConcertAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get("id")?.toString();

  if (!id) {
    return { error: "ID не найден" };
  }

  try {
    await prisma.concert.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin/concerts");
    revalidatePath("/concerts");

    redirect("/admin/concerts?saved=1");
  } catch (error) {
    console.error("Error deleting concert:", error);
    return { error: "Ошибка при удалении" };
  }
}
