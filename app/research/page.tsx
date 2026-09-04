import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/components/site-data";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <main className="iol-page">
      <PageHero title="Research" />
      <section className="iol-section">
        <p>
          Our research moves between muscle, movement, acoustics, perception, and computation.
          Current projects include the following areas.
        </p>
        <ol className="iol-list research-list">
          {projects.map((project) => (
            <li key={project.number}><h2>{project.title}</h2><p>{project.text}</p></li>
          ))}
        </ol>
      </section>
      <section className="iol-section">
        <h2>Tools and Resources</h2>
        <ul className="iol-list resource-list">
          <li><a href="https://github.com/mktiede/GetContours" target="_blank" rel="noreferrer"><strong>GetContours</strong> — ultrasound contour extraction ↗</a></li>
          <li><a href="https://github.com/WeirongChen/DeepEdge" target="_blank" rel="noreferrer"><strong>DeepEdge</strong> — automated image analysis ↗</a></li>
          <li><a href="https://christophercarignan.github.io/TRACTUS/" target="_blank" rel="noreferrer"><strong>TRACTUS</strong> — articulatory analysis toolkit ↗</a></li>
        </ul>
      </section>
    </main>
  );
}
