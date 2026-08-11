'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/* Reveal — fade up on scroll into view */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-12% 0px -12% 0px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered word/line reveal using a mask */
export function RevealLines({
  lines,
  className,
  delay = 0,
  once = true,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-10% 0px' });
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };
  const child: Variants = {
    hidden: { y: '110%' },
    show: {
      y: '0%',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <span ref={ref} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="block"
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={child} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/* Section eyebrow label */
export function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={`eyebrow flex items-center gap-3 ${className}`}>
        <span className="h-px w-8 bg-gold/50" />
        <span>{children}</span>
      </div>
    </Reveal>
  );
}
