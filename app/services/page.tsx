import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Gaugon - AI Automation & IT Solutions",
  description: "Comprehensive AI automation and IT services including marketing automation, customer support AI, CRM integration, reporting dashboards, and workflow automation.",
};

export default function ServicesPage() {
  const services = [
    { title: "Marketing Automation", description: "Streamline your marketing efforts with automated email campaigns, social media scheduling, lead nurturing sequences, and content distribution.", features: ["Email campaign automation", "Social media scheduling", "Lead scoring and nurturing", "Content distribution workflows", "A/B testing automation", "Marketing analytics integration"] },
    { title: "Customer Support AI", description: "Deploy intelligent chatbots and automated response systems that handle customer inquiries 24/7. Reduce response times and improve satisfaction.", features: ["AI-powered chatbots", "Automated ticket routing", "Knowledge base integration", "Multi-channel support", "Sentiment analysis", "Support analytics"] },
    { title: "CRM & Ticketing Automation", description: "Automate customer relationship management with intelligent data entry, ticket routing, follow-up workflows, and pipeline management.", features: ["Automated data entry", "Smart ticket routing", "Follow-up workflows", "Pipeline automation", "CRM integrations", "Contact management"] },
    { title: "Reporting Dashboards", description: "Generate automated reports and real-time dashboards that provide actionable insights without manual data compilation.", features: ["Automated report generation", "Real-time dashboards", "Custom KPI tracking", "Data visualization", "Scheduled reporting", "Multi-source data integration"] },
    { title: "Workflow Automation", description: "Connect systems and automate repetitive processes across departments. Eliminate bottlenecks and reduce errors.", features: ["Cross-system integration", "Process automation", "Approval workflows", "Task automation", "Document processing", "Workflow optimization"] },
    { title: "IT Infrastructure Support", description: "Professional IT support services including system monitoring, security updates, cloud migration, and infrastructure optimization.", features: ["24/7 system monitoring", "Security updates & patches", "Cloud migration services", "Infrastructure optimization", "Backup & disaster recovery", "Technical support"] },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Comprehensive AI automation and IT solutions designed to streamline operations, reduce costs, and accelerate business growth.</p>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-12 min-h-[300px] flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Service Illustration</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
