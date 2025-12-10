import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export default function TrustStrip() {
  const stats = [
    { label: "Client Hours Saved", value: "12,000+", sub: "across 50+ projects" },
    { label: "Avg. ROI First Year", value: "3x", sub: "return on automation spend" },
    { label: "Security Incidents", value: "0", sub: "AppSec-first approach" },
  ];

  const miniCases = [
    {
      company: "Legal Firm",
      result: "Reduced client onboarding time from 3 days to 45 minutes.",
      tag: "Lead Gen"
    },
    {
      company: "E-comm Brand",
      result: "Automated 80% of 'Where is my order?' tickets.",
      tag: "Support AI"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Stats */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Reliable wins for boring businesses.
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mini Cases */}
          <div className="space-y-4">
            {miniCases.map((c, i) => (
              <div key={i} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors">
                <div className="bg-white p-2 rounded-full border border-gray-200 mr-4 shadow-sm">
                  <CheckmarkIcon className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{c.company}</span>
                    <span className="text-[10px] uppercase tracking-wide bg-white border border-gray-200 rounded px-2 text-gray-500">{c.tag}</span>
                  </div>
                  <p className="text-gray-600 text-sm">"{c.result}"</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400 text-center mt-2">
              We're not generalists. We only accept clients where we know we can win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

}
