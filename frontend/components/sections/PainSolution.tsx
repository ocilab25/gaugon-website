export default function PainSolution() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Why we're different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Left Column: The Typical Consultant */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:pr-12">
            <h3 className="text-xl font-bold text-gray-500 mb-8 uppercase tracking-wider text-center md:text-left">
              The Typical Consultant
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start opacity-70">
                <svg className="w-6 h-6 text-red-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600 font-medium">Charges hourly (incentivized to be slow)</span>
              </li>
              <li className="flex items-start opacity-70">
                <svg className="w-6 h-6 text-red-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600 font-medium">Band-aid fixes that break in 6 months</span>
              </li>
              <li className="flex items-start opacity-70">
                <svg className="w-6 h-6 text-red-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600 font-medium">Gatekeeps your passwords & access</span>
              </li>
              <li className="flex items-start opacity-70">
                <svg className="w-6 h-6 text-red-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600 font-medium">Uses jargon to confuse you</span>
              </li>
            </ul>
          </div>

          {/* Right Column: The Gaugon Workflow */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8 shadow-xl relative transform md:-translate-y-2 md:translate-x-0 z-10">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg sm:hidden">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider text-center md:text-left">
              The Gaugon Workflow
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900 font-bold">Flat-fee project pricing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900 font-bold">Root-cause architecture that scales</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900 font-bold">You own every asset & credential</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900 font-bold">Plain English strategy & weekly updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

