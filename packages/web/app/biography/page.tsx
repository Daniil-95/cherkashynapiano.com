import { getBiography } from "@/lib/strapi";

export default async function Biography() {
  const biography = await getBiography();

  if (!biography) {
    return (
      <div className="container" style={{ padding: "60px 20px" }}>
        <h1>Biography</h1>
        <p>Loading biography...</p>
      </div>
    );
  }

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="biography-section">
          <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>
            {biography.title}
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {biography.profileImage && (
              <div>
                <img
                  src={biography.profileImage}
                  alt={biography.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
            <div>
              <div
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#ccc",
                }}
                dangerouslySetInnerHTML={{ __html: biography.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
