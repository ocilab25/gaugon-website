export default function PrivacyPolicyPage() {
    const lastUpdated = "December 9, 2025";

    return (
        <main className="pt-20">
            <section className="py-20 bg-white px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Last updated: {lastUpdated}
                    </p>

                    {/* Introduction */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">In plain English:</strong> We collect some basic info when you use our site or work with us. We're not in the business of selling your data—we use it to provide services, stay in touch, and improve what we do. You can ask us what we have, request deletion, or opt out anytime.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            This Privacy Policy describes how Gaugon ("we," "us," or "our") collects, uses, and protects information obtained through our website and services. By using our website or engaging with our services, you acknowledge and consent to the practices described in this policy.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="information-collected">
                            Information We Collect
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">What we're talking about:</strong> If you fill out a contact form, we'll have your name, email, and whatever you tell us. If you just browse, we might see general stuff like what pages you visit (through cookies and analytics). We don't collect credit cards or sensitive personal details unless you're actively working with us.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We collect information that you voluntarily provide when you contact us, subscribe to updates, or request services. This may include your name, email address, phone number, company name, and any details you include in messages or forms. We collect this information solely for the purpose of responding to inquiries and providing requested services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you visit our website, certain technical information is automatically collected through standard web technologies. This includes your IP address, browser type, device information, pages visited, time spent on pages, and referring website. We use cookies and similar tracking technologies to collect this information. For details on cookie usage, please refer to our Cookie Policy.
                        </p>
                    </div>

                    {/* How We Use Information */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="how-we-use">
                            How We Use Your Information
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Why we need it:</strong> Mostly to respond when you reach out, send updates if you've signed up, and understand how people use the site so we can make it better. We're not sending spam or sharing your info with random third parties.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                            <li>To respond to inquiries and provide customer support</li>
                            <li>To deliver services, quotes, and project-related communications</li>
                            <li>To send updates, newsletters, or marketing materials (only if you've opted in)</li>
                            <li>To analyze website usage and improve user experience</li>
                            <li>To maintain security and prevent fraudulent activity</li>
                            <li>To comply with legal obligations and enforce our terms</li>
                        </ul>
                    </div>

                    {/* Sharing Information */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="sharing">
                            When We Share Information
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">The short version:</strong> We don't sell your data. We might share it with tools we use to run the business (like email services or analytics platforms), but only what's necessary. If the law requires it, we'll comply. That's about it.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell, rent, or trade your personal information. We may share information in the following limited circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                            <li><strong>Service Providers:</strong> We work with third-party vendors who help us operate our website and deliver services (e.g., hosting providers, email services, analytics tools). These providers are contractually obligated to protect your information and use it only for specified purposes.</li>
                            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental request, or if necessary to protect our rights, property, or safety.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                        </ul>
                    </div>

                    {/* Third-Party Tools */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="third-party">
                            Analytics and Third-Party Tools
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">What's running in the background:</strong> We use standard analytics tools (think Google Analytics or similar) to see which pages get traffic. These tools set cookies and track visits. You can opt out through your browser settings or opt-out browser extensions.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use third-party analytics services to understand how visitors interact with our website. These services may collect data including IP addresses, browser information, and browsing behavior. The data collected is aggregated and anonymized where possible. Analytics providers have their own privacy policies governing their data practices.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="retention">
                            Data Retention
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">How long we keep stuff:</strong> We keep your info as long as it's useful—like if we're working together or you're subscribed to updates. Once it's not needed anymore, or if you ask us to delete it, we'll get rid of it (unless we legally have to keep it for a certain period).
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we securely delete or anonymize it. Retention periods vary based on the type of information and the purpose for which it was collected.
                        </p>
                    </div>

                    {/* Security */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="security">
                            Security Practices
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Keeping things safe:</strong> We use standard security measures—encrypted connections, secure servers, access controls. No system is 100% bulletproof, but we take reasonable steps to protect your data from unauthorized access or leaks.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We implement reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, and restricted access to personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    {/* Your Rights */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="your-rights">
                            Your Rights and Choices
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">You're in control:</strong> Want to see what we have on you? Ask. Want it deleted? Let us know. Don't want marketing emails? Unsubscribe anytime. Seriously, just email us and we'll sort it out.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Depending on your location and applicable laws, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                            <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                            <li><strong>Restrict Processing:</strong> Request that we limit how we use your information</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To exercise these rights, please contact us at <a href="mailto:privacy@gaugon.com" className="text-primary hover:underline">privacy@gaugon.com</a>. We will respond to requests within a reasonable timeframe and in accordance with applicable law.
                        </p>
                    </div>

                    {/* Age Restrictions */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="age">
                            Age Restrictions
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Age requirement:</strong> Our services are aimed at businesses, not kids. If you're under 16, please don't use this site or send us your info.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our services are intended for use by businesses and individuals aged 16 and older. We do not knowingly collect personal information from individuals under 16 years of age. If we become aware that we have collected information from a person under 16, we will delete it promptly.
                        </p>
                    </div>

                    {/* Policy Changes */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="changes">
                            Changes to This Policy
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">If things change:</strong> We might update this policy occasionally. When we do, we'll update the date at the top. If it's a big change, we'll probably let you know via email.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. The "Last Updated" date at the top of this page indicates when the policy was most recently revised. We encourage you to review this policy periodically. For significant changes, we may provide additional notice through email or prominent website notification.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="contact">
                            Contact Us
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Questions?</strong> Reach out. We're actual humans who'll respond.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-900 font-semibold mb-2">Gaugon</p>
                            <p className="text-gray-700">Email: <a href="mailto:privacy@gaugon.com" className="text-primary hover:underline">privacy@gaugon.com</a></p>
                            <p className="text-gray-700">General Inquiries: <a href="mailto:hello@gaugon.com" className="text-primary hover:underline">hello@gaugon.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
