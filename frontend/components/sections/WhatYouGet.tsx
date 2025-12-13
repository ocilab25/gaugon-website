export default function WhatYouGet() {
    const deliverables = [
        {
            title: "Map your tools and workflows",
            description: "A plain-language picture of your current stack: which tools you use, how data moves between them, and which parts are fragile or held together with \"quick fixes.\"",
        },
        {
            title: "Surface the biggest risks",
            description: "A short list of security, privacy, and reliability issues that could cause outages or headaches later—explained in clear English so you can discuss them with your team or next hire.",
        },
        {
            title: "A 30/60/90-day systems plan",
            description: "3–5 ranked \"do this next\" moves that balance impact and effort, so you can tighten weak spots and add automation without breaking what already works.",
        },
    ];

    const aiRolloutSteps = [
        {
            title: "Find high-value automation wins",
            text: "We review your workflows and flag the jobs where AI and automation save the most time and cost.",
            tag: "Discovery"
        },
        {
            title: "Build and connect your AI systems",
            text: "We use custom code, AI agents, n8n, and your existing tools to wire those workflows into working systems.",
            tag: "Implementation"
        },
        {
            title: "Maintain, tune, and expand",
            text: "As your business evolves, we keep an eye on the automations, fix issues, and suggest new areas where AI can free up more time or budget.",
            tag: "Optimization"
        }
    ];

    return (
        <section className="py-24 bg-white px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
                    What you'll walk away with
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                    Everything delivered in 7–14 days, ready to use or hand to your next hire.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {deliverables.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl font-bold text-primary mb-4">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* AI Rollout Section */}
                <div className="mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
                        How we help you roll out AI
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aiRolloutSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-8 rounded-lg hover:border-primary/20 hover:shadow-md transition-all"
                            >
                                <span className="inline-block bg-white border border-gray-200 text-xs font-bold px-3 py-1 rounded-full text-gray-500 mb-6 uppercase tracking-wider">
                                    {step.tag}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bonus Callout */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-4xl mx-auto">
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">Bonus:</span> If you give us access and time allows, we'll implement 1–2 quick wins (like hardening a form, fixing a broken header, or cleaning up an automation) before we wrap.
                    </p>
                </div>
            </div>
        </section>
    );
}
