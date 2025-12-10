export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What happens when you book?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No vague consulting hours. A structured timeline to get from "messy" to "mapped."
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "30-min intro. We confirm we can actually help you. If not, we tell you immediately.",
                time: "Day 1"
              },
              {
                step: "02",
                title: "Access & Audit",
                desc: "We sign an NDA, get read-only access to your tools, and document your workflows.",
                time: "Day 2–7"
              },
              {
                step: "03",
                title: "The Roadmap",
                desc: "We present your 'Workflow Map' and a fixed-price proposal for the fixes.",
                time: "Day 10"
              },
              {
                step: "04",
                title: "Decision",
                desc: "You can implement the plan yourself, or hire us to build it for you.",
                time: "Day 14"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white lg:bg-transparent p-6 rounded-xl border lg:border-none border-gray-100 shadow-sm lg:shadow-none">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center text-xl font-bold text-primary mb-6 relative z-10 shadow-sm">
                  {item.step}
                </div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{item.time}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

