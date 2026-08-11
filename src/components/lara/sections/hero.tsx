'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import { useElementScrollProgress } from '../use-element-scroll';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start start', 'end start');

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.26]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Cinematic background image with parallax + slow zoom */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: imgY }}
      >
        <motion.img
          src="/images/hero.jpg"
          alt="An exclusive private rooftop lounge at dusk"
          className="h-full w-full object-cover"
          style={{ scale: imgScale }}
          fetchPriority="high"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <motion.div
        className="absolute inset-0 -z-10 cine-vignette"
        style={{ opacity: overlayOpacity }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0.15) 35%, rgba(11,11,11,0.75) 100%)',
        }}
      />
      {/* subtle emerald tint from bottom-left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(70% 60% at 0% 100%, rgba(21,48,31,0.5), transparent 60%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">Invitation Only · Est. MMXXV</span>
          </motion.div>

          <h1 className="max-w-5xl font-serif text-[clamp(2.6rem,8vw,6.8rem)] font-light leading-[0.98] tracking-[-0.015em] text-ivory">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Where Exceptional
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ delay: 0.85, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                People Meet.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[15px] font-light leading-relaxed text-ivory-dim sm:text-base"
          >
            A private community built for meaningful relationships,
            authentic conversations, and exceptional people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="btn-gold group inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-[12px] font-medium tracking-[0.22em] uppercase transition-all duration-300 hover:scale-[1.02]"
            >
              Request Invitation
            </a>
            <a
              href="#manifesto"
              className="group inline-flex items-center justify-center gap-3 rounded-sm border border-gold/30 px-7 py-4 text-[12px] font-light tracking-[0.22em] uppercase text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:border-gold">
                <Play className="h-2.5 w-2.5 fill-gold text-gold" />
              </span>
              Watch Our Story
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-light tracking-[0.32em] uppercase text-ivory-muted">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/15">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-gold"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
