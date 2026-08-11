'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, RevealLines } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-center overflow-hidden">
      <motion.img
        src="/images/gallery-rooftop.jpg"
        alt="An elegant evening gathering"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: imgScale }}
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background:
            'linear-gradient(180deg, rgba(11,11,11,0.7) 0%, rgba(11,11,11,0.55) 40%, rgba(11,11,11,0.9) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(21,48,31,0.3), transparent 70%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-5 py-32 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            An Invitation
            <span className="h-px w-8 bg-gold/50" />
          </span>
        </Reveal>

        <h2 className="mt-8 font-serif text-[clamp(2.2rem,7vw,5.4rem)] font-light leading-[1.02] tracking-[-0.015em] text-ivory">
          <RevealLines lines={['Perhaps you', 'belong here.']} />
        </h2>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-md text-[15px] font-light leading-relaxed text-ivory-dim">
            A private community for people who value meaningful connection over
            endless choice.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="btn-gold rounded-sm px-9 py-4 text-[12px] font-medium tracking-[0.24em] uppercase transition-all duration-300 hover:scale-[1.03]"
            >
              Request Invitation
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-sm border border-gold/30 px-7 py-4 text-[12px] font-light tracking-[0.22em] uppercase text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
            >
              Explore the Experience
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="mt-10 font-serif text-sm italic tracking-wide text-gold/60">
            Membership by invitation only
          </p>
        </Reveal>
      </div>
    </section>
  );
}
