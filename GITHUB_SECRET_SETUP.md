# GitHub Secret Setup

> [!NOTE]
> **No Secrets Required for hCaptcha Free Tier**
>
> Since migrating to hCaptcha (Web3Forms free tier), we use a shared public site key.
> You do **not** need to set `RECAPTCHA_SITE_KEY` or any other build secrets for the contact form to work.
>
> This document is kept for reference in case we switch to a paid plan or custom keys in the future.

## ⚠️ IMPORTANT: Add GitHub Secret

The GitHub Actions workflow now expects a secret called `RECAPTCHA_SITE_KEY`.

## Steps to Add the Secret:

### 1. Go to Your Repository Settings
1. Navigate to: https://github.com/ocilab25/gaugon-website/settings/secrets/actions
2. Or: Repository → Settings → Secrets and variables → Actions

### 2. Create New Repository Secret
1. Click **"New repository secret"**
2. Fill in:
   - **Name:** `RECAPTCHA_SITE_KEY`
   - **Secret:** `6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA`
3. Click **"Add secret"**

### 3. Verify
The build will now have access to the reCAPTCHA site key as an environment variable.

---

## What Was Fixed:

✅ Changed GitHub Actions from `npm ci` to `npm install`
✅ Added environment variable to build step
✅ Configured workflow to use GitHub secret

## What You Need to Do:

🔧 **Add the GitHub secret** (instructions above)
🚀 **Then the build will succeed!**

---

## Alternative (if you don't want to use secrets):

You can also hardcode the key in the workflow file since it's a public site key:

```yaml
- name: Build Next.js app
  env:
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: 6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA
  run: npm run build
```

But using secrets is the recommended approach for better security practices.
