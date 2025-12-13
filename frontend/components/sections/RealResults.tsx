export default function RealResults() {
    const cases = [
        {
            business: "12-person coaching firm",
            problem: "Spending 8+ hours/week on manual CRM entry and follow-ups",
            result: "Cut data entry to under 1 hour/week with automated lead capture and nurture sequences",
            impact: "7 hours saved weekly",
        },
        {
            business: "E-commerce shop (3 founders)",
            problem: "Customer support emails piling up, missed order issues",
            result: "Built a simple chatbot for order status + FAQ, routing complex issues to the team",
            impact: "Support response time dropped from 6 hours to under 30 minutes",
        },
    ];

    return (
        <section className="py-20 bg-white border-y border-gray-200 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
                    Real results
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                    Here's what happened when we mapped workflows and removed bottlenecks.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cases.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-lg p-8"
                        >
                            <div className="mb-4">
                                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                                    {item.business}
                                </span>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">The problem:</h3>
                                <p className="text-gray-700 leading-relaxed">{item.problem}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">What we did:</h3>
                                <p className="text-gray-700 leading-relaxed">{item.result}</p>
                            </div>
                            <div className="pt-4 border-t border-primary/10">
                                <p className="text-primary font-semibold">{item.impact}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 italic">
                        Names changed for client privacy. Results vary based on starting setup and complexity.
                    </p>
                </div>
            </div>
        </section>
    );
}
