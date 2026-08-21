import { prisma } from "@/lib/prisma";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { updateBiographyAction } from "./actions";
import styles from "@/styles/admin/entityForm.module.scss";

export default async function BiographyPage() {
  const biography = await prisma.biography.findFirst();

  return (
    <div className={styles.container}>
      <h1>Биография</h1>

      <form action={updateBiographyAction} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">Название</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={biography?.title || ""}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            name="description"
            defaultValue={biography?.description || ""}
            required
            rows={10}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="profileImage">URL Профиля</label>
          <input
            id="profileImage"
            name="profileImage"
            type="url"
            defaultValue={biography?.profileImage || ""}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className={styles.actions}>
          <SubmitButton>Сохранить</SubmitButton>
        </div>
      </form>
    </div>
  );
}
