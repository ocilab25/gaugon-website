import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaugon - AI Automation Experts",
  description: "Learn about Gaugon's mission to make enterprise-grade AI automation and IT solutions accessible to businesses of all sizes.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Trust",
      description: "We build long-term partnerships based on transparency, reliability, and honest communication. Your success is our success, and we're committed to delivering on our promises.",
    },
    {
      title: "Clarity",
      description: "No jargon, no surprises. We explain everything in plain language, provide clear timelines, and keep you informed every step of the way. Complex technology, simple communication.",
    },
    {
      title: "Security",
      description: "Your data and systems are protected with industry best practices. Security isn't an afterthought—it's built into everything we do, from design to deployment to ongoing support.",
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of automation and AI technology, continuously learning and adapting to bring you the most effective solutions available.",
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            About Gaugon
          </h1>
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Gaugon was founded with a simple mission: make enterprise-grade AI automation 
              and IT solutions accessible to businesses of all sizes. We believe that every 
              company, regardless of size, deserves technology that works seamlessly, securely, 
              and scales with their growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our team combines deep technical expertise with a practical understanding of 
              business operations. We don't just implement technology—we solve real problems, 
              eliminate inefficiencies, and create systems that drive measurable results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're automating a single workflow or transforming your entire operation, 
              we approach every project with the same level of care, attention to detail, and 
              commitment to your success.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 lg:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how automation can transform your business operations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

