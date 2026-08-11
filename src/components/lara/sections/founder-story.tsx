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
      className="relative overflow-hidden bg-emerald py-8 sm:py-16 lg:py-20"
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
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-3.5 px-4 sm:gap-12 sm:px-8 lg:gap-16 lg:px-12">
        {/* Portrait Placeholder */}
        <Reveal className="col-span-5 w-full">
          <div className="relative">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-b from-emerald-950/80 via-emerald-900/40 to-ink/90 p-3 flex flex-col items-center justify-center text-center shadow-xl sm:rounded-2xl sm:p-8"
              style={{ y: imgY }}
            >
              {/* Ambient radial glow inside placeholder */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,161,90,0.12),transparent_70%)]"
              />

              {/* Placeholder content */}
              <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-inner backdrop-blur-xs sm:h-20 sm:w-20">
                  <User className="h-4 w-4 stroke-[1.5] sm:h-9 sm:w-9" />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <span className="font-serif text-[11px] tracking-wide text-ivory sm:text-lg">
                    Founder Portrait
                  </span>
                  <p className="text-[8px] font-light tracking-wider text-ivory-dim/70 uppercase sm:text-xs">
                    Photo Placeholder
                  </p>
                </div>
              </div>

              {/* subtle gradient overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(16,37,25,0.6) 100%)',
                }}
              />
            </motion.div>
            {/* gold frame offset */}
            <div
              aria-hidden
              className="absolute -bottom-1.5 -right-1.5 -z-10 h-full w-full rounded-xl border border-gold/25 sm:-bottom-3 sm:-right-3 sm:rounded-2xl"
            />
          </div>
        </Reveal>

        {/* Story */}
        <div className="col-span-7">
          <Reveal>
            <span className="eyebrow text-[9px] sm:text-xs">The Founder</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-2 font-serif text-[clamp(0.95rem,3.2vw,3rem)] font-light leading-[1.18] text-ivory sm:mt-5 sm:leading-[1.15]">
              LARA began with a simple, stubborn belief —
              <span className="text-gold"> that connection deserves more care.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-3 space-y-2 text-[11px] font-light leading-[1.65] text-ivory-dim sm:mt-8 sm:space-y-5 sm:text-[15px] sm:leading-[1.95]">
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
                trust is not a feature but a precondition.
              </p>
              <p className="hidden sm:block">
                We do not scale by numbers. We scale by standards. And we believe
                the right people are worth waiting for.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-4 flex items-end justify-between gap-2 border-t border-gold/15 pt-3 sm:mt-10 sm:gap-6 sm:pt-8">
              <div>
                <p className="font-serif text-base italic text-gold sm:text-2xl">
                  Laxmi Rai.
                </p>
                <p className="mt-0.5 text-[8px] font-light uppercase tracking-[0.16em] text-ivory-muted sm:mt-1 sm:text-[11px] sm:tracking-[0.22em]">
                  Founder · LARA
                </p>
              </div>
              {/* handwritten-style signature mark */}
              <svg
                width="64"
                height="26"
                viewBox="0 0 120 48"
                fill="none"
                aria-hidden
                className="opacity-70 sm:h-[48px] sm:w-[120px]"
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
