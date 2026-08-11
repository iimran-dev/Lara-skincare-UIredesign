'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated counter that runs once when scrolled into view.
 */
export function Counter({
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = prefersReduced ? 1 : Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
