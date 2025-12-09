import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section: Tagline and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-16 border-b border-slate-800">
          {/* Left: Tagline - same style as logo */}
          <div className="mb-8 lg:mb-0 max-w-lg">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Work smarter,
              <br />
              scale faster
            </h3>
          </div>

          {/* Right: Large Gaugon Logo */}
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Gaugon
            </h2>
          </div>
        </div>

        {/* Navigation Links - Two Columns (closer together) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-2xl">
          {/* Column 1 */}
          <div>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-300 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="/case-studies" className="hover:text-gray-300 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal Links & Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-400 mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Gaugon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
