'use client';

import { Reveal } from '../reveal';

const EVENTS = [
  {
    img: '/images/event-wine.jpg',
    cat: 'Wine Evening',
    date: '12 September',
    loc: 'Bordeaux',
    title: 'A Private Vintage Tasting',
    desc: 'An intimate evening among collectors, hosted in a 19th-century cellar.',
  },
  {
    img: '/images/event-breakfast.jpg',
    cat: 'Business Breakfast',
    date: '24 September',
    loc: 'Mayfair, London',
    title: 'Founders & Operators',
    desc: 'A morning conversation on building with intention. Twelve seats.',
  },
  {
    img: '/images/event-art.jpg',
    cat: 'Art Night',
    date: '03 October',
    loc: 'Marais, Paris',
    title: 'After Hours at the Gallery',
    desc: 'A private viewing of emerging contemporary work, with the curator.',
  },
  {
    img: '/images/event-retreat.jpg',
    cat: 'Weekend Retreat',
    date: '18 October',
    loc: 'Costa Smeralda',
    title: 'The Quiet Weekend',
    desc: 'Three days by the sea. No schedule, no screens, no agenda.',
  },
  {
    img: '/images/event-travel.jpg',
    cat: 'Luxury Travel',
    date: '07 November',
    loc: 'Marrakech',
    title: 'A Desert Interlude',
    desc: 'Four nights in a private riad, hosted for members and their guests.',
  },
  {
    img: '/images/event-networking.jpg',
    cat: 'Networking Session',
    date: '21 November',
    loc: 'Manhattan, New York',
    title: 'The Salon',
    desc: 'An evening of considered conversation among peers, not pitches.',
  },
];

export function Events() {
  return (
    <section id="events" className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Events</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
                Invitations, not tickets.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-[13px] font-light leading-relaxed text-ivory-muted">
              A calendar of gatherings reserved for members — and a selected few awaiting their invitation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full bg-ink-soft">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-soft/90 via-ink-soft/20 to-transparent"
                  />
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="rounded-sm border border-gold/40 bg-ink/60 px-3 py-1 text-[10px] font-light uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                      {e.cat}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.2em] text-ivory-muted">
                    <span>{e.date}</span>
                    <span className="h-3 w-px bg-gold/30" />
                    <span>{e.loc}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-light text-ivory sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-ivory-dim">
                    {e.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                    <a
                      href="#waitlist"
                      className="group/link inline-flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-soft"
                    >
                      View Experience
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
