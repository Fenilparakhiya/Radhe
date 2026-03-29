import Link from "next/link";
import { business } from "@/data/business";

export function HomeMenuPreview() {
  const featured = business.menuCategories.flatMap((category) => category.items).slice(0, 6);

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Menu Preview</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Popular menu items</h2>
          </div>
          <Link href="/menu" className="link-text text-sm font-semibold">
            Full menu
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <div key={item.name} className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm font-bold text-brand-700">{item.price}</p>
              </div>
              {item.description ? <p className="mt-3 text-sm text-gray-600">{item.description}</p> : null}
              {item.note ? <p className="mt-2 text-sm text-gray-500">{item.note}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
