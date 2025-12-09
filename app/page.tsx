import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeAutomate from "@/components/sections/WhatWeAutomate";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeAutomate />
      <HowItWorks />
      <Outcomes />
      <CaseStudyTeaser />
      <Pricing />
      <FAQ />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}

