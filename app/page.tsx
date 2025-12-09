import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatYouGet from "@/components/sections/WhatYouGet";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import PricingStrip from "@/components/sections/PricingStrip";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatYouGet />
      <HowItWorks />
      <FAQ />
      <PricingStrip />
      <FinalCTA />
    </main>
  );
}

