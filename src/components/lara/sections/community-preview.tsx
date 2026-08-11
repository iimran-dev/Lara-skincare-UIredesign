'use client';

import { Reveal } from '../reveal';

const CATEGORIES = [
  { role: 'Entrepreneur', city: 'Dubai' },
  { role: 'Doctor', city: 'London' },
  { role: 'Founder', city: 'New York' },
  { role: 'Creator', city: 'Paris' },
  { role: 'Executive', city: 'Singapore' },
  { role: 'Artist', city: 'Berlin' },
  { role: 'Traveller', city: 'Tokyo' },
  { role: 'Architect', city: 'Milan' },
];

export function CommunityPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">The Community</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
                A glimpse of who belongs.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[14px] font-light leading-relaxed text-ivory-dim sm:text-[15px]">
                We don't display member profiles. We share the calibre of people
                you might one day meet — by craft, by city, by intention.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <span className="font-serif text-sm italic text-gold/60">
              Identities reserved for members.
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold/15 bg-gold/10 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.role} delay={(i % 4) * 0.06}>
              <article className="group relative h-full bg-ink px-5 py-10 transition-colors duration-500 hover:bg-emerald-soft/40 sm:px-7 sm:py-12">
                {/* silhouette mark */}
                <svg
                  viewBox="0 0 40 48"
                  className="mb-6 h-12 w-10 text-gold/30 transition-colors duration-500 group-hover:text-gold/60"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="20" cy="13" r="9" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M4 46 C 4 32, 36 32, 36 46"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="font-serif text-xl font-light text-ivory sm:text-2xl">
                  {c.role}
                </h3>
                <p className="mt-2 text-[11px] font-light uppercase tracking-[0.24em] text-ivory-muted">
                  {c.city}
                </p>
                <span className="absolute right-4 top-4 font-serif text-[11px] italic text-gold/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
