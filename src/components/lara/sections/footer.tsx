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
    <footer id="contact" className="relative overflow-hidden bg-ink-deep pt-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Newsletter / Waitlist block */}
        <Reveal>
          <div className="grid grid-cols-1 gap-10 border-b border-gold/15 pb-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">Stay Close</span>
              <h3 className="mt-5 font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.12] text-ivory">
                The right people are worth waiting for.
              </h3>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-6 max-w-md text-[13px] font-light leading-relaxed text-ivory-dim">
                Leave your email. We review requests by hand and will be in touch
                if the community is right for you.
              </p>
              <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Your email"
                  className="flex-1 rounded-sm border border-gold/25 bg-ink/60 px-5 py-3.5 text-[14px] font-light text-ivory placeholder:text-ivory-muted focus:border-gold/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-gold rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.22em] uppercase"
                >
                  Request Invitation
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <LaraLogo animated={false} />
            <p className="mt-6 max-w-xs text-[13px] font-light leading-relaxed text-ivory-muted">
              A private, invitation-only community for exceptional people
              seeking meaningful connection.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-ivory-dim transition-all duration-300 hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold/70">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[13px] font-light text-ivory-dim transition-colors hover:text-ivory"
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
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gold/10 py-8 sm:flex-row">
          <p className="text-[11px] font-light tracking-[0.16em] text-ivory-muted">
            © {new Date().getFullYear()} LARA. Membership by invitation only.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] font-light tracking-[0.16em] text-ivory-muted transition-colors hover:text-ivory">
              Privacy
            </a>
            <a href="#" className="text-[11px] font-light tracking-[0.16em] text-ivory-muted transition-colors hover:text-ivory">
              Terms
            </a>
            <span className="font-serif text-sm italic text-gold/50">Est. MMXXV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
