# 🚀 Gaugon Website Deployment Summary

## ✅ Framework Detected
**Next.js 14.2.33** (Monorepo Structure) with Static Site Generation (SSG) + Express Backend.

---

## 🏗️ Architecture Layout
The project is a **Full-Stack Monorepo** managed by npm workspaces.

```text
/
├── app/                # Next.js 14 App Router (Marketing + Portal)
├── backend/            # Express + MongoDB API (Deployed to Render)
├── components/         # Shared React Components
├── lib/                # Utilities and Config
├── docs/               # Documentation
└── package.json        # Root Workspace Config
```

### Deployment Architecture:
```
┌─────────────────────────────────────────┐
│  Frontend (Static)                      │
│  https://app.gaugon.com                 │
│  ├── Marketing Site (/)                 │
│  └── Portal (/portal/*) - Needs Setup   │
└─────────────────────────────────────────┘
              │
              ▼ API Calls
┌─────────────────────────────────────────┐
│  Backend (Node.js + Express)            │
│  https://gaugon-website.onrender.com    │
│  ├── Auth API (/api/auth)               │
│  ├── Invoice API (/api/invoices)        │
│  ├── Service API (/api/services)        │
│  └── Forms API (/api/forms)             │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Database (MongoDB Atlas)               │
│  - Users, Customers, Invoices           │
│  - Service Requests, Audit Logs         │
└─────────────────────────────────────────┘
```

---

## 📝 Key Features (2025-12-13 Updates)

### 1. 🛡️ Security First
- **CSP**: Strict Content Security Policy in `app/layout.tsx`.
- **Cookies**: Fully GDPR/CCPA compliant consent with "Reject All" support.
- **Rate Limiting**: Login endpoint protected (5 attempts/15min).
- **Audit Logging**: Complete action tracking for compliance.
- **JWT Auth**: Refresh tokens with 7-day expiry.

### 2. 📰 Blog Engine
- **Headless CMS**: Git-based content using MDX.
- **Zero-Cost**: Hosted statically, no external CMS required.
- **Design**: "White Luxury" UI components.

### 3. 🧾 Business Systems (NEW)
- **Invoice Management**: Full CRUD, PDF generation, email delivery.
- **Service Requests**: Quote workflow, progress tracking.
- **Customer Portal**: Self-service dashboard.
- **Admin Portal**: Complete management interface.

### 4. ⚡ Operations
- **Monorepo**: Clean separation of frontend/backend.
- **CI/CD**: GitHub Actions for frontend, Render for backend.
- **Auto-Deploy**: Push to main triggers deployments.

---

## 🔧 Build Configuration

### Frontend Build:
```bash
# Run from root
npm run build
```

**Output**: `out/` directory (static HTML/CSS/JS)

### Backend Build:
```bash
# Run from backend/
cd backend
npm run build
```

**Output**: `backend/dist/` (TypeScript compiled to JavaScript)

---

## 🌐 Deployment Targets

### Frontend (GitHub Pages):
- **URL**: [https://app.gaugon.com](https://app.gaugon.com)
- **Trigger**: Push to `main` branch
- **Workflow**: `.github/workflows/deploy-marketing.yml`
- **CNAME**: Located in `public/CNAME`

### Backend (Render):
- **URL**: [https://gaugon-website.onrender.com](https://gaugon-website.onrender.com)
- **Trigger**: Push to `main` branch (auto-detected by Render)
- **Build**: `cd backend && npm install && npm run build`
- **Start**: `cd backend && npm start`

### Portal (Needs Setup):
⚠️ **Portal routes (`/portal/*`) don't work with static export.**

**Solution**: See `PORTAL_DEPLOYMENT.md` for options:
1. Deploy to `portal.gaugon.com` (Recommended)
2. Remove static export and use Vercel
3. Separate portal repository

---

## 🎯 Post-Deployment Checklist

### Frontend Verification:
- [ ] GitHub Actions workflow completes successfully
- [ ] Visit https://app.gaugon.com - verify homepage loads
- [ ] **Blog**: Check `/blog` works
- [ ] **Consent**: Verify cookie banner works
- [ ] **Console**: No CSP violations in DevTools
- [ ] **Forms**: Test contact form submission

### Backend Verification:
- [ ] Render deployment succeeds
- [ ] Health check: `GET https://gaugon-website.onrender.com/api/health`
- [ ] DB health: `GET https://gaugon-website.onrender.com/api/health/db`
- [ ] Auth works: `POST /api/auth/login`

### Portal Verification (After Setup):
- [ ] Login page accessible
- [ ] Admin dashboard loads
- [ ] Invoice creation works
- [ ] Service requests work

---

## 🚨 Troubleshooting

### Frontend Issues:

**If deployment fails:**
1. Check GitHub Actions logs
2. Ensure `npm run build` works locally
3. Verify `out/` directory is generated

**If Portal 404s:**
- Portal needs separate deployment (see `PORTAL_DEPLOYMENT.md`)
- Static export doesn't support `/portal/*` routes

### Backend Issues:

**If API fails:**
1. Check Render logs
2. Verify MongoDB connection string in env vars
3. Ensure all env vars are set (see `PRODUCTION_ENV_SETUP.md`)

**If emails don't send:**
- Check SMTP credentials in Render env vars
- Verify `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` are set

---

## ⚡ Quick Deploy Commands

```bash
# 1. Sync changes
git pull origin main --rebase

# 2. Add changes
git add .

# 3. Commit (use conventional commits)
git commit -m "feat: your update message"

# 4. Push triggers deployment
git push origin main
```

**Deployment happens automatically:**
- Frontend: GitHub Actions → GitHub Pages (~2 min)
- Backend: Render auto-deploy (~3-5 min)

---

## 📋 Environment Variables

### Frontend (.env.local):
```bash
NEXT_PUBLIC_API_URL=https://gaugon-website.onrender.com
```

### Backend (Render Dashboard):
```bash
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-app-password
SMTP_FROM="Gaugon <billing@gaugon.com>"
```

See `PRODUCTION_ENV_SETUP.md` for complete list.

---

## 🔗 Quick Links

- **Live Site**: [app.gaugon.com](https://app.gaugon.com)
- **Backend API**: [gaugon-website.onrender.com](https://gaugon-website.onrender.com)
- **GitHub Repo**: [github.com/ocilab25/gaugon-website](https://github.com/ocilab25/gaugon-website)
- **Render Dashboard**: [dashboard.render.com](https://dashboard.render.com)

---

## 📚 Additional Documentation

- `GO_NOGO_CHECKLIST.md` - Deployment readiness checklist
- `PORTAL_DEPLOYMENT.md` - Portal routing solution
- `PRODUCTION_ENV_SETUP.md` - Environment variables guide
- `CHANGELOG.md` - Detailed change history
- `README.md` - Project overview
