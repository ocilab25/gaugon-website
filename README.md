# Gaugon Website (Monorepo)

The marketing and lead generation site for **Gaugon**—an AI automation and IT solutions consultancy.

**Live Site:** [app.gaugon.com](https://app.gaugon.com)  
**Admin Portal:** [app.gaugon.com/portal/login](https://app.gaugon.com/portal/login)  

---

## 🏗️ Monorepo Structure

This repository follows a full-stack architecture:

```text
/
├── app/                # Next.js 14 App Router (Marketing + Portal)
├── backend/            # Express/Node.js API Service
├── components/         # Shared UI Components
├── lib/                # Shared Utilities
├── docs/               # Project Documentation
└── package.json        # Root workspace config
```

## ⚡ Quickstart

For detailed setup steps, see the **[Replication Guide](docs/Architecture/REPLICATION_GUIDE.md)**.

### 1. Requirements
- Node.js 20+
- MongoDB Instance

### 2. Setup
```bash
git clone https://github.com/ocilab25/gaugon-website.git
npm install
```

### 3. Run Locally

**Frontend (Port 3000):**
```bash
npm run dev
```

**Backend (Port 5000):**
```bash
cd backend
npm run dev
```

## 📚 Documentation

Detailed documentation is located in the `docs/` directory:

- 🏛️ **[Replication Guide](docs/Architecture/REPLICATION_GUIDE.md)** (Start Here)
- 🗺️ **[Roadmap](docs/ROADMAP.md)**
- 📉 **[Challenges Log](docs/CHALLENGES.md)**
- 📝 [Changelog](CHANGELOG.md)
- 🔒 [Project Rules](docs/rules.md)

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

