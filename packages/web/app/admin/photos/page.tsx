import { prisma } from "@/lib/prisma";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import {
  createPhotoAction,
  updatePhotoAction,
  deletePhotoAction,
} from "./actions";
import styles from "@/styles/admin/entityList.module.scss";
import formStyles from "@/styles/admin/entityForm.module.scss";

export default async function PhotosPage() {
  const photos = await prisma.photo.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className={styles.container}>
      <h1>Фото</h1>

      {/* Create Form */}
      <div className={formStyles.formSection}>
        <h2>Добавить новое фото</h2>
        <form action={createPhotoAction} className={formStyles.form}>
          <div className={formStyles.field}>
            <label htmlFor="title">Название</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Концерт в Берлине"
              required
            />
          </div>

          <div className={formStyles.field}>
            <label htmlFor="imageUrl">URL Изображения</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          <div className={formStyles.twoCol}>
            <div className={formStyles.field}>
              <label htmlFor="category">Категория</label>
              <input
                id="category"
                name="category"
                type="text"
                placeholder="Концерты"
              />
            </div>

            <div className={formStyles.field}>
              <label htmlFor="order">Порядок</label>
              <input id="order" name="order" type="number" />
            </div>
          </div>

          <div className={formStyles.field}>
            <label htmlFor="description">Описание</label>
            <textarea id="description" name="description" rows={4} />
          </div>

          <div className={formStyles.actions}>
            <SubmitButton>Добавить</SubmitButton>
          </div>
        </form>
      </div>

      {/* List */}
      <div className={styles.listSection}>
        <h2>Список фото</h2>

        {photos.length === 0 ? (
          <p className={styles.empty}>Нет фото</p>
        ) : (
          <div className={styles.list}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.item}>
                <div className={styles.itemContent}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className={styles.thumbnail}
                  />
                  <h3>{photo.title}</h3>
                  {photo.category && (
                    <p className={styles.category}>{photo.category}</p>
                  )}
                  {photo.description && (
                    <p className={styles.description}>{photo.description}</p>
                  )}
                </div>

                <form
                  action={updatePhotoAction}
                  className={formStyles.form}
                >
                  <input type="hidden" name="id" value={photo.id} />

                  <div className={formStyles.field}>
                    <label>Название</label>
                    <input
                      name="title"
                      defaultValue={photo.title}
                      required
                    />
                  </div>

                  <div className={formStyles.field}>
                    <label>URL Изображения</label>
                    <input
                      name="imageUrl"
                      type="url"
                      defaultValue={photo.imageUrl}
                      required
                    />
                  </div>

                  <div className={formStyles.twoCol}>
                    <div className={formStyles.field}>
                      <label>Категория</label>
                      <input
                        name="category"
                        defaultValue={photo.category || ""}
                      />
                    </div>

                    <div className={formStyles.field}>
                      <label>Порядок</label>
                      <input
                        name="order"
                        type="number"
                        defaultValue={photo.order}
                      />
                    </div>
                  </div>

                  <div className={formStyles.field}>
                    <label>Описание</label>
                    <textarea
                      name="description"
                      defaultValue={photo.description || ""}
                      rows={3}
                    />
                  </div>

                  <div className={styles.actions}>
                    <SubmitButton pendingLabel="Сохраняю...">
                      Сохранить
                    </SubmitButton>

                    <ConfirmForm
                      message="Вы уверены, что хотите удалить это фото?"
                      action={deletePhotoAction}
                    >
                      <input type="hidden" name="id" value={photo.id} />
                      <button
                        type="submit"
                        className={styles.deleteButton}
                      >
                        Удалить
                      </button>
                    </ConfirmForm>
                  </div>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
