'use client';

import { useState, useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Counter } from '../counter';
import { Reveal, RevealLines } from '../reveal';
import { useElementScrollProgress } from '../use-element-scroll';
import { toast } from 'sonner';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useElementScrollProgress(ref, 'start end', 'end start');
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.9]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'waitlist' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('done');
      toast.success('Your request has been received.');
    } catch {
      toast.error('Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="waitlist" ref={ref} className="relative overflow-hidden bg-emerald py-16 sm:py-24 lg:py-28">
      {/* Background Image with Parallax Zoom */}
      <motion.img
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80"
        alt="An elegant evening rooftop gathering"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: imgScale }}
        loading="lazy"
      />

      {/* Dark & Emerald Ambient Vignette */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background:
            'linear-gradient(180deg, rgba(16,37,25,0.85) 0%, rgba(11,11,11,0.78) 50%, rgba(8,8,7,0.95) 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 40%, rgba(200,161,90,0.12), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            An Invitation · The LARA Waitlist
            <span className="h-px w-8 bg-gold/50" />
          </span>
        </Reveal>

        <h2 className="mt-6 font-serif text-[clamp(2.2rem,6vw,4.8rem)] font-light leading-[1.04] tracking-[-0.015em] text-ivory">
          <RevealLines lines={['Perhaps you', 'belong here.']} />
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-[14px] font-light leading-relaxed text-ivory-dim sm:text-[15px]">
            A private community for people who value meaningful connection over
            endless choice. We review each application by hand.
          </p>
        </Reveal>

        {/* Live Metrics Glass Panel */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-gold/20 bg-ink-deep/60 p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-around gap-4">
              <div>
                <p className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-none text-ivory">
                  <Counter to={128} duration={2} />
                </p>
                <p className="mt-2 text-[10px] font-light uppercase tracking-[0.2em] text-ivory-muted sm:text-[11px]">
                  Under Review
                </p>
              </div>
              <span className="h-12 w-px bg-gold/20" />
              <div>
                <p className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-none text-gold">
                  <Counter to={31} duration={2} suffix="%" />
                </p>
                <p className="mt-2 text-[10px] font-light uppercase tracking-[0.2em] text-ivory-muted sm:text-[11px]">
                  Acceptance Rate
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Application Form or Confirmation Card */}
        {status === 'done' ? (
          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-8 max-w-md rounded-2xl border border-gold/30 bg-emerald-soft/40 p-8 backdrop-blur-md text-center shadow-2xl"
            >
              <p className="font-serif text-2xl font-light italic text-gold">
                Thank you.
              </p>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-dim">
                Your request has been received and added to manual review. We will be in
                touch, in our own time.
              </p>
            </motion.div>
          </Reveal>
        ) : (
          <Reveal delay={0.4}>
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                className="flex-1 rounded-full border border-gold/25 bg-ink/70 px-6 py-4 text-[14px] font-light text-ivory placeholder:text-ivory-muted backdrop-blur-sm focus:border-gold/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold rounded-full px-8 py-4 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 shrink-0"
              >
                {status === 'loading' ? 'Sending…' : 'Request Invitation'}
              </button>
            </form>
          </Reveal>
        )}

        <Reveal delay={0.5}>
          <p className="mx-auto mt-5 max-w-xs text-[11px] font-light leading-relaxed text-ivory-muted">
            Your details are kept private. Membership by invitation only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
