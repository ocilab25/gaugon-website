export default function WhoThisIsFor({ id }: { id?: string }) {
    return (
        <section id={id} className="py-24 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded bg-gray-100 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                        Fit & Expectations
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                        Who Gaugon Is For?
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                        Built for established businesses making real revenue who want to scale with
                        clean systems. If you're looking for your first online income stream, this isn't the right fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Blue Card - For You */}
                    <div className="bg-primary rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-8 bg-white/10 backdrop-blur-sm">
                                Built for established operators
                            </span>

                            <h3 className="text-3xl font-bold mb-10">This is for you if...</h3>

                            <ul className="space-y-6">
                                <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1 transition-all duration-150 ease-out group-hover:bg-white/40 group-focus-visible:bg-white/40 group-hover:scale-105 group-focus-visible:scale-105">
                                        <svg className="w-3.5 h-3.5 text-white transition-colors duration-150 ease-out group-hover:text-green-400 group-focus-visible:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium">
                                        You're generating consistent revenue and ready to scale.
                                    </p>
                                </li>
                                <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1 transition-all duration-150 ease-out group-hover:bg-white/40 group-focus-visible:bg-white/40 group-hover:scale-105 group-focus-visible:scale-105">
                                        <svg className="w-3.5 h-3.5 text-white transition-colors duration-150 ease-out group-hover:text-green-400 group-focus-visible:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium">
                                        You want to own your data, not rent it from expensive SaaS giants.
                                    </p>
                                </li>
                                <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1 transition-all duration-150 ease-out group-hover:bg-white/40 group-focus-visible:bg-white/40 group-hover:scale-105 group-focus-visible:scale-105">
                                        <svg className="w-3.5 h-3.5 text-white transition-colors duration-150 ease-out group-hover:text-green-400 group-focus-visible:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium">
                                        You need systems people actually follow, not just another handbook.
                                    </p>
                                </li>
                                <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1 transition-all duration-150 ease-out group-hover:bg-white/40 group-focus-visible:bg-white/40 group-hover:scale-105 group-focus-visible:scale-105">
                                        <svg className="w-3.5 h-3.5 text-white transition-colors duration-150 ease-out group-hover:text-green-400 group-focus-visible:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium">
                                        You're ready to automate the boring stuff so you can focus on strategy.
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/20">
                                <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-1">
                                    Average Time Saved:
                                </p>
                                <p className="text-2xl font-black">15+ HRS/WEEK</p>
                            </div>
                        </div>
                    </div>

                    {/* White Card - Not For You */}
                    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm md:mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">This is not for you if...</h3>

                        <ul className="space-y-6">
                            <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-0.5 transition-all duration-150 ease-out group-hover:text-red-500 group-focus-visible:text-red-500 group-hover:scale-110 group-focus-visible:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-gray-600 leading-relaxed">
                                    You're looking for a "quick install" magic button without understanding the flow.
                                </p>
                            </li>
                            <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-0.5 transition-all duration-150 ease-out group-hover:text-red-500 group-focus-visible:text-red-500 group-hover:scale-110 group-focus-visible:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-gray-600 leading-relaxed">
                                    You want the cheapest freelancer who disappears after one month.
                                </p>
                            </li>
                            <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-0.5 transition-all duration-150 ease-out group-hover:text-red-500 group-focus-visible:text-red-500 group-hover:scale-110 group-focus-visible:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-gray-600 leading-relaxed">
                                    You prefer chaos and "figuring it out" over documented stability.
                                </p>
                            </li>
                            <li className="group flex gap-4 items-start cursor-default focus-visible:outline-none" tabIndex={0}>
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-0.5 transition-all duration-150 ease-out group-hover:text-red-500 group-focus-visible:text-red-500 group-hover:scale-110 group-focus-visible:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-gray-600 leading-relaxed">
                                    You prioritize flashy AI demos over workflow stability.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
