import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { students } from "@/components/site-data";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <main>
      <PageHero eyebrow="People" title="A team listening closely." intro="We connect experimental phonetics, linguistic theory, and computational methods." index="02" />
      <section className="content-section page-shell">
        <p className="section-kicker">Lab director</p>
        <article className="director-card">
          <div className="director-image"><Image src="/img/people/chenhao.png" alt="Professor Chenhao Chiu" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div className="director-copy">
            <h2>Chenhao Chiu <span>邱振豪</span></h2>
            <p className="credential">PhD in Linguistics · University of British Columbia</p>
            <ul className="tag-list" aria-label="Research interests">
              <li>Acoustic &amp; articulatory phonetics</li><li>Speech perception &amp; production</li><li>Speech motor control</li><li>Computational modeling</li><li>Automated data analytics</li>
            </ul>
            <a className="inline-link" href="https://sites.google.com/site/chiuchenhao/" target="_blank" rel="noreferrer">View profile <span>↗</span></a>
          </div>
        </article>
        <div className="section-title-row people-title"><div><p className="section-kicker">Members</p><h2>Researchers in the lab</h2></div></div>
        <div className="student-grid">
          {students.map((student, index) => (
            <article className="person-card" key={student.name}>
              <div className="person-image"><Image src={student.image} alt={`${student.name} ${student.chinese}`} fill sizes="(max-width: 600px) 100vw, 33vw" /><span>0{index + 1}</span></div>
              <h3>{student.name} <span>{student.chinese}</span></h3><p>{student.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
