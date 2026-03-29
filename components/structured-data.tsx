import { business } from "@/data/business";
import { isVerified } from "@/lib/utils";

export function StructuredData() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    description: business.description,
    image: [business.images.logo],
    servesCuisine: ["Indian street food", "Chaat", "Vegetarian snacks"],
    areaServed: `${business.city}, ${business.region}`,
    url: business.meta.siteUrl,
    priceRange: business.priceRange,
    menu: `${business.meta.siteUrl}/menu`,
  };

  if (isVerified(business.phoneDisplay)) {
    schema.telephone = business.phoneDisplay;
  }

  schema.address = {
    "@type": "PostalAddress",
    streetAddress: "1753 Albion Rd UNIT 6A",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M9V 1C3",
    addressCountry: "CA",
  };

  schema.openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "15:00",
      closes: "23:59"
    }
  ];

  const sameAs = [business.instagramUrl].filter((item) => item && !item.includes("VERIFY"));
  if (sameAs.length) {
    schema.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
