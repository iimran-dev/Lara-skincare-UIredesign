'use client';

import { Reveal } from '../reveal';

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    cap: 'Private Dinner · Lisbon',
    bento: 'col-span-2 lg:col-span-2 h-36 sm:h-64 lg:h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    cap: 'Rooftop Evening · Manhattan',
    bento: 'col-span-2 lg:col-span-2 lg:row-span-2 h-40 sm:h-80 lg:h-full min-h-[160px] sm:min-h-[260px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    cap: 'Networking Salon · Mayfair',
    bento: 'col-span-1 lg:col-span-1 h-28 sm:h-56 lg:h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    cap: 'Shoreline Walk · Algarve',
    bento: 'col-span-1 lg:col-span-1 h-28 sm:h-56 lg:h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    cap: 'Yacht Gathering · Côte d\'Azur',
    bento: 'col-span-1 lg:col-span-2 h-28 sm:h-56 lg:h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80',
    cap: 'Art Night · Marais',
    bento: 'col-span-1 lg:col-span-2 h-28 sm:h-56 lg:h-64',
  },
];

export function LifestyleGallery() {
  return (
    <section id="gallery" className="relative bg-ink py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Lifestyle Gallery</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-[clamp(1.5rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory sm:mt-5">
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

        {/* Small Bento Grid Layout on Mobile */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.08} className={g.bento}>
              <figure className="group relative h-full w-full overflow-hidden rounded-xl border border-gold/20 bg-ink-soft shadow-lg transition-all duration-500 hover:border-gold/40 sm:rounded-2xl sm:shadow-xl">
                <img
                  src={g.src}
                  alt={g.cap}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-2.5 sm:gap-2.5 sm:p-5">
                  <span className="h-px w-3 bg-gold/70 transition-all duration-300 group-hover:w-8 sm:w-5" />
                  <span className="font-serif text-[11px] italic text-ivory sm:text-sm">{g.cap}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
