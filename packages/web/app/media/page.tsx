import { getVideos } from "@/lib/strapi";

export default async function Media() {
  const videos = await getVideos();

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>Videos</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {videos.map((video) => (
            <div key={video.id}>
              <div style={{ aspectRatio: "16 / 9", marginBottom: "15px" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
                {video.title}
              </h3>
              {video.description && (
                <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                  {video.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
