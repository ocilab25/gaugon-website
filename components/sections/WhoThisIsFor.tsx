export default function WhoThisIsFor({ id }: { id?: string }) {
    const goodFit = [
        "You're a small business (5–50 people) that's outgrowing spreadsheets and sticky notes.",
        "You're hiring soon and want clear systems for your next person to follow.",
        "You suspect things could be faster or safer, but you don't have time to figure out what.",
        "You want small, reversible changes—not a whole new tech stack.",
    ];

    const notAFit = [
        "You're enterprise-sized with an in-house IT or platform team.",
        "You're hunting for the absolute cheapest \"IT guy.\"",
        "You want to rebuild everything from scratch.",
        "You only care about flashy AI demos and don't care about workflow stability.",
    ];

    return (
        <section id={id} className="py-24 bg-gray-50 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">
                    Is this a fit?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Good Fit */}
                    <div className="bg-white border-2 border-primary/20 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">A good fit if…</h3>
                        </div>
                        <ul className="space-y-4">
                            {goodFit.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not a Fit */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Probably not a fit if…</h3>
                        </div>
                        <ul className="space-y-4">
                            {notAFit.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-1 flex-shrink-0">•</span>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
