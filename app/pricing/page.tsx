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
            tagline: "Good if you're just getting started with automation.",
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
                        Pricing that matches where you are now
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        You don't have to guess. These plans show how most clients work with us, and we'll talk through the numbers together before anything moves forward.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 bg-gray-50 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
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
                                    href="/contact"
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
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Not sure where you fit? That's normal. Start with a free AI audit, we'll map your workflows, and then suggest the plan that makes the most sense for you.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
