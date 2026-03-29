import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/hero";
import { AboutPreview } from "@/components/about-preview";
import { HomeMenuPreview } from "@/components/home-menu-preview";
import { ContactCard } from "@/components/contact-card";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata = buildMetadata({
  title: "Radhe Pani Puri | Pani Puri & Chaat in Etobicoke, Toronto",
  description:
    "Radhe Pani Puri serves pani puri, chaat, and vegetarian Indian street food in Etobicoke, Toronto. View the menu, check hours, call, and get directions.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <HomeMenuPreview />

      <section className="section-space bg-white">
        <div className="container-shell grid items-stretch gap-8 lg:grid-cols-2">
          <div className="h-full">
            <ContactCard />
          </div>
          <div className="flex h-full flex-col">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Gallery
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Brand and menu visuals
            </h2>
            <div className="mt-6 flex-1">
              <GalleryGrid />
            </div>
          </div> 
        </div>
      </section>
    </> 
    
  );
}
