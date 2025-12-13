import CheckmarkIcon from "@/components/icons/CheckmarkIcon";
import StatCounter from "@/components/ui/StatCounter";

export default function TrustStrip() {
  const stats = [
    {
      label: "Hours Saved",
      value: 12000,
      suffix: "+",
      sub: "across 50+ projects"
    },
    {
      label: "Saved on Employee Costs",
      value: 100000,
      prefix: "$",
      suffix: "+",
      sub: "annualized savings"
    },
    {
      label: "Avg. ROI First Year",
      staticValue: "3x",
      sub: "return on automation spend"
    },
    {
      label: "Security Incidents",
      staticValue: "0",
      sub: "AppSec-first approach"
    },
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
    <section className="py-24 bg-surface border-y border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

          {/* Left: Stats */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10 text-center sm:text-left leading-tight">
              Reliable wins for <span className="text-primary">ambitious</span> businesses.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-luxury hover:-translate-y-1 transition-all duration-300">
                  {stat.value ? (
                    <StatCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      label={stat.label}
                      subLabel={stat.sub}
                    />
                  ) : (
                    <div className="text-center sm:text-left">
                      <p className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-2 tabular-nums tracking-tight">
                        {stat.staticValue}
                      </p>
                      <p className="text-sm font-bold text-text-secondary uppercase tracking-wider text-[11px]">{stat.label}</p>
                      <p className="text-xs text-text-tertiary mt-1 font-medium">{stat.sub}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mini Cases */}
          <div className="space-y-6">
            {miniCases.map((c, i) => (
              <div key={i} className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-luxury transition-all duration-300 group">
                <div className="bg-surface p-3 rounded-full border border-gray-100 mr-5 shadow-sm group-hover:scale-110 transition-transform">
                  <CheckmarkIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-text-primary text-lg">{c.company}</span>
                    <span className="text-[10px] uppercase tracking-wide bg-primary/5 text-primary border border-primary/10 rounded-full px-3 py-0.5 font-bold">{c.tag}</span>
                  </div>
                  <p className="text-text-secondary text-base leading-relaxed">"{c.result}"</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-text-tertiary text-center mt-4 font-medium uppercase tracking-widest opacity-60">
              Results-Driven • Security-First • Scalable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

