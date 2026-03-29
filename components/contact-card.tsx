import { business } from "@/data/business";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";

export function ContactCard() {
  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Contact, Hours, and Location
      </h2>

      <div className="mt-6 space-y-5 text-sm text-gray-700">
        <div>
          <p className="font-semibold text-gray-900">Address</p>
          <p>{business.address}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-900">Phone</p>
          <a href={business.phoneHref} className="link-text">
            {business.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="font-semibold text-gray-900">Hours</p>
          <ul className="mt-2 space-y-1">
            {business.hours.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span>{entry.day}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-900">Quick Actions</p>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={business.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-brand-700 transition hover:bg-orange-50"
            >
              <IoCallOutline className="h-5 w-5" />
              <span>Call</span>
            </a>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Instagram profile"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-brand-700 transition hover:bg-orange-50"
            >
              <FaInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>

            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open directions in Google Maps"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-brand-700 transition hover:bg-orange-50"
            >
              <SiGooglemaps className="h-5 w-5" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
