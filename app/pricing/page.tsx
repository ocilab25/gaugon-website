import type { Metadata } from "next";
import Link from "next/link";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export const metadata: Metadata = {
    title: "Pricing | Gaugon - AI Automation Plans",
    description: "Pricing that matches where you are now. Simple plans for every stage of growth, from starter workflows to enterprise-scale automation.",
};

export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            price: "From $500/mo",
            tagline: "Good if you're executing simple automation workflows.",
            features: [
                "Simple workflows around a few key tools",
                "Email and basic CRM setup",
                "Light reporting so you can see what's working",
                "Email support for questions",
            ],
            highlighted: false,
        },
        {
            name: "Growth",
            price: "From $1,500/mo",
            tagline: "For teams that already feel the growing pains.",
            features: [
                "Everything in Starter",
                "Helpdesk or chatbot support for common questions",
                "Deeper reporting dashboards for leaders",
                "Multiple systems talking to each other",
                "Priority support and check-ins",
            ],
            highlighted: true,
        },
        {
            name: "Scale",
            price: "From $3,000/mo",
            tagline: "When you need things to just run, all the time.",
            features: [
                "Everything in Growth",
                "Custom automations around your specific stack",
                "Monitoring and alerts on key workflows",
                "Regular strategy sessions to keep things sharp",
            ],
            highlighted: false,
        },
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-white px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        What it costs
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Here's how most clients work with us. If your situation's different, we'll talk through custom options.
                    </p>
                </div>
            </section>

            {/* Workflow Sprint - Primary Offer */}
            <section className="py-12 bg-gray-50 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 mb-16">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <div className="inline-block bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                    Start Here
                                </div>
                                <h2 className="text-4xl font-bold mb-4">
                                    Workflow Sprint
                                </h2>
                                <p className="text-xl text-primary-100 mb-6 leading-relaxed">
                                    In 7–14 days, we map your tools, flag risks, and build you a prioritized 30/60/90-day roadmap.
                                </p>
                                <div className="text-3xl font-bold mb-6">
                                    Starting at $2,500
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <CheckmarkIcon className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                        <span>Complete tool & workflow inventory</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckmarkIcon className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                        <span>Security & privacy review</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckmarkIcon className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                        <span>Prioritized 30/60/90-day action plan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckmarkIcon className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                        <span>1–2 quick wins (if access allows)</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/contact-us"
                                    className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Book Your Sprint
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Plans Section */}
            <section className="py-12 bg-gray-50 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Monthly Plans Intro */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Want ongoing help after the sprint?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These monthly plans help you execute the roadmap, with ongoing support and optimization.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-8 ${plan.highlighted
                                    ? "bg-primary text-white shadow-2xl transform md:scale-105 border-4 border-primary"
                                    : "bg-white border border-gray-200 shadow-lg"
                                    }`}
                            >
                                {plan.highlighted && (
                                    <div className="text-center mb-4">
                                        <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Common
                                        </span>
                                    </div>
                                )}
                                <h2
                                    className={`text-3xl font-bold mb-3 ${plan.highlighted ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {plan.name}
                                </h2>
                                <div
                                    className={`text-2xl font-bold mb-3 ${plan.highlighted ? "text-white" : "text-primary"
                                        }`}
                                >
                                    {plan.price}
                                </div>
                                <p
                                    className={`text-lg mb-6 leading-relaxed ${plan.highlighted ? "text-white/90" : "text-gray-600"
                                        }`}
                                >
                                    {plan.tagline}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <CheckmarkIcon
                                                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-primary"
                                                    }`}
                                            />
                                            <span
                                                className={
                                                    plan.highlighted ? "text-white" : "text-gray-700"
                                                }
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact-us"
                                    className={`block w-full py-4 px-6 rounded-lg text-center font-semibold transition-colors ${plan.highlighted
                                        ? "bg-white text-primary hover:bg-gray-100"
                                        : "bg-primary text-white hover:bg-primary/90"
                                        }`}
                                >
                                    Talk about {plan.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Note Below Plans */}
                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Not sure which monthly plan fits? Start with the <strong>Workflow Sprint</strong>. We'll map your workflows, and then suggest what makes sense for ongoing support—if you even need it.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-block text-primary font-semibold hover:underline"
                        >
                            Book Your Sprint →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
