import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-text-primary border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top Section: Tagline and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-16 border-b border-gray-100">
          {/* Left: Tagline */}
          <div className="mb-10 lg:mb-0 max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-text-primary">
              Work smarter,
              <br />
              <span className="text-primary">scale faster</span>.
            </h3>
          </div>

          {/* Right: Standard Gaugon Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Gaugon"
              width={280}
              height={90}
              className="h-20 w-auto opacity-90"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 max-w-3xl">
          {/* Column 1 */}
          <div>
            <p className="font-bold text-text-primary mb-6 uppercase tracking-widest text-xs">Company</p>
            <ul className="space-y-4 text-sm font-medium text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-bold text-text-primary mb-6 uppercase tracking-widest text-xs">Resources</p>
            <ul className="space-y-4 text-sm font-medium text-text-secondary">
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal Links & Copyright */}
        <div className="pt-8 border-t border-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-text-tertiary">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-text-tertiary font-medium">
              &copy; {new Date().getFullYear()} Gaugon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
