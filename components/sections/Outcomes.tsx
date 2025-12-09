export default function Outcomes() {
  const stats = [
    {
      value: "85%",
      label: "Time Saved on Repetitive Tasks",
      description: "Average reduction in manual work hours",
    },
    {
      value: "3x",
      label: "Faster Response Times",
      description: "Improved customer service efficiency",
    },
    {
      value: "40%",
      label: "Cost Reduction",
      description: "Lower operational expenses through automation",
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

