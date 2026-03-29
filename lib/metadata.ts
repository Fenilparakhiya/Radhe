import type { Metadata } from "next";
import { business } from "@/data/business";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, business.meta.siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      images: [
        {
          url: business.images.logo,
          width: 512,
          height: 512,
          alt: `${business.name} logo`,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [business.images.logo],
    },
  };
}
