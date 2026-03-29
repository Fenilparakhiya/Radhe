import Image from "next/image";
import { business } from "@/data/business";

export function GalleryGrid() {
  const items = [
    {
      src: business.images.logo,
      alt: "Radhe Pani Puri logo",
      caption: "Brand logo",
    },
    {
      src: business.images.menuBoard,
      alt: "Radhe Pani Puri menu board",
      caption: "Menu board",
    },
  ];

  return (
    <div className="grid h-full gap-4 sm:grid-cols-2 sm:items-stretch">
      {items.map((image, index) => (
        <div key={index} className="card flex h-full flex-col overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={800}
            className="h-72 w-full flex-1 object-cover sm:h-full"
          />
          <div className="border-t border-orange-100 p-4">
            <p className="text-sm text-gray-600">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
