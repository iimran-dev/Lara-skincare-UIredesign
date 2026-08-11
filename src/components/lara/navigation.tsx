'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LaraLogo } from './lara-logo';

const LINKS = [
  { label: 'About', href: '#manifesto' },
  { label: 'Experience', href: '#experience' },
  { label: 'Membership', href: '#journey' },
  { label: 'Events', href: '#events' },
  { label: 'Stories', href: '#stories' },
  { label: 'FAQ', href: '#faq' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gold/15 bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="LARA home" className="group">
            <LaraLogo animated={false} />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[13px] font-light tracking-[0.16em] text-ivory-dim transition-colors hover:text-ivory"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-400 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="#login"
              className="text-[13px] font-light tracking-[0.16em] text-ivory-dim transition-colors hover:text-ivory"
            >
              Login
            </a>
            <a
              href="#waitlist"
              className="btn-gold rounded-sm px-5 py-2.5 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.03]"
            >
              Request Invitation
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <span className="text-[11px] font-light tracking-[0.28em] uppercase">Menu</span>
            <Menu className="h-5 w-5" strokeWidth={1.2} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu links={LINKS} onClose={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({
  links,
  onClose,
}: {
  links: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[70] bg-ink lg:hidden"
    >
      {/* ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 60% at 50% 0%, rgba(21,48,31,0.6), transparent 60%), radial-gradient(60% 40% at 100% 100%, rgba(200,161,90,0.08), transparent 60%)',
        }}
      />
      <div className="relative flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <LaraLogo animated={false} />
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-ivory"
            aria-label="Close menu"
          >
            <span className="text-[11px] font-light tracking-[0.28em] uppercase">Close</span>
            <X className="h-5 w-5" strokeWidth={1.2} />
          </button>
        </div>

        <div className="gold-line my-8" />

        <nav className="flex flex-1 flex-col justify-center gap-1">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-baseline justify-between border-b border-gold/10 py-5"
            >
              <span className="font-serif text-4xl font-light text-ivory transition-colors group-hover:text-gold">
                {l.label}
              </span>
              <span className="eyebrow text-gold/50">{String(i + 1).padStart(2, '0')}</span>
            </motion.a>
          ))}
        </nav>

        <div className="mt-6 space-y-3">
          <a
            href="#waitlist"
            onClick={onClose}
            className="btn-gold block rounded-sm py-4 text-center text-[12px] font-medium tracking-[0.22em] uppercase"
          >
            Request Invitation
          </a>
          <a
            href="#login"
            onClick={onClose}
            className="block py-2 text-center text-[12px] font-light tracking-[0.2em] uppercase text-ivory-dim"
          >
            Member Login
          </a>
        </div>
      </div>
    </motion.div>
  );
}
