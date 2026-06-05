import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <Image
          src="/images/hero/hero-pianist.jpg"
          alt="Irina Cherkashyna"
          fill
          priority
        />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          Irina
          <br />
          Cherkashyna
        </h1>

        <span className="hero__subtitle">
          CLASSICAL PIANIST
        </span>

        <div className="hero__line" />

        <p className="hero__text">
          I am a concert pianist devoted to the art of classical music.
          My passion lies in bringing timeless masterpieces to life and
          sharing their beauty with audiences around the world.
        </p>

        <button className="hero__button">
          VIEW REPERTOIRE
        </button>
      </div>

      <div className="hero__piano">
        <Image
          src="/images/hero/hero-piano.jpg"
          alt="Grand piano"
          fill
          priority
        />
      </div>
    </section>
  );
}