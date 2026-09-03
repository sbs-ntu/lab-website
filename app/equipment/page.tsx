import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { equipment } from "@/components/site-data";

export const metadata: Metadata = { title: "Equipment" };

export default function EquipmentPage() {
  return (
    <main>
      <PageHero eyebrow="Equipment" title="Tools that make speech visible." intro="From controlled recordings to real-time images and physiological signals." index="03" />
      <section className="content-section page-shell">
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <article className="equipment-card" key={item.title}>
              <div className="equipment-image"><Image src={item.image} alt={item.title} fill priority={index < 2} sizes="(max-width: 760px) 100vw, 50vw" /><span>{item.label}</span></div>
              <div className="equipment-copy"><small>0{index + 1}</small><h2>{item.title}</h2><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="info-band"><div className="page-shell info-grid"><p className="section-kicker">Facilities</p><h2>Designed for controlled, repeatable observation.</h2><p>Our equipment supports synchronized measurement across articulation, phonation, muscle activity, and sound.</p></div></section>
    </main>
  );
}
