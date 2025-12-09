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
            name: "Standard",
            price: "$83",
            period: "/month",
            billing: "billed annually",
            description: "Self-paced learning with templates and community support.",
            buttonText: "Join Now",
            buttonLink: "/contact-us?inquiry=Standard+Membership",
            highlighted: false,
            features: [
                "Practical, tool-agnostic lessons",
                "Templates to copy and deploy",
                "New content shipped monthly",
                "Forum community",
                "Challenges & implementation sprints",
            ],
            checklistTitle: "What's included:",
        },
        {
            name: "Plus",
            price: "$166",
            period: "/month",
            billing: "billed annually",
            description: "Elite community with weekly masterminds and founder access.",
            buttonText: "Apply to Join",
            buttonLink: "/contact-us?inquiry=Plus+Membership",
            highlighted: true,
            badge: "Most Popular",
            features: [
                "Weekly group coaching calls",
                "Private elite chat access",
                "Buy additional employee seats**",
                "Tech stack consultation",
                "Personalized onboarding",
                "14-day refund guarantee*",
            ],
            checklistTitle: "Everything in Standard, plus:",
        },
        {
            name: "Max",
            price: "$500",
            period: "/month",
            billing: "billed annually",
            description: "For businesses seeking personalized, hands-on support.",
            buttonText: "Apply to Join",
            buttonLink: "/contact-us?inquiry=Max+Membership",
            highlighted: false,
            badge: "Best Value",
            features: [
                "Monthly 1:1 Coaching calls",
                "Priority DM support",
                "Implementation planning",
                "Early access to new systems",
                "14-day refund guarantee*",
            ],
            checklistTitle: "Everything in Plus, plus:",
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            billing: "Tailored to your needs",
            description: "Tailored solutions for organizations with specific needs.",
            buttonText: "Talk to us",
            buttonLink: "/contact-us?inquiry=Enterprise+Membership",
            highlighted: false,
            features: [
                "Dedicated account manager",
                "Custom solution development",
                "Team training and onboarding",
                "Done-for-you implementation",
                "Priority Slack support",
                "Quarterly strategy reviews",
            ],
            checklistTitle: "Everything in Max, plus:",
        },
    ];

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-20 bg-white px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Membership Levels
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Scalable solutions for your automation journey.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="pb-20 bg-gray-50 px-4 lg:px-6 pt-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`flex flex-col relative rounded-2xl p-8 transition-all duration-300 ${plan.highlighted
                                        ? "bg-white ring-2 ring-primary shadow-xl scale-100 z-10"
                                        : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        {plan.name}
                                    </h2>
                                    <p className="text-gray-600 min-h-[48px] mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline mb-2">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-500 ml-1 font-medium">
                                            {plan.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-mono">
                                        {plan.billing}
                                    </p>
                                </div>

                                <Link
                                    href={plan.buttonLink}
                                    className={`block w-full py-4 rounded-lg text-center font-semibold mb-10 transition-colors ${plan.highlighted
                                            ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                                            : "border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {plan.buttonText}
                                </Link>

                                <div className="mt-auto">
                                    <p className="font-bold text-gray-900 mb-6 text-sm">
                                        {plan.checklistTitle}
                                    </p>
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                                                    <CheckmarkIcon className="w-3.5 h-3.5 text-primary" />
                                                </div>
                                                <span className="text-gray-600 leading-snug">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footnotes */}
                    <div className="mt-16 max-w-4xl mx-auto text-center space-y-2">
                        <p className="text-sm text-gray-500">
                            * Attend an onboarding call to qualify. See refund policy for full terms.
                        </p>
                        <p className="text-sm text-gray-500">
                            ** Plus and Max accounts can purchase extra seats for their team at a discount. Contact us for more info.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
