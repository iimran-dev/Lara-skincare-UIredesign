'use client';

import { Reveal } from '../reveal';

const GALLERY = [
  { src: '/images/gallery-dinner.jpg', cap: 'Private Dinner · Lisbon', tall: false },
  { src: '/images/gallery-rooftop.jpg', cap: 'Rooftop Evening · Manhattan', tall: true },
  { src: '/images/gallery-networking.jpg', cap: 'Networking Salon · Mayfair', tall: false },
  { src: '/images/gallery-beach.jpg', cap: 'Shoreline Walk · Algarve', tall: true },
  { src: '/images/gallery-yacht.jpg', cap: 'Yacht Gathering · Côte d\'Azur', tall: false },
  { src: '/images/gallery-art.jpg', cap: 'Art Night · Marais', tall: false },
];

export function LifestyleGallery() {
  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Lifestyle Gallery</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
                Moments between people.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-[13px] font-light leading-relaxed text-ivory-muted">
              A record of gatherings past — and a sense of the rooms you may one day enter.
            </p>
          </Reveal>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08}>
              <figure className="group relative overflow-hidden border border-gold/12">
                <img
                  src={g.src}
                  alt={g.cap}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05] ${
                    g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center gap-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="h-px w-6 bg-gold" />
                  <span className="font-serif text-sm italic text-ivory">{g.cap}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
