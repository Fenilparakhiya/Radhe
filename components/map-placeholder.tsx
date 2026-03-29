export function MapPlaceholder() {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-orange-100 px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-900">Find Us on the Map</h2>
        <p className="mt-2 text-sm text-gray-600">
          View Radhe Pani Puri on Google Maps and zoom in for nearby places.
        </p>
      </div>

      <div className="h-[420px] w-full">
        <iframe
          title="Radhe Pani Puri Google Map"
          src="https://www.google.com/maps?q=Radhe+Pani+Puri,+Etobicoke,+ON&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
