import type { Metadata } from "next";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";

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
      image: "/marketing-automation.jpg",
      imageAlt: "Illustration of marketing automation funnel connecting email, social, and web into a growth dashboard.",
    },
    {
      title: "Customer Support AI",
      description: "Let bots handle common questions so your team focuses on complex issues.",
      features: [
        "24/7 support for FAQs and status checks",
        "Smart routing to the right agent or team",
        "Every conversation logged in your helpdesk",
      ],
      image: "/ai-automation-section.jpg",
      imageAlt: "Chatbot handling customer messages while updating a CRM pipeline.",
    },
    {
      title: "CRM & Ticketing Automation",
      description: "Keep every lead and ticket routed, updated, and followed up automatically.",
      features: [
        "Auto-create and assign leads and tickets",
        "SLA reminders and escalation rules",
        "Cleaner, more reliable customer data",
      ],
      image: "/crm-ticketing-automation.jpg",
      imageAlt: "Kanban-style CRM and ticket board with automated replies and follow-ups.",
    },
    {
      title: "Workflow Automation",
      description: "Automate handoffs and approvals so projects move without babysitting.",
      features: [
        "Cross-team process mapping",
        "Automated approvals and notifications",
        "Less copy-paste across tools",
      ],
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
      image: "/reporting-dashboards.jpg",
      imageAlt: "Reporting dashboard showing sales by region, user growth, traffic sources, and KPIs.",
    },
    {
      title: "IT Infrastructure Support",
      description: "Monitor, secure, and back up the systems your automations rely on.",
      features: [
        "Proactive monitoring and patching",
        "Backup and recovery planning",
        "Cloud and on-prem support",
      ],
      image: "/data-it-section.jpg",
      imageAlt: "Central analytics dashboard connected to secure servers, cloud backup, and network nodes.",
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            What we actually do
          </h1>
          <p className="text-xl text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            In 7–14 days, we map your workflows, spot bottlenecks, and build you a roadmap. If you stick with us after that, here's what we help with.
          </p>

          {/* What's Included / Excluded Box */}
          <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckmarkIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tool/workflow inventory</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Light security/privacy review of public site + key forms</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bottleneck review for 2–3 core workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Written summary + prioritized fixes and automation ideas</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Excluded:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">×</span>
                  <span>Full custom builds/migrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">×</span>
                  <span>24/7 or on-call support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">×</span>
                  <span>Legal/compliance certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">×</span>
                  <span>Vendor negotiation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-gray-700">
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Small, reversible changes</span>
            </span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Uses your existing tools</span>
            </span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span className="flex items-center gap-2">
              <CheckmarkIcon className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">No rip-and-replace</span>
            </span>
          </div>

          {/* AI Automation Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              AI Automation
            </h2>

            <div className="space-y-16">
              {aiAutomationServices.map((service, index) => (
                service.image ? (
                  <div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-12 items-center`}
                  >
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-auto rounded-lg shadow-lg max-w-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div key={index} className="max-w-2xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-center">
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
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Data & IT Foundation Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Data & IT Foundation
            </h2>

            <div className="space-y-16">
              {dataITServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-auto rounded-lg shadow-lg max-w-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fit & Expectations */}
          <WhoThisIsFor id="fit-and-expectations" />

          {/* CTA Strip */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center border border-primary/20">
            <p className="text-xl sm:text-2xl text-gray-900 mb-6 max-w-3xl mx-auto leading-relaxed">
              Not sure which service fits? Start with the Workflow Sprint—we'll map your tools, spot bottlenecks, and build you a prioritized roadmap in 7–14 days.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Book Your Sprint
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
