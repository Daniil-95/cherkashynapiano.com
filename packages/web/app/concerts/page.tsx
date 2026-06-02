import { getConcerts } from "@/lib/strapi";

export default async function Concerts() {
  const upcoming = await getConcerts(true);

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>
          Upcoming Concerts
        </h1>
        {upcoming.length === 0 ? (
          <p style={{ color: "#999", fontSize: "1.1rem" }}>
            No upcoming concerts at this time.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "30px" }}>
            {upcoming.map((concert) => (
              <div
                key={concert.id}
                style={{
                  border: "1px solid #333",
                  padding: "30px",
                  borderRadius: "8px",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "30px" }}>
                  <div>
                    <p style={{ color: "#d4af37", fontSize: "2rem", fontWeight: "bold" }}>
                      {new Date(concert.date).getDate()}
                    </p>
                    <p style={{ color: "#999", textTransform: "uppercase" }}>
                      {new Date(concert.date).toLocaleString("en-US", { month: "short" })}
                    </p>
                    <p style={{ color: "#999", fontSize: "0.9rem" }}>
                      {new Date(concert.date).getFullYear()}
                    </p>
                    {concert.time && (
                      <p style={{ color: "#ccc", marginTop: "10px" }}>
                        {concert.time}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                      {concert.title}
                    </h3>
                    <p style={{ color: "#d4af37", marginBottom: "10px" }}>
                      {concert.venue}
                    </p>
                    <p style={{ color: "#999", marginBottom: "15px" }}>
                      {concert.location}
                    </p>
                    {concert.description && (
                      <p style={{ color: "#ccc" }}>{concert.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
