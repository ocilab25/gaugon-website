export default function TermsPage() {
    const lastUpdated = "December 9, 2024";

    return (
        <main className="pt-20">
            <section className="py-20 bg-white px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Terms of Use
                    </h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Last updated: {lastUpdated}
                    </p>

                    {/* Introduction */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">In plain English:</strong> By using our site or services, you agree to these terms. If you don't agree, please don't use the site. We're a business, you're a user (or business), and these rules keep things running smoothly.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms of Use ("Terms") act as a binding legal agreement between you and Gaugon ("we," "us," or "our"). By accessing our website, using our services, or engaging with our content, you agree to comply with these Terms. If you do not agree, strictly refrain from using our services.
                        </p>
                    </div>

                    {/* Use of Services */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="usage">
                            Using Our Services
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">The rules:</strong> Don't try to hack us, spam us, or use our stuff for anything illegal. Be a decent human being. If you hire us, we'll have a separate contract (Statement of Work) that covers the specific project details.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree to use our website and services only for lawful purposes. You are prohibited from:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                            <li>Violating any applicable local, state, national, or international laws.</li>
                            <li>Attempting to gain unauthorized access to our systems or user accounts.</li>
                            <li>Distributing viruses, malware, or other harmful code.</li>
                            <li>Interfering with the proper operation of our website or infrastructure.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Specific client engagements for automation or IT services will be governed by a separate Master Services Agreement (MSA) or Statement of Work (SOW), which supersedes these Terms regarding project deliverables.
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="ip">
                            Intellectual Property
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Who owns what:</strong> The stuff on this site (text, logos, designs) is ours. You can't steal it or pretend it's yours. If we build something for you, ownership of that work is defined in our separate client contract.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            All content, trademarks, designs, and intellectual property on this website are owned by Gaugon unless otherwise noted. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Client Deliverables:</strong> Intellectual property rights for custom automation solutions or code developed for clients are subject to the specific terms outlined in your client agreement/SOW.
                        </p>
                    </div>

                    {/* Disclaimers */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="disclaimer">
                            Disclaimers & Limitation of Liability
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">No promises:</strong> We work hard to be accurate, but technology changes fast. We provide this site "as is." We aren't liable if a third-party tool we mention breaks or if you lose data because you didn't back it up (though we can help you set up backups!).
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Website Content:</strong> The information provided on this website is for general informational purposes only. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of this content.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Gaugon shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, usage, data, or other intangible losses.
                        </p>
                    </div>

                    {/* Changes */}
                    <div className="mb-12 pb-12 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="changes">
                            Changes to Terms
                        </h2>
                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Updates:</strong> We might update these terms. Check back here to see the latest version.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify these Terms at any time. We will indicate the date of the last revision at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
                        </p>
                    </div>

                    {/* Governing Law */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6" id="law">
                            Governing Law
                        </h2>
                        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Location:</strong> We are based in the United States. If there's a legal dispute, it happens under US law.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms shall be governed and construed in accordance with the laws of the United States and the State of Florida, without regard to its conflict of law provisions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Questions about these Terms? Contact us at <a href="mailto:hello@gaugon.com" className="text-primary hover:underline">hello@gaugon.com</a>.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
