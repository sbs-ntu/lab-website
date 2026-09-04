import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/components/site-data";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <main className="iol-page">
      <PageHero title="Courses" />
      <section className="iol-section">
        <p>
          Our courses connect foundational linguistics with hands-on speech science. Students
          learn to ask precise questions, collect interpretable evidence, and relate phonetic
          detail to larger theories of language.
        </p>
        {courses.map((course) => (
          <section className="course-group" key={course.title}>
            <p className="course-label">{course.label}</p>
            <h2>{course.title}</h2>
            <ul className="iol-list">{course.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        ))}
      </section>
    </main>
  );
}
