export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          About Gaugon
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Gaugon was founded with a simple mission: make enterprise-grade IT and AI solutions accessible to small businesses. 
          We believe that every company, regardless of size, deserves technology that works seamlessly and securely.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Our approach is built on three core values that guide everything we do:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
            <p className="text-gray-600">
              We build long-term partnerships based on transparency, reliability, and honest communication. 
              Your success is our success.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarity</h3>
            <p className="text-gray-600">
              No jargon, no surprises. We explain everything in plain language and keep you informed 
              every step of the way.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
            <p className="text-gray-600">
              Your data and systems are protected with industry best practices. Security isn't an afterthought—it's 
              built into everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

