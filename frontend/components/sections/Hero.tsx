import Link from "next/link";
import Image from "next/image";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-3">
            {/* Trust Badge / Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Accepting audits for January</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Stop guessing where your business is bleeding time.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              We don't sell "AI magic." We map your messy workflows, spot the bottlenecks, and deliver a prioritized automation roadmap in <strong>7–14 days</strong>.
            </p>

            {/* Inline Audit Checklist */}
            <div className="mb-10 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-primary/10 p-1 rounded text-primary">⚡</span>
                The "Workflow Map" Deliverable:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong>Visual Blueprint</strong> of your current tool stack & data flow</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong>Bottleneck Report</strong> identifying hours lost per week</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700"><strong>30/60/90-Day Plan</strong> for low-risk automation wins</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact-us"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                Map My Workflows
              </Link>
              <div className="text-sm text-gray-500 pl-2">
                <p>No long-term contract.</p>
                <p>100% money-back guarantee.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image (40%) */}
          <div className="lg:col-span-2 flex items-center justify-center relative">
            {/* Floating 'Result' Card for Social Proof */}
            <div className="absolute -left-12 bottom-12 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden xl:block animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">Average Savings</p>
                  <p className="text-lg font-bold text-gray-900">15 hrs / week</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Image
                src="/hero-illustration.jpg"
                alt="Workflow Audit Dashboard"
                width={800}
                height={600}
                priority
                className="w-full h-auto rounded-xl shadow-2xl border border-gray-100/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
