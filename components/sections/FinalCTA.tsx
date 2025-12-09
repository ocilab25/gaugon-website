import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Start with a free AI audit. We'll analyze your processes and show you
          exactly where automation can drive the most impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md min-w-[240px]"
          >
            Start Free AI Audit
          </Link>
          <a
            href="https://wa.me/14076682684?text=Hello! I'm interested in learning more about Gaugon's AI automation services."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors min-w-[240px]"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

