'use client';

import { motion } from 'framer-motion';
import { Reveal } from '../reveal';

const TRUST = [
  { icon: 'id', title: 'Government ID Verification', note: 'Every member is verified against official identity documents.' },
  { icon: 'face', title: 'Face Verification', note: 'A live liveness check confirms you are who you say you are.' },
  { icon: 'review', title: 'Manual Profile Review', note: 'No profile goes live until a human has read it.' },
  { icon: 'lock', title: 'End-to-End Privacy', note: 'Your conversations and data stay between you and the community.' },
  { icon: 'shield', title: 'No Fake Profiles', note: 'Verification at every stage leaves no room for impostors.' },
  { icon: 'key', title: 'Invitation Only', note: 'There is no public sign-up. You enter only when invited.' },
];

export function TrustPrivacy() {
  return (
    <section className="relative overflow-hidden bg-emerald py-12 sm:py-16 lg:py-20">
      {/* ambient shield behind content */}
      <motion.svg
        aria-hidden
        viewBox="0 0 200 240"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] max-h-[640px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 0.05, pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      >
        <motion.path
          d="M100 12 L180 44 V120 C180 180, 140 220, 100 232 C60 220, 20 180, 20 120 V44 Z"
          stroke="#c8a15a"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold/50" />
              Trust & Privacy
              <span className="h-px w-8 bg-gold/50" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.1] text-ivory">
              Exceptional people deserve exceptional privacy.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-[14px] font-light leading-relaxed text-ivory-dim">
              Trust is not a feature we added. It is the foundation the entire
              community is built upon — at every stage, on every profile.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.08}>
              <article className="group h-full bg-emerald/60 px-7 py-10 transition-colors duration-500 hover:bg-emerald-soft/50 sm:px-8 sm:py-12">
                <TrustIcon name={t.icon} />
                <h3 className="mt-6 font-serif text-xl font-light text-ivory">
                  {t.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-muted">
                  {t.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustIcon({ name }: { name: string }) {
  const common = {
    fill: 'none',
    stroke: '#c8a15a',
    strokeWidth: 1,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-8 w-8 transition-transform duration-500 group-hover:scale-110',
  };
  switch (name) {
    case 'id':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="4" y="7" width="24" height="18" rx="1" />
          <circle cx="11" cy="14" r="2.5" />
          <path d="M7 21 C 7 18, 15 18, 15 21" />
          <path d="M19 13 H26 M19 17 H26 M19 21 H23" />
        </svg>
      );
    case 'face':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="12.5" cy="14" r="0.6" fill="#c8a15a" />
          <circle cx="19.5" cy="14" r="0.6" fill="#c8a15a" />
          <path d="M12 19 C 14 21, 18 21, 20 19" />
          <path d="M16 5 V8 M16 24 V27" strokeDasharray="1 2" />
        </svg>
      );
    case 'review':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M7 6 H21 L25 10 V26 H7 Z" />
          <path d="M21 6 V10 H25" />
          <path d="M11 15 H21 M11 19 H21 M11 23 H17" />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="7" y="14" width="18" height="13" rx="1" />
          <path d="M11 14 V10 C 11 6, 21 6, 21 10 V14" />
          <circle cx="16" cy="20" r="1.5" />
          <path d="M16 21.5 V24" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M16 4 L26 8 V16 C26 22, 21 27, 16 28 C11 27, 6 22, 6 16 V8 Z" />
          <path d="M12 16 L15 19 L20 13" />
        </svg>
      );
    case 'key':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="11" cy="16" r="5" />
          <path d="M16 16 H27 M23 16 V21 M27 16 V20" />
        </svg>
      );
    default:
      return null;
  }
}
