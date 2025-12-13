"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
    const [hours, setHours] = useState(10);
    const [rate, setRate] = useState(50);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        // Calculation: Hours * Rate * 52 weeks
        const annual = hours * rate * 52;
        setSavings(annual);
    }, [hours, rate]);

    return (
        <section className="py-24 bg-white border-y border-gray-100/50 px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                        The Cost of Inaction
                    </h2>
                    <p className="text-xl text-text-secondary font-light">
                        Manual work isn't just boring. It's expensive.
                    </p>
                </div>

                <div className="bg-surface/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-12 shadow-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-4 flex justify-between">
                                    <span>Hours spent on manual tasks / week</span>
                                    <span className="text-primary">{hours} hours</span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="40"
                                    step="1"
                                    value={hours}
                                    onChange={(e) => setHours(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-text-tertiary mt-2">
                                    <span>0h</span>
                                    <span>40h</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">
                                    Average Hourly Rate ($)
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary">$</span>
                                    <input
                                        type="number"
                                        min="10"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-text-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-text-secondary font-medium mb-2 relative z-10">You could save</h3>
                            <div className="text-5xl sm:text-6xl font-bold text-primary mb-2 relative z-10 tracking-tight">
                                ${savings.toLocaleString()}
                            </div>
                            <p className="text-text-tertiary text-sm relative z-10">per year</p>

                            <div className="mt-8 relative z-10">
                                <a href="/contact-us" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                                    Save This Money
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
