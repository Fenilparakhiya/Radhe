import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "Menu | Radhe Pani Puri Etobicoke",
  description:
    "See the Radhe Pani Puri menu with pani puri, sev puri, dahi puri, raj kachori, papdi chat, ragda bhel, COCO, and more.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Menu" title="Radhe Pani Puri Menu" description={""} />

      <section className="pb-12 pt-1 sm:pb-16 sm:pt-1">
        <div className="container-shell space-y-10">
          {business.menuCategories.map((category) => (
            <section key={category.title}>
              <h2 className="text-2xl font-bold text-gray-900">
                {category.title}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={`${category.title}-${item.name}`}
                    className="card p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm font-bold text-brand-700">
                        {item.price}
                      </p>
                    </div>
                    {item.description ? (
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    ) : null}
                    {item.note ? (
                      <p className="mt-2 text-sm text-gray-500">{item.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="card p-6">
            <h2 className="text-xl font-bold text-gray-900">Menu Notes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
              {business.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
