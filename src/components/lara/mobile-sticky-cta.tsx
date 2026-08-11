'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight - 600;
      setShow(y > 600 && y < max);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center justify-between gap-3 rounded-sm border border-gold/25 bg-ink/90 px-4 py-3 backdrop-blur-xl">
            <div>
              <p className="font-serif text-sm font-light text-ivory">
                Invitation Only
              </p>
              <p className="text-[10px] font-light tracking-[0.16em] text-ivory-muted">
                Currently reviewing applications
              </p>
            </div>
            <a
              href="#waitlist"
              className="btn-gold rounded-sm px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase"
            >
              Request
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
