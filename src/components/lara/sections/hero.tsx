'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useElementScrollProgress } from '../use-element-scroll';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start start', 'end start');

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Parallax applied only on desktop to prevent mobile scroll throttling
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-ink pb-16 pt-24 lg:min-h-[100vh] lg:pb-20 lg:pt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(80% 60% at 0% 100%, rgba(21,48,31,0.65), transparent 70%), radial-gradient(50% 50% at 90% 20%, rgba(200,161,90,0.12), transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Hero Content */}
          <motion.div
            style={isDesktop ? { y: contentY, opacity: contentOpacity } : undefined}
            className="z-10 lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 flex items-center gap-3 sm:mb-6"
            >
              <span className="h-px w-8 bg-gold/60 sm:w-10" />
              <span className="eyebrow text-[10px] sm:text-xs">Invitation Only · Est. MMXXV</span>
            </motion.div>

            <h1 className="font-serif text-[clamp(2.3rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.015em] text-ivory">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Where Exceptional
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-gold"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  People Meet.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-xl text-[14px] font-light leading-relaxed text-ivory-dim sm:mt-6 sm:text-base"
            >
              A private community built for meaningful relationships,
              authentic conversations, and exceptional people.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="#waitlist"
                className="btn-gold group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-[12px]"
              >
                Request Invitation
              </a>
              <a
                href="#manifesto"
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm border border-gold/30 px-6 py-3.5 text-[11px] font-light tracking-[0.2em] uppercase text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-gold/5 sm:px-7 sm:py-4 sm:text-[12px]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:border-gold sm:h-6 sm:w-6">
                  <Play className="h-2 w-2 fill-gold text-gold sm:h-2.5 sm:w-2.5" />
                </span>
                Watch Our Story
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait Composition Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/25 bg-ink-soft shadow-2xl sm:rounded-3xl">
                <motion.img
                  src="/images/hero-person.jpg"
                  alt="LARA Ambassador"
                  className="h-full w-full object-cover object-[center_20%]"
                  style={isDesktop ? { scale: imgScale, y: imgY } : undefined}
                  fetchPriority="high"
                />
                {/* Vignette overlays */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20"
                />
              </div>

              {/* Offset gold accent frame */}
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-gold/20 sm:-bottom-4 sm:-right-4 sm:rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

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
