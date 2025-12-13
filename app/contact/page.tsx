"use client";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "", honeypot: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">Book Your Free AI Audit</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">Tell us about your business and challenges. We will analyze your processes and show you exactly where automation can drive the most impact.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect</h2>
              <ul className="space-y-4">
                {["Comprehensive analysis of your current processes", "Identification of automation opportunities", "Custom recommendations and implementation roadmap", "No obligation, no sales pressure"].map((item, i) => (
                  <li key={i} className="flex items-start"><svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Alternative Contact</h2>
              <p className="text-gray-600 mb-6">Prefer to chat? Reach out via WhatsApp for immediate assistance.</p>
              <a href="https://wa.me/1234567890?text=Hello" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA5A] transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-8 lg:p-12 rounded-lg">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`} placeholder="Your name" required />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`} placeholder="your.email@example.com" required />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your company name" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`} placeholder="Tell us about your business, current challenges, and what you would like to automate..." required />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            {submitStatus === "success" && <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6"><p className="font-medium">Thank you! Your request has been submitted.</p><p className="text-sm mt-1">We will get back to you within 24 hours to schedule your free AI audit.</p></div>}
            {submitStatus === "error" && <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6"><p className="font-medium">There was an error submitting your form.</p><p className="text-sm mt-1">Please try again or contact us via WhatsApp.</p></div>}
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? "Submitting..." : "Submit Request"}</button>
          </form>
        </div>
      </section>
    </main>
  );
}
