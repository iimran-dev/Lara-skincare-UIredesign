'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Users, MessageCircle, Calendar, ShieldCheck, Heart, type LucideIcon } from 'lucide-react';
import { Reveal } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';

const CARDS = [
  {
    n: '01',
    title: 'Curated Community',
    copy: 'Every member is reviewed by hand. The room is smaller, and far more deliberate.',
    icon: Users,
    gradient: 'from-emerald-950/90 via-emerald-900/50 to-ink',
  },
  {
    n: '02',
    title: 'Authentic Conversations',
    copy: 'No openers, no games. Introductions begin with intention, not a swipe.',
    icon: MessageCircle,
    gradient: 'from-amber-950/30 via-emerald-950/80 to-ink',
  },
  {
    n: '03',
    title: 'Exclusive Events',
    copy: 'Private dinners, gallery nights, retreats — gatherings designed for real connection.',
    icon: Calendar,
    gradient: 'from-emerald-900/60 via-ink-soft to-ink',
  },
  {
    n: '04',
    title: 'Shared Values',
    copy: 'Compatibility measured by what you believe, not just what you like.',
    icon: ShieldCheck,
    gradient: 'from-emerald-950/80 via-gold/10 to-ink',
  },
  {
    n: '05',
    title: 'Lasting Relationships',
    copy: 'We optimise for one meaningful connection, not a hundred disposable ones.',
    icon: Heart,
    gradient: 'from-gold-dim/20 via-emerald-950/90 to-ink',
  },
];

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(trackRef, 'start start', 'end end');
  // Horizontal translation tied to vertical scroll progress (works across desktop & mobile)
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-82%']);

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

      {/* Horizontal scroll track — pinned across desktop & mobile */}
      <div ref={trackRef} className="relative h-[280vh] sm:h-[320vh]">
        <div className="sticky top-16 flex h-[75vh] items-center overflow-hidden sm:top-20 sm:h-[80vh]">
          <motion.div style={{ x }} className="flex gap-5 pl-[6vw] pr-[6vw] sm:gap-8 sm:pl-[8vw] sm:pr-[8vw]">
            {CARDS.map((c) => (
              <ExperienceCard key={c.n} {...c} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  n,
  title,
  copy,
  icon: Icon,
  gradient,
}: {
  n: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  gradient: string;
}) {
  return (
    <article
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/20 bg-ink-soft p-6 shadow-2xl transition-all duration-500 hover:border-gold/40 sm:rounded-3xl sm:p-9 h-[60vh] min-h-[380px] w-[80vw] max-w-[340px] shrink-0 sm:h-[72vh] sm:min-h-[460px] sm:w-[34vw] sm:max-w-[560px]"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradient} transition-transform duration-1000 group-hover:scale-105`}
      />

      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,90,0.15),transparent_70%)]"
      />

      {/* Top placeholder badge */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-serif text-sm italic text-gold/80">{n}</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-inner backdrop-blur-xs transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 stroke-[1.5] sm:h-6 sm:w-6" />
        </div>
      </div>

      {/* Bottom text content */}
      <div className="relative z-10 mt-auto">
        <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-tight text-ivory">
          {title}
        </h3>
        <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-dim sm:text-[14px]">
          {copy}
        </p>
      </div>

      {/* Overlay gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl"
        style={{
          background:
            'linear-gradient(180deg, transparent 30%, rgba(11,11,11,0.7) 75%, rgba(11,11,11,0.95) 100%)',
        }}
      />
    </article>
  );
}
