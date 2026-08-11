'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

const CARDS = [
  {
    n: '01',
    title: 'Curated Community',
    copy: 'Every member is reviewed by hand. The room is smaller, and far more deliberate.',
    img: '/images/exp-community.jpg',
  },
  {
    n: '02',
    title: 'Authentic Conversations',
    copy: 'No openers, no games. Introductions begin with intention, not a swipe.',
    img: '/images/exp-conversation.jpg',
  },
  {
    n: '03',
    title: 'Exclusive Events',
    copy: 'Private dinners, gallery nights, retreats — gatherings designed for real connection.',
    img: '/images/exp-events.jpg',
  },
  {
    n: '04',
    title: 'Shared Values',
    copy: 'Compatibility measured by what you believe, not just what you like.',
    img: '/images/exp-values.jpg',
  },
  {
    n: '05',
    title: 'Lasting Relationships',
    copy: 'We optimise for one meaningful connection, not a hundred disposable ones.',
    img: '/images/exp-relationships.jpg',
  },
];

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(trackRef, 'start start', 'end end');
  // Horizontal translation tied to vertical scroll (desktop)
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-78%']);

  return (
    <section id="experience" className="relative bg-ink">
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-5 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-8 lg:pt-20">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">The LARA Experience</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
              Five principles. One standard of connection.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll track (desktop) — pinned */}
      <div ref={trackRef} className="relative h-[320vh] hidden lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-[8vw] pr-[8vw]">
            {CARDS.map((c) => (
              <ExperienceCard key={c.n} {...c} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: swipe carousel */}
      <div className="lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6">
          {CARDS.map((c) => (
            <div key={c.n} className="w-[82vw] shrink-0 snap-center sm:w-[60vw]">
              <ExperienceCard {...c} mobile />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {CARDS.map((c, i) => (
            <span key={c.n} className="h-px w-8 bg-gold/30" style={{ opacity: 1 - i * 0.12 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  n,
  title,
  copy,
  img,
  mobile = false,
}: {
  n: string;
  title: string;
  copy: string;
  img: string;
  mobile?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden border border-gold/15 bg-ink-soft ${
        mobile ? 'h-[68vh] min-h-[440px] w-full' : 'h-[74vh] w-[36vw] min-w-[440px] max-w-[620px]'
      }`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,11,11,0.1) 0%, rgba(11,11,11,0.55) 55%, rgba(11,11,11,0.92) 100%)',
        }}
      />
      <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
        <span className="font-serif text-sm italic text-gold/70">{n}</span>
        <h3 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-tight text-ivory">
          {title}
        </h3>
        <p className="mt-4 max-w-sm text-[13px] font-light leading-relaxed text-ivory-dim">
          {copy}
        </p>
      </div>
      <span className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/30" />
    </article>
  );
}
