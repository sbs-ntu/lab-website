type PageHeroProps = { eyebrow: string; title: string; intro: string; index: string };

export function PageHero({ eyebrow, title, intro, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-shell page-hero-grid">
        <div><p className="page-hero-kicker">{eyebrow}</p><h1>{title}</h1></div>
        <p className="page-hero-intro">{intro}</p>
        <span className="page-hero-index" aria-hidden="true">/{index}</span>
      </div>
    </section>
  );
}
