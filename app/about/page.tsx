import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "About | Radhe Pani Puri",
  description:
    "Learn about Radhe Pani Puri and its focus on pani puri, chaat, and vegetarian Indian street food in Etobicoke, Toronto.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Pani Puri, Chaat, and Vegetarian Indian Street Food in Etobicoke"
        description=""
      />

      <section className="pb-12 pt-1 sm:pb-16 sm:pt-1">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              What the menu focuses on
            </h2>
            <p className="mt-4 text-gray-600 text-justify leading-relaxed" >
              {business.name} focuses on pani puri, chaat, and vegetarian snack
              items. The offering includes pani puri, sev puri, dahi puri, ragda
              puri, papdi chat, raj kachori, ragda bhel, and a special drink
              called COCO.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Why the site is built this way
            </h2>
            <p className="mt-4 text-gray-600 text-justify leading-relaxed">
              In India, pani puri isn’t just food — it’s an experience. <br />
              <br/>
              It lives on busy street corners, where people gather, laugh, and
              wait for that perfect bite. Crisp puris, bold flavors, and that
              burst of spicy, tangy water — fast, messy, and unforgettable. You
              don’t eat just one. You keep going.
              <br />
              <br/>
              In Gujarat, pani puri is known for its intense
              balance of sweet, spicy, and tangy flavors — a taste that hits
              instantly and stays with you.
              <br />
              That’s the experience behind Radhe Panipuri.
              <br />
              <br />
              We bring authentic Surati-style pani puri to Toronto — with the
              same crunch, the same bold flavors, and the same street-style
              energy. Every bite is made to wake up your taste buds and keep you
              coming back for more.
              <br />
              <br/>
              Because real pani puri isn’t mild — it’s addictive.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}
