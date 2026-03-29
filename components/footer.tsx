import Link from "next/link";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{business.name}</h2>
          <p className="mt-3 text-sm text-gray-600">{business.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Business Info</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>{business.address}</li>
            <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
            <li>{business.city}, Ontario</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
