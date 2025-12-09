export default function PainSolution() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          We solve the problems that slow you down
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Messy systems
            </h3>
            <p className="text-gray-600">
              Disorganized tech stacks create confusion and waste time. We consolidate your tools, 
              streamline your infrastructure, and create clear processes that your team can actually follow.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Manual workflows
            </h3>
            <p className="text-gray-600">
              Repetitive tasks drain productivity and increase errors. Our AI automations handle the routine work, 
              freeing your team to focus on what matters most—growing your business.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Slow websites
            </h3>
            <p className="text-gray-600">
              A sluggish website drives customers away and hurts your search rankings. We optimize performance, 
              improve user experience, and ensure your site loads fast on every device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

