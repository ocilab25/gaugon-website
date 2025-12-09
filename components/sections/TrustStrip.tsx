export default function TrustStrip() {
  const logos = [
    "Client Logo 1",
    "Client Logo 2",
    "Client Logo 3",
    "Client Logo 4",
    "Client Logo 5",
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm text-gray-500 text-center mb-8 font-medium uppercase tracking-wider">
          Trusted by Growing Businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Key Result Metric - The Anchor */}
          <div className="flex flex-col items-center md:items-start md:border-r md:border-gray-300 md:pr-12">
            <span className="text-4xl font-extrabold text-gray-900 tracking-tight">700+</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Hours Saved Annually</span>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-gray-400 text-lg font-semibold"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

