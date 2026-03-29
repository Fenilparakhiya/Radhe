import Image from "next/image";
import { business } from "@/data/business";
import { QuickActions } from "@/components/quick-actions";

export function Hero() {
  return (
    <section className="section-space bg-gradient-to-b from-orange-50 to-transparent">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Etobicoke · Indian Street Food
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {business.homeH1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Radhe Pani Puri serves pani puri, chaat, and vegetarian Indian street food on Albion Road in Etobicoke.
          </p>
          <div className="mt-6">
            <QuickActions />
          </div>
        </div>

        <div className="card overflow-hidden">
          <Image
            src={business.images.menuBoard}
            alt="Radhe Pani Puri menu board"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
