import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          AI Automation That
          <br />
          <span className="text-primary">Makes Your Team Feel 2x Bigger</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
          We design and run automations for marketing, support, CRM, and ops so growing businesses can scale without extra headcount.
        </p>

        <p className="text-lg text-gray-800 font-medium mb-8">
          Built for agencies, e-commerce, and service businesses.
        </p>

        <div className="max-w-2xl mx-auto mb-10 text-left bg-gray-50 p-6 rounded-lg border border-gray-100 dark:bg-gray-800/50 dark:border-gray-700">
          <p className="font-semibold text-gray-900 mb-3 text-center">In your free AI audit you will:</p>
          <ul className="grid sm:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Map your current workflows</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Spot 3–5 high-impact automation opportunities</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Get a simple next-step plan</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md min-w-[240px]"
          >
            Start Free AI Audit
          </Link>
          <a
            href="https://wa.me/14076682684?text=Hello! I'm interested in learning more about Gaugon's AI automation services."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors min-w-[240px]"
          >
            WhatsApp Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
