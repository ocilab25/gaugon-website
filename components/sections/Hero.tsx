import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          AI Automation That
          <br />
          <span className="text-primary">Scales Your Business</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Automate marketing, customer support, CRM, and workflows. Professional IT solutions designed for growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md min-w-[240px]">
            Start Free AI Audit
          </Link>
          <a href="https://wa.me/1234567890?text=Hello" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors min-w-[240px]">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
