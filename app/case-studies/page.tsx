import type { Metadata } from "next";
import Link from "next/link";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export const metadata: Metadata = {
  title: "Case Studies | Gaugon - Success Stories",
  description: "Real results from real businesses. Explore how Gaugon's automation solutions have transformed operations and driven growth for our clients.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Automation Success",
      client: "Mid-size online retailer",
      industry: "E-commerce",
      challenge: "Manual orders, inventory, and follow-ups were spread across spreadsheets and email, causing delays and mistakes in busy seasons.",
      solution: "Automations synced orders, inventory, and shipping, triggered status emails, and pushed events into CRM and support tools for a single customer view.",
      results: [
        "About 90% less manual order work",
        "Faster fulfillment",
        "Fewer status tickets",
        "Team freed for higher-value work",
      ],
    },
    {
      title: "SaaS Platform Integration",
      client: "B2B SaaS Company",
      industry: "SaaS",
      challenge: "User onboarding was manual and time-consuming, leading to delayed customer activation and increased churn.",
      solution: "Built comprehensive automation for user onboarding, billing workflows, and support ticket routing with seamless CRM integration.",
      results: [
        "60% faster customer activation",
        "85% reduction in onboarding time",
        "50% improvement in customer satisfaction scores",
        "30% reduction in churn rate",
      ],
    },
    {
      title: "Professional Services Automation",
      client: "Consulting Firm",
      industry: "Professional Services",
      challenge: "Repetitive administrative tasks were consuming valuable consultant time, limiting billable hours and growth capacity.",
      solution: "Automated proposal generation, client communication, project reporting, and invoice processing workflows.",
      results: [
        "25% increase in billable hours",
        "70% reduction in administrative time",
        "Faster proposal turnaround",
        "Improved client communication consistency",
      ],
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Real results from businesses that have transformed their operations with automation
          </p>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 lg:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="text-sm text-primary font-semibold mb-2">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start bg-gray-50 p-4 rounded-lg"
                      >
                        <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}
