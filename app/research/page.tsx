import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/components/site-data";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <main>
      <PageHero eyebrow="Research" title="Questions across scales." intro="We move between muscle, movement, acoustics, perception, and computation." index="04" />
      <section className="content-section page-shell">
        <div className="research-list">
          {projects.map((project) => (
            <article key={project.number}><span>{project.number}</span><h2>{project.title}</h2><p>{project.text}</p></article>
          ))}
        </div>
      </section>
      <section className="resources-section">
        <div className="page-shell resources-grid">
          <div><p className="section-kicker">Open science</p><h2>Tools &amp;<br />resources</h2></div>
          <div className="resource-list">
            <a href="https://github.com/mktiede/GetContours" target="_blank" rel="noreferrer"><span>GetContours</span><b>Ultrasound contour extraction</b><i>↗</i></a>
            <a href="https://github.com/WeirongChen/DeepEdge" target="_blank" rel="noreferrer"><span>DeepEdge</span><b>Automated image analysis</b><i>↗</i></a>
            <a href="https://christophercarignan.github.io/TRACTUS/" target="_blank" rel="noreferrer"><span>TRACTUS</span><b>Articulatory analysis toolkit</b><i>↗</i></a>
          </div>
        </div>
      </section>
    </main>
  );
}
