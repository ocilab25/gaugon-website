# Changelog & Developer Notes

This document tracks major updates, feature implementations, and strategic changes to the Gaugon Website project.
*Note: This file is for developer reference and is not deployed to the public website.*

---

## [2025-12-12] - Feature Expansion (Blog & Security)

### 📰 Feature: Blog Section
Implemented a Git-based Headless CMS using MDX.
- **Architecture**: `frontend/content/posts/*.mdx` parsed by `lib/blog.ts`.
- **UI**: "White Luxury" design system applied to Blog Index (`/blog`) and Post (`/blog/[slug]`) pages.
- **Tech Stack**: `next-mdx-remote`, `@tailwindcss/typography`, `gray-matter`, `date-fns`.
- **Content**: Added "Welcome to Gaugon" sample post.

### 🛡️ Security: CSP Migration
Hardened Content Security Policy for static deployment.
- **Config**: Centralized strict policy in `frontend/config/csp.ts`.
- **Directives**: Implemented `object-src 'none'`, `base-uri 'self'`, and `frame-ancestors 'none'`.
- **Injection**: Dynamic meta tag generation in `layout.tsx`.

### ⚖️ Compliance: Cookie Consent Update
Achieved strict GDPR/CCPA compliance.
- **UI**: Added "Reject All" button and comprehensive `/cookies-policy` page.
- **Logic**: Timestamped consent storage and strict default denial of non-essential cookies.
- **Data**: Verified storage format `{ preferences: {...}, timestamp: "..." }`.

---

## [2025-12-12] - Monorepo & Performance

### 🏗️ Architecture: Monorepo Migration
Migrated the repository to a hybrid monorepo structure to support future backend services.
- **Frontend**: Moved Next.js app to `frontend/`. Package updated to `@gaugon/frontend`.
- **Backend Service**: Initialized `backend/` stub for future API/Proxy implementation.
- **Documentation**: Centralized in `docs/` folder.
- **CI/CD**: Updated GitHub Actions to build from `frontend/` directory.

### ⚡ Performance: Cookie Consent Refactor
Optimized the Cookie Consent component to improve initial page load.
- **Lazy Loading**: `CookieConsentModal` is now dynamically imported only when the user interacts with "Manage Preferences".
- **Code Splitting**: Reduced initial bundle size by removing heavy modal JSX from the main chunk.

---

## [2025-12-12] - White Luxury Refactor (Phase 2 & 3)

### 🎨 Design System: "White Luxury"
Pivoted from "Dark Luxury" to a high-end, clean white aesthetic to align with "Work Smarter, Scale Faster".
- **Palette**: `bg-white` / `bg-surface` (#F8F9FA) with `text-gray-900`.
- **Accents**: Gaugon Purple (#6B4CFF) and Cyan (#00E0FF) retained for branding.
- **Glassmorphism**: Implemented `glass-nav` and `glass-card` using white-tinted blur (`bg-white/80`).

### 🛠 Component Overhaul
Refactored core landing page components to match the new design system:
- **Navbar**: Floating white-glass navigation with dark text and luxury shadows. Added `aria-expanded` interaction feedback.
- **Hero**: Clean, spacious layout with elegant entrance animations.
- **TrustStrip / RealResults**: Replaced standard blocks with glass-card stats and verified-style testimonials.
- **HowItWorks / FinalCTA**: Updated with premium gradients and consistent typography.

### ✨ Animations
- **Framer Motion**: Integrated for scroll-triggered reveal effects.
- **FadeIn**: Created reusable component for consistent entrance animations.

### 🔒 Security & Standards
- **Accessibility**: Audited semantic HTML structure and verified mobile responsiveness.
- **Security**: Verified CSP headers in `layout.tsx`.

## [2025-12-09] - reCAPTCHA & Brand Refinement

### ✅ Feature: Google reCAPTCHA v2 Integration
Implemented "I'm not a robot" checkbox on the Contact Us page.
- **Library**: `react-google-recaptcha` (Dynamic Import).
- **Validation**: Client-side block + Web3Forms server verification.

### 🎨 Brand: Contact Page Refinement
Refined messaging to remove "free/audit" language, positioning Gaugon as a premium partner.

### 🔧 Fixes & DevOps
- **Build Pipeline**: Updated GitHub Actions to use `npm install`.
- **TypeScript**: Fixed `useRef` type mismatch.
