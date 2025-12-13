export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white px-6 lg:px-8 border-y border-gray-100/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            What happens when you book?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            No vague consulting hours. A structured timeline to get from "messy" to "mapped."
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
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
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group text-white">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-xl font-bold text-primary mb-8 relative z-10 shadow-lg group-hover:scale-110 group-hover:border-primary/10 transition-all duration-300">
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-luxury group-hover:-translate-y-1 transition-all duration-300 w-full lg:min-h-[220px]">
                  <span className="inline-block text-xs font-bold tracking-wider text-primary uppercase mb-3 bg-primary/5 px-3 py-1 rounded-full">{item.time}</span>
                  <h3 className="text-xl font-bold text-text-primary mb-4">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
