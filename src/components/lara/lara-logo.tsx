'use client';

import { motion } from 'framer-motion';

/**
 * LARA wordmark with subtle SVG draw-in animation on first load.
 */
export function LaraLogo({
  className = '',
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LaraMark animated={animated} />
      <span className="font-serif text-[1.35rem] leading-none tracking-[0.42em] text-ivory">
        LARA
      </span>
    </span>
  );
}

/* Minimal monogram — a thin gold "L" formed by two strokes, drawn on load */
function LaraMark({ animated }: { animated: boolean }) {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <motion.path
        d="M11 1 V24"
        stroke="#c8a15a"
        strokeWidth="1.1"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.path
        d="M11 24 H21"
        stroke="#c8a15a"
        strokeWidth="1.1"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="11"
        cy="1"
        r="1.4"
        fill="#c8a15a"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
    </svg>
  );
}
