import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Gaugon",
    description: "Learn about how Gaugon uses cookies and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
    return (
        <main className="pt-20">
            <section className="py-20 bg-white px-6 lg:px-8">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
                    <p className="text-gray-600 mb-8">
                        <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
                    <p className="text-gray-700 mb-4">
                        Cookies are small text files that are placed on your device when you visit our website.
                        They help us provide you with a better experience by remembering your preferences,
                        understanding how you use our site, and improving our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
                    <p className="text-gray-700 mb-4">
                        Gaugon uses cookies for various purposes to enhance your browsing experience and provide
                        our services effectively. Below, we explain the different types of cookies we use and their purposes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Essential Cookies</h3>
                    <p className="text-gray-700 mb-4">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                        They enable core functionality such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Security and fraud prevention</li>
                        <li>Network management and accessibility</li>
                        <li>Session management and authentication</li>
                        <li>Load balancing</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Functional Cookies</h3>
                    <p className="text-gray-700 mb-4">
                        These cookies allow us to remember choices you make and provide enhanced features. They help:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Remember your preferences and settings</li>
                        <li>Personalize content based on your interactions</li>
                        <li>Save your cookie consent preferences</li>
                        <li>Enable interactive features like live chat</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Performance & Analytics Cookies</h3>
                    <p className="text-gray-700 mb-4">
                        These cookies help us understand how visitors interact with our website by collecting
                        information anonymously. This data helps us:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Identify and fix technical issues</li>
                        <li>Improve website performance and user experience</li>
                        <li>Track which pages are most popular</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Marketing & Third-party Cookies</h3>
                    <p className="text-gray-700 mb-4">
                        These cookies are used to deliver relevant advertisements and track advertising effectiveness. They:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Track your browsing across different websites</li>
                        <li>Build a profile of your interests</li>
                        <li>Deliver targeted advertising</li>
                        <li>Measure the effectiveness of marketing campaigns</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
                    <p className="text-gray-700 mb-4">
                        We may use services from third-party providers that set their own cookies. These include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Analytics providers</strong> - To analyze website usage (e.g., Google Analytics)</li>
                        <li><strong>Social media platforms</strong> - For social sharing and login features</li>
                        <li><strong>Advertising networks</strong> - To display relevant advertisements</li>
                        <li><strong>Communication tools</strong> - For customer support and chat features</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Your Cookie Preferences</h2>
                    <p className="text-gray-700 mb-4">
                        You have full control over which cookies we can use. You can manage your preferences in the following ways:
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Through Our Cookie Banner</h3>
                    <p className="text-gray-700 mb-4">
                        When you first visit our website, you'll see a cookie banner where you can:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Accept all cookies</li>
                        <li>Open the preferences modal to choose which categories to enable</li>
                        <li>View this Cookie Policy for more information</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Through Your Browser</h3>
                    <p className="text-gray-700 mb-4">
                        Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Block all cookies</li>
                        <li>Delete existing cookies</li>
                        <li>Allow cookies only from specific websites</li>
                        <li>Set preferences for third-party cookies</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        <strong>Note:</strong> Blocking or deleting essential cookies may prevent you from using certain
                        features of our website.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookie Retention</h2>
                    <p className="text-gray-700 mb-4">
                        Different cookies have different retention periods:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                        <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                        <li><strong>First-party cookies:</strong> Set by Gaugon directly</li>
                        <li><strong>Third-party cookies:</strong> Set by external services we use</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
                    <p className="text-gray-700 mb-4">
                        We may update this Cookie Policy from time to time to reflect changes in our practices or legal
                        requirements. We'll notify you of any significant changes by posting the new policy on this page
                        and updating the "Last updated" date at the top.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                        <p className="text-gray-700 mb-2"><strong>Email:</strong> support@gaugon.com</p>
                        <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (407) 668-2684</p>
                        <p className="text-gray-700 mb-2"><strong>Website:</strong> https://app.gaugon.com</p>
                        <p className="text-gray-700"><strong>WhatsApp:</strong> +1 (407) 668-2684</p>
                    </div>

                    <div className="mt-12 p-6 bg-primary/10 border-l-4 border-primary rounded">
                        <p className="text-gray-800">
                            <strong>Your Privacy Matters</strong><br />
                            We're committed to protecting your privacy and being transparent about how we use cookies.
                            You can change your cookie preferences at any time through our cookie banner or by clearing
                            your browser cookies and revisiting our site.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
