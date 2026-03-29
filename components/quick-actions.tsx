import Link from "next/link";
import { business } from "@/data/business";

export function QuickActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={business.phoneHref} className="btn-primary">
        Call Now
      </a>
      <Link href="/menu" className="btn-secondary">
        View Menu
      </Link>
      <a href={business.directionsUrl} className="btn-secondary" target="_blank" rel="noreferrer">
        Get Directions
      </a>
    </div>
  );
}
