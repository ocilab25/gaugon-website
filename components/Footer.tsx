import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top Navigation Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Learn More</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Gaugon Branding */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
            Gaugon
          </h2>
        </div>

        {/* About Gaugon Section - Very Bottom */}
        <div className="border-t border-slate-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">About Gaugon</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                AI automation and IT solutions for growing businesses. We help you streamline operations,
                automate workflows, and scale efficiently—without the complexity.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Gaugon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
