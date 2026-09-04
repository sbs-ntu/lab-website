import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="iol-page">
      <PageHero title="About the Lab" />
      <section className="iol-section">
        <h2>Speech in Motion</h2>
        <p>
          We study how speech is produced and perceived—from the larynx and tongue to the
          lips, face, and mind. Our work brings together acoustic and articulatory phonetics,
          speech perception, motor control, and computation.
        </p>
        <p>
          Ultrasound imaging lets us track movement, while electrical measures capture
          activity across the speech system. We turn those signals into data for statistical
          analysis, pattern recognition, and machine learning.
        </p>
      </section>
      <section className="iol-section">
        <h2>Inside SBS Lab</h2>
        <p>
          This short introduction presents the questions we ask, the methods we use, and the
          people behind our research.
        </p>
        <div className="iol-media">
          <iframe
            src="https://www.youtube-nocookie.com/embed/8EV_7EfK4VE"
            title="Introduction to the Speech Behavior and Science Lab"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
      <section className="iol-section">
        <h2>Our Approach</h2>
        <ol className="iol-list approach-list">
          <li><strong>Observe.</strong> Capture fine-grained movement and sound in carefully controlled experiments.</li>
          <li><strong>Measure.</strong> Connect physical behavior with acoustic, physiological, and perceptual evidence.</li>
          <li><strong>Model.</strong> Use computational methods to find patterns that help explain communication.</li>
        </ol>
      </section>
    </main>
  );
}
