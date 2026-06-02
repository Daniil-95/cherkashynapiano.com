import { getRepertoire } from "@/lib/strapi";

export default async function Repertoire() {
  const repertoire = await getRepertoire();

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>Repertoire</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {repertoire.map((item) => (
            <div
              key={item.id}
              style={{
                borderLeft: "2px solid #d4af37",
                paddingLeft: "20px",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#d4af37", marginBottom: "10px" }}>
                {item.composer}
              </p>
              {item.year && (
                <p style={{ color: "#999", fontSize: "0.9rem" }}>
                  Year: {item.year}
                </p>
              )}
              {item.duration && (
                <p style={{ color: "#999", fontSize: "0.9rem" }}>
                  Duration: {item.duration} min
                </p>
              )}
              {item.description && (
                <p style={{ color: "#ccc", marginTop: "10px", fontSize: "0.95rem" }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
