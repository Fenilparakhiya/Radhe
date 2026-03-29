import Link from "next/link";
import { business } from "@/data/business";

export function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="card p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">About</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Indian street food focused on pani puri and chaat</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            {business.name} focuses on pani puri, chaat, and vegetarian snack items in Etobicoke. </p>
          <Link href="/about" className="link-text mt-4 inline-block">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
