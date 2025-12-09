import Hero from "@/components/sections/Hero";
import PainSolution from "@/components/sections/PainSolution";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <PainSolution />
      <Services />
      <Process />
      <About />
      <Contact />
    </main>
  );
}

