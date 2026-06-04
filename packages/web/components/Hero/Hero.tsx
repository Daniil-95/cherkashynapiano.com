export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src="/images/hero.jpg"
          alt="Irina Cherkashyna"
        />
      </div>

      <div className="hero__content">
        <span className="hero__subtitle">
          Classical Pianist
        </span>

        <h1 className="hero__title">
          Irina
          <br />
          Cherkashyna
        </h1>

        <p className="hero__text">
          Classical pianist devoted to the art of
          timeless music.
        </p>

        <button className="hero__button">
          View Repertoire
        </button>
      </div>
    </section>
  );
}