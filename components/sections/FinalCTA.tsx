import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Ready to make your day-to-day run smoother?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          You can book a workflow review session. We'll walk through how you handle work today and spot the places where better systems or light automation can save you time, clicks, and stress. No pressure, just honest feedback and practical next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md min-w-[240px]"
          >
            Schedule Workflow Review
          </Link>
          <a
            href="https://wa.me/14076682684?text=Hi! I'd like to chat about streamlining my workflows."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors min-w-[240px]"
          >
            Message Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

