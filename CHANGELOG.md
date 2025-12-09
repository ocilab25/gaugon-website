# Changelog & Developer Notes

This document tracks major updates, feature implementations, and strategic changes to the Gaugon Website project.
*Note: This file is for developer reference and is not deployed to the public website.*

---

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

---

## Developer Guide

### Private Files (Do Not Commit)
- `.env.local` - Contains API keys (Web3Forms Access Key, reCAPTCHA Secret).

### Public Files (Safe to Commit)
- `CHANGELOG.md` (This file)
- `RECAPTCHA_SETUP.md`
- `GITHUB_SECRET_SETUP.md`
