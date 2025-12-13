# Render Deployment Checklist

## ✅ Pre-Flight Verification
- [x] `server.ts` uses `process.env.PORT || 4000` (dynamic port)
- [x] `Dockerfile` and `.dockerignore` exist in `backend/`
- [x] `.env` is gitignored (secrets safe)

---

## 🔐 Required Environment Variables (Set on Render)

| Variable | Purpose | Example |
|----------|---------|---------|
| `MONGODB_URI` | Atlas connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Signing key for auth tokens | `openssl rand -base64 32` |
| `NODE_ENV` | Production mode | `production` |
| `ALLOW_ADMIN_REGISTER` | Block public registration | `false` |
| `FRONTEND_URL` | CORS allowed origin | `https://edandcod.gaugon.com` |
| `SMTP_HOST` | Email Server Host | `smtp.gmail.com` |
| `SMTP_PORT` | Email Server Port | `587` |
| `SMTP_USER` | Email User | `billing@edandcod.com` |
| `SMTP_PASS` | Email Password | `app-specific-password` |
| `SMTP_FROM` | Sender Address | `"Edward & Co." <billing@...>` |

> ⚠️ Do NOT set `PORT` on Render. Render injects its own port automatically.

---

## 🚀 5-Step Render Deploy + Test Checklist

### Step 1: Commit & Push
```bash
cd backend
git add Dockerfile .dockerignore
git commit -m "chore: prepare backend Docker deploy"
git push origin main
```

### Step 2: Create Render Web Service
1. Render Dashboard → **New** → **Web Service** → **From GitHub**
2. Select `edandcod-website` repo
3. Set **Root Directory**: `backend`
4. Render auto-detects Dockerfile (Runtime: Docker)
5. Region: US

### Step 3: Configure Environment
Add the 5 env vars from the table above in Render's **Environment** tab.

### Step 4: Deploy
Save and trigger deploy. Wait for build to complete (~2-3 min).

### Step 5: Smoke Test
| Test | Expected Result |
|------|-----------------|
| `GET /api/the-algorithms` | JSON array of algorithm pieces |
| `GET /api/health` | `{ status: "ok" }` |

#### Common Errors
| Error | Likely Cause |
|-------|--------------|
| `MongoServerError: bad auth` | Wrong `MONGODB_URI` credentials |
| `JsonWebTokenError: secretOrPrivateKey must have a value` | Missing `JWT_SECRET` |
| `504 Gateway Timeout` | Atlas IP whitelist doesn't include Render IPs (set to `0.0.0.0/0`) |

---

## 🖥️ Admin Panel Deployment (New Static Site)
The Admin Panel is a separate Vite app. It needs its own "Static Site" on Render.

### Step 1: Create Static Site
1.  Render Dashboard → **New** → **Static Site** → **From GitHub**
2.  Select `edandcod-website` repo
3.  **Root Directory**: `admin-panel` (Important!)
4.  **Build Command**: `npm run build`
5.  **Publish Directory**: `dist`

### Step 2: Environment Variables
Add these in the **Environment** tab of the new Static Site:
- `VITE_API_URL`: `https://your-backend-url.onrender.com` (The URL from the backend deploy above)

### Step 3: Rewrite Rules (SPA Support)
In the **Redirects/Rewrites** tab:
- **Source**: `/*`
- **Destination**: `/index.html`
- **Action**: `Rewrite`

---

## 🌐 Frontend Configuration (Cloudflare Pages)

After backend is live at `https://your-app.onrender.com`:

1. Go to Cloudflare Pages → `edandcod-website` project
2. Settings → Environment Variables
3. Add: `NEXT_PUBLIC_API_URL = https://your-app.onrender.com`
4. Redeploy the site

Verify:
- `https://edandcod.gaugon.com` loads "The Algorithms" from live backend
- `/admin/login` works
