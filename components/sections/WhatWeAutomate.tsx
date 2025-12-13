export default function WhatWeAutomate() {
  const automations = [
    { title: "Marketing Automation", description: "Automate email campaigns, social media posting, lead nurturing, and content distribution to engage customers consistently." },
    { title: "Customer Support AI", description: "Deploy intelligent chatbots and automated response systems that handle inquiries 24/7, reducing response time and workload." },
    { title: "CRM & Ticketing", description: "Streamline customer relationship management with automated data entry, ticket routing, and follow-up workflows." },
    { title: "Reporting Dashboards", description: "Generate automated reports and real-time dashboards that provide actionable insights without manual data compilation." },
    { title: "Workflow Automation", description: "Connect systems and automate repetitive processes across departments to eliminate bottlenecks and reduce errors." },
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">What We Automate</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">Comprehensive automation solutions across your business operations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
