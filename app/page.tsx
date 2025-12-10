import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import WhatYouGet from "@/components/sections/WhatYouGet";
import RealResults from "@/components/sections/RealResults";
import HowItWorks from "@/components/sections/HowItWorks";

import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhoThisIsFor />
      <WhatYouGet />
      <RealResults />
      <HowItWorks />

      <FinalCTA />
    </main>
  );
}

