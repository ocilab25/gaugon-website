"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { CookiePreferences } from "./CookieConsentModal";

const CookieConsentModal = dynamic(() => import("./CookieConsentModal"), {
    ssr: false,
});

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        essential: true, // Always enabled
        functional: false,
        performance: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        } else {
            const savedPreferences = JSON.parse(consent);
            setPreferences(savedPreferences);
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem("cookieConsent", JSON.stringify(prefs));
        setPreferences(prefs);
        setShowBanner(false);
        setShowModal(false);
    };

    const acceptAll = () => {
        const allAccepted: CookiePreferences = {
            essential: true,
            functional: true,
            performance: true,
            marketing: true,
        };
        savePreferences(allAccepted);
    };

    const saveCustomPreferences = () => {
        savePreferences(preferences);
    };

    const togglePreference = (key: keyof Omit<CookiePreferences, "essential">) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    if (!showBanner && !showModal) return null;

    return (
        <>
            {/* Cookie Banner */}
            {showBanner && (
                <div
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cookie-banner-title"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex-1">
                                <h2 id="cookie-banner-title" className="text-lg font-semibold text-gray-900 mb-2">
                                    Cookie Notice
                                </h2>
                                <p className="text-sm text-gray-600">
                                    We use cookies to ensure you get the best experience on our website and services.
                                    These include essential, functional, performance, and third-party cookies. Manage your
                                    preferences or view our{" "}
                                    <a
                                        href="/cookie-policy"
                                        className="text-primary underline hover:text-primary/80"
                                        onClick={() => setShowBanner(false)}
                                    >
                                        Cookie Policy
                                    </a>{" "}
                                    to learn more.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
                                    aria-label="Manage cookie preferences"
                                    onMouseEnter={() => {
                                        // Prefetch the modal when user hovers over the button
                                        const _ = import("./CookieConsentModal");
                                    }}
                                >
                                    Manage Preferences
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
                                    aria-label="Accept all cookies"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Preferences Modal - Lazy Loaded */}
            {showModal && (
                <CookieConsentModal
                    preferences={preferences}
                    togglePreference={togglePreference}
                    onClose={() => setShowModal(false)}
                    onSave={saveCustomPreferences}
                />
            )}
        </>
    );
}
