import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the lab"
        title="We study speech in motion."
        intro="SBS Lab connects linguistic questions with physiological measurement, imaging, and data science."
        index="01"
      />
      <section className="content-section page-shell about-layout">
        <p className="section-kicker">Our approach</p>
        <div className="prose-large">
          <h2>From the body<br />to the signal.</h2>
          <div className="prose-columns">
            <p>
              We study how speech is produced and perceived—from the larynx and tongue to
              the lips, face, and mind. Our work brings together acoustic and articulatory
              phonetics, speech perception, motor control, and computation.
            </p>
            <p>
              Ultrasound imaging lets us track movement; electrical measures capture
              activity across the speech system. We turn those signals into data for
              statistical analysis, pattern recognition, and machine learning.
            </p>
          </div>
        </div>
      </section>
      <section className="film-section">
        <div className="page-shell film-grid">
          <div>
            <p className="section-kicker">Inside SBS Lab</p>
            <h2>Research<br />in motion</h2>
            <p>Meet our questions, methods, and people in this short introduction.</p>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/8EV_7EfK4VE"
              title="Introduction to the Speech Behavior and Science Lab"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="content-section page-shell values-grid">
        <article><span>01</span><h3>Observe</h3><p>Capture fine-grained movement and sound in carefully controlled experiments.</p></article>
        <article><span>02</span><h3>Measure</h3><p>Connect physical behavior with acoustic, physiological, and perceptual evidence.</p></article>
        <article><span>03</span><h3>Model</h3><p>Use computational methods to find patterns that help explain communication.</p></article>
      </section>
    </main>
  );
}
