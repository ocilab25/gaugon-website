"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4 shadow-luxury" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* Assuming logo might need a white filter or replacement for dark mode. 
                  For now, adding a subtle glow effect on hover */}
              <div className="relative transition-all hover:opacity-80">
                <Image
                  src="/logo.png"
                  alt="Gaugon"
                  width={220}
                  height={70}
                  className="h-14 md:h-16 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {["Home", "Services", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {item}
              </Link>
            ))}

            <ThemeToggle />

            <Link
              href="/contact-us"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-gray-100 p-6 space-y-4 animate-slide-up shadow-luxury">
            {["Home", "Services", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-primary transition-colors text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-base font-semibold text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
