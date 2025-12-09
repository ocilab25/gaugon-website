import Link from "next/link";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              You know something's inefficient. You just don't have time to fix it.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We spend 7–14 days mapping your workflows, security gaps, and automation opportunities—then give you a prioritized to-do list. Small, reversible changes that use the tools you already own.
            </p>

            {/* Inline Audit Checklist */}
            <div className="mb-8">
              <p className="font-semibold text-gray-900 mb-4">What you'll get:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">A clear map of your tools and workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">A short list of concrete risks</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">A prioritized 30/60/90-day action plan</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg text-center"
              >
                Map My Workflows
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image (40%) */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full">
              <img
                src="/hero-illustration.jpg"
                alt="AI Automation Dashboard - Connect email, chat, and CRM into one AI-driven workflow"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
