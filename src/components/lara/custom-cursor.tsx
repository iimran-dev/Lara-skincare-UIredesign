'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom champagne-gold cursor with subtle magnetic interaction
 * and a small trailing dot. Disabled on touch devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);
  const [rendered, setRendered] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    enabledRef.current = true;
    document.documentElement.classList.add('cursor-luxury');

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!enabledRef.current) return;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, input, textarea, [data-cursor="hover"]');
      setHovering(Boolean(interactive));
      setRendered(true);
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('cursor-luxury');
    };
  }, []);

  if (!rendered) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ opacity: hidden ? 0 : 1, transition: 'opacity 200ms' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-gold/60"
        style={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: hidden ? 0 : hovering ? 1 : 0.6,
          transition:
            'width 280ms cubic-bezier(.2,.8,.2,1), height 280ms cubic-bezier(.2,.8,.2,1), opacity 280ms',
          backgroundColor: hovering ? 'rgba(200,161,90,0.06)' : 'transparent',
        }}
      />
    </>
  );
}
