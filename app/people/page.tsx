import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { students } from "@/components/site-data";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <main className="iol-page">
      <PageHero title="People" />
      <section className="iol-section">
        <h2>Lab Director</h2>
        <article className="person-card featured-person">
          <div className="person-photo"><Image src="/img/people/chenhao.png" alt="Professor Chenhao Chiu" fill priority sizes="200px" /></div>
          <div className="person-details">
            <h3>Chenhao Chiu <span>邱振豪</span></h3>
            <p className="person-role">Lab Director</p>
            <p>PhD in Linguistics, University of British Columbia</p>
            <p>Acoustic and articulatory phonetics, speech perception and production, speech motor control, computational modeling, and automated data analytics.</p>
            <a href="https://sites.google.com/site/chiuchenhao/" target="_blank" rel="noreferrer">View profile ↗</a>
          </div>
        </article>
      </section>
      <section className="iol-section">
        <h2>Lab Members</h2>
        <div className="person-grid">
          {students.map((student) => (
            <article className="person-card" key={student.name}>
              <div className="person-photo"><Image src={student.image} alt={`${student.name} ${student.chinese}`} fill sizes="150px" /></div>
              <div className="person-details"><h3>{student.name}<span>{student.chinese}</span></h3><p className="person-role">{student.role}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
