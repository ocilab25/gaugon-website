"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will this break my current systems?",
      answer: "Nope. We don't rip-and-replace. Everything we suggest is small, reversible, and uses the tools you already have. If a change feels risky, we flag it and let you decide.",
    },
    {
      question: "I don't have time to redo my systems right now.",
      answer: "You don't have to. We do the mapping and write the plan. You can run it yourself when you're ready, hand it to your next hire, or ask us to help execute later. It's designed to fit your timeline, not ours.",
    },
    {
      question: "What if I don't want to give you access to my tools?",
      answer: "No problem. We can work read-only, or you can just screen-share and walk us through. Some quick wins require access, but the roadmap doesn't.",
    },
    {
      question: "How is this different from hiring a Zapier consultant or a freelance VA?",
      answer: "We're not just wiring tools together. We review your security/privacy setup, spot bottlenecks in how your team actually works, and give you a written plan ranked by business impact—not just what's technically easy. And we're upfront about what not to automate.",
    },
    {
      question: "What happens after the 7–14 days?",
      answer: "You get a full report and a ranked action plan. You can run it yourself, hire someone else to execute, or stick with us on a monthly plan if you want ongoing help. No lock-in, no recurring unless you want it.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
          Common questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          The things most small-business owners ask before we start
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
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
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

