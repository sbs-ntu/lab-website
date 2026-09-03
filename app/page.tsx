import Image from "next/image";
import Link from "next/link";
import { equipment, navigation, projects, students } from "@/components/site-data";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Image
          className="home-hero-image"
          src="/img/equipments/room.jpeg"
          alt="The sound-proof recording room in the SBS Lab"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content page-shell">
          <div className="hero-lockup" aria-label="Speech Behavior and Science Lab">
            <span className="hero-wave" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i />
            </span>
            <p>National Taiwan University</p>
            <h1>Speech Behavior<br />&amp; Science Lab</h1>
          </div>
          <p className="home-deck">
            We make speech visible—from the movement of the tongue and larynx to the
            acoustic patterns that carry meaning.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/research/">Explore our research</Link>
            <Link className="hero-text-link" href="/people/">Meet the lab <span>→</span></Link>
          </div>
        </div>
        <div className="hero-meta page-shell">
          <span>Acoustics · Articulation · Computation</span>
          <span>Taipei, Taiwan</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="page-shell intro-grid">
          <p className="section-kicker">About SBS Lab</p>
          <div>
            <h2>Speech is movement<br />made meaningful.</h2>
            <p>
              Our research brings together phonetics, speech perception, motor control,
              and computation to understand the physical and mental systems behind human
              communication.
            </p>
            <Link className="inline-link" href="/about/">Discover the lab <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="feature-grid page-shell" aria-label="Explore the lab">
        {navigation.slice(2, 6).map((item, index) => {
          const featureImages = [students[0].image, equipment[1].image, equipment[2].image, equipment[0].image];
          return (
            <Link className="feature-card" href={item.href} key={item.href}>
              <div className="feature-image">
                <Image src={featureImages[index]} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              <div className="feature-copy">
                <span>0{index + 1}</span>
                <h3>{item.label}</h3>
                <b aria-hidden="true">↗</b>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="home-research">
        <div className="page-shell">
          <div className="section-title-row">
            <div>
              <p className="section-kicker">Current directions</p>
              <h2>Questions across scales</h2>
            </div>
            <Link className="inline-link" href="/research/">All research <span>→</span></Link>
          </div>
          <div className="compact-projects">
            {projects.slice(0, 3).map((project) => (
              <article key={project.number}>
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="page-shell cta-grid">
          <p className="section-kicker">Connect with us</p>
          <h2>Curious about<br />how speech works?</h2>
          <Link className="round-link" href="/contact/" aria-label="Contact the lab">→</Link>
        </div>
      </section>
    </main>
  );
}
