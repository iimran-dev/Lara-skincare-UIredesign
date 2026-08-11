'use client';

import { Reveal, RevealLines } from '../reveal';

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-ink py-12 sm:py-16 lg:py-20"
    >
      {/* ambient emerald glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 40%, rgba(21,48,31,0.35), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            The LARA Standard
            <span className="h-px w-8 bg-gold/50" />
          </span>
        </Reveal>

        <h2 className="mt-10 font-serif text-[clamp(2rem,5.5vw,4.6rem)] font-light leading-[1.08] tracking-[-0.01em] text-ivory">
          <RevealLines
            lines={['Not another platform.', 'A different standard', 'of connection.']}
          />
        </h2>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-xl text-[15px] font-light leading-[1.9] text-ivory-dim sm:text-base">
            LARA was created for those who have outgrown the noise —
            the endless swipes, the shallow exchanges, the connections
            that never become anything. What we build here is slower,
            quieter, and far more deliberate.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-14 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/40" />
            <span className="font-serif text-sm italic tracking-wide text-gold">
              Membership by invitation only
            </span>
            <span className="h-px w-12 bg-gold/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
