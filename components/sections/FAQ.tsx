"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of businesses can benefit from automation?",
      answer: "Businesses of all sizes can benefit from automation, particularly those with repetitive tasks, high customer interaction volumes, or complex workflows. Common use cases include e-commerce, SaaS platforms, professional services, and manufacturing.",
    },
    {
      question: "How long does it take to implement automation solutions?",
      answer: "Implementation timelines vary based on complexity and scope. Simple workflows can be automated in 1-2 weeks, while comprehensive automation projects typically take 4-8 weeks. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "Will automation require changes to our existing systems?",
      answer: "Our solutions are designed to integrate with your existing systems wherever possible. We prioritize non-disruptive implementations and work with your current tech stack to minimize changes while maximizing efficiency gains.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "Support levels vary by plan. All plans include email support, with priority and 24/7 options available. We also provide documentation, training materials, and regular optimization reviews to ensure your automations continue to deliver value.",
    },
    {
      question: "How do you measure the success of automation projects?",
      answer: "We establish clear KPIs during the discovery phase, including time savings, cost reduction, error rates, and customer satisfaction metrics. Regular reporting and analytics dashboards provide ongoing visibility into performance and ROI.",
    },
    {
      question: "Can automation solutions scale as our business grows?",
      answer: "Yes. Our solutions are built with scalability in mind. As your business grows, we can expand automations, add new workflows, and integrate additional systems. The Growth and Scale plans include dedicated optimization to support your expansion.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Common questions about our automation services
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

