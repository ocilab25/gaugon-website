# Gaugon Website

The marketing and lead generation site for **Gaugon**—an AI automation and IT solutions consultancy.

Gaugon helps businesses map workflows, identify security gaps, and automate repetitive tasks using the tools they already own. This site serves as the primary touchpoint for potential clients to understand our services (audits, automation sprints) and book consultations.

**Live Site:** [app.gaugon.com](https://app.gaugon.com)  

---

## 🚀 Key Features

*   **Lead Capture & Forms**: 
    *   Contact forms integrated with **Web3Forms**.
    *   Spam protection via **hCaptcha** (Zero-Config for Free Plan).
    *   Honeypot fields for extra bot mitigation.
*   **Performance**: 
    *   Static export (SSG) for hosting on GitHub Pages.
    *   Optimized images via `next/image` (unoptimized for static export compatibility).
*   **Security (AppSec First)**:
    *   Strict **Content Security Policy (CSP)**.
    *   **HSTS** and security headers configured via meta tags (migration to Cloudflare Headers planned).
    *   privacy-focused analytics (no heavy tracking scripts).
*   **Pricing & Services**:
    *   Clear tiered pricing tables.
    *   Detailed service breakdowns for AI Automation and IT Foundation.

## 🛠 Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Language**: TypeScript
*   **Forms**: [Web3Forms](https://web3forms.com/) + [hCaptcha](https://www.hcaptcha.com/)
*   **Deployment**: GitHub Pages (via GitHub Actions)

## ⚡ Local Development

### Prerequisites
*   Node.js 20+
*   npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ocilab25/gaugon-website.git

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```
This generates a static `out/` directory ready for deployment.

## 🚢 Deployment Workflow

We use **GitHub Actions** to automatically build and deploy to GitHub Pages.

1.  **Develop**: Create a feature branch (e.g., `feat/pricing-update`).
2.  **Test**: Verified locally with `npm run build`.
3.  **Push**: Open a Pull Request (PR) to `main`.
4.  **Deploy**: Merging into `main` triggers the workflow in `.github/workflows/static.yml`.

> [!NOTE]
> The site is deployed to a custom domain (`app.gaugon.com`). The `CNAME` file is generated in the `public/` folder to persist this setting.

## 🔐 Security & Privacy

### Content Security Policy (CSP)
We enforce a strict CSP in `app/layout.tsx` to prevent XSS and unauthorized script loading.
*   **Allowed Scripts**: 'self', hCaptcha.
*   **Allowed Connects**: 'self', hCaptcha, Web3Forms API.

If you add a new third-party script, you **must** update the CSP whitelist or it will be blocked.

### hCaptcha Integration
We use the **Web3Forms Shared Site Key** for spam protection.
*   **Key**: `50b2fe65-b00b-4b9e-ad62-3ba471098be2` (This is public and safe to commit).
*   **Docs**: See [HCAPTCHA_SETUP.md](HCAPTCHA_SETUP.md) for details.

### Environment Variables
For the current static setup on the free tier, **no secrets or .env files are required** for the build to pass.

## 📐 Coding Standards

*   **Linting**: Run `npm run lint` before committing.
*   **Formatting**: Prettier is used (via IDE settings).
*   **Components**: Co-located in `components/sections` if used on specific landing pages.
*   **Images**: Use `next/image` with `width`/`height` props to prevent layout shift.

## 📝 Roadmap / TODOs

- [ ] **Cookie Consent**: The current banner component is large (~14KB). Needs refactoring or replacement with a lighter alternative.
- [ ] **CSP Migration**: Move security headers from `<meta>` tags to Cloudflare or server-side headers if we move off GitHub Pages.
- [ ] **Blog/Content**: Add a CMS-backed blog section for SEO/content marketing.
- [ ] **Analytics**: Evaluate privacy-friendly analytics (e.g., Plausible, Fathom) vs current setup.
