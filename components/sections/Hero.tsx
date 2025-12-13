"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background bg-subtle-glow pt-24 pb-12 px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-surface border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase text-[11px]">Accepting new clients for January</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
              Work Smarter, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Scale Faster.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl font-light">
              The finest luxury IT solution for growing businesses. We map your workflows, identify bottlenecks, and deliver a prioritized automation roadmap in <strong className="text-text-primary font-semibold">7–14 days</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-primary-dark shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
              >
                <span>Start Your Transformation</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-text-primary bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-6 text-sm text-text-tertiary flex items-center gap-6">
              <span className="flex items-center gap-2">
                <CheckmarkIcon className="w-4 h-4 text-green-500" /> No long-term contract
              </span>
              <span className="flex items-center gap-2">
                <CheckmarkIcon className="w-4 h-4 text-green-500" /> 100% money-back guarantee
              </span>
            </p>
          </motion.div>

          {/* Right Column - Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container with Glass Effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-lg z-10"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-2xl"></div>
              <div className="glass-card p-2 rounded-2xl shadow-2xl relative overflow-hidden bg-white/50 ring-1 ring-white/50">
                <Image
                  src="/hero-illustration.jpg" // Ensure this asset exists or Replace dynamically
                  alt="Gaugon Dashboard Interface"
                  width={600}
                  height={450}
                  priority
                  className="rounded-xl w-full h-auto object-cover"
                />

                {/* Floating Badge 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-6 bottom-10 bg-white p-4 rounded-xl shadow-luxury border border-gray-100 flex items-center gap-3 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Efficiency</p>
                    <p className="text-sm font-bold text-gray-900">+45% Boost</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
