"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function updateBiographyAction(formData: FormData) {
  await requireAdminSession();

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const profileImage = formData.get("profileImage")?.toString();

  if (!title || !description) {
    return { error: "Название и описание обязательны" };
  }

  try {
    // Get or create biography (there should be only one)
    const existing = await prisma.biography.findFirst();

    if (existing) {
      await prisma.biography.update({
        where: { id: existing.id },
        data: { title, description, profileImage: profileImage || null },
      });
    } else {
      await prisma.biography.create({
        data: { title, description, profileImage: profileImage || null },
      });
    }

    revalidatePath("/admin/biography");
    revalidatePath("/biography");

    redirect("/admin/biography?saved=1");
  } catch (error) {
    console.error("Error updating biography:", error);
    return { error: "Ошибка при сохранении" };
  }
}
