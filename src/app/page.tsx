import { Navigation } from '@/components/lara/navigation';
import { Hero } from '@/components/lara/sections/hero';
import { Manifesto } from '@/components/lara/sections/manifesto';
import { Statistics } from '@/components/lara/sections/statistics';
import { FounderStory } from '@/components/lara/sections/founder-story';
import { WhyLaraExists } from '@/components/lara/sections/why-lara-exists';
import { Experience } from '@/components/lara/sections/experience';
import { CommunityPreview } from '@/components/lara/sections/community-preview';
import { MembershipJourney } from '@/components/lara/sections/membership-journey';
import { InsideLara } from '@/components/lara/sections/inside-lara';
import { LifestyleGallery } from '@/components/lara/sections/lifestyle-gallery';
import { TrustPrivacy } from '@/components/lara/sections/trust-privacy';
import { Events } from '@/components/lara/sections/events';
import { MemberStories } from '@/components/lara/sections/member-stories';
import { CompatibilityQuiz } from '@/components/lara/sections/compatibility-quiz';
import { Waitlist } from '@/components/lara/sections/waitlist';
import { FinalCTA } from '@/components/lara/sections/final-cta';
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
        {/* 07 — Community Preview */}
        <section id="community" className="contents">
          <CommunityPreview />
        </section>
        {/* 08 — Membership Journey */}
        <MembershipJourney />
        {/* 09 — Inside Lara */}
        <InsideLara />
        {/* 10 — Lifestyle Gallery */}
        <LifestyleGallery />
        {/* 11 — Trust & Privacy */}
        <TrustPrivacy />
        {/* 12 — Events */}
        <Events />
        {/* 13 — Member Stories */}
        <MemberStories />
        {/* 14 — Compatibility Quiz */}
        <CompatibilityQuiz />
        {/* 15 — Waitlist */}
        <Waitlist />
        {/* 16 — Final Invitation CTA */}
        <FinalCTA />
        {/* FAQ */}
        <FAQ />
      </main>
      {/* 17 — Premium Footer */}
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
