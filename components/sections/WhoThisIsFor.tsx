export default function WhoThisIsFor({ id }: { id?: string }) {
    const goodFit = [
        "You're a small business (5–50 people) outgrowing spreadhseets.",
        "You want clear systems for your next hire to follow.",
        "You suspect things could be faster/safer but don't know where to start.",
        "You want small, reversible changes—not a massive IT overhaul.",
    ];

    const notAFit = [
        "You're enterprise-sized with an in-house IT/Platform team.",
        "You're hunting for the absolute cheapest 'IT guy' fix.",
        "You want to rebuild everything from scratch immediately.",
        "You prioritize flashy AI demos over workflow stability.",
    ];

    return (
        <section id={id} className="py-24 bg-gray-50 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">
                    Who is this for?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Good Fit - Green Gate */}
                    <div className="bg-white border text-left rounded-lg shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-green-500"></div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">For Owners Who Build</h3>
                            </div>
                            <ul className="space-y-4">
                                {goodFit.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Not a Fit - Red Gate */}
                    <div className="bg-white border text-left rounded-lg shadow-sm relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-red-400"></div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-500">Not For You If...</h3>
                            </div>
                            <ul className="space-y-4">
                                {notAFit.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-red-300 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="text-gray-500 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
