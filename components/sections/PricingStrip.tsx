import Link from "next/link";

export default function PricingStrip() {
    return (
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Want to see how working together is priced?
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Here's a simple breakdown of how most clients work with us, plus what usually fits each stage of growth.
                </p>
                <Link
                    href="/pricing"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                >
                    View Pricing
                </Link>
            </div>
        </section>
    );
}
