'use client';

import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Robust element scroll-progress hook.
 *
 * Returns a spring-smoothed MotionValue in [0..1] representing how far the
 * element has travelled through the viewport, defined by `start` and `end`
 * offsets expressed as viewport-relative positions:
 *   - 'start start' → progress 0 when element top hits viewport top
 *   - 'end start'   → progress 1 when element bottom hits viewport top
 *
 * Avoids Framer Motion's `useScroll({ target })` which throws a
 * "Target ref is defined but not hydrated" error under React 19 SSR hydration.
 */
export function useElementScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  start: 'start start' | 'start end' | 'end start' = 'start start',
  end: 'start start' | 'end start' | 'end end' | 'start end' = 'end start',
) {
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let startPx: number;
      switch (start) {
        case 'start start': startPx = rect.top; break;
        case 'start end': startPx = rect.top + vh; break;
        case 'end start': startPx = rect.bottom; break;
        default: startPx = rect.top;
      }
      let endPx: number;
      switch (end) {
        case 'start start': endPx = rect.top; break;
        case 'end start': endPx = rect.bottom; break;
        case 'end end': endPx = rect.bottom - vh; break;
        case 'start end': endPx = rect.top - vh; break;
        default: endPx = rect.bottom;
      }
      const range = endPx - startPx;
      const scrolled = -startPx;
      const p = range === 0 ? 0 : scrolled / range;
      raw.set(Math.min(1, Math.max(0, p)));
    };

    compute();
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        compute();
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, start, end, raw]);

  return { scrollYProgress: smooth };
}
