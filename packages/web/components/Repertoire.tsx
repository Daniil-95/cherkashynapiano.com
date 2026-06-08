import Link from "next/link";

export default function Repertoire() {
  return (
    <section className="repertoire-section">
      <div className="repertoire-content">
        <div className="section-label">
          REPERTOIRE
        </div>

        <h2 className="section-title">
          Selected works
        </h2>

        <div className="section-divider"></div>

        <div className="repertoire-list">
          <div className="repertoire-item">
            <span>J. S. Bach</span>
            <span>+</span>
          </div>

          <div className="repertoire-item">
            <span>L. van Beethoven</span>
            <span>+</span>
          </div>

          <div className="repertoire-item">
            <span>F. Chopin</span>
            <span>+</span>
          </div>

          <div className="repertoire-item">
            <span>F. Liszt</span>
            <span>+</span>
          </div>

          <div className="repertoire-item">
            <span>S. Rachmaninoff</span>
            <span>+</span>
          </div>

          <div className="repertoire-item">
            <span>M. Ravel</span>
            <span>+</span>
          </div>
        </div>

        <Link
          href="/repertoire"
          className="repertoire-button"
        >
          View full repertoire
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}