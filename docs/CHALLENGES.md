# 📉 Challenges & Solutions Log

This document tracks technical challenges encountered during development, their root causes, and applied fixes.

---

## [2025-12-13] Portal Routing on Static Export

### 🔴 Issue
The Portal (Admin/Customer) pages at `/portal/*` were 404ing or loading the generic homepage when deployed, or causing navigation issues.
**Root Cause**: Next.js Static Export (`output: 'export'`) does not support dynamic server-side routing or middleware in the same way a Node.js server does. It pre-renders pages. Dynamic segments like `[id]` require `generateStaticParams` which is not feasible for authenticated dynamic portals.

### 🟢 Solution
**Architectural Decision**: Identify Portal as a "Dynamic App" vs Marketing "Static Site".
- **Fix**: Documented need for separate deployment target (`portal.gaugon.com`).
- **Ref**: `docs/PORTAL_DEPLOYMENT.md`

---

## [2025-12-13] Build Errors via GitHub Actions

### 🔴 Issue
`npm run build` failed due to:
1. `Contact.tsx` referencing a removed config key `ACCESS_KEY`.
2. ESLint checks failing on exhaustive-deps in `useEffect`.
3. TypeScript errors on missing props.

### 🟢 Solution
- **Fix 1**: Refactored `Contact.tsx` to use Backend API Proxy instead of direct Web3Forms access (Security improvement).
- **Fix 2**: Applied `useCallback` where appropriate and `eslint-disable` where dependency exclusion was intentional (loops).
- **Verification**: Local build passes, CI passes.

---

## [2025-12-12] Admin Panel Migration (MUI -> shadcn/ui)

### 🔴 Issue
Legacy Material UI components were causing bloating and style conflicts with Tailwind CSS.

### 🟢 Solution
- **Fix**: Complete refactor to `shadcn/ui` (Radix Primitives + Tailwind).
- **Outcome**: Unified design system ("White Luxury"), removed MUI dependency, reduced bundle size.
