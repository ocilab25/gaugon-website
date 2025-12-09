"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how we can help";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data for Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("access_key", "0a70d745-bd5d-41d0-a68f-7b0953cf7012");
      web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
      web3FormData.append("email", formData.workEmail);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("message", formData.message);
      web3FormData.append("subject", `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`);

      // Auto-reply configuration for customer confirmation
      web3FormData.append("from_name", "Gaugon Support Team");
      web3FormData.append("replyto", "support@gaugon.com");
      web3FormData.append("autoresponse", "true");
      web3FormData.append("autoresponse_subject", "Thank you for contacting Gaugon! We'll be in touch soon.");
      web3FormData.append("autoresponse_text", `Hi ${formData.firstName},

Thank you for reaching out to Gaugon! We've received your message and will get back to you within 24 hours.

What happens next:
• Our team is reviewing your request
• We'll analyze how AI automation can help your business
• You'll receive a personalized response from our experts

In the meantime, feel free to:
• Check out our services: https://app.gaugon.com/services
• Learn about our approach: https://app.gaugon.com/about
• Message us on WhatsApp: +1 (407) 668-2684

Looking forward to helping you automate and grow your business!

Best regards,
The Gaugon Team

---
Gaugon - AI Automation & IT Solutions
Website: https://app.gaugon.com
Email: support@gaugon.com
WhatsApp: +1 (407) 668-2684`);

      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", workEmail: "", phone: "", message: "" });

        // Reset success message after 10 seconds
        setTimeout(() => setSubmitStatus(null), 10000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      // Reset error message after 10 seconds
      setTimeout(() => setSubmitStatus(null), 10000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Get Started Today
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Ready to streamline your business operations? Book a free discovery call or send us a message.
          We'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name - Floating Label */}
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="firstName"
                className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                First Name *
              </label>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name - Floating Label */}
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="lastName"
                className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Last Name *
              </label>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Work Email - Floating Label */}
            <div className="relative">
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.workEmail ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="workEmail"
                className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Work Email *
              </label>
              {errors.workEmail && (
                <p className="mt-1 text-sm text-red-600">{errors.workEmail}</p>
              )}
            </div>

            {/* Phone - Floating Label */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Phone *
              </label>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* How can we help? - Floating Label */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`peer w-full px-4 pt-6 pb-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-gray-300"
                }`}
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
            >
              How can we help? *
            </label>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              <p className="font-medium">Thank you! Your message has been sent.</p>
              <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <p className="font-medium">There was an error submitting your form.</p>
              <p className="text-sm mt-1">Please try again or contact us via WhatsApp.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
