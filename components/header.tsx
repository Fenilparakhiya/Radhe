import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { business } from "@/data/business";
import { IoCallOutline } from "react-icons/io5";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={business.images.logo}
            alt={`${business.name} logo`}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-bold text-gray-900">{business.name}</p>
            <p className="text-xs text-gray-600">{business.city}, ON</p>
          </div>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Instagram profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-brand-700 transition hover:bg-orange-50"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href={business.phoneHref}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-brand-700 transition hover:bg-orange-50"
          >
            <IoCallOutline className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
