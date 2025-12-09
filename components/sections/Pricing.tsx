export default function Pricing() {
  const tiers = [
    {
      name: "Standard",
      price: "$49",
      frequency: "/month",
      description: "Essential automation for small teams.",
      features: [
        "Basic workflow automation",
        "Email marketing setup",
        "CRM integration",
        "Monthly reporting",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Plus",
      price: "$149",
      frequency: "/month",
      description: "Advanced automation for scaling businesses.",
      features: [
        "All Standard features",
        "AI-powered customer support",
        "Advanced reporting dashboards",
        "Multi-system integrations",
        "Priority support",
        "Quarterly optimization reviews",
      ],
      cta: "Start Free Trial",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Max",
      price: "$750",
      frequency: "/month",
      description: "Hands-on architecture & dedicated support.",
      features: [
        "All Plus features",
        "Custom automation development",
        "Dedicated account manager",
        "Real-time monitoring & alerts",
        "24/7 priority support",
        "Monthly strategy sessions",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlight: false,
      badge: "Hands-on Support",
    },
    /*
    {
      name: "Enterprise",
      price: "From $2,500",
      frequency: "/month",
      description: "Full-scale digital transformation.",
      features: [
        "Everything in Max",
        "On-premise deployment options",
        "SLA guarantees",
        "Custom security compliance",
        "Dedicated engineering pod",
      ],
      cta: "Talk to Us",
      highlight: false,
    }
    */
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
          Membership Levels
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Simple, transparent pricing to grow with your business.
        </p>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-8 flex flex-col h-full ${tier.highlight
                  ? "border-primary shadow-2xl scale-105 z-10 bg-white"
                  : "border-gray-200 bg-gray-50/50"
                }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${tier.highlight ? 'bg-primary' : 'bg-gray-800'}`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{tier.price}</span>
                  <span className="text-gray-500 font-medium">{tier.frequency}</span>
                </div>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-primary' : 'text-green-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm ml-3 text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.highlight
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30"
                    : "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                  }`}>
                  {tier.cta}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Billed monthly, cancel anytime.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Callout */}
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need Enterprise Scale?</h3>
            <p className="text-gray-400 max-w-lg">
              For large teams requiring on-premise deployment, SLA guarantees, and custom security compliance.
              <span className="block mt-2 text-white font-semibold">Plans starting from $2,500/month.</span>
            </p>
          </div>
          <button className="whitespace-nowrap bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}

