import Image from "next/image";
import Link from "next/link";
import { navigation, projects } from "@/components/site-data";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-banner">
        <Image
          className="home-banner-image"
          src="/img/equipments/room.jpeg"
          alt="The sound-proof recording room in the SBS Lab"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-banner-overlay" />
        <div className="home-banner-content">
          <div className="lab-lockup" aria-label="SBS Lab">
            <div className="lab-lockup-name">
              <span className="lab-soundmark" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              <strong>SBS</strong><b>LAB</b>
            </div>
            <p>Speech Behavior &amp; Science</p>
          </div>
          <h1>
            Graduate Institute of Linguistics<br />
            National Taiwan University
          </h1>
        </div>
      </section>

      <div className="iol-page home-content">
        <section className="iol-section">
          <h2>About SBS Lab</h2>
          <p>
            The Speech Behavior and Science Lab studies how speech is produced and perceived—from
            the larynx and tongue to the lips, face, and mind. We bring together acoustic and
            articulatory phonetics, speech perception, motor control, and computation.
          </p>
          <p>
            We use ultrasound imaging and physiological measurement to observe the speech system
            in motion. The resulting signals become data for statistical analysis, pattern
            recognition, and machine learning, helping us uncover the mechanisms behind human
            communication.
          </p>
        </section>

        <section className="iol-section">
          <h2>Explore the Lab</h2>
          <div className="page-link-grid">
            {navigation.slice(1).map((item) => (
              <Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>
            ))}
          </div>
        </section>

        <section className="iol-section">
          <h2>Current Research</h2>
          <ul className="iol-list research-preview">
            {projects.slice(0, 3).map((project) => (
              <li key={project.number}>
                <strong>{project.title}</strong>
                <p>{project.text}</p>
              </li>
            ))}
          </ul>
          <p className="centered-link"><Link href="/research/">View all research</Link></p>
        </section>
      </div>
    </main>
  );
}
