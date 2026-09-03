import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Let’s talk about speech." intro="Questions about our research, teaching, facilities, and collaboration are welcome." index="06" />
      <section className="content-section page-shell contact-layout">
        <div className="contact-primary">
          <p className="section-kicker">Email</p>
          <a href="mailto:sbslab.ntu@gmail.com">sbslab.ntu@gmail.com <span>↗</span></a>
        </div>
        <div className="contact-details">
          <article><p className="section-kicker">Visit</p><h2>Graduate Institute of Linguistics</h2><p>National Taiwan University<br />Taipei, Taiwan</p></article>
          <article><p className="section-kicker">Participate</p><h2>Join a study</h2><p>See current opportunities to take part in our speech experiments.</p><a className="inline-link" href="https://sbs-ntu.github.io/participant-recruitment/" target="_blank" rel="noreferrer">View opportunities <span>↗</span></a></article>
          <article><p className="section-kicker">Explore</p><h2>2021 Ultrasound Workshop</h2><p>Revisit talks and learning materials from our workshop.</p><a className="inline-link" href="https://sbs-ntu.github.io/2021-ultrasound-workshop/" target="_blank" rel="noreferrer">Visit workshop <span>↗</span></a></article>
        </div>
        <Link className="back-home" href="/">← Return home</Link>
      </section>
    </main>
  );
}
