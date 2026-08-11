'use client';

import { Counter } from '../counter';
import { Reveal } from '../reveal';

const STATS = [
  { value: 4820, suffix: '+', label: 'Verified Members' },
  { value: 98, suffix: '%', label: 'Profile Verification' },
  { value: 37, suffix: '', label: 'Cities' },
  { value: 100, suffix: '%', label: 'Profiles Reviewed Manually' },
  { value: 24, suffix: '', label: 'Hours · Average Review Time' },
];

export function Statistics() {
  return (
    <section className="relative bg-ink py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">By the Numbers</span>
              <h3 className="mt-3 font-serif text-2xl font-light text-ivory sm:text-3xl">
                A community measured by quality.
              </h3>
            </div>
            <p className="max-w-xs text-[13px] font-light leading-relaxed text-ivory-muted">
              Every figure reflects a standard — not a target.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold/15 bg-gold/10 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`h-full ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="group relative flex h-full flex-col justify-between bg-ink-soft px-5 py-8 transition-colors duration-500 hover:bg-emerald-soft/40 sm:px-7 sm:py-12">
                <div>
                  <span className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-none text-ivory transition-colors duration-500 group-hover:text-gold">
                    <Counter to={s.value} suffix={s.suffix} duration={2.2} />
                  </span>
                  <span className="mt-3 block text-[10px] font-light uppercase tracking-[0.24em] text-ivory-muted sm:text-[11px]">
                    {s.label}
                  </span>
                </div>
                <span className="absolute right-4 top-4 font-serif text-[11px] italic text-gold/40">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
