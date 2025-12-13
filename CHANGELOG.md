# Changelog & Developer Notes

This document tracks major updates, feature implementations, and strategic changes to the Gaugon Website project.
*Note: This file is for developer reference and is not deployed to the public website.*

---

## [2025-12-13] - Portal Backend Implementation

### 🚀 Backend API Complete
Implemented full Express/Node.js backend with MongoDB, JWT authentication, and role-based access control for the portal system.

**Architecture:**
- **Stack**: Express.js, MongoDB (Mongoose), TypeScript
- **Authentication**: JWT with refresh tokens (8h access, 7-day refresh)
- **Roles**: Admin, Staff, Customer with role-based access control
- **Security**: Rate limiting, password hashing (bcrypt), data isolation

**Features:**
- **Multi-Role System**: Admin (full access), Staff (limited), Customer (self-service)
- **Data Isolation**: Customers cannot see admins/staff (security requirement)
- **Subscription Management**: Full subscription system with plans (Standard, Plus, Max, Enterprise)
- **Multi-Subdomain CORS**: Supports multiple frontend subdomains on same Render service
- **Health Endpoints**: Database and general health checks

**Models Created:**
- `User` (base model with discriminator pattern)
- `Admin` (extends User, with permissions)
- `Staff` (extends User, with assigned customers)
- `Customer` (extends User, with profile and subscription)
- `Subscription` (separate collection for subscription management)

**API Endpoints:**
- `/api/auth/*` - Authentication (register, login, refresh, logout, me)
- `/api/admin/*` - Admin routes (customers, staff management)
- `/api/customer/*` - Customer routes (profile, subscription)
- `/api/subscriptions/*` - Subscription management
- `/api/health/*` - Health checks

**Security:**
- Rate limiting: 5 attempts per 15 minutes on auth endpoints
- JWT token rotation on refresh
- Password hashing with bcrypt (12 salt rounds)
- Role-based middleware for access control
- Data isolation middleware prevents customer access to admin data

**Deployment:**
- Dockerfile included for containerization
- Render.com deployment guide created
- Environment variable template provided
- CLI script for creating first admin

**Files Created:**
- `backend/src/server.ts` - Express server with CORS
- `backend/src/models/*` - All user and subscription models
- `backend/src/middleware/*` - Auth, roles, data isolation
- `backend/src/routes/*` - All API route handlers
- `backend/src/utils/jwt.ts` - JWT utilities
- `backend/src/scripts/createAdmin.ts` - Admin creation script
- `backend/README.md` - Complete API documentation
- `backend/RENDER_DEPLOY.md` - Deployment guide

**Next Phase:** Frontend portal with shadcn/ui components (White Luxury design)

---

## [2025-12-12] - Logo Consistency Fix

### 🎨 Branding
- **Navbar**: Increased logo size from `h-12` to `h-14 md:h-16` for better visual impact.
- **Footer**: Replaced CSS gradient text with standard `logo.png` image for brand consistency.

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
- Integrated `framer-motion` for scroll-triggered reveal effects.
- Created reusable `<FadeIn>` component for consistent entrance animations across sections.

### 🔒 Security & Standards
- **Accessibility**: Audited semantic HTML structure and verified mobile responsiveness.
- **Security**: Verified CSP headers in `layout.tsx`. Identified direct client-side Web3Forms usage (necessary for Static Export).

## [2025-12-09] - reCAPTCHA & Brand Refinement

### ✅ Feature: Google reCAPTCHA v2 Integration
Implemented "I'm not a robot" checkbox on the Contact Us page to prevent spam.

**Technical Implementation:**
- **Library:** `react-google-recaptcha`
- **Render Mode:** Dynamic Import with `{ ssr: false }` to prevent Next.js server-side hydration errors.
- **Validation:** 
  - Client-side: Blocks form submission if token is missing.
  - Server-side: Web3Forms automatically verifies the token using the Secret Key.
- **Keys:**
  - Site Key (Public): Hardcoded for reliability (`6LfqfCYs...`).
  - Secret Key (Private): Stored in `env.local` and GitHub Secrets.

**Setup Requirements:**
- New developers must run `npm install`.
- Local `.env.local` file needed for development.
- GitHub Actions workflow (`static.yml`) updated to inject secrets during build.

### 🎨 Brand: Contact Page Refinement
Refined messaging to remove "free/audit" language, positioning Gaugon as a premium partner.

**Changes:**
- **Headline:** Changed "Book Your Free AI Automation Audit" → "Architect Your Automation Strategy".
- **Terminology:** Replaced "Audit" with "Consultation" throughout the page.
- **Tone:** Professional, strategic, corporate alignment (Accenture-style).

### 🔧 Fixes & DevOps
- **Build Pipeline:** Updated GitHub Actions to use `npm install` instead of `npm ci` to handle package updates.
- **TypeScript:** Fixed `useRef` type mismatch with dynamic reCAPTCHA component.
- **Consistency:** ensured all success/error messages reflect the new "Consultation" terminology.

### 💄 UI: Competitive Comparison Table
- **Component:** `PainSolution.tsx`
- **Change:** Replaced generic "problem cards" with a direct "Typical Consultant vs. Gaugon Workflow" comparison table.
- **Goal:** Highlight differentiation using "Old Way vs. New Way" framing (inspired by Authority Hacker).
- **Style:** 2-column grid, visual cues (Red X vs Green Check), stacked on mobile.

### 📦 UI: Modular System Components
- **Component:** `Services.tsx`
- **Change:** Swapped generic "IT Support/Web Design" lists for "Core Systems" cards (e.g., Lead Capture, Onboarding, Command Center).
- **Goal:** Position Gaugon as a "Systems Architect" rather than a generalist agency.
- **Style:** 3-column, icon-heavy, concise outcome descriptions.

### 🏆 UI: Results-Anchored Trust Strip
- **Component:** `TrustStrip.tsx`
- **Change:** Added a bold "700+ Hours Saved" metric block next to client logos.
- **Goal:** Provide immediate quantitative proof before social proof (Authority Hacker style).
- **Style:** Large typography metric, separated by divider, reduced opacity for logos.

### 👤 UI: Founder Authority Block
- **Component:** `About.tsx`
- **Change:** Replacing generic mission text with a personal "Lead Architect" bio.
- **Goal:** Build trust through personal expertise ("15 years building systems").
- **Style:** 2-column layout, pull quote, certified expert badge, placeholder for founder image.

### 🚦 UI: Red/Green Qualification Gate
- **Component:** `WhoThisIsFor.tsx`
- **Change:** Implemented polarizing "Green Logic" vs "Red Logic" cards.
- **Goal:** Filter for ideal clients by explicitly repelling bad fits (Authority Hacker style).
- **Style:** Border-top indicators (Green/Red), clear check/cross iconography.

---

## Developer Guide

### Private Files (Do Not Commit)
- `.env.local` - Contains API keys (Web3Forms Access Key, reCAPTCHA Secret).

### Public Files (Safe to Commit)
- `CHANGELOG.md` (This file)
- `RECAPTCHA_SETUP.md`
- `GITHUB_SECRET_SETUP.md`

## [2025-12-13] - ROI Calculator & Conversion Optimization

### dY" Feature: ROI Calculator
- **New Component:** `ROICalculator.tsx`
- **Functionality:** Interactive slider (0-40 hours) to visualize "Cost of Inaction".
- **Design:** White Luxury aesthetics with glassmorphism and counter animations.
- **Placement:** Integrated into `page.tsx` after the "Who This Is For" section.

### dYZ" Copy: Strategic Alignment
- **Navbar/Mobile Menu:** Renamed "Book Audit" to "Book Consultation" to align with the new high-end positioning.
- **Consistency:** Ensured all CTAs reflect the "Consultation" model over the "Free Audit" model.

## [2025-12-13] - Console Cleanup & Sticky CTA

### 🛠️ Console Cleanup
- **FinalCTA.tsx:** Removed reference to missing `noise.png` texture (was causing 404).
- **Pricing Page:** Created `app/pricing/page.tsx` placeholder (empty directory was causing 404).

### 🚀 Feature: Sticky "Book Consultation" Widget
- **New Component:** `StickyBookCTA.tsx`
- **Behavior:** Floating CTA appears in bottom-right corner after user scrolls 50% of the page.
- **Style:** Purple button with glassmorphic shadow, calendar icon, and hover animation.
- **Integration:** Added globally via `app/layout.tsx`.
## [2025-12-13] - Portal Deployment & Fixes

### 🚀 Admin Portal & Role-Based Access Live
- **Deployment**: Successfully deployed Admin and Customer portals to Production (`app.gaugon.com/portal/login`).
- **Access Control**: Validated role-based separation:
  - **Admin**: Routes to `/portal/admin/dashboard`
  - **Staff**: Routes to `/portal/staff/dashboard`
  - **Customer**: Routes to `/portal/customer/dashboard`
- **Security**: Redirects unauthorized users and handles "Access Denied" scenarios correctly.

### 🔧 Build & Infrastructure Fixes
- **Backend Root Route**: Added explicit `/` handler to Backend to prevent 404s on health checks.
- **Frontend Dependencies**: Updated `lucide-react` to resolve "Module not found" errors during Render build.
- **GitHub Actions**: Restored and validated `deploy-marketing.yml` for correct GitHub Pages deployment.
- **Render Config**: Corrected "Publish Directory" to `out` for Next.js Static Export compatibility.

### 🛡️ Security & Scalability (Track 1)
- **Hardening**: Implemented strict `Permissions-Policy` header in `layout.tsx` to disable unused browser features (camera, mic, etc.).
- **CI/CD**: Added automated `npm audit` security scanning to the GitHub Actions deployment workflow.
- **Documentation**: Created `docs/CLOUDFLARE_MIGRATION.md` with a step-by-step guide for future migration to Cloudflare Pages.

### 🎨 Frontend & Experience (Track 2)
- **Dark Mode**: Implemented system-aware "Dark Luxury" mode with a toggle in the navbar.
- **Blog Engine**: Added a static blog system with client-side fuzzy search and filtering (`/blog`).
- **Animations**: Added smooth page transition animations using framer-motion.

### 📈 Product & Growth (Track 3)
- **SEO**: Automated generation of `sitemap.xml` and `robots.txt` for better search indexing.
- **Engagement**: Added Newsletter Signup form to the Footer (connected to Web3Forms logic).
- **Analytics**: Prepared `layout.tsx` for privacy-first analytics integration (stubbed).

### 🔒 Security Hardening (Phase 8)
- **Credential Protection**: Moved Web3Forms access key from client-side bundle to Backend environment variables.
- **Backend Proxy**: Implemented `/api/forms/contact` and `/api/forms/newsletter` with strict **Zod** schema validation and rate limiting (5 req/hr).
- **Static Security**: Added `public/_headers` to enforce CSP, HSTS, X-Frame-Options, and X-Content-Type-Options for static hosting.
- **Cleanup**: Removed sensitive data from `lib/config.ts` and refactored form components to use the new secure backend API.

## [2025-12-13] - Portal Enhancement: Invoice System (Phase 9)

### 🧾 Invoice System (Ported from EdAndCod)
- **Backend Model**: Created `Invoice.ts` with auto-incrementing invoice numbers (`GAU-YYYY-0001` format).
- **Backend API**: Full CRUD routes at `/api/invoices` with Zod validation and auth middleware.
- **PDF Generation**: Professional invoice PDFs using `pdfkit` with Gaugon branding.
- **Email Delivery**: Nodemailer integration for sending invoices with PDF attachments.
- **Admin Portal UI**:
  - Invoices list page with status badges, actions (Download PDF, Send Email, Mark Paid).
  - Create Invoice form with dynamic line items, tax calculation, and live totals.
- **Customer Portal UI**: Invoice history page with download functionality.
- **Auth Enhancement**: Added `token` to AuthContext for API calls.
