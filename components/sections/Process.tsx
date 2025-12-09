export default function Process() {
  return (
    <section id="process" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Clarify
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              We start with a discovery call to understand your business challenges, goals, and current systems. 
              This helps us identify exactly what needs to be fixed or improved.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Design
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              We create a tailored solution plan with clear timelines and deliverables. You'll know exactly what 
              we're building, why it matters, and how it will help your business.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Launch
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              We implement the solution, test thoroughly, and provide training. Then we monitor and optimize to 
              ensure everything runs smoothly and delivers real value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

