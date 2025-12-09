"use client";

import { useState, FormEvent, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";
import { WEB3FORMS_CONFIG } from "@/lib/config";

// Country list
const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Spain", "Italy", "Netherlands",
  "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Portugal", "Greece",
  "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Croatia", "Slovenia", "Slovakia", "Estonia",
  "Latvia", "Lithuania", "Luxembourg", "Malta", "Cyprus", "Iceland", "Liechtenstein", "Monaco", "San Marino",
  "Vatican City", "Andorra", "Albania", "Bosnia and Herzegovina", "Kosovo", "Macedonia", "Montenegro", "Serbia",
  "Ukraine", "Belarus", "Moldova", "Russia", "Turkey", "Georgia", "Armenia", "Azerbaijan", "Kazakhstan",
  "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Pakistan", "India", "Bangladesh",
  "Sri Lanka", "Nepal", "Bhutan", "Maldives", "China", "Japan", "South Korea", "North Korea", "Mongolia",
  "Taiwan", "Hong Kong", "Macau", "Vietnam", "Thailand", "Myanmar", "Cambodia", "Laos", "Malaysia", "Singapore",
  "Indonesia", "Philippines", "Brunei", "East Timor", "Papua New Guinea", "Australia", "New Zealand", "Fiji",
  "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati", "Micronesia", "Marshall Islands", "Palau",
  "Nauru", "Tuvalu", "Mexico", "Guatemala", "Belize", "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
  "Panama", "Cuba", "Jamaica", "Haiti", "Dominican Republic", "Bahamas", "Barbados", "Trinidad and Tobago",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Grenada", "Antigua and Barbuda", "Dominica",
  "Saint Kitts and Nevis", "Brazil", "Argentina", "Chile", "Colombia", "Peru", "Venezuela", "Ecuador",
  "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname", "French Guiana", "Falkland Islands", "South Africa",
  "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Sudan", "South Sudan", "Ethiopia", "Kenya", "Tanzania",
  "Uganda", "Rwanda", "Burundi", "Somalia", "Djibouti", "Eritrea", "Nigeria", "Ghana", "Côte d'Ivoire",
  "Senegal", "Mali", "Burkina Faso", "Niger", "Guinea", "Sierra Leone", "Liberia", "Togo", "Benin", "Mauritania"
].sort();

export default function ContactPage() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    inquiryType: "",
    country: "",
    message: "",
    privacyConsent: false,
    honeypot: "", // Spam protection
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const inquiryTypes = [
    "AI Automation Audit",
    "Workflow Integration Services",
    "IT Infrastructure Assessment",
    "Custom Automation Project",
    "General Inquiry"
  ];

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

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country/region";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how we can help";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy policy to continue";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Helper: Build Web3Forms FormData with all required fields
  const buildWeb3FormData = () => {
    const web3FormData = new FormData();
    web3FormData.append("access_key", WEB3FORMS_CONFIG.ACCESS_KEY);
    web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
    web3FormData.append("email", formData.workEmail);
    web3FormData.append("phone", formData.phone || "Not provided");
    web3FormData.append("inquiry_type", formData.inquiryType);
    web3FormData.append("country", formData.country);
    web3FormData.append("message", formData.message);
    web3FormData.append("subject", `New ${formData.inquiryType} - ${formData.firstName} ${formData.lastName} (${formData.country})`);
    web3FormData.append("recaptcha", recaptchaToken || "");

    return web3FormData;
  };

  // Helper: Configure auto-reply settings for customer confirmation
  const configureAutoReply = (web3FormData: FormData) => {
    web3FormData.append("from_name", "Gaugon Support Team");
    web3FormData.append("replyto", "support@gaugon.com");
    web3FormData.append("autoresponse", "true");
    web3FormData.append("autoresponse_subject", "Thank you for contacting Gaugon! We'll be in touch soon.");
    web3FormData.append("autoresponse_text", `Hi ${formData.firstName},

Thank you for reaching out to Gaugon! We've received your ${formData.inquiryType} request and will get back to you within 24 hours.

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
  };

  // Helper: Submit form data to Web3Forms API
  const submitToWeb3Forms = async (web3FormData: FormData) => {
    const response = await fetch(WEB3FORMS_CONFIG.API_URL, {
      method: "POST",
      body: web3FormData
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Form submission failed");
    }

    return data;
  };

  // Helper: Handle successful form submission
  const handleSubmitSuccess = () => {
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      phone: "",
      inquiryType: "",
      country: "",
      message: "",
      privacyConsent: false,
      honeypot: ""
    });
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();

    // Clear success message after 10 seconds
    setTimeout(() => setSubmitStatus(null), 10000);
  };

  // Helper: Handle form submission error
  const handleSubmitError = (error: unknown) => {
    console.error("Form submission error:", error);
    setIsSubmitting(false);
    setSubmitStatus("error");

    // Clear error message after 10 seconds
    setTimeout(() => setSubmitStatus(null), 10000);
  };

  // Main submit handler - orchestrates the submission process
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection: if honeypot field is filled, it's likely a bot
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const web3FormData = buildWeb3FormData();
      configureAutoReply(web3FormData);
      await submitToWeb3Forms(web3FormData);
      handleSubmitSuccess();
    } catch (error) {
      handleSubmitError(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error when user interacts
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (errors.recaptcha) {
      setErrors((prev) => ({ ...prev, recaptcha: "" }));
    }
  };


  return (
    <main className="pt-20">
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Architect Your Automation Strategy
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Schedule a consultation to discuss your operational challenges and explore how bespoke automation can scale your business.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What you'll get
              </h2>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Snapshot of tools and workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ranked list of automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Recommended AI + CRM + chat stack</span>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DIY or done-with-you next steps</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                How the consultation works
              </h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-700 mb-12 pl-2">
                <li className="pl-2">Submit the form.</li>
                <li className="pl-2">Receive a short pre-consultation questionnaire.</li>
                <li className="pl-2">Meet on a live call.</li>
                <li className="pl-2">Get a brief roadmap within 2 business days.</li>
              </ol>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="text-gray-800 font-medium mb-4">
                  Ready to see what automation can do for your team? Book your AI audit and we'll confirm within one business day.
                </p>
                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Alternative Contact</h3>
                    <a
                      href="https://wa.me/14076682684?text=Hello! I'd like to learn more about Gaugon's AI automation services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <Link href="/faq" className="text-sm text-primary font-medium hover:underline">
                      View Frequently Asked Questions →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-8 lg:p-12 rounded-lg">
            {/* Honeypot field for spam protection - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Inquiry Type */}
            <div className="mb-6 relative">
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.inquiryType ? "border-red-500" : "border-gray-300"}`}
                required
              >
                <option value="">Select Inquiry Type *</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
              )}
            </div>

            {/* Country/Region */}
            <div className="mb-6 relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.country ? "border-red-500" : "border-gray-300"}`}
                required
              >
                <option value="">Select Country/Region *</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-600">{errors.country}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* First Name - Floating Label */}
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.firstName ? "border-red-500" : "border-gray-300"
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
                  className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.lastName ? "border-red-500" : "border-gray-300"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Work Email - Floating Label */}
              <div className="relative">
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.workEmail ? "border-red-500" : "border-gray-300"
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

              {/* Phone - Floating Label - OPTIONAL */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
                >
                  Phone Number (please include country code)
                </label>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* How can we help? - Floating Label */}
            <div className="mb-6 relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-gray-300"
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

            {/* Privacy Policy Checkbox */}
            <div className="mb-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">
                  I agree to the use or processing of my personal information by Gaugon for the purpose of fulfilling this request and in accordance with Gaugon's{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Statement
                  </Link>
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyConsent}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                <p className="font-medium">Thank you! Your request has been submitted.</p>
                <p className="text-sm mt-1">We'll get back to you within 24 hours to schedule your consultation.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6">
                <p className="font-medium">There was an error submitting your form.</p>
                <p className="text-sm mt-1">Please try again or contact us via WhatsApp.</p>
              </div>
            )}

            {/* Google reCAPTCHA v2 */}
            <div className="mb-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA"
                onChange={handleRecaptchaChange}
                theme="light"
              />
              {errors.recaptcha && (
                <p className="mt-1 text-sm text-red-600">{errors.recaptcha}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
