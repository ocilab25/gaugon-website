export default function WhatYouGet() {
    const deliverables = [
        {
            title: "A tool & workflow inventory",
            description: "Plain-language map of what you use now, where data lives, and what's held together with duct tape.",
        },
        {
            title: "A short list of concrete risks",
            description: "Security gaps, privacy red flags, or automation tripwires that could bite you later—explained in English, not IT speak.",
        },
        {
            title: "A prioritized 30/60/90-day action plan",
            description: "3–5 \"do this next\" steps ranked by impact and ease, designed to not break your existing systems.",
        },
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
