import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata = buildMetadata({
  title: "Gallery | Radhe Pani Puri",
  description:
    "Browse available brand and menu images from Radhe Pani Puri.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Brand visuals"
        description="Add Photos Later If User wants"
      />

      <section className="section-space">
        <div className="container-shell">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
