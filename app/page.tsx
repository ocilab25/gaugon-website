import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeAutomate from "@/components/sections/WhatWeAutomate";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import PricingStrip from "@/components/sections/PricingStrip";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeAutomate />
      <HowItWorks />
      <Outcomes />
      <CaseStudyTeaser />
      <FAQ />
      <Newsletter />
      <PricingStrip />
      <FinalCTA />
    </main>
  );
}

