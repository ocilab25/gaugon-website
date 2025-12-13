import React, { useEffect } from "react";

export interface CookiePreferences {
    essential: boolean;
    functional: boolean;
    performance: boolean;
    marketing: boolean;
}

interface CookieConsentModalProps {
    preferences: CookiePreferences;
    togglePreference: (key: keyof Omit<CookiePreferences, "essential">) => void;
    onClose: () => void;
    onSave: () => void;
}

const CookieConsentModal: React.FC<CookieConsentModalProps> = ({
    preferences,
    togglePreference,
    onClose,
    onSave,
}) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
        >
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 id="cookie-modal-title" className="text-xl font-bold text-gray-900">
                        Cookie Preferences
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close preferences modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="px-6 py-6 space-y-6">
                    <p className="text-sm text-gray-600">
                        We use different types of cookies to optimize your experience on our website.
                        Click on the categories below to learn more and customize your preferences.
                    </p>

                    {/* Essential Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">Essential Cookies</h3>
                                <p className="text-sm text-gray-600">
                                    Required for the website to function properly. These cookies enable core functionality
                                    such as security, network management, and accessibility. They cannot be disabled.
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded">
                                    Always Active
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">Functional Cookies</h3>
                                <p className="text-sm text-gray-600">
                                    Enable enhanced functionality and personalization, such as remembering your preferences
                                    and settings. Disabling these may affect certain features.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    role="switch"
                                    aria-checked={preferences.functional}
                                    onClick={() => togglePreference("functional")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${preferences.functional ? "bg-primary" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.functional ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Performance/Analytics Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">Performance & Analytics</h3>
                                <p className="text-sm text-gray-600">
                                    Help us understand how visitors interact with our website by collecting and reporting
                                    information anonymously. This helps us improve our services.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    role="switch"
                                    aria-checked={preferences.performance}
                                    onClick={() => togglePreference("performance")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${preferences.performance ? "bg-primary" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.performance ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Marketing/Third-party Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">Marketing & Third-party</h3>
                                <p className="text-sm text-gray-600">
                                    Used to track visitors across websites to display relevant advertisements.
                                    May also be set by third-party services integrated into our site.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    role="switch"
                                    aria-checked={preferences.marketing}
                                    onClick={() => togglePreference("marketing")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${preferences.marketing ? "bg-primary" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.marketing ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSave}
                        className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentModal;
