# Gaugon Website (Monorepo)

The marketing and lead generation site for **Gaugon**—an AI automation and IT solutions consultancy.

**Live Site:** [app.gaugon.com](https://app.gaugon.com)  

---

## 🏗️ Monorepo Structure

This repository follows a split architecture:

```text
/
├── frontend/           # Next.js 14 Application (UI + Blog)
├── backend/            # Express/Node.js Service (Stub/API)
├── docs/               # Project Documentation & Protocols
├── scripts/            # Deployment & Maintenance Scripts
└── package.json        # Workspaces Configuration
```

## 🚀 Key Features

*   **Lead Capture**: Web3Forms + hCaptcha (Zero-Config).
*   **Blog Engine**: Git-based MDX CMS with "White Luxury" UI.
*   **Security**: Strict CSP, HSTS, Privacy-first Analytics ready.
*   **Compliance**: GDPR/CCPA Cookie Consent with Timestamping.
*   **Design**: "White Luxury" aesthetic with glassmorphism and Framer Motion.

## ⚡ Local Development

### Prerequisites
*   Node.js 20+
*   npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ocilab25/gaugon-website.git

# Install dependencies for all workspaces (including Blog deps)
npm install
```

### Running Locally

```bash
# Run the frontend (Next.js)
npm run dev --workspace=frontend
```

Open [http://localhost:3000](http://localhost:3000).

## 🚢 Deployment

We use **GitHub Actions** to automatically build and deploy the `frontend/` workspace to GitHub Pages.

1.  **Develop**: Create feature branches off `dev` or `main`.
2.  **Test**: `npm run build --workspace=frontend`.
3.  **Merge**: PR to `main` triggers deployment.

## 📚 Documentation

Detailed documentation is located in the `docs/` directory:

- [Changelog](docs/CHANGELOG.md)
- [Project Rules](docs/rules.md)
- [hCaptcha Setup](docs/HCAPTCHA_SETUP.md)

## 🗺️ Roadmap & Next Sprints

### 🛡️ Security & Scalability (Agent 00)
- **Permissions-Policy**: Implement strict feature-policy headers.
- **Dependency Audit**: Automate `npm audit` in CI pipeline.
- **Cloudflare Migration**: Move from GitHub Pages to Cloudflare for edge headers.

### 🎨 Frontend & Experience (Agent 02)
- **Dark Mode**: Toggle between "White Luxury" and "Dark Luxury".
- **Blog Search**: Client-side fuzzy search for articles.
- **Transitions**: Page transition animations using Animate Presence.

### 📈 Product & Growth (Agent 03)
- **Analytics**: Integrate privacy-first analytics (e.g., Plausible).
- **SEO Tuning**: Auto-generate sitemap.xml and robots.txt.
- **Lead Magnet**: Integrate newsletter signup in the Blog footer.
