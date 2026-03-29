import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { ContactCard } from "@/components/contact-card";
import { MapPlaceholder } from "@/components/map-placeholder";

export const metadata = buildMetadata({
  title: "Contact, Hours & Location | Radhe Pani Puri",
  description:
    "Find Radhe Pani Puri contact details, hours, Instagram, and directions in Etobicoke, Toronto.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact, Hours, and Location"
        description=""
      />

       <section className="pb-12 pt-1 sm:pb-16 sm:pt-1">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <ContactCard />
          <MapPlaceholder />
        </div>
      </section>
    </>
  );
}
