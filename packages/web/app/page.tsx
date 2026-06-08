import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Repertoire from "@/components/Repertoire";
import Concerts from "@/components/Concerts";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />

      <section className="home-events">
        <div className="home-events-grid">
          <Repertoire />
          <Concerts />
        </div>
      </section>
    </>
  );
}