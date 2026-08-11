'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../counter';
import { Reveal } from '../reveal';
import { toast } from 'sonner';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

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
    <section id="waitlist" className="relative overflow-hidden bg-emerald py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(200,161,90,0.1), transparent 60%), radial-gradient(50% 40% at 50% 100%, rgba(11,11,11,0.5), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            The Waitlist
            <span className="h-px w-8 bg-gold/50" />
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-light leading-none text-ivory">
                <Counter to={128} duration={2} />
              </p>
              <p className="mt-3 text-[11px] font-light uppercase tracking-[0.24em] text-ivory-muted">
                Applications Under Review
              </p>
            </div>
            <span className="hidden h-16 w-px bg-gold/20 sm:block" />
            <div>
              <p className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-light leading-none text-gold">
                <Counter to={31} duration={2} suffix="%" />
              </p>
              <p className="mt-3 text-[11px] font-light uppercase tracking-[0.24em] text-ivory-muted">
                Average Approval Rate
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="mx-auto mt-14 max-w-xl font-serif text-[clamp(1.8rem,4.5vw,3rem)] font-light leading-[1.14] text-ivory">
            Currently reviewing applications.
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-5 max-w-md text-[14px] font-light leading-relaxed text-ivory-dim">
            We review each request by hand. There is no urgency — only care. If
            your values align, you will hear from us.
          </p>
        </Reveal>

        {status === 'done' ? (
          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-10 max-w-md border border-gold/30 bg-emerald-soft/30 px-8 py-10"
            >
              <p className="font-serif text-2xl font-light italic text-gold">
                Thank you.
              </p>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-dim">
                Your request has been received and added to review. We will be in
                touch, in our own time.
              </p>
            </motion.div>
          </Reveal>
        ) : (
          <Reveal delay={0.35}>
            <form
              onSubmit={submit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                className="flex-1 rounded-sm border border-gold/25 bg-ink/60 px-5 py-4 text-[14px] font-light text-ivory placeholder:text-ivory-muted focus:border-gold/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold rounded-sm px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Request Invitation'}
              </button>
            </form>
          </Reveal>
        )}

        <Reveal delay={0.45}>
          <p className="mx-auto mt-6 max-w-xs text-[11px] font-light leading-relaxed text-ivory-muted">
            Your details are kept private and used only to review your application.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
