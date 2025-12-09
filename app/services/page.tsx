import type { Metadata } from "next";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export const metadata: Metadata = {
  title: "Services | Gaugon - AI Automation & IT Solutions",
  description: "AI automation and IT services that cut manual work, speed up response times, and keep your systems stable.",
};

export default function ServicesPage() {
  const aiAutomationServices = [
    {
      title: "Marketing Automation",
      description: "Turn traffic into booked calls with connected email, ads, and CRM.",
      features: [
        "Automated lead capture and nurturing",
        "Follow-up sequences that run on their own",
        "Clear view of pipeline performance",
      ],
    },
    {
      title: "Customer Support AI",
      description: "Let bots handle common questions so your team focuses on complex issues.",
      features: [
        "24/7 support for FAQs and status checks",
        "Smart routing to the right agent or team",
        "Every conversation logged in your helpdesk",
      ],
    },
    {
      title: "CRM & Ticketing Automation",
      description: "Keep every lead and ticket routed, updated, and followed up automatically.",
      features: [
        "Auto-create and assign leads and tickets",
        "SLA reminders and escalation rules",
        "Cleaner, more reliable customer data",
      ],
    },
    {
      title: "Workflow Automation",
      description: "Automate handoffs and approvals so projects move without babysitting.",
      features: [
        "Cross-team process mapping",
        "Automated approvals and notifications",
        "Less copy-paste across tools",
      ],
      image: "/workflow-automation.jpg",
      imageAlt: "Workflow Automation - Approval workflow diagram with checkmark decision point",
    },
  ];

  const dataITServices = [
    {
      title: "Reporting Dashboards",
      description: "See real-time revenue, pipeline, and support metrics without spreadsheets.",
      features: [
        "Unified dashboards across your tools",
        "Live KPIs for leaders and teams",
        "Email or chat reports on a schedule",
      ],
    },
    {
      title: "IT Infrastructure Support",
      description: "Monitor, secure, and back up the systems your automations rely on.",
      features: [
        "Proactive monitoring and patching",
        "Backup and recovery planning",
        "Cloud and on-prem support",
      ],
      image: "/it-infrastructure.jpg",
      imageAlt: "IT Infrastructure Support - Dashboard with secure server infrastructure and cloud sync",
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Services
          </h1>
          <p className="text-xl text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            AI automation and IT services that cut manual work, speed up response times, and keep your systems stable.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-gray-700">
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Save hours every week</span>
            </span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Better customer experience</span>
            </span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Cleaner data</span>
            </span>
          </div>

          {/* AI Automation Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              AI Automation
            </h2>

            {/* Section Image */}
            <div className="mb-12 flex justify-center">
              <img
                src="/ai-automation-section.jpg"
                alt="AI Automation - CRM workflow with chatbot and email integration"
                className="w-full max-w-3xl h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Service Cards Grid - First 3 services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {aiAutomationServices.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Workflow Automation - Full width with image */}
            {aiAutomationServices[3] && aiAutomationServices[3].image && (
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {aiAutomationServices[3].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {aiAutomationServices[3].description}
                  </p>
                  <ul className="space-y-3">
                    {aiAutomationServices[3].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={aiAutomationServices[3].image}
                    alt={aiAutomationServices[3].imageAlt}
                    className="w-full h-auto rounded-lg shadow-lg max-w-md"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Data & IT Foundation Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Data & IT Foundation
            </h2>

            {/* Section Image */}
            <div className="mb-12 flex justify-center">
              <img
                src="/data-it-section.jpg"
                alt="Data & IT Foundation - Dashboard analytics with secure infrastructure and cloud sync"
                className="w-full max-w-3xl h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Reporting Dashboards Card */}
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {dataITServices[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dataITServices[0].description}
                </p>
                <ul className="space-y-3">
                  {dataITServices[0].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IT Infrastructure Support - Full width with image */}
            {dataITServices[1] && dataITServices[1].image && (
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {dataITServices[1].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {dataITServices[1].description}
                  </p>
                  <ul className="space-y-3">
                    {dataITServices[1].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={dataITServices[1].image}
                    alt={dataITServices[1].imageAlt}
                    className="w-full h-auto rounded-lg shadow-lg max-w-md"
                  />
                </div>
              </div>
            )}
          </div>

          {/* CTA Strip */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center border border-primary/20">
            <p className="text-xl sm:text-2xl text-gray-900 mb-6 max-w-3xl mx-auto leading-relaxed">
              Not sure which service fits? Start with a free AI automation audit and we'll map the highest-impact opportunities for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Start Free AI Audit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
