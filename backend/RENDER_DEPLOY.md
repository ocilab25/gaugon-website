# Render Deployment Guide

## Prerequisites

1. MongoDB Atlas account and cluster
2. Render.com account
3. GitHub repository connected

## Step 1: MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster
2. Create database user
3. Whitelist Render IPs (or use `0.0.0.0/0` for all IPs)
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/gaugon`

## Step 2: Render Service Setup

### Create New Web Service

1. **Connect Repository**: Link your GitHub repository
2. **Service Settings**:
   - **Name**: `gaugon-backend` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main` or `dev`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node dist/server.js`

### Environment Variables

Add these in Render dashboard → Environment:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gaugon?retryWrites=true&w=majority
MONGO_POOL_SIZE=10

JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_REFRESH_SECRET=your-super-secret-refresh-key-min-32-chars
JWT_EXPIRES_IN=8h
JWT_REFRESH_EXPIRES_IN=7d

PORT=5000
NODE_ENV=production

FRONTEND_URL=https://app.gaugon.com
PORTAL_URL=https://portal.gaugon.com
ADMIN_URL=https://admin.gaugon.com

ALLOW_ADMIN_REGISTER=false
```

**Security Notes:**
- Generate strong JWT secrets (32+ characters, random)
- Never commit `.env` files
- Use Render's environment variable encryption

## Step 3: Create First Admin

After deployment, create the first admin using Render's shell:

1. Go to Render dashboard → Your Service → Shell
2. Run:
```bash
cd backend
npx tsx src/scripts/createAdmin.ts admin@gaugon.com YourSecurePassword123!
```

Or use local machine (if MongoDB allows your IP):
```bash
cd backend
npx tsx src/scripts/createAdmin.ts admin@gaugon.com YourSecurePassword123!
```

## Step 4: CORS Configuration

If using multiple subdomains, ensure all are listed in environment variables:

```env
FRONTEND_URL=https://app.gaugon.com
PORTAL_URL=https://portal.gaugon.com
ADMIN_URL=https://admin.gaugon.com
```

Or use wildcard (if supported):
```env
FRONTEND_URL=https://*.gaugon.com
```

## Step 5: Custom Domain (Optional)

1. In Render dashboard → Settings → Custom Domains
2. Add your domain: `api.gaugon.com`
3. Update DNS records as instructed
4. Update `FRONTEND_URL` to match your frontend domain

## Step 6: Health Check

Test the deployment:

```bash
# Health check
curl https://your-render-service.onrender.com/api/health

# Database health
curl https://your-render-service.onrender.com/api/health/db
```

## Troubleshooting

### Build Fails

- Check Node.js version (should be 20+)
- Verify `package.json` has all dependencies
- Check build logs in Render dashboard

### Database Connection Fails

- Verify MongoDB Atlas IP whitelist includes Render IPs
- Check `MONGODB_URI` format
- Ensure database user has correct permissions

### CORS Errors

- Verify `FRONTEND_URL` matches your frontend domain exactly
- Check browser console for CORS error details
- Ensure `credentials: true` in frontend fetch requests

### 401 Unauthorized

- Verify JWT_SECRET is set correctly
- Check token expiration settings
- Ensure Authorization header format: `Bearer <token>`

## Production Checklist

- [ ] MongoDB Atlas cluster created and accessible
- [ ] Environment variables set in Render
- [ ] First admin created via CLI script
- [ ] Health endpoints responding
- [ ] CORS configured for all frontend domains
- [ ] `ALLOW_ADMIN_REGISTER=false` (security)
- [ ] Strong JWT secrets generated
- [ ] Custom domain configured (if needed)
- [ ] Monitoring/alerts set up in Render

## Multi-Subdomain Support

If you're using the same Render service for multiple subdomains:

1. Add all subdomains to environment variables
2. CORS middleware will allow all listed origins
3. Each frontend can use the same API URL

Example:
- Frontend: `https://app.gaugon.com` → API: `https://gaugon-api.onrender.com`
- Portal: `https://portal.gaugon.com` → API: `https://gaugon-api.onrender.com`
- Admin: `https://admin.gaugon.com` → API: `https://gaugon-api.onrender.com`

All three can use the same backend service!

