# Gaugon Website (Monorepo)

The marketing and lead generation site for **Gaugon**—an AI automation and IT solutions consultancy.

**Live Site:** [app.gaugon.com](https://app.gaugon.com)  
**Admin Portal:** [app.gaugon.com/portal/login](https://app.gaugon.com/portal/login)  

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

### Marketing Site
*   **Lead Capture**: Web3Forms + hCaptcha (Zero-Config).
*   **Blog Engine**: Git-based MDX CMS with "White Luxury" UI.
*   **Security**: Strict CSP, HSTS, Privacy-first Analytics ready.
*   **Compliance**: GDPR/CCPA Cookie Consent with Timestamping.
*   **Design**: "White Luxury" aesthetic with glassmorphism and Framer Motion.

### Portal System (Admin & Customer)
*   **Authentication**: JWT-based auth with refresh tokens and rate limiting.
*   **Invoice Management**: Full CRUD, PDF generation, email delivery.
*   **Service Requests**: Quote workflow, progress tracking, status history.
*   **Audit Logging**: Complete action tracking for compliance.
*   **Customer Portal**: Self-service dashboard for invoices and service requests.
*   **Admin Portal**: Full management dashboard with analytics.

### Backend API
*   **Express + MongoDB**: RESTful API with Mongoose ODM.
*   **Security**: Rate limiting, audit logs, DB health checks.
*   **Email**: Nodemailer integration for invoices and notifications.
*   **PDF Generation**: Professional invoice PDFs with pdfkit.

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

## 🗺️ Roadmap (Completed Sprints) ✅
*All items below were executed and verified on 2025-12-13.*

### 🛡️ Security & Scalability (Completed)
- **Permissions-Policy**: Implemented strict feature-policy headers (`layout.tsx`).
- **Dependency Audit**: Automated `npm audit` in CI pipeline (`deploy-marketing.yml`).
- **Cloudflare Ready**: Migration guide created for future edge deployment.
- **Rate Limiting**: Login endpoint protected (5 attempts/15min).
- **Audit Logging**: Complete action tracking for invoice operations.
- **DB Health Check**: MongoDB connection monitoring endpoint.

### 🎨 Frontend & Experience (Completed)
- **Dark Mode**: System-aware "Dark Luxury" mode with Navbar toggle.
- **Blog Engine**: Fully operational with client-side fuzzy search.
- **Transitions**: Smooth page transitions via Framer Motion.
- **Portal UI**: Admin and Customer portals with shadcn/ui components.

### 📈 Product & Growth (Completed)
- **Analytics**: Stubbed for privacy-first analytics integration.
- **SEO Tuning**: Auto-generated `sitemap.xml` and `robots.txt`.
- **Lead Magnet**: Newsletter signup form integrated into Footer.

### 🧾 Business Systems (NEW - Completed 2025-12-13)
- **Phase 9: Invoice System**
  - Auto-increment invoice numbers (GAU-YYYY-0001)
  - PDF generation with professional layout
  - Email delivery with attachments
  - Admin: Create, manage, send invoices
  - Customer: View and download invoices
  
- **Phase 10: Security Enhancements**
  - Audit logging for all invoice actions
  - Rate limiting on authentication
  - Database health monitoring
  
- **Phase 11: Service Request System**
  - Service request workflow (GAU-SR-YYYY-0001)
  - Quote approval process
  - Progress tracking with status history
  - Admin: Quote, approve, track services
  - Customer: Submit requests, approve quotes

## 📋 Next Steps

See `GO_NOGO_CHECKLIST.md` for deployment readiness.
See `PORTAL_DEPLOYMENT.md` for portal routing solution.

## 🔗 Links

- **Live Site**: [app.gaugon.com](https://app.gaugon.com)
- **Backend API**: [gaugon-website.onrender.com](https://gaugon-website.onrender.com)
- **Portal**: See `PORTAL_DEPLOYMENT.md` for setup instructions

