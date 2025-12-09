import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeAutomate from "@/components/sections/WhatWeAutomate";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import PricingStrip from "@/components/sections/PricingStrip";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeAutomate />
      <HowItWorks />
      <Outcomes />
      <PricingStrip />
      <FinalCTA />
    </main>
  );
}

