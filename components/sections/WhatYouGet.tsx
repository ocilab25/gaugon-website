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
        <section className="py-24 bg-surface px-6 lg:px-8 border-t border-gray-100/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                        What you'll walk away with
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
                        Everything delivered in <strong className="text-text-primary font-semibold">7–14 days</strong>, ready to use or hand to your next hire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {deliverables.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* AI Rollout Section */}
                <div className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-primary mb-16 tracking-tight">
                        How we help you roll out AI
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aiRolloutSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-primary/20 hover:shadow-luxury transition-all duration-300 group"
                            >
                                <span className="inline-block bg-surface border border-gray-200 text-xs font-bold px-3 py-1 rounded-full text-text-tertiary mb-6 uppercase tracking-wider group-hover:text-primary group-hover:border-primary/20 transition-colors">
                                    {step.tag}
                                </span>
                                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bonus Callout */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm backdrop-blur-md">
                    <p className="text-text-primary leading-relaxed text-center sm:text-left flex flex-col sm:flex-row gap-4 items-center">
                        <span className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </span>
                        <span>
                            <span className="font-bold text-primary">Bonus:</span> If you give us access and time allows, we'll implement 1–2 quick wins (like hardening a form, fixing a broken header, or cleaning up an automation) before we wrap.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
