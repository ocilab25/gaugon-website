export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We analyze your current processes, identify automation opportunities, and map out your business requirements.",
    },
    {
      number: "02",
      title: "Audit",
      description: "Comprehensive assessment of your systems, workflows, and pain points to determine optimal automation strategies.",
    },
    {
      number: "03",
      title: "Build",
      description: "Custom automation solutions are developed and integrated with your existing infrastructure and tools.",
    },
    {
      number: "04",
      title: "Automate",
      description: "Deployment and activation of automated workflows with thorough testing and validation before going live.",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Continuous monitoring, performance analysis, and iterative improvements to maximize efficiency gains.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A structured approach to implementing automation that delivers measurable results
        </p>
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 p-6 rounded-lg h-full">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector arrow - hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

