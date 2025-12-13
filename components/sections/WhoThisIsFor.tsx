export default function WhoThisIsFor({ id }: { id?: string }) {
    return (
        <section id={id} className="py-24 bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold tracking-widest text-text-secondary uppercase mb-6">
                        Fit & Expectations
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6">
                        Who Gaugon Is For
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary font-light leading-relaxed">
                        Built for established businesses making real revenue who want to scale with
                        clean systems. If you're looking for your first online income stream, this isn't the right fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Blue Card - For You */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-primary/20 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-8 bg-white/10 backdrop-blur-md shadow-sm">
                                Built for established operators
                            </span>

                            <h3 className="text-3xl font-bold mb-10 tracking-tight">This is for you if...</h3>

                            <ul className="space-y-8">
                                <li className="group flex gap-5 items-start cursor-default">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                                        You're generating consistent revenue and ready to scale.
                                    </p>
                                </li>
                                <li className="group flex gap-5 items-start cursor-default">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                                        You want to own your data, not rent it from expensive SaaS giants.
                                    </p>
                                </li>
                                <li className="group flex gap-5 items-start cursor-default">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                                        You need systems people actually follow, not just another handbook.
                                    </p>
                                </li>
                                <li className="group flex gap-5 items-start cursor-default">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                                        You're ready to automate the boring stuff so you can focus on strategy.
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/20">
                                <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-2">
                                    Average Time Saved:
                                </p>
                                <p className="text-3xl font-black tracking-tight">15+ HRS/WEEK</p>
                            </div>
                        </div>
                    </div>

                    {/* White Card - Not For You */}
                    <div className="glass-card rounded-3xl p-8 sm:p-12 md:mt-12 hover:shadow-luxury transition-all duration-300 bg-white/80">
                        <h3 className="text-2xl font-bold text-text-primary mb-10">This is <span className="text-red-500">not</span> for you if...</h3>

                        <ul className="space-y-6">
                            <li className="group flex gap-5 items-start cursor-default">
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-1 transition-colors duration-300 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors">
                                    You're looking for a "quick install" magic button without understanding the flow.
                                </p>
                            </li>
                            <li className="group flex gap-5 items-start cursor-default">
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-1 transition-colors duration-300 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors">
                                    You want the cheapest freelancer who disappears after one month.
                                </p>
                            </li>
                            <li className="group flex gap-5 items-start cursor-default">
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-1 transition-colors duration-300 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors">
                                    You prefer chaos and "figuring it out" over documented stability.
                                </p>
                            </li>
                            <li className="group flex gap-5 items-start cursor-default">
                                <svg className="w-6 h-6 text-gray-400 shrink-0 mt-1 transition-colors duration-300 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors">
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
