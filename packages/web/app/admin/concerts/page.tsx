import { prisma } from "@/lib/prisma";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import {
  createConcertAction,
  updateConcertAction,
  deleteConcertAction,
} from "./actions";
import styles from "@/styles/admin/entityList.module.scss";
import formStyles from "@/styles/admin/entityForm.module.scss";

export default async function ConcertsPage() {
  const concerts = await prisma.concert.findMany({
    orderBy: { date: "desc" },
  });

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const formatDateTime = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <div className={styles.container}>
      <h1>Концерты</h1>

      {/* Create Form */}
      <div className={formStyles.formSection}>
        <h2>Добавить новый концерт</h2>
        <form action={createConcertAction} className={formStyles.form}>
          <div className={formStyles.field}>
            <label htmlFor="title">Название</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Симфонический концерт"
              required
            />
          </div>

          <div className={formStyles.twoCol}>
            <div className={formStyles.field}>
              <label htmlFor="date">Дата</label>
              <input id="date" name="date" type="date" required />
            </div>

            <div className={formStyles.field}>
              <label htmlFor="time">Время</label>
              <input id="time" name="time" type="time" />
            </div>
          </div>

          <div className={formStyles.twoCol}>
            <div className={formStyles.field}>
              <label htmlFor="location">Город</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Москва"
                required
              />
            </div>

            <div className={formStyles.field}>
              <label htmlFor="venue">Место проведения</label>
              <input
                id="venue"
                name="venue"
                type="text"
                placeholder="Консерватория"
                required
              />
            </div>
          </div>

          <div className={formStyles.field}>
            <label htmlFor="description">Описание</label>
            <textarea id="description" name="description" rows={4} />
          </div>

          <div className={formStyles.field}>
            <label htmlFor="isUpcoming">
              <input
                id="isUpcoming"
                name="isUpcoming"
                type="checkbox"
                defaultChecked
              />
              Предстоящий концерт
            </label>
          </div>

          <div className={formStyles.actions}>
            <SubmitButton>Добавить</SubmitButton>
          </div>
        </form>
      </div>

      {/* List */}
      <div className={styles.listSection}>
        <h2>Список концертов</h2>

        {concerts.length === 0 ? (
          <p className={styles.empty}>Нет концертов</p>
        ) : (
          <div className={styles.list}>
            {concerts.map((concert) => (
              <div key={concert.id} className={styles.item}>
                <div className={styles.itemContent}>
                  <h3>{concert.title}</h3>
                  <p className={styles.meta}>
                    {concert.date.toLocaleDateString()} • {concert.location}
                  </p>
                  <p className={styles.venue}>{concert.venue}</p>
                  {concert.time && (
                    <p className={styles.time}>Время: {concert.time}</p>
                  )}
                  {concert.description && (
                    <p className={styles.description}>{concert.description}</p>
                  )}
                </div>

                <form
                  action={updateConcertAction}
                  className={formStyles.form}
                >
                  <input type="hidden" name="id" value={concert.id} />

                  <div className={formStyles.field}>
                    <input
                      name="title"
                      defaultValue={concert.title}
                      required
                    />
                  </div>

                  <div className={formStyles.twoCol}>
                    <div className={formStyles.field}>
                      <input
                        name="date"
                        type="date"
                        defaultValue={formatDate(concert.date)}
                        required
                      />
                    </div>

                    <div className={formStyles.field}>
                      <input
                        name="time"
                        type="time"
                        defaultValue={concert.time || ""}
                      />
                    </div>
                  </div>

                  <div className={formStyles.twoCol}>
                    <div className={formStyles.field}>
                      <input
                        name="location"
                        defaultValue={concert.location}
                        required
                      />
                    </div>

                    <div className={formStyles.field}>
                      <input
                        name="venue"
                        defaultValue={concert.venue}
                        required
                      />
                    </div>
                  </div>

                  <div className={formStyles.field}>
                    <textarea
                      name="description"
                      defaultValue={concert.description || ""}
                      rows={3}
                    />
                  </div>

                  <div className={formStyles.field}>
                    <label htmlFor={`isUpcoming-${concert.id}`}>
                      <input
                        id={`isUpcoming-${concert.id}`}
                        name="isUpcoming"
                        type="checkbox"
                        defaultChecked={concert.isUpcoming}
                      />
                      Предстоящий концерт
                    </label>
                  </div>

                  <div className={styles.actions}>
                    <SubmitButton pendingLabel="Сохраняю...">
                      Сохранить
                    </SubmitButton>

                    <ConfirmForm
                      message="Вы уверены, что хотите удалить этот концерт?"
                      action={deleteConcertAction}
                    >
                      <input type="hidden" name="id" value={concert.id} />
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
