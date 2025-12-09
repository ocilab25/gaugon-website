export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      description: "Essential automation for small teams",
      features: [
        "Basic workflow automation",
        "Email marketing setup",
        "CRM integration",
        "Monthly reporting",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description: "Advanced automation for scaling businesses",
      features: [
        "All Starter features",
        "AI-powered customer support",
        "Advanced reporting dashboards",
        "Multi-system integrations",
        "Priority support",
        "Quarterly optimization reviews",
      ],
    },
    {
      name: "Scale",
      description: "Enterprise-grade automation solutions",
      features: [
        "All Growth features",
        "Custom automation development",
        "Dedicated account manager",
        "Real-time monitoring & alerts",
        "24/7 support",
        "Monthly strategy sessions",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
          Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Flexible plans designed to grow with your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 ${
                index === 1
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:border-primary hover:text-primary transition-colors">
                Contact Sales
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

