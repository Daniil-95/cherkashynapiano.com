import Link from "next/link";

export default function Concerts() {
  return (
    <section className="concerts-section">
      <div className="concerts-content">
        <div className="concerts-header">
          <div>
            <div className="section-label">
              CONCERTS
            </div>

            <h2 className="section-title">
              Upcoming concerts
            </h2>

            <div className="section-divider"></div>
          </div>

          <Link
            href="/concerts"
            className="concerts-all-link"
          >
            View all
          </Link>
        </div>

        <div className="concerts-list">
          <article className="concert-item">
            <div className="concert-date">
              <span className="concert-day">25</span>

              <div className="concert-month">
                <span>MAY</span>
                <span>2024</span>
              </div>
            </div>

            <div className="concert-info">
              <h3>Prague Spring Festival</h3>
              <p>Dvořák Hall, Prague, Czech Republic</p>
            </div>

            <div className="concert-time">
              19:30
            </div>

            <div className="concert-arrow">
              →
            </div>
          </article>

          <article className="concert-item">
            <div className="concert-date">
              <span className="concert-day">14</span>

              <div className="concert-month">
                <span>JUN</span>
                <span>2024</span>
              </div>
            </div>

            <div className="concert-info">
              <h3>Vienna Musikverein</h3>
              <p>Vienna, Austria</p>
            </div>

            <div className="concert-time">
              20:00
            </div>

            <div className="concert-arrow">
              →
            </div>
          </article>

          <article className="concert-item">
            <div className="concert-date">
              <span className="concert-day">02</span>

              <div className="concert-month">
                <span>SEP</span>
                <span>2024</span>
              </div>
            </div>

            <div className="concert-info">
              <h3>Chopin Evening</h3>
              <p>Wigmore Hall, London, UK</p>
            </div>

            <div className="concert-time">
              19:30</div>

            <div className="concert-arrow">
              →
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}