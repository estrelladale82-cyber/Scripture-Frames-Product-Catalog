export default function Hero() {
  return (
    <section className="border-b border-hairline bg-parchment-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="font-display text-4xl italic leading-snug text-ink sm:text-5xl">
            "Be still, and know that I am God."
          </p>
          <p className="mt-3 text-sm text-forest-light">Psalm 46:10</p>
          <p className="mt-8 max-w-md text-base text-forest">
            Frames that hold scripture at the center of a room or a desk — each
            design built around a single verse, made to be read every day, not
            just displayed once.
          </p>
          <a
            href="#catalog"
            className="mt-8 inline-block border-b border-brass text-sm font-medium text-brass hover:text-brass-light"
          >
            Browse the catalog
          </a>
        </div>
        <div className="w-full min-w-0 md:justify-self-end md:max-w-sm rounded-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-hairline bg-card">
            <img
              src="https://images.unsplash.com/photo-1656274904167-733006f526ea?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="A framed piece of wall art displaying Psalm 46:10"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
