import Image from "next/image";
import Link from "next/link";

export default function Biography() {
  return (
    <section className="biography">
      <div className="container">
        <div className="biography__grid">
          <div className="biography__content">
            <span className="biography__label">
              Biography
            </span>

            <h2 className="biography__title">
              About me
            </h2>

            <div className="biography__divider" />

            <p className="biography__text">
              Irina Cherkashyna is a classical pianist known for expressive
              interpretations, technical precision and a deep connection with
              her audience.
            </p>

            <p className="biography__text">
              She has performed across Europe and continues to collaborate with
              musicians and cultural institutions internationally.
            </p>

            <Link
              href="/about"
              className="biography__button"
            >
              Read More
              <span>→</span>
            </Link>
          </div>

          <div className="biography__image">
            <Image
              src="/images/biography/biography.jpg"
              alt="Irina Cherkashyna"
              fill
            />
          </div>

        </div>

        <div className="biography__signature">
          Ic
        </div>
      </div>
    </section>
  );
}