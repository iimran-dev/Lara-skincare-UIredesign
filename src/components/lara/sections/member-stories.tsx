'use client';

import { Reveal } from '../reveal';

const STORIES = [
  {
    img: '/images/member-1.jpg',
    name: 'Aaradhya',
    city: 'Mumbai',
    quote:
      'I stopped looking for more people. I started looking for the right ones.',
  },
  {
    img: '/images/member-2.jpg',
    name: 'Julian',
    city: 'London',
    quote:
      'The first conversation I had here felt different. Slower. Honest. Like it actually mattered.',
  },
  {
    img: '/images/member-3.jpg',
    name: 'Anonymous',
    city: 'Dubai',
    quote:
      'I did not need another network. I needed a room I could trust. LARA is that room.',
  },
];

export function MemberStories() {
  return (
    <section id="stories" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Member Stories</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-light leading-[1.12] text-ivory">
              In their own words.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[14px] font-light leading-relaxed text-ivory-dim">
              Excerpts from members — shared with permission, names sometimes withheld.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.12}>
              <article className="group">
                <figure className="relative mb-8 overflow-hidden border border-gold/15">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-[1.6s] ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                  />
                </figure>

                <div className="flex items-center gap-3 text-[11px] font-light uppercase tracking-[0.24em] text-gold/70">
                  <span className="font-serif text-2xl italic text-gold/40 not-italic">
                    “
                  </span>
                  <span>{s.name}</span>
                  <span className="h-3 w-px bg-gold/30" />
                  <span className="text-ivory-muted">{s.city}</span>
                </div>

                <blockquote className="mt-5 font-serif text-[clamp(1.3rem,2.2vw,1.7rem)] font-light leading-[1.45] text-ivory">
                  {s.quote}
                </blockquote>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold/40" />
                  <span className="font-serif text-sm italic text-gold/50">
                    LARA Member
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
