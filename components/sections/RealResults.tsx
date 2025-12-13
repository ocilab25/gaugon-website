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
        <section className="py-24 bg-surface border-y border-gray-100/50 px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background Blur */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent rounded-tl-full -z-10 blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-text-primary mb-6 tracking-tight">
                    Real results
                </h2>
                <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                    Here's what happened when we mapped workflows and removed bottlenecks.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cases.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.98303C8.87846 16 7.98303 16.8954 7.98303 18L7.98303 21H14.017ZM19.017 21L19.017 14.1585C19.017 12.435 18.2575 10.8033 16.9298 9.7766L12.9298 6.68571C11.8028 5.81488 10.1973 5.81488 9.07028 6.68571L5.07028 9.7766C3.74254 10.8033 2.98303 12.435 2.98303 14.1585V21H19.017ZM13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V4Z" />
                                </svg>
                            </div>

                            <div className="mb-6 relative z-10">
                                <span className="inline-block bg-primary/10 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                                    {item.business}
                                </span>
                            </div>
                            <div className="mb-6 relative z-10">
                                <h3 className="text-lg font-bold text-text-primary mb-2">The problem:</h3>
                                <p className="text-text-secondary leading-relaxed">{item.problem}</p>
                            </div>
                            <div className="mb-6 relative z-10">
                                <h3 className="text-lg font-bold text-text-primary mb-2">What we did:</h3>
                                <p className="text-text-secondary leading-relaxed">{item.result}</p>
                            </div>
                            <div className="pt-6 border-t border-gray-100 relative z-10">
                                <p className="text-primary font-bold text-lg flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    {item.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-text-tertiary italic text-sm">
                        Names changed for client privacy. Results vary based on starting setup and complexity.
                    </p>
                </div>
            </div>
        </section>
    );
}
