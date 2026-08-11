'use client';

import { motion, useTransform } from 'framer-motion';
import { User } from 'lucide-react';
import { useRef } from 'react';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

export function FounderStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-emerald py-12 sm:py-16 lg:py-20"
    >
      {/* deep emerald ambient texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 80% 20%, rgba(200,161,90,0.08), transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(11,11,11,0.5), transparent 60%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        {/* Portrait Placeholder */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-emerald-950/80 via-emerald-900/40 to-ink/90 p-8 flex flex-col items-center justify-center text-center shadow-2xl"
              style={{ y: imgY }}
            >
              {/* Ambient radial glow inside placeholder */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,161,90,0.12),transparent_70%)]"
              />

              {/* Placeholder content */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-inner backdrop-blur-xs">
                  <User className="h-9 w-9 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-lg tracking-wide text-ivory">
                    Founder Portrait
                  </span>
                  <p className="text-xs font-light tracking-wider text-ivory-dim/70 uppercase">
                    Photo Placeholder
                  </p>
                </div>
              </div>

              {/* subtle gradient overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(16,37,25,0.6) 100%)',
                }}
              />
            </motion.div>
            {/* gold frame offset */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-gold/25"
            />
          </div>
        </Reveal>

        {/* Story */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">The Founder</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] text-ivory">
              LARA began with a simple, stubborn belief —
              <span className="text-gold"> that connection deserves more care.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-[14px] font-light leading-[1.95] text-ivory-dim sm:text-[15px]">
              <p>
                I spent years surrounded by remarkable people — founders,
                doctors, artists, travellers — yet I watched them settle for
                interactions that were abundant but hollow. The apps promised
                more. More choices. More matches. More noise. And somehow, less
                of what actually matters.
              </p>
              <p>
                LARA is the opposite of more. It is a room with fewer people,
                better lit, where every introduction has been considered. Where
                trust is not a feature but a precondition. Where the people you
                meet share not just interests, but intent.
              </p>
              <p>
                We do not scale by numbers. We scale by standards. And we believe
                the right people are worth waiting for.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex items-end justify-between gap-6 border-t border-gold/15 pt-8">
              <div>
                <p className="font-serif text-2xl italic text-gold">
                  Laxmi Rai.
                </p>
                <p className="mt-1 text-[11px] font-light uppercase tracking-[0.22em] text-ivory-muted">
                  Founder · LARA
                </p>
              </div>
              {/* handwritten-style signature mark */}
              <svg
                width="120"
                height="48"
                viewBox="0 0 120 48"
                fill="none"
                aria-hidden
                className="opacity-70"
              >
                <motion.path
                  d="M4 32 C 14 14, 24 14, 28 30 S 40 40, 48 22 C 54 10, 62 18, 60 30 C 58 38, 68 36, 76 24 C 82 16, 92 22, 88 32 C 86 38, 100 34, 116 18"
                  stroke="#d8b978"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: 'easeInOut' }}
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
