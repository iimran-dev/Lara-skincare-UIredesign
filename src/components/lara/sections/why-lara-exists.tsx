'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, MoveHorizontal, UserX, MessageSquareOff, Sparkles } from 'lucide-react';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

const STAGES = [
  {
    n: '01',
    title: 'App Saturation',
    note: 'Optimised for endless scrolling & volume, never depth.',
    icon: Smartphone,
  },
  {
    n: '02',
    title: 'Swipe Culture',
    note: 'Human connection reduced to split-second surface judgements.',
    icon: MoveHorizontal,
  },
  {
    n: '03',
    title: 'Fake Profiles',
    note: 'Unverified identities eroding trust at scale.',
    icon: UserX,
  },
  {
    n: '04',
    title: 'Ghosting & Noise',
    note: 'Disposable conversations without accountability.',
    icon: MessageSquareOff,
  },
  {
    n: '05',
    title: 'LARA Standard',
    note: 'Hand-vetted, private, and built for intentional connections.',
    icon: Sparkles,
    final: true,
  },
];

export function WhyLaraExists() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Why LARA Exists</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
              The Antidote to Modern Dating Noise.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-ivory-dim sm:text-[15px]">
              Platforms expanded access but destroyed trust. LARA replaces volume with hand-vetted intent.
            </p>
          </Reveal>
        </div>

        {/* Journey Timeline */}
        <div ref={ref} className="relative">
          {/* gold connecting line (desktop horizontal) */}
          <div className="absolute left-0 right-0 top-[24px] hidden h-px lg:block">
            <div className="relative h-full w-full bg-gold/15">
              <motion.div
                className="absolute left-0 top-0 h-full origin-left bg-gradient-to-r from-gold/40 via-gold to-gold"
                style={{ scaleX: lineScale }}
              />
            </div>
          </div>

          {/* gold connecting line (mobile vertical) */}
          <div className="absolute left-[24px] top-[24px] bottom-[24px] w-px lg:hidden">
            <div className="relative h-full w-full bg-gold/15">
              <motion.div
                className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-gold/40 via-gold to-gold"
                style={{ scaleY: lineScale }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 0.12} className="h-full">
                  <div className="group relative flex h-full flex-row items-start gap-5 lg:flex-col lg:gap-0">
                    {/* node icon container */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:mb-6 ${
                        s.final
                          ? 'border-gold bg-gold/15 text-gold shadow-[0_0_24px_rgba(200,161,90,0.4)]'
                          : 'border-gold/30 bg-ink text-gold/70 group-hover:border-gold/60 group-hover:text-gold'
                      }`}
                    >
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                      {s.final && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-gold"
                          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col pt-0.5 lg:pt-0">
                      <span className="font-serif text-sm italic text-gold/60">
                        {s.n}
                      </span>
                      <h3
                        className={`mt-1 font-serif font-light leading-tight transition-colors text-[clamp(1.25rem,2.2vw,1.65rem)] lg:mt-2 lg:min-h-[3.2rem] lg:flex lg:items-center ${
                          s.final
                            ? 'text-gold font-normal'
                            : 'text-ivory group-hover:text-gold'
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-ivory-muted">
                        {s.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* mobile connecting label */}
        <div className="mt-12 flex items-center justify-center lg:hidden">
          <span className="font-serif text-sm italic tracking-wider text-gold/80">
            Arriving at the LARA standard
          </span>
        </div>
      </div>
    </section>
  );
}
