'use client';

import { motion } from 'framer-motion';
import { Reveal } from '../reveal';

export function InsideLara() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 50%, rgba(200,161,90,0.07), transparent 65%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        {/* Left — message */}
        <div>
          <Reveal>
            <span className="eyebrow">Inside LARA</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,4.5vw,3.4rem)] font-light leading-[1.1] text-ivory">
              A glimpse inside.
              <span className="block text-gold">The rest is reserved for members.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-[14px] font-light leading-[1.9] text-ivory-dim sm:text-[15px]">
              The application is private. The directory is private. The
              conversations are private. What you see here is the shape of the
              experience — never its substance.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-4">
              {[
                'Curated introductions, not endless feeds',
                'Identity-verified members only',
                'Private events & hosted gatherings',
                'Encrypted, member-to-member messaging',
              ].map((f) => (
                <li key={f} className="flex items-center gap-4 text-[13px] font-light text-ivory-dim sm:text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right — blurred app preview montage */}
        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto flex h-[460px] max-w-md items-center justify-center sm:h-[540px]">
            {/* Phone mock 1 — back, blurred */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              whileInView={{ opacity: 1, x: -60, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-8 h-[380px] w-[190px] scale-90"
            >
              <PhoneCard blur />
            </motion.div>

            {/* Phone mock 2 — center, sharp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 h-[440px] w-[218px]"
            >
              <PhoneCard />
            </motion.div>

            {/* Phone mock 3 — back, blurred */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 8 }}
              whileInView={{ opacity: 1, x: 60, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-8 h-[380px] w-[190px] scale-90"
            >
              <PhoneCard blur />
            </motion.div>

            {/* ambient glow */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(50% 60% at 50% 50%, rgba(200,161,90,0.12), transparent 70%)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhoneCard({ blur = false }: { blur?: boolean }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[28px] border border-gold/25 bg-ink p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${
        blur ? 'opacity-60' : ''
      }`}
      style={{ filter: blur ? 'blur(6px)' : 'none' }}
    >
      {/* notch */}
      <div className="mx-auto mt-1 h-1.5 w-12 rounded-full bg-gold/20" />
      {/* screen content */}
      <div className="mt-4 space-y-3 px-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-1.5 w-16 rounded-full bg-gold/40" />
            <div className="mt-2 h-1 w-24 rounded-full bg-ivory/15" />
          </div>
          <div className="h-7 w-7 rounded-full border border-gold/30" />
        </div>
        <div className="mt-4 h-px w-full bg-gold/15" />
        <div className="space-y-2.5 pt-3">
          {[0.9, 0.7, 0.8, 0.6, 0.85].map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="h-8 w-8 shrink-0 rounded-full border border-gold/20 bg-emerald-soft/40" />
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 rounded-full bg-ivory/20" style={{ width: `${w * 100}%` }} />
                <div className="h-1 w-2/3 rounded-full bg-ivory/10" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-md border border-gold/20 bg-emerald-soft/30 p-3">
          <div className="h-1.5 w-20 rounded-full bg-gold/50" />
          <div className="mt-2 space-y-1.5">
            <div className="h-1 w-full rounded-full bg-ivory/12" />
            <div className="h-1 w-5/6 rounded-full bg-ivory/12" />
          </div>
        </div>
      </div>
    </div>
  );
}
