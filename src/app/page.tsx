import { Navigation } from '@/components/lara/navigation';
import { Hero } from '@/components/lara/sections/hero';
import { Manifesto } from '@/components/lara/sections/manifesto';
import { Statistics } from '@/components/lara/sections/statistics';
import { FounderStory } from '@/components/lara/sections/founder-story';
import { WhyLaraExists } from '@/components/lara/sections/why-lara-exists';
import { Experience } from '@/components/lara/sections/experience';
import { MembershipJourney } from '@/components/lara/sections/membership-journey';
import { InsideLara } from '@/components/lara/sections/inside-lara';
import { LifestyleGallery } from '@/components/lara/sections/lifestyle-gallery';
import { CompatibilityQuiz } from '@/components/lara/sections/compatibility-quiz';
import { Waitlist } from '@/components/lara/sections/waitlist';
import { FAQ } from '@/components/lara/sections/faq';
import { Footer } from '@/components/lara/sections/footer';
import { MobileStickyCTA } from '@/components/lara/mobile-sticky-cta';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink">
      <Navigation />
      <main className="flex-1">
        {/* 01 — Cinematic Hero */}
        <Hero />
        {/* 02 — Brand Manifesto */}
        <Manifesto />
        {/* 03 — Membership Statistics */}
        <Statistics />
        {/* 04 — Founder Story */}
        <FounderStory />
        {/* 05 — Why Lara Exists */}
        <WhyLaraExists />
        {/* 06 — The Lara Experience */}
        <Experience />
        {/* 07 — Membership Journey */}
        <MembershipJourney />
        {/* 08 — Inside Lara */}
        <InsideLara />
        {/* 09 — Lifestyle Gallery */}
        <LifestyleGallery />
        {/* 10 — Compatibility Quiz */}
        <CompatibilityQuiz />
        {/* 15 — Waitlist & Invitation CTA */}
        <Waitlist />
        {/* FAQ */}
        <FAQ />
      </main>
      {/* 17 — Premium Footer */}
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
