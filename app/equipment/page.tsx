import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { equipment } from "@/components/site-data";

export const metadata: Metadata = { title: "Equipment" };

export default function EquipmentPage() {
  return (
    <main className="iol-page">
      <PageHero title="Equipment" />
      <section className="iol-section">
        <p>
          Our facilities support carefully controlled acoustic recording, real-time imaging,
          and synchronized physiological measurement across the speech system.
        </p>
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <article className="equipment-card" key={item.title}>
              <div className="equipment-photo"><Image src={item.image} alt={item.title} fill priority={index < 2} sizes="(max-width: 700px) 100vw, 42vw" /></div>
              <div className="equipment-details"><h2>{item.title}</h2><p className="equipment-label">{item.label}</p><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
