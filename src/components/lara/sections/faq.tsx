'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from '../reveal';

const FAQS = [
  {
    q: 'Is LARA a dating app?',
    a: 'No. LARA is a private, invitation-only community for meaningful relationships, authentic conversation, and high-quality connection — personal and professional. The experience is closer to a members\' club than an app.',
  },
  {
    q: 'How do I receive an invitation?',
    a: 'Begin by requesting one. Each request is reviewed by hand. If your application aligns with the community, you will be invited to continue the process.',
  },
  {
    q: 'What does the review involve?',
    a: 'Identity verification, a compatibility review, and manual screening by our team. The process is deliberate — most applications are not approved.',
  },
  {
    q: 'How is privacy protected?',
    a: 'Every member is identity-verified. Profiles are private to the community. Conversations are encrypted. We do not sell or share your data — ever.',
  },
  {
    q: 'Where does the community exist?',
    a: 'Across 37 cities, with hosted gatherings, private events, and retreats throughout the year. The digital experience is the doorway — not the destination.',
  },
  {
    q: 'What does membership cost?',
    a: 'Details of membership are shared with invited applicants. We do not publish pricing publicly, by design.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Questions</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.14] text-ivory">
                Considered answers.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[14px] font-light leading-relaxed text-ivory-dim">
                If your question is not here, it may simply be reserved for members.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-gold/15">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 0.05}>
                    <div className="border-b border-gold/15">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-[clamp(1.05rem,1.8vw,1.3rem)] font-light text-ivory">
                          {f.q}
                        </span>
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                            isOpen
                              ? 'rotate-45 border-gold bg-gold/10'
                              : 'border-gold/30'
                          }`}
                        >
                          <Plus className="h-3.5 w-3.5 text-gold" strokeWidth={1.2} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-xl pb-7 pr-12 text-[14px] font-light leading-[1.85] text-ivory-dim">
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
