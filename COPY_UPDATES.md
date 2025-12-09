# Gaugon Website Copy Updates - December 9, 2025

## Overview
Complete rewrite of homepage messaging to align with the actual 7-14 day Workflow Sprint offer, removing misleading "free audit" language and adding objection-handling FAQs.

---

## Changes Made

### 1. Homepage Hero Section (`components/sections/Hero.tsx`)
**Old messaging:**
- Headline: "AI Automation That Makes Your Team Feel 2x Bigger"
- Subhead: Generic automation promise
- CTA: "Start Free AI Audit"

**New messaging:**
- Headline: "You know something's inefficient. You just don't have time to fix it."
- Subhead: Clear 7-14 day timeline with concrete deliverables
- Checklist updated to:
  - A clear map of your tools and workflows
  - A short list of concrete risks
  - A prioritized 30/60/90-day action plan
- CTA: "Map My Workflows"

**Why:** The old messaging promised a "free" audit when the actual offer is a paid 7-14 day sprint. This was creating trust issues and confusion.

---

### 2. New Section: "What You Get" (`components/sections/WhatYouGet.tsx`)
**Replaced:** Generic "What We Automate" feature list

**New content:**
Three concrete deliverables:
1. Tool & workflow inventory (plain-language map)
2. Short list of concrete risks (security, privacy, automation gaps)
3. Prioritized 30/60/90-day action plan (3-5 steps, ranked by impact)

Plus bonus callout: 1-2 quick wins if access allows

**Why:** Business owners needed to understand exactly what they're paying for, not just vague capabilities.

---

### 3. FAQ Section (`components/sections/FAQ.tsx`)
**Replaced:** Generic automation FAQs

**New objection-handling questions:**
1. "Will this break my current systems?"
2. "I don't have time to redo my systems right now."
3. "What if I don't want to give you access to my tools?"
4. "How is this different from hiring a Zapier consultant or a freelance VA?"
5. "What happens after the 7–14 days?"

**Why:** These address the #1 and #2 objections from small-business owners before they even ask.

---

### 4. Homepage Structure (`app/page.tsx`)
**Removed:**
- Outcomes section (had fake stats: 85%, 3x, 40%)

**Updated flow:**
1. Hero
2. TrustStrip
3. WhatYouGet (new)
4. HowItWorks
5. FAQ (new)
6. PricingStrip
7. FinalCTA

**Why:** Removed unverified stats that hurt trust. Added FAQ to handle objections before the final CTA.

---

### 5. Pricing Page (`app/pricing/page.tsx`)
**Major restructure:**

**Before:** Three tiers with no prices, confusing hierarchy

**After:**
- **Primary offer (top):** Workflow Sprint at $2,500
  - Clear deliverables listed
  - Positioned as "Start Here"
  - Prominent CTA: "Book Your Sprint"

- **Secondary (below):** Monthly plans for post-sprint support
  - Starter: From $500/mo
  - Growth: From $1,500/mo
  - Scale: From $3,000/mo
  - Clear note: "Want ongoing help after the sprint?"

**Why:** The sprint is the entry point, not the monthly plans. Pricing transparency builds trust.

---

### 6. Final CTA (`components/sections/FinalCTA.tsx`)
**Old:**
- "Ready to make your day-to-day run smoother?"
- CTA: "Schedule Workflow Review"

**New:**
- "Ready to see what's slowing you down?"
- Body: "Book a 15-minute intro call... No pitch decks, no sales pressure—just an honest look at where you are and what might help."
- CTA: "Book Your Intro Call"

**Why:** More direct, removes implied commitment, frames it as a conversation not a sales call.

---

## Key Messaging Shifts

| Old Approach | New Approach |
|--------------|--------------|
| "Free AI Audit" | "7-14 Day Workflow Sprint (Starting at $2,500)" |
| Vague automation benefits | Concrete deliverables (inventory, risks, 30/60/90 plan) |
| Feature-focused | Outcome & process-focused |
| Generic stats (85%, 3x, 40%) | Removed (no proof) |
| Implied ongoing commitment | Sprint → decide later |
| No objection handling | 5-question FAQ addressing main concerns |
| Pricing hidden | Transparent ranges shown upfront |

---

## Brand Voice Consistency

All new copy maintains:
- ✅ Conversational, "coffee chat" tone
- ✅ Direct "you" address
- ✅ No hype or buzzwords
- ✅ Contractions and casual phrasing
- ✅ Concrete examples over jargon
- ✅ "We don't break things" reassurance

---

## Still Needed (Recommendations)

1. **Add "Who This Is For / Not For" section** to homepage
2. **Create 1-2 case snippets** to replace removed stats section
3. **Update Services page** with same messaging alignment
4. **Add "What's included/excluded" box** to Services page
5. **Consider adding** a small trust indicator (years in business, # of clients helped) if verifiable

---

## Files Modified

- `components/sections/Hero.tsx`
- `components/sections/WhatYouGet.tsx` (new)
- `components/sections/FAQ.tsx`
- `components/sections/FinalCTA.tsx`
- `app/page.tsx`
- `app/pricing/page.tsx`

---

## Testing Checklist

- [ ] Homepage loads without errors
- [ ] All CTAs link to `/contact`
- [ ] Pricing page displays sprint offer prominently
- [ ] FAQ accordion works (clicks to expand)
- [ ] Mobile responsive on all updated sections
- [ ] WhatsApp links work on mobile
- [ ] No TypeScript/lint errors
