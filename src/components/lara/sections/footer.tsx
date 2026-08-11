'use client';

import { useState } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Reveal } from '../reveal';
import { LaraLogo } from '../lara-logo';
import { toast } from 'sonner';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#manifesto' },
      { label: 'Founder', href: '#manifesto' },
      { label: 'Stories', href: '#stories' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'Request Invitation', href: '#waitlist' },
      { label: 'Membership', href: '#journey' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Events', href: '#events' },
      { label: 'Cities', href: '#community' },
      { label: 'Member Stories', href: '#stories' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email.');
      return;
    }
    toast.success('Thank you. We will be in touch.');
    setEmail('');
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-deep pt-6 sm:pt-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Newsletter / Waitlist block */}
        <Reveal>
          <div className="grid grid-cols-1 gap-5 border-b border-gold/15 pb-6 sm:gap-8 sm:pb-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow text-[10px] sm:text-xs">Stay Close</span>
              <h3 className="mt-2 font-serif text-lg font-light leading-snug text-ivory sm:mt-5 sm:text-[clamp(1.8rem,4vw,3rem)] sm:leading-[1.12]">
                The right people are worth waiting for.
              </h3>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-3 max-w-md text-xs font-light leading-relaxed text-ivory-dim sm:mb-6 sm:text-[13px]">
                Leave your email. We review requests by hand and will be in touch
                if the community is right for you.
              </p>
              <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row sm:gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Your email"
                  className="flex-1 rounded-sm border border-gold/25 bg-ink/60 px-4 py-2.5 text-xs font-light text-ivory placeholder:text-ivory-muted focus:border-gold/60 focus:outline-none sm:px-5 sm:py-3.5 sm:text-[14px]"
                />
                <button
                  type="submit"
                  className="btn-gold rounded-sm px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.22em]"
                >
                  Request Invitation
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-3 sm:gap-10 sm:py-10 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <LaraLogo animated={false} />
            <p className="mt-3 max-w-xs text-xs font-light leading-relaxed text-ivory-muted sm:mt-6 sm:text-[13px]">
              A private, invitation-only community for exceptional people
              seeking meaningful connection.
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 text-ivory-dim transition-all duration-300 hover:border-gold/60 hover:text-gold sm:h-9 sm:w-9"
                >
                  <Icon className="h-3.5 w-3.5 stroke-[1.2] sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/70 sm:text-[11px] sm:tracking-[0.24em]">
                {col.title}
              </h4>
              <ul className="mt-2.5 space-y-2 sm:mt-5 sm:space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-xs font-light text-ivory-dim transition-colors hover:text-ivory sm:gap-2 sm:text-[13px]"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-gold/10 py-5 sm:flex-row sm:gap-4 sm:py-8">
          <p className="text-[10px] font-light tracking-[0.14em] text-ivory-muted sm:text-[11px] sm:tracking-[0.16em]">
            © {new Date().getFullYear()} LARA. Membership by invitation only.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-[10px] font-light tracking-[0.14em] text-ivory-muted transition-colors hover:text-ivory sm:text-[11px] sm:tracking-[0.16em]">
              Privacy
            </a>
            <a href="#" className="text-[10px] font-light tracking-[0.14em] text-ivory-muted transition-colors hover:text-ivory sm:text-[11px] sm:tracking-[0.16em]">
              Terms
            </a>
            <span className="font-serif text-xs italic text-gold/50 sm:text-sm">Est. MMXXV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
