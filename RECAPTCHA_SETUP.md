# reCAPTCHA Setup Instructions

## 📋 Steps to Complete Setup

### 1. Install Required Packages
Open your terminal in the project directory and run:

```bash
npm install react-google-recaptcha
npm install --save-dev @types/react-google-recaptcha
```

### 2. Create Environment File
Create a new file `.env.local` in the root directory with:

```env
# Google reCAPTCHA v2
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA
RECAPTCHA_SECRET_KEY=6LfqfCYsAAAAAB2Uc6gj9IjyS3zq5QIkIbvvXQFe
```

**Note:** This file is automatically gitignored for security.

### 3. Test Locally
```bash
npm run dev
```

Visit `http://localhost:3000/contact-us` and test:
- ✅ Form submission WITHOUT reCAPTCHA (should show error)
- ✅ Form submission WITH reCAPTCHA (should submit successfully)

### 4. Deploy to Production

**Add environment variable to your hosting platform:**

For Vercel/Netlify/other hosting:
- Variable name: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Value: `6LfqfCYsAAAAAEmxAdlrbKRmsqnwjX8A9U74qFKA`

**Then redeploy your application.**

---

## ✅ What's Been Implemented

- ✅ reCAPTCHA component added below privacy checkbox
- ✅ Form validation requires reCAPTCHA completion
- ✅ reCAPTCHA token sent to Web3Forms for verification
- ✅ Auto-reset after successful submission
- ✅ Error messages for missing reCAPTCHA
- ✅ Removed "free" language from success message

## 🔒 Security

- Site key is public (safe to expose)
- Secret key is in `.env.local` (gitignored)
- Web3Forms verifies reCAPTCHA server-side automatically

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure packages are installed (`npm install`)
4. Make sure `.env.local` exists with correct keys
