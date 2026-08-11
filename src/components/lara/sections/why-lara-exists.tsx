'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

const STAGES = [
  { n: '01', title: 'Dating Apps', note: 'Optimised for volume, not value.' },
  { n: '02', title: 'Swipe Culture', note: 'People reduced to a gesture.' },
  { n: '03', title: 'Fake Profiles', note: 'Trust eroded at scale.' },
  { n: '04', title: 'Ghosting', note: 'Disposal disguised as convenience.' },
  { n: '05', title: 'Meaningful Community', note: 'The LARA standard.', final: true },
];

export function WhyLaraExists() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Why LARA Exists</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
              The path that brought us here.
            </h2>
          </Reveal>
        </div>

        {/* Horizontal journey */}
        <div ref={ref} className="relative">
          {/* gold connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px lg:block">
            <div className="relative h-full w-full bg-gold/15">
              <motion.div
                className="absolute left-0 top-0 h-full origin-left bg-gradient-to-r from-gold/40 via-gold to-gold"
                style={{ scaleX: lineScale }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STAGES.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="group relative">
                  {/* node */}
                  <div className="mb-6 flex items-center gap-4 lg:block">
                    <div
                      className={`relative flex h-[20px] w-[20px] items-center justify-center rounded-full border ${
                        s.final
                          ? 'border-gold bg-gold shadow-[0_0_24px_rgba(200,161,90,0.5)]'
                          : 'border-gold/40 bg-ink'
                      }`}
                    >
                      {s.final && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-gold"
                          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="lg:pt-2">
                    <span className="font-serif text-sm italic text-gold/60">
                      {s.n}
                    </span>
                    <h3
                      className={`mt-2 font-serif font-light leading-tight transition-colors ${
                        s.final
                          ? 'text-[clamp(1.6rem,3vw,2.4rem)] text-gold'
                          : 'text-[clamp(1.3rem,2.5vw,1.8rem)] text-ivory group-hover:text-gold'
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-muted">
                      {s.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* mobile connecting line (vertical) */}
        <div className="mt-16 flex items-center justify-center lg:hidden">
          <span className="font-serif text-base italic text-gold">
            ↓ arriving at the LARA standard
          </span>
        </div>
      </div>
    </section>
  );
}
