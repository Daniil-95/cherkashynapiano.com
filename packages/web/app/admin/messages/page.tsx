import { prisma } from "@/lib/prisma";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import {
  markMessageAsReadAction,
  deleteMessageAction,
} from "./actions";
import styles from "@/styles/admin/messages.module.scss";

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className={styles.container}>
      <h1>Сообщения</h1>

      <div className={styles.header}>
        <p className={styles.stats}>
          Всего: {messages.length} • Новых: {unreadCount}
        </p>
      </div>

      {messages.length === 0 ? (
        <p className={styles.empty}>Нет сообщений</p>
      ) : (
        <div className={styles.list}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.item} ${message.isRead ? styles.read : styles.unread}`}
            >
              <div className={styles.itemHeader}>
                <div>
                  <h3>{message.name}</h3>
                  <p className={styles.email}>{message.email}</p>
                </div>
                <p className={styles.date}>
                  {message.createdAt.toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className={styles.content}>
                <p>{message.message}</p>
              </div>

              <div className={styles.actions}>
                <form action={markMessageAsReadAction} method="post">
                  <input type="hidden" name="id" value={message.id} />
                  <button type="submit" className={styles.readButton}>
                    {message.isRead ? "Отметить непрочитанным" : "Отметить прочитанным"}
                  </button>
                </form>

                <ConfirmForm
                  message="Вы уверены, что хотите удалить это сообщение?"
                  action={deleteMessageAction}
                >
                  <input type="hidden" name="id" value={message.id} />
                  <button type="submit" className={styles.deleteButton}>
                    Удалить
                  </button>
                </ConfirmForm>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
