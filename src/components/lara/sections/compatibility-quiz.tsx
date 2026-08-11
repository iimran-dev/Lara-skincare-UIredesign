'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../reveal';

const QUESTIONS = [
  {
    q: 'In a relationship, what matters most to you?',
    options: [
      { label: 'Shared values & vision', w: 1 },
      { label: 'Chemistry & ease', w: 0.85 },
      { label: 'Independence respected', w: 0.9 },
    ],
  },
  {
    q: 'How do you prefer to spend a free evening?',
    options: [
      { label: 'A quiet dinner with one or two people', w: 1 },
      { label: 'A curated gathering of peers', w: 0.95 },
      { label: 'Time alone, reading or reflecting', w: 0.8 },
    ],
  },
  {
    q: 'What draws you to a new connection?',
    options: [
      { label: 'Depth of conversation', w: 1 },
      { label: 'A shared ambition', w: 0.92 },
      { label: 'Curiosity about their world', w: 0.88 },
    ],
  },
  {
    q: 'How do you approach trust?',
    options: [
      { label: 'Earned slowly, kept carefully', w: 1 },
      { label: 'Extended first, then reassessed', w: 0.78 },
      { label: 'Given when intent is clear', w: 0.86 },
    ],
  },
  {
    q: 'What kind of life are you building?',
    options: [
      { label: 'One of intention and meaning', w: 1 },
      { label: 'One of achievement and craft', w: 0.9 },
      { label: 'One of experience and breadth', w: 0.84 },
    ],
  },
];

export function CompatibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const score = useMemo(() => {
    if (answers.length === 0) return 0;
    const total = answers.reduce((acc, ai, i) => {
      const opt = QUESTIONS[i]?.options[ai];
      return acc + (opt?.w ?? 0);
    }, 0);
    return Math.round((total / QUESTIONS.length) * 100);
  }, [answers]);

  const pick = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setAnswers([]);
    setStep(0);
    setDone(false);
  };

  return (
    <section id="quiz" className="relative overflow-hidden bg-ink py-12 sm:py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 50%, rgba(21,48,31,0.4), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" />
            Compatibility Assessment
            <span className="h-px w-8 bg-gold/50" />
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-xl font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
            A brief, private assessment.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-md text-[14px] font-light leading-relaxed text-ivory-dim">
            Five questions. No right answers — only honest ones. See how closely
            your values align with the LARA community.
          </p>
        </Reveal>

        <div className="relative mt-14 min-h-[340px]">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* progress */}
                <div className="mb-8 flex items-center justify-center gap-2">
                  {QUESTIONS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-px transition-all duration-500 ${
                        i <= step ? 'w-10 bg-gold' : 'w-6 bg-ivory/15'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-serif text-sm italic text-gold/60">
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                <h3 className="mx-auto mt-4 max-w-lg font-serif text-[clamp(1.4rem,3vw,2rem)] font-light leading-tight text-ivory">
                  {QUESTIONS[step].q}
                </h3>
                <div className="mx-auto mt-9 flex max-w-md flex-col gap-3">
                  {QUESTIONS[step].options.map((o, i) => (
                    <button
                      key={o.label}
                      onClick={() => pick(i)}
                      className="group flex items-center justify-between rounded-sm border border-gold/20 bg-ink-soft/60 px-6 py-4 text-left text-[14px] font-light text-ivory-dim transition-all duration-300 hover:border-gold/60 hover:bg-emerald-soft/30 hover:text-ivory"
                    >
                      <span>{o.label}</span>
                      <span className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <ScoreDial score={score} />
                <p className="mx-auto mt-8 max-w-md font-serif text-[clamp(1.3rem,2.5vw,1.7rem)] font-light italic leading-relaxed text-ivory">
                  You are{' '}
                  <span className="text-gold not-italic">{score}% aligned</span>{' '}
                  with the LARA community.
                </p>
                <p className="mx-auto mt-4 max-w-sm text-[13px] font-light leading-relaxed text-ivory-muted">
                  {score >= 88
                    ? 'Your values align closely with the members we welcome. An invitation may well be yours.'
                    : score >= 75
                    ? 'There is meaningful alignment here — and room to discover where you might belong.'
                    : 'Every community is a conversation. Yours may simply begin elsewhere.'}
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="btn-gold rounded-sm px-7 py-3.5 text-[12px] font-medium tracking-[0.22em] uppercase"
                  >
                    Request Invitation
                  </a>
                  <button
                    onClick={reset}
                    className="rounded-sm border border-gold/25 px-6 py-3.5 text-[12px] font-light tracking-[0.22em] uppercase text-ivory-dim transition-colors hover:border-gold/60 hover:text-ivory"
                  >
                    Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ScoreDial({ score }: { score: number }) {
  const R = 88;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative mx-auto h-[220px] w-[220px]">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="rgba(247,243,234,0.08)"
          strokeWidth="2"
        />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="#c8a15a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: C - (C * score) / 100 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif text-[clamp(2.6rem,6vw,3.6rem)] font-light text-ivory"
        >
          {score}
          <span className="text-gold">%</span>
        </motion.span>
        <span className="mt-1 text-[10px] font-light uppercase tracking-[0.28em] text-ivory-muted">
          Alignment
        </span>
      </div>
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(200,161,90,0.15), transparent 70%)',
        }}
      />
    </div>
  );
}
