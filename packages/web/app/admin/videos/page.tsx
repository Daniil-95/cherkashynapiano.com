import { prisma } from "@/lib/prisma";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import {
  createVideoAction,
  updateVideoAction,
  deleteVideoAction,
} from "./actions";
import styles from "@/styles/admin/entityList.module.scss";
import formStyles from "@/styles/admin/entityForm.module.scss";

export default async function VideosPage() {
  const videos = await prisma.video.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className={styles.container}>
      <h1>Видео</h1>

      {/* Create Form */}
      <div className={formStyles.formSection}>
        <h2>Добавить новое видео</h2>
        <form action={createVideoAction} className={formStyles.form}>
          <div className={formStyles.field}>
            <label htmlFor="title">Название</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Моя исполнение Лунной сонаты"
              required
            />
          </div>

          <div className={formStyles.field}>
            <label htmlFor="youtubeId">YouTube ID</label>
            <input
              id="youtubeId"
              name="youtubeId"
              type="text"
              placeholder="dQw4w9WgXcQ"
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
        <h2>Список видео</h2>

        {videos.length === 0 ? (
          <p className={styles.empty}>Нет видео</p>
        ) : (
          <div className={styles.list}>
            {videos.map((video) => (
              <div key={video.id} className={styles.item}>
                <div className={styles.itemContent}>
                  <div className={styles.videoPreview}>
                    <iframe
                      width="100%"
                      height="auto"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allowFullScreen
                      style={{ aspectRatio: "16/9" }}
                    />
                  </div>
                  <h3>{video.title}</h3>
                  {video.category && (
                    <p className={styles.category}>{video.category}</p>
                  )}
                  {video.description && (
                    <p className={styles.description}>{video.description}</p>
                  )}
                </div>

                <form
                  action={updateVideoAction}
                  className={formStyles.form}
                >
                  <input type="hidden" name="id" value={video.id} />

                  <div className={formStyles.field}>
                    <label>Название</label>
                    <input
                      name="title"
                      defaultValue={video.title}
                      required
                    />
                  </div>

                  <div className={formStyles.field}>
                    <label>YouTube ID</label>
                    <input
                      name="youtubeId"
                      defaultValue={video.youtubeId}
                      required
                    />
                  </div>

                  <div className={formStyles.twoCol}>
                    <div className={formStyles.field}>
                      <label>Категория</label>
                      <input
                        name="category"
                        defaultValue={video.category || ""}
                      />
                    </div>

                    <div className={formStyles.field}>
                      <label>Порядок</label>
                      <input
                        name="order"
                        type="number"
                        defaultValue={video.order}
                      />
                    </div>
                  </div>

                  <div className={formStyles.field}>
                    <label>Описание</label>
                    <textarea
                      name="description"
                      defaultValue={video.description || ""}
                      rows={3}
                    />
                  </div>

                  <div className={styles.actions}>
                    <SubmitButton pendingLabel="Сохраняю...">
                      Сохранить
                    </SubmitButton>

                    <ConfirmForm
                      message="Вы уверены, что хотите удалить это видео?"
                      action={deleteVideoAction}
                    >
                      <input type="hidden" name="id" value={video.id} />
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
