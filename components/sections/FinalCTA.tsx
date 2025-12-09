import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Ready to see what's slowing you down?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a 15-minute intro call. We'll talk through your current setup, and you'll know pretty quickly if this is a fit. No pitch decks, no sales pressure—just an honest look at where you are and what might help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md min-w-[240px]"
          >
            Book Your Intro Call
          </Link>
        </div>
      </div>
    </section>
  );
}

