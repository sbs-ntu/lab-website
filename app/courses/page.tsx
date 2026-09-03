import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/components/site-data";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <main>
      <PageHero eyebrow="Teaching" title="From fundamentals to the frontier." intro="Courses connect foundational linguistics with hands-on speech science." index="05" />
      <section className="content-section page-shell">
        <div className="course-grid">
          {courses.map((course, index) => (
            <article className="course-card" key={course.title}>
              <div className="course-meta"><span>0{index + 1}</span><p>{course.label}</p></div>
              <h2>{course.title}</h2>
              <ul>{course.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="teaching-note"><div className="page-shell"><p className="section-kicker">Learning by doing</p><p>Students learn to ask precise questions, collect interpretable evidence, and connect the details of speech to larger theories of language.</p></div></section>
    </main>
  );
}
