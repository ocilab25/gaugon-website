import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                How we work with you
              </h1>
              <p className="text-xl text-gray-600">
                We don't just "do IT". We treat your operations like a product—auditing, building, and optimizing it for scale.
              </p>
            </div>

            {/* The Ladder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Step 1 */}
              <div className="relative p-6 bg-white rounded-xl border-2 border-primary/10 shadow-sm ring-1 ring-primary/5">
                <div className="absolute -top-4 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step 1: The Entry
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Map (Audit)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We define the scope, map your mess, and find the ROI. Low risk, high clarity.
                </p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex gap-2">✓ Tech Stack Inventory</li>
                  <li className="flex gap-2">✓ Bottleneck Analysis</li>
                  <li className="flex gap-2">✓ Implementation Roadmap</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="absolute -top-4 left-6 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step 2: The Build
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Build (Sprint)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We execute the roadmap. 2–4 week implementation sprints to deploy your automations.
                </p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex gap-2">✓ Setup & Configuration</li>
                  <li className="flex gap-2">✓ Custom Integration Code</li>
                  <li className="flex gap-2">✓ Team Training & Handoff</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="absolute -top-4 left-6 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step 3: The Scale
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Care (Retainer)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We keep it running. Monitoring, security patching, and small optimizations.
                </p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex gap-2">✓ 24/7 Error Monitoring</li>
                  <li className="flex gap-2">✓ Monthly Strategy Calls</li>
                  <li className="flex gap-2">✓ Priority Support</li>
                </ul>
              </div>
            </div>
          </div>

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
                    className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-12 items-center p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 border border-transparent`}
                  >
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg shadow-lg max-w-md group-hover:shadow-2xl transition-shadow duration-300"
                        />
                      </div>
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
                  className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 items-center p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 border border-transparent`}
                >
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg max-w-md group-hover:shadow-2xl transition-shadow duration-300"
                      />
                    </div>
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
