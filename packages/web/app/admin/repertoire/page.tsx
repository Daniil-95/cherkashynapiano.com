import { prisma } from "@/lib/prisma";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import {
  createRepertoireAction,
  updateRepertoireAction,
  deleteRepertoireAction,
} from "./actions";
import styles from "@/styles/admin/entityList.module.scss";
import formStyles from "@/styles/admin/entityForm.module.scss";

export default async function RepertoirePage() {
  const repertoires = await prisma.repertoire.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.container}>
      <h1>Репертуар</h1>

      {/* Create Form */}
      <div className={formStyles.formSection}>
        <h2>Добавить новое произведение</h2>
        <form action={createRepertoireAction} className={formStyles.form}>
          <div className={formStyles.field}>
            <label htmlFor="title">Название</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Лунная соната"
              required
            />
          </div>

          <div className={formStyles.field}>
            <label htmlFor="composer">Композитор</label>
            <input
              id="composer"
              name="composer"
              type="text"
              placeholder="Людвиг ван Бетховен"
              required
            />
          </div>

          <div className={formStyles.twoCol}>
            <div className={formStyles.field}>
              <label htmlFor="year">Год</label>
              <input id="year" name="year" type="number" />
            </div>

            <div className={formStyles.field}>
              <label htmlFor="duration">Длительность (сек)</label>
              <input id="duration" name="duration" type="number" />
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
        <h2>Список произведений</h2>

        {repertoires.length === 0 ? (
          <p className={styles.empty}>Нет произведений</p>
        ) : (
          <div className={styles.list}>
            {repertoires.map((repertoire) => (
              <div key={repertoire.id} className={styles.item}>
                <div className={styles.itemContent}>
                  <h3>{repertoire.title}</h3>
                  <p className={styles.composer}>{repertoire.composer}</p>
                  {repertoire.year && (
                    <p className={styles.meta}>
                      Год: {repertoire.year}
                      {repertoire.duration && ` • ${repertoire.duration} сек`}
                    </p>
                  )}
                </div>

                <form
                  action={updateRepertoireAction}
                  className={formStyles.form}
                >
                  <input type="hidden" name="id" value={repertoire.id} />

                  <div className={formStyles.field}>
                    <input
                      name="title"
                      defaultValue={repertoire.title}
                      required
                    />
                  </div>

                  <div className={formStyles.field}>
                    <input
                      name="composer"
                      defaultValue={repertoire.composer}
                      required
                    />
                  </div>

                  <div className={formStyles.twoCol}>
                    <div className={formStyles.field}>
                      <input
                        name="year"
                        type="number"
                        defaultValue={repertoire.year || ""}
                      />
                    </div>

                    <div className={formStyles.field}>
                      <input
                        name="duration"
                        type="number"
                        defaultValue={repertoire.duration || ""}
                      />
                    </div>
                  </div>

                  <div className={formStyles.field}>
                    <textarea
                      name="description"
                      defaultValue={repertoire.description || ""}
                      rows={3}
                    />
                  </div>

                  <div className={styles.actions}>
                    <SubmitButton pendingLabel="Сохраняю...">
                      Сохранить
                    </SubmitButton>

                    <ConfirmForm
                      message="Вы уверены, что хотите удалить это произведение?"
                      action={deleteRepertoireAction}
                    >
                      <input type="hidden" name="id" value={repertoire.id} />
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
