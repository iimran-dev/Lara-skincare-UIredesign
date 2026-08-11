'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

const STEPS = [
  { n: '01', title: 'Application', note: 'A considered introduction — who you are, and what you seek.' },
  { n: '02', title: 'Identity Verification', note: 'Government ID and live face check. No exceptions.' },
  { n: '03', title: 'Compatibility Review', note: 'We assess values, intent, and community fit.' },
  { n: '04', title: 'Manual Screening', note: 'Every application read by a human, not an algorithm.' },
  { n: '05', title: 'Approval', note: 'A small number are welcomed. Most are not.' },
  { n: '06', title: 'Welcome', note: 'You receive your invitation, and the room opens.' },
];

export function MembershipJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section id="journey" className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(200,161,90,0.06), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="eyebrow">The Membership Journey</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
              Membership is earned, not granted.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md text-[14px] font-light leading-relaxed text-ivory-dim">
              Six deliberate stages. A journey designed to protect the integrity
              of the community — and everyone inside it.
            </p>
          </Reveal>
        </div>

        {/* Desktop: horizontal gold timeline */}
        <div ref={ref} className="relative hidden lg:block">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[26px] h-px bg-gold/15">
            <motion.div
              className="absolute left-0 top-0 h-full origin-left bg-gradient-to-r from-gold/50 via-gold to-gold"
              style={{ scaleX: lineScaleY }}
            />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="group relative pl-1 pt-16">
                  {/* milestone node */}
                  <div className="absolute left-0 top-[18px] flex h-4 w-4 items-center justify-center">
                    <motion.span
                      className="h-2.5 w-2.5 rounded-full bg-gold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    />
                    <motion.span
                      className="absolute h-4 w-4 rounded-full border border-gold/50"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    />
                  </div>
                  <span className="font-serif text-sm italic text-gold/60">{s.n}</span>
                  <h3 className="mt-2 font-serif text-xl font-light text-ivory">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[12.5px] font-light leading-relaxed text-ivory-muted">
                    {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-gold/15">
            <motion.div
              className="absolute left-0 top-0 h-full origin-top bg-gradient-to-b from-gold/50 via-gold to-gold"
              style={{ scaleY: lineScaleY }}
            />
          </div>
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative pl-12">
                  <div className="absolute left-[8px] top-1.5 h-3 w-3 rounded-full border border-gold bg-ink">
                    <span className="absolute inset-0.5 rounded-full bg-gold" />
                  </div>
                  <span className="font-serif text-sm italic text-gold/60">{s.n}</span>
                  <h3 className="mt-1 font-serif text-xl font-light text-ivory">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-light leading-relaxed text-ivory-muted">
                    {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
