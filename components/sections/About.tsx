export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: The Founder Bio */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              The Lead Architect
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              15 years building systems. <br />Zero tolerance for bloat.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I started Gaugon because I saw too many small businesses getting sold "enterprise" solutions that were just expensive clutter.
              You don't need more software; you need a system that actually works.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just "fix computers." We re-engineer how your business flows—stripping away the friction so you can run fast and lean.
            </p>

            <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
              <p className="font-semibold text-gray-900 italic">
                "Complexity is the silent killer of growth. My job is to simplify your tech until it feels invisible."
              </p>
            </div>
          </div>

          {/* Right Column: Visual Authority */}
          <div className="relative">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <svg className="w-32 h-32 text-gray-400 group-hover:text-gray-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Verified Expert</p>
                    <p className="text-gray-900 font-bold">Certified Systems Architect</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -z-10 top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

