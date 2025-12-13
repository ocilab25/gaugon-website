/**
 * Shared configuration constants for external services.
 * Centralized here to avoid magic strings throughout the codebase.
 */

export const WEB3FORMS_CONFIG = {
    // Moved to Backend for security. This now points to our proxy.
    API_URL: process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/forms/contact`
        : "https://gaugon-api.onrender.com/api/forms/contact",
} as const;
