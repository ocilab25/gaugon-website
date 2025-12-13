"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Gaugon"
                width={200}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="/contact-us"
              className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              Book Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
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
          <div className="md:hidden py-6 space-y-4 border-t border-gray-100 mt-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="block bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Audit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
