import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent -z-20" />

      {/* Glassy Effect Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-sm">
          Ready to see what's slowing you down?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Book a 15-minute intro call. We'll talk through your current setup, and you'll know pretty quickly if this is a fit.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact-us"
            className="group relative bg-white text-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Intro Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <p className="text-sm text-white/60 uppercase tracking-widest font-semibold mt-4 sm:mt-0 sm:absolute sm:-bottom-16">
            No pitch decks • No sales pressure
          </p>
        </div>
      </div>
    </section>
  );
}
