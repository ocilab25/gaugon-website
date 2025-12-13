#!/bin/bash
# Deployment script for Gaugon website to GitHub Pages

echo "🚀 Deploying Gaugon website to GitHub Pages..."

# Add all changes
echo "📦 Staging all changes..."
git add .

# Commit with comprehensive message
echo "💾 Creating commit..."
git commit -m "Complete landing page rewrite and GitHub Pages deployment config

Landing Page Updates:
- Rewrite Hero section: new headline, removed 'free audit' language
- Add 'Who This Is For/Not For' section for visitor self-qualification
- Add 'Real Results' section with anonymized case studies
- Replace WhatWeAutomate with WhatYouGet (concrete deliverables)
- Add FAQ section with 5 objection-handling questions
- Remove Outcomes section (unverified stats)
- Update Pricing page: Sprint-first structure ($2,500 upfront)
- Update Services page: aligned messaging, added included/excluded box
- Update all CTAs from 'Free AI Audit' to 'Book Your Sprint'
- Update FinalCTA with more conversational copy

New Components:
- components/sections/WhoThisIsFor.tsx
- components/sections/WhatYouGet.tsx
- components/sections/RealResults.tsx

GitHub Pages Configuration:
- Add public/.nojekyll to prevent Jekyll processing
- Add export script to package.json
- Verify next.config.mjs (static export, custom domain ready)
- Verify GitHub Actions workflow (deploys ./out to Pages)
- Add DEPLOYMENT.md documentation

Deployment Details:
- Framework: Next.js 14.2.5 with static export
- Build command: npm run build
- Output directory: ./out
- Custom domain: app.gaugon.com
- Auto-deploy on push to main via GitHub Actions"

# Push to main
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment initiated!"
echo "🔗 Check GitHub Actions: https://github.com/ocilab25/gaugon-website/actions"
echo "🌍 Site will be live at: https://app.gaugon.com"
