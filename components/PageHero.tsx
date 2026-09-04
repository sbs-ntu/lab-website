type PageHeroProps = { title: string };

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="iol-section page-title">
      <h1>{title}</h1>
    </section>
  );
}
