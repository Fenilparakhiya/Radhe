type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-space bg-orange-50/60">
      <div className="container-shell">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">{description}</p>
      </div>
    </section>
  );
}
