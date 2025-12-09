export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* IT Support */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              IT Support
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Proactive monitoring and maintenance of your systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Quick response to technical issues and troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Security updates and data protection strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cloud migration and infrastructure optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Employee training and best practices guidance</span>
              </li>
            </ul>
          </div>

          {/* AI Automations */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AI Automations
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Custom workflow automation for repetitive tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>AI-powered data processing and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Intelligent customer service chatbots and assistants</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Automated reporting and business intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Integration of AI tools into your existing systems</span>
              </li>
            </ul>
          </div>

          {/* Website Optimization */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Website Optimization
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Speed optimization and performance tuning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mobile responsiveness and cross-device testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>SEO improvements and search visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>User experience enhancements and conversion optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Security hardening and SSL implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

