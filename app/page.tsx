import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import WhatYouGet from "@/components/sections/WhatYouGet";
import RealResults from "@/components/sections/RealResults";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <FadeIn delay={0.2}>
        <TrustStrip />
      </FadeIn>

      <FadeIn>
        <WhoThisIsFor />
      </FadeIn>

      <FadeIn>
        <WhatYouGet />
      </FadeIn>

      <FadeIn>
        <RealResults />
      </FadeIn>

      <FadeIn>
        <HowItWorks />
      </FadeIn>

      <FadeIn>
        <FinalCTA />
      </FadeIn>
    </main>
  );
}
