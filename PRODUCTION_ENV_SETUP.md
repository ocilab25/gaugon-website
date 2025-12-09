# IMPORTANT: Production Environment Variables

## Add to Your Hosting Platform (Vercel/Netlify/GitHub Pages)

After the build succeeds, you MUST add this environment variable to your production environment:

### Environment Variable to Add:

**Variable Name:**
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY
```

**Value:**
```
6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA
```

## How to Add (Platform Specific):

### Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add:
   - Name: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - Value: `6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA`
4. Select "Production" and "Preview" environments
5. Click "Save"
6. Redeploy the project

### Netlify:
1. Go to Site settings → Environment variables
2. Add variable:
   - Key: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - Value: `6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA`
3. Click "Save"
4. Trigger a new deployment

### GitHub Pages / Other:
Add the environment variable according to your hosting platform's documentation.

---

## Current Status:

✅ Package added to package.json
✅ Code committed and pushed
⏳ Build should now succeed
🔧 Environment variable needed for reCAPTCHA to work in production
