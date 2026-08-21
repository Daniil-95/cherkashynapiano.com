import { prisma } from "@/lib/prisma";
import styles from "@/styles/admin/dashboard.module.scss";

export default async function AdminDashboard() {
  const [
    biographyCount,
    repertoireCount,
    concertCount,
    photoCount,
    videoCount,
    messageCount,
  ] = await Promise.all([
    prisma.biography.count(),
    prisma.repertoire.count(),
    prisma.concert.count(),
    prisma.photo.count(),
    prisma.video.count(),
    prisma.contactMessage.count(),
  ]);

  const stats = [
    { label: "Биография", count: biographyCount, link: "/admin/biography" },
    { label: "Репертуар", count: repertoireCount, link: "/admin/repertoire" },
    { label: "Концерты", count: concertCount, link: "/admin/concerts" },
    { label: "Фото", count: photoCount, link: "/admin/photos" },
    { label: "Видео", count: videoCount, link: "/admin/videos" },
    {
      label: "Новые сообщения",
      count: messageCount,
      link: "/admin/messages",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Дашборд</h1>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <a key={stat.link} href={stat.link} className={styles.statCard}>
            <p className={styles.label}>{stat.label}</p>
            <p className={styles.count}>{stat.count}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
