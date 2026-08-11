'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient atmospheric layer:
 * - subtle floating dust particles (canvas, GPU-friendly)
 * - soft radial gold lighting that follows the mouse on desktop
 * - layered gradient background
 * Disabled / simplified for reduced-motion users.
 */
export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lightOnMove: ((e: MouseEvent) => void) | null = null;

    // Mouse-follow light (desktop only)
    if (!prefersReduced && window.matchMedia('(hover: hover)').matches) {
      lightOnMove = (e: MouseEvent) => {
        if (lightRef.current) {
          lightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(200,161,90,0.05), transparent 60%)`;
        }
      };
      window.addEventListener('mousemove', lightOnMove);
    }

    // Floating dust particles
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) {
      return () => {
        if (lightOnMove) window.removeEventListener('mousemove', lightOnMove);
      };
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return () => {
        if (lightOnMove) window.removeEventListener('mousemove', lightOnMove);
      };
    }

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const COUNT = Math.min(48, Math.floor((w * h) / 32000));
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(Math.random() * 0.18 + 0.04),
      a: Math.random() * 0.4 + 0.08,
    }));

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 185, 120, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      if (lightOnMove) window.removeEventListener('mousemove', lightOnMove);
    };
  }, []);

  return (
    <>
      {/* Layered background gradients */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(21,48,31,0.45) 0%, rgba(11,11,11,0) 50%), radial-gradient(80% 60% at 100% 100%, rgba(200,161,90,0.06) 0%, rgba(11,11,11,0) 55%), linear-gradient(180deg, #0b0b0b 0%, #080807 100%)',
        }}
      />
      {/* Mouse-follow light */}
      <div
        ref={lightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      />
      {/* Floating dust particles */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      />
      {/* Film grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}
