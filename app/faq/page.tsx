"use client";

import { useState } from "react";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What types of businesses can benefit from automation?",
            answer: "Any business with repetitive tasks or high volumes of customer interaction. Common fits include e-commerce, SaaS, agencies, and professional services.",
        },
        {
            question: "How long does it take to implement automation?",
            answer: "Simple workflows usually take 1–2 weeks. More complex projects typically take 4–8 weeks. We'll give you a clear timeline after the audit.",
        },
        {
            question: "Will this require changes to our existing systems?",
            answer: "We build around what you already use. Most integrations are non-disruptive and work with your current stack.",
        },
        {
            question: "What kind of support do you provide?",
            answer: "All plans include email support. Growth and Scale plans add priority response times and regular check-ins. We also provide training materials and documentation.",
        },
        {
            question: "How do you measure success?",
            answer: "We set clear goals during the audit—things like time saved, error reduction, or faster response times. You'll see ongoing metrics through dashboards and regular reports.",
        },
        {
            question: "Can automation scale as we grow?",
            answer: "Yes. We design for growth. As your business expands, we add new workflows, connect more systems, and optimize what's already running.",
        },
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-white px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Quick answers to the questions you're most likely to have before we work together.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-gray-50 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
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
        </main>
    );
}
