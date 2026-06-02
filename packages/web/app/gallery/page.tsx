import { getPhotos } from "@/lib/strapi";

export default async function Gallery() {
  const photos = await getPhotos();

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>
          Photos & Videos
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              style={{
                overflow: "hidden",
                borderRadius: "8px",
                aspectRatio: "1",
              }}
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
