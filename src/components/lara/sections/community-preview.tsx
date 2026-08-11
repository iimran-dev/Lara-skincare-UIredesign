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
    <section className="relative overflow-hidden bg-ink-soft py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">The Community</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-2 font-serif text-xl font-light text-ivory sm:text-2xl">
                A glimpse of member crafts & cities.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <span className="font-serif text-xs italic text-gold/60">
              Identities private · Invitation only
            </span>
          </Reveal>
        </div>

        {/* Compact Pills Grid */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {CATEGORIES.map((c) => (
              <div
                key={c.role}
                className="group flex items-center gap-2.5 rounded-full border border-gold/20 bg-ink/70 px-4 py-2 text-xs transition-all duration-300 hover:border-gold/50 hover:bg-emerald-soft/40 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-colors group-hover:bg-gold" />
                <span className="font-serif font-light text-ivory">{c.role}</span>
                <span className="text-[10px] font-light uppercase tracking-wider text-ivory-muted">
                  · {c.city}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
