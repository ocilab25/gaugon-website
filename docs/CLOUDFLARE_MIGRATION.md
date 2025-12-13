# Cloudflare Pages Migration Guide

## Why Migrate?
- **Global Edge Network**: Faster content delivery (~50ms latency globally).
- **Edge Headers**: Ability to set strict HTTP headers (`Permissions-Policy`, `X-Frame-Options`) which are not fully supported via `<meta>` tags.
- **DDoS Protection**: Enterprise-grade protection included.
- **Unlimited Bandwidth**: No hard caps for static sites.

## Migration Plan

### 1. Preparation
1.  Create a Cloudflare account.
2.  Connect GitHub repository `ocilab25/gaugon-website`.

### 2. Configuration
- **Build Command**: `computed via package.json` (Next.js default) or `npm run build`
- **Output Directory**: `out` (Static Export)
- **Node Version**: Set `NODE_VERSION` environment variable to `20`.

### 3. Header Configuration (`_headers`)
Create a file named `public/_headers` (it will be copied to `out/_headers` on build):

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), fullscreen=(self)
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://hcaptcha.com https://*.hcaptcha.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://api.web3forms.com https://gaugon-website.onrender.com; frame-src https://hcaptcha.com https://*.hcaptcha.com
```

### 4. Switch DNS
1.  Update nameservers to Cloudflare.
2.  Enable "Always Use HTTPS".
3.  Enable "HSTS" (Strict Transport Security).

## Verification
- Check headers via `curl -I https://app.gaugon.com`
- Verify SSL certification creation.
