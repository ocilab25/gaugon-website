import Link from "next/link";

export default function CaseStudyTeaser() {
  const caseStudies = [
    {
      title: "E-commerce Automation Success",
      description: "How we automated order processing and customer communications, reducing manual work by 90% and improving order fulfillment speed.",
      category: "E-commerce",
    },
    {
      title: "SaaS Platform Integration",
      description: "Seamless automation of user onboarding, billing, and support workflows resulting in 60% faster customer activation.",
      category: "SaaS",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:block text-primary hover:text-primary/80 font-semibold text-sm"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-primary font-semibold mb-3">
                {study.category}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {study.description}
              </p>
              <Link
                href="/case-studies"
                className="text-primary hover:text-primary/80 font-semibold text-sm"
              >
                Read Case Study →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/case-studies"
            className="text-primary hover:text-primary/80 font-semibold text-sm"
          >
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}

