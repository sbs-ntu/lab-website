import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="iol-page">
      <PageHero title="Contact" />
      <section className="iol-section contact-section">
        <h2>Contact Us</h2>
        <p>
          Questions about our research, teaching, facilities, or opportunities to collaborate
          are always welcome.
        </p>
        <p className="contact-line"><span aria-hidden="true">✉</span><a href="mailto:sbslab.ntu@gmail.com">sbslab.ntu@gmail.com</a></p>
        <h2>Visit the Lab</h2>
        <p>Graduate Institute of Linguistics<br />National Taiwan University<br />Taipei, Taiwan</p>
        <h2>Participate in Research</h2>
        <p>See current opportunities to take part in our speech experiments.</p>
        <p><a href="https://sbs-ntu.github.io/participant-recruitment/" target="_blank" rel="noreferrer">View participant recruitment ↗</a></p>
        <h2>Past Events</h2>
        <p>Revisit talks and learning materials from the 2021 Ultrasound in Linguistics Workshop.</p>
        <p><a href="https://sbs-ntu.github.io/2021-ultrasound-workshop/" target="_blank" rel="noreferrer">Visit the workshop ↗</a></p>
      </section>
    </main>
  );
}
