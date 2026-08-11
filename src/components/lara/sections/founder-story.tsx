'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

export function FounderStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-emerald py-24 sm:py-32 lg:py-40"
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
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/15">
              <motion.img
                src="/images/founder.jpg"
                alt="Portrait of LARA's founder"
                className="h-full w-full object-cover"
                style={{ y: imgY, scale: 1.1 }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(16,37,25,0.6) 100%)',
                }}
              />
            </div>
            {/* gold frame offset */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-gold/25"
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
                  Laxmi R.
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
