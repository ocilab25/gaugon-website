# hCaptcha Setup Instructions

## 📋 Overview

The contact form now uses **hCaptcha** instead of Google reCAPTCHA for spam protection. hCaptcha is a privacy-friendly alternative used by Cloudflare, Shopify, and many others.

Web3Forms provides zero-config integration with hCaptcha - no need to register with hCaptcha separately for free plans.

## 🚀 Quick Start

### 1. Install Required Package

The package is already installed in the project:

```bash
npm install @hcaptcha/react-hcaptcha --save
```

### 2. Enable hCaptcha in Web3Forms Dashboard

**IMPORTANT**: You must enable hCaptcha in your Web3Forms dashboard for the spam protection to work.

1. Login to Web3Forms dashboard: https://app.web3forms.com
2. Find your form (Access Key: `0a70d745-bd5d-41d0-a68f-7b0953cf7012`)
3. Click on your form to open settings
4. Under **"Block Spam"** option, select **"hCaptcha"**
5. Save the settings

### 3. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000/contact-us` and test:

- ✅ **Without hCaptcha**: Fill out the form but don't complete the captcha. Click Submit. 
  - Expected: Error message "Please complete the hCaptcha verification" appears
  - Form does not submit
  
- ✅ **With hCaptcha**: Fill out the form and complete the captcha. Click Submit.
  - Expected: Success message appears
  - Form submits successfully
  - You should receive the email

## 🔧 Configuration

### Free Plan Site Key

For Web3Forms free plans, we use the shared hCaptcha site key:
```
50b2fe65-b00b-4b9e-ad62-3ba471098be2
```

This is already configured in the code. No environment variables needed!

### Custom Site Key (Paid Plans Only)

If you have a Web3Forms paid plan or want to use your own hCaptcha account:

1. Register at https://www.hcaptcha.com/
2. Get your site key and secret key
3. Update the site key in the code:
   - `/app/contact-us/page.tsx` (line ~540)
   - `/components/sections/Contact.tsx` (line ~309)
4. Configure your custom secret key in Web3Forms dashboard

## ✅ What's Been Implemented

### Main Contact Page (`/app/contact-us/page.tsx`)
- ✅ hCaptcha widget added after privacy consent checkbox
- ✅ Client-side validation requires hCaptcha completion
- ✅ Token sent to Web3Forms as `h-captcha-response`
- ✅ Auto-reset after successful submission
- ✅ Error messages for missing hCaptcha

### Shared Contact Component (`/components/sections/Contact.tsx`)
- ✅ hCaptcha widget integrated
- ✅ Same validation and error handling as main page
- ✅ Matches existing design and spacing

## 🔒 Security

- **Client-side**: hCaptcha widget validates user is human
- **Server-side**: Web3Forms automatically verifies the hCaptcha token
- **Privacy-friendly**: hCaptcha respects user privacy more than reCAPTCHA
- **No configuration needed**: Web3Forms handles all verification automatically

## 🐛 Troubleshooting

### hCaptcha widget not appearing
- Check browser console for errors
- Verify `@hcaptcha/react-hcaptcha` package is installed: `npm list @hcaptcha/react-hcaptcha`
- Clear browser cache and reload

### Form still accepts spam
- **Most common issue**: hCaptcha not enabled in Web3Forms dashboard
  - Login to https://app.web3forms.com
  - Select your form
  - Enable hCaptcha under "Block Spam" settings
- Verify the token is being sent: Check browser Network tab for `h-captcha-response` in the form submission

### "Invalid captcha" error
- Make sure you're using the correct site key (`50b2fe65-b00b-4b9e-ad62-3ba471098be2` for free plans)
- Verify `reCaptchaCompat={false}` is set in the HCaptcha component
- Check that hCaptcha is selected in Web3Forms dashboard (not reCAPTCHA or Turnstile)

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Resources

- **hCaptcha Documentation**: https://docs.hcaptcha.com/
- **Web3Forms hCaptcha Guide**: https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha
- **React hCaptcha Package**: https://www.npmjs.com/package/@hcaptcha/react-hcaptcha

## 🔄 Migrating from reCAPTCHA

See [RECAPTCHA_SETUP.md](RECAPTCHA_SETUP.md) for the old reCAPTCHA implementation (deprecated).

**Key differences**:
- Package: `@hcaptcha/react-hcaptcha` instead of `react-google-recaptcha`
- Site key: Web3Forms shared key for free plans (no registration needed)
- Component: `<HCaptcha>` instead of `<ReCAPTCHA>`
- Token field: `h-captcha-response` instead of `recaptcha`
- Method: `resetCaptcha()` instead of `reset()`

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify hCaptcha is enabled in Web3Forms dashboard
3. Check browser console for JavaScript errors
4. Test with a different browser
5. Contact Web3Forms support: https://web3forms.com/support
