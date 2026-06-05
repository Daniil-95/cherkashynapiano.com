import Image from "next/image";
import Link from "next/link";

export default function Biography() {
  return (
    <section className="biography">
      <div className="container">
        <div className="biography-grid">
          <div className="biography-info">
            <span className="section-label">
              Biography
            </span>

            <h2 className="section-title">
              About me
            </h2>

            <div className="section-divider" />

            <p>
              Irina Cherkashyna is a classical pianist known for expressive
              interpretations, technical precision and a deep connection with
              her audience.
            </p>

            <p>
              She has performed across Europe and continues to collaborate with
              musicians and cultural institutions internationally.
            </p>

            <Link href="/biography" className="biography-button">
              Read More
              <span>→</span>
            </Link>
          </div>

          <div className="biography-photo">
            <Image src="/images/biography/biography.jpg" alt="Irina Cherkashyna" fill priority={false}/>
          </div>
        </div>

        <div className="biography-signature">
          IC
        </div>
      </div>
    </section>
  );
}