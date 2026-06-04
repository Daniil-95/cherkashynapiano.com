import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src="/images/hero-pianist.jpg"
          alt="Irina Cherkashyna"
          fill
          priority
        />
      </div>

      <div className={styles.heroContent}>
        <h1>
          Irina
          <br />
          Cherkashyna
        </h1>

        <span className={styles.subtitle}>
          CLASSICAL PIANIST
        </span>

        <p>
          Classical pianist devoted to the art of music,
          bringing timeless masterpieces to audiences
          around the world.
        </p>

        <button className={styles.button}>
          View repertoire
        </button>
      </div>
    </section>
  );
}