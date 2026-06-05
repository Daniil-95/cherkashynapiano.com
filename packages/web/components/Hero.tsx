import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-image">
        <Image
          src="/images/hero/hero-pianist.jpg"
          alt="Irina Cherkashyna"
          fill
          priority
        />
      </div>

      <div className="hero-content">

        <h1 className="hero-title">
          Irina
          <br />
          Cherkashyna
        </h1>

        <span className="hero-subtitle">
          CLASSICAL PIANIST
        </span>

        <div className="hero-line" />

        <p className="hero-text">
          I am a concert pianist devoted to the art of classical music.
          My passion lies in bringing timeless masterpieces to life and
          sharing their beauty with audiences around the world.
        </p>

        <button className="hero-button">
          VIEW REPERTOIRE
        </button>

      </div>

      <div className="hero-piano">
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