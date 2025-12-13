import Link from "next/link";

export const metadata = {
    title: "Pricing | Gaugon",
    description: "Explore our transparent pricing for AI automation and IT solutions.",
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-text-secondary mb-12 font-light">
                    We're building our public pricing page. In the meantime, book a call to discuss your needs.
                </p>
                <Link
                    href="/contact-us"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                    Get a Custom Quote
                </Link>
            </div>
        </main>
    );
}
