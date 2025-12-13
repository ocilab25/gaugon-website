"use client";
import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setSubmitStatus("error"); return; }
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      console.log("Newsletter subscription:", email);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setEmail("");
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-16 bg-white border-y border-gray-200 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">Get insights on automation, AI, and business efficiency delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
            <button type="submit" disabled={isSubmitting} className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">{isSubmitting ? "Subscribing..." : "Subscribe"}</button>
          </div>
          {submitStatus === "success" && <p className="mt-3 text-sm text-green-600">Thank you! Check your email to confirm your subscription.</p>}
          {submitStatus === "error" && <p className="mt-3 text-sm text-red-600">Please enter a valid email address.</p>}
        </form>
      </div>
    </section>
  );
}
