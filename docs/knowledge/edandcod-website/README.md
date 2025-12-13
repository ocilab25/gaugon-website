Before start, make sure to read rules.md and initialize Agents. if .gitignore use terminal to ready and load as core

0. update phase of roadmapand add x wheneveryou complete and return summarize the feedback to user
1. README.md (Update) > 
Add this section under your Roadmap/Phases area. We are now marking Phase 0 as done and opening Phase 1.


## 🗺️ Roadmap & Phases

- [x] **Phase 0: Foundation & Setup**
    - [x] Defined architecture (Main WP site + Subdomain App).
    - [x] Selected AI Agents & Tool stack (Cursor, VS Code, GitHub).
    - [x] Repository created.

- [x] **Phase 1: Core Development (The Skeleton)**
    - [x] Initialize Git repository locally.
    - [x] Generate SSH keys and connect to GitHub.
    - [x] Scaffold Backend API (The Logic).
    - [x] Scaffold Frontend (The View).
    - [x] Establish "Hello World" connection between Front and Back (Ready for Test).
    - [x] **Security Audit & Hardening** (CSP, Headers, Env Protection).

- [x] **Phase 2: Database & Logic (Inventory Engine)**
    - [x] Product Schema & CRUD API.
    - [x] Admin Panel: Product List & Add/Edit UI.

- [x] **Phase 3: Polish & Deploy**
    - [x] SEO Metadata & Social Cards.
    - [x] Production Deployment (Render + Cloudflare).

- [x] **Phase 4: Admin Authentication**
    - [x] Dedicated Auth Page (Black/Gold).
    - [x] JWT Protection & Session Security.

- [x] **Phase 5: Order Management**
    - [x] Order Schema & Admin Dashboard Order View.

- [x] **Phase 6: User Management**
    - [x] Multi-user Admin Support (Add/Remove Admins from UI).

- [x] **Phase 7: Security & UI Polish**
    - [x] Auto-logout & Session Storage.
    - [x] High-contrast Auth UI.
    - [x] Contact form: Moved Web3Forms call to backend (API key secured).

- [x] **Phase 8: Order Manufacturing Pipeline** *(Complete)*
    - [x] Kanban Board for visual order tracking.
    - [x] Granular manufacturing statuses (Confirmed → Designing → Casting → Setting → Polishing → QC → Shipped).
    - [x] Separate Admin Panel deployment (`admin.edandcod.gaugon.com`).

- [x] **Phase 9: Customer Portal Backend** *(Complete)*
    - [x] Customer Model with separate authentication.
    - [x] Service Request submission (repair/custom work).
    - [x] Quote approval workflow (Admin sets price → Customer approves).
    - [x] Real-time progress tracking with status history.
    - [x] Breadcrumbs and Skeleton Loaders in Admin Panel.
    - [x] Enhanced Access Management with self-edit protection.

- [x] **Phase 10: Customer Portal Frontend** *(Complete)*
    - [x] Customer login/registration pages.
    - [x] Customer dashboard with stats and active orders.
    - [x] Order tracking with progress bar.
    - [x] Quote acceptance UI with approval dialog.
    - [x] Service request form.
    - [x] Kay.com-style auth with firstName/lastName split.
    - [x] Password strength requirements (8+, upper, lower, number, special).
    - [x] Human-readable order numbers (EC-2024-0001 format).
    - [x] Admin cancel requires reason (saved to order history).
    - [x] Customer cancel button for pending requests.
    - [x] **shadcn/ui Migration**: Replaced MUI buttons with shadcn/ui for "Dark Luxury" consistency.
    - [x] **EditArtifactSheet**: Reusable drawer component for portfolio management.
    - [x] **MUI Removal**: Eliminated legacy dependencies to improve build size.
    - [x] **Tailwind v4 Fix**: Configured `@tailwindcss/postcss` and migrated `index.css` to v4 syntax (`@import`) to resolve production style regressions.
    - [x] **Mobile Sidebar**: Implemented responsive Sheet navigation for Admin Dashboard.
    - [x] **Front Door Upgrade**: Replaced `admin/login` redirect with native "Dark Luxury" Login page using `Card` component.
    - [x] **Command Center Dashboard**: Stats grid with Revenue, Repairs, Portfolio, Leads cards.
    - [x] **Settings Redesign**: Sidebar+Content layout with preference toggles (Switch component).
    - [x] **Sidebar Redesign**: Refine.dev-inspired layout with logo-only header and active user status display.
    - [x] **Portal Branding**: Exclusive `admin-logo.jpg` for admin, text-based logo for customer portal.

- [ ] **Phase 11: Invoice System** *(Next)*
    - [ ] Invoice generation and PDF export.
    - [ ] Email invoice to customers.
    - [ ] Payment tracking integration.

- [ ] **Phase 12: Social Authentication & Email Verification** *(Future Sprint)*
    - [ ] Sign in with Google (requires Google Cloud OAuth setup).
    - [ ] Sign in with Apple (requires Apple Developer setup).
    - [ ] Sign in with Microsoft (requires Azure AD setup).
    - [ ] Email verification on registration (requires transactional email service like Resend/SendGrid).
    - [ ] Photo upload for service requests (requires Cloudinary/S3 setup).

- [ ] **Phase 13: Support Tickets / Help Desk** *(Future Sprint)*
    - [ ] Ticket Model with status, priority, assignee.
    - [ ] Staff can create/manage tickets from customer inquiries.
    - [ ] Task assignment with reviewer workflow (like shadcn reference UI).
    - [ ] Notification system for ticket updates.


# EdAndCod Website

## Project Scope
**EdAndCod Website** is a modern, scalable web application designed to serve as the digital presence/platform for EdAndCod. The system leverages a **headless architecture** to decouple the content management from the user interface, ensuring high performance, flexibility, and a premium user experience.

Key Functionalities:
- **Dynamic Content Delivery**: Seamless integration with WordPress as a Headless CMS.
- **Interactive UI**: A rich, responsive frontend built with React.
- **Robust API**: A Node.js/Express backend handling business logic and database interactions.
- **Data Persistence**: MongoDB for structured data storage (user profiles, interactions, custom application data).
- **Modular Design**: A monorepo structure designed for shared resources and easy scalability.

## Technology Stack

This project utilizes a **MERN + WordPress** stack.

| Component | Technology | Justification |
| :--- | :--- | :--- |
| **Frontend** | **React** | Selected for its component-based architecture, extensive ecosystem, and ability to create dynamic, single-page application (SPA) experiences. |
| **Backend** | **Node.js** | Provides a non-blocking, event-driven runtime ideal for scalable network applications and unified JavaScript development across the stack. |
| **Database** | **MongoDB** | A NoSQL database chosen for its flexibility with JSON-like documents, making it a perfect match for JavaScript-heavy stacks. |
| **CMS** | **WordPress** | Used as a **Headless CMS** to empower content editors with a familiar interface while allowing the frontend to remain technology-agnostic and fast. |

## Repository Structure

The repository follows a modular **monorepo** pattern to keep concerns separated while facilitating code sharing.

```text
/
├── backend/            # core Node.js application (API, Database logic)
├── frontend/           # React application (UI, Client-side logic)
├── src/                # Shared utilities, implementation specific logic, and core libraries
├── config/             # Environment configurations and build settings
├── docs/               # Project documentation and architectural decisions
├── scripts/            # Automation and utility scripts
├── .github/            # GitHub specific workflows and settings
├── CHANGELOG.md        # Version history and major changes
└── README.md           # Project overview and setup instructions
```

## Security & Configuration

The project adopts a "Security Agent" persona to govern the backend configuration, ensuring a security-first approach ("AppSec Mindset").

-   **Defense Strategy**: Defense in Depth, Least Privilege, and Attack Surface Reduction.
-   **Security Stack**:
    -   **Wordfence**: WAF and Login Security.
    -   **WP Activity Log**: Granular audit trails.
    -   **WPS Hide Login**: Obscuring entry points.
-   **Performance**: WP Rocket and Image optimization configured to strip metadata.

For detailed configuration and justification of the plugin stack, see [Security Agent Documentation](docs/security_agent.md).

## Development & Automation

The "Development Agent" streamlines setup and deployment tasks.

-   **Philosophy**: Automation first, consistent environments.
-   **Scripts**: Planned scripts for environment setup and deployment orchestration.

See [Development Agent Documentation](docs/development_agent.md) for the scripting roadmap.

## Getting Started

*(Note: Node.js environment setup is currently pending)*

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ocilab25/edandcod-website.git
    ```
2.  **Navigate to the project**:
    ```bash
    cd edandcod-website
    ```

## Edward & Co. Designer Jeweler Section

The **Edward & Co. Designer Jeweler** website is a warm, boutique digital experience for a local jeweler in Oviedo, FL. It replaces the previous cyberpunk concept with a focus on handcrafted elegance and personal connection.

## Features

- **Modern Landing Page**: High-performance, responsive design built with Next.js and Tailwind CSS.
- **Trust-Focused Content**: Localized copy strategy emphasizing family ownership and expertise.
- **Service Showcases**: Dedicated sections for Custom Design, Repairs, Bridal, and Appraisals.
- **Interactive Elements**:
    - Smooth scroll animations with Framer Motion.
    - FAQ accordion.
- **Visual Design**:
    - "Dark Luxury" aesthetic (Neutral-950 background +## Current Homepage Sections
1. **Hero**: Main welcome and primary actions.
2. **Services Grid**: Navigation to key offerings.
3. **Repairs**: Expert repair services.
4. **Custom Design**: Bespoke jewelry creation process.
5. **Wedding & Engagement**: Rings and bridal jewelry.
6. **Gifts & Watches**: Timepieces and occasion gifts.
7. **Appraisals**: Insurance and estate valuations.
8. **Why Oviedo**: Local trust and history.
9. **Reviews**: Customer testimonials (Social Proof).
10. **FAQ**: Common questions answered.
11. **Visit / Footer**: Maps, Hours, Contact.

## Deployment Status
**Status**: 🟢 Ready for Production (v0.7.0)
- **Frontend**: Cloudflare Pages (static export)
- **Backend**: Docker-ready for Render/Railway
- **Security**: CSP, CORS, JWT authentication
- **SSL**: Requires HTTPS at domain level

See [RENDER_DEPLOY.md](./RENDER_DEPLOY.md) for backend deployment guide.


## Admin Setup (Production)

To create the **first** admin user in a secure production environment:

1.  Temporarily set `ALLOW_ADMIN_REGISTER=true` in your backend environment variables.
2.  Send a POST request to `/api/auth/register` with `{"email": "...", "password": "..."}` or use a local seed script.
3.  **Immediately** set `ALLOW_ADMIN_REGISTER=false` and redeploy.

**Adding Subsequent Admins:**
Once logged in, go to the **Users** tab in the Admin Panel (`/dashboard/users`) to create new admin accounts via the UI.

For a detailed go-live guide, see [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md).

## Analytics & Events (Privacy-Focused)

For production, we recommend using a privacy-respecting tool like **Plausible Analytics**.

### Recommended Key Events
Configure these Custom Events in your analytics dashboard to track high-value actions without PII:

1.  **Lead Generation**:
    -   `book_consult_click` (Navbar/Hero CTA)
    -   `schedule_appraisal_click` (Appraisals section)
2.  **Contact**:
    -   `phone_call_tap` (Footer/Contact link)
    -   `get_directions_click` (Map interaction)
3.  **Engagement**:
    -   `view_algorithm_details` (Clicking a product card)

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for our Git workflow and Agent protocols.

## Technology Stack
- **Framework**: Next.js 14 (App Router)act 18)
- **Styling**: Tailwind CSS with custom boutique configuration
- **Animations**: Framer Motion for elegant entrances
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif) and Inter (sans-serif)

### Design Philosophy
- **Dark Elegance**: Maintained dark background (`bg-neutral-950`) for premium feel
- **Warm Champagne**: New accent color (#C9A87C) replaces bright gold
- **Handcrafted Warmth**: Personal, inviting copy focusing on custom design
- **Local Connection**: Specific messaging for Oviedo, FL community

### Components

#### Navbar
- **Edward & Co.** stacked typographic logo
- Navigation: Home, Custom Design, Appraisals, Gallery, About & Contact
- Sticky glassmorphism header
- **Full responsive mobile menu** with hamburger toggle

#### Hero Section
- Large typographic logo treatment
- Tagline: "Handcrafted Jewelry in Oviedo, FL"
- Dual CTAs: `Book Custom Design` and `Schedule Appraisal`
- Elegant scroll indicator

#### Custom Design Section ("From Sketch to Ring")
- 4-step process visualization:
  1. Consultation
  2. Sketch & Design
  3. Craftsmanship
  4. The Reveal
- Hover effects with step numbers

#### Appraisals & Repairs
- Service highlighting cards:
  - Certified Guidance
  - Peace of Mind (Insured Service)
  - Master Repairs

#### Featured Collection ("Our Creations")
- Curated showcase of jewelry pieces
- Detailed product cards with "Craftsmanship" and "Details"
- Elegant hover animations

#### Trust Section ("Why Oviedo Trusts Edward & Co.")
- **Why Oviedo Section**:
  - Family Expertise
  - Here for You
  - Honest Guidance
- **Bento Grid Trust Section**:
  - Certified Appraisals
  - Model imagery
  - Expert Repairs
  - Lifetime Care

#### Footer
- Full contact block with Address, Hours, Phone, and Directions
- Updated newsletter: "Stay Connected"
- Simple navigation links for Shop and Legal
- Copyright for Edward & Co.

### Running the Project

Navigate to the frontend directory and start the development server:

```bash
cd frontend
npm install
npm run dev
```

Access the site at `http://localhost:3000`

### File Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   ├── privacy-policy/     # Privacy Policy page
│   ├── terms-and-conditions/   # Terms & Conditions page
│   └── cookies-policy/     # Cookies Policy page
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Redesigned Hero
│   ├── ServicesOverview.tsx    # 6-service grid
│   ├── ServiceRepair.tsx       # Repair services
│   ├── CustomDesignSection.tsx # Process steps
│   ├── WeddingEngagement.tsx   # Bridal section
│   ├── WatchesGifts.tsx        # Gifts section
│   ├── AppraisalsSection.tsx   # Appraisal services
│   ├── WhyOviedoSection.tsx    # Local trust points
│   ├── ReviewsSection.tsx      # Customer testimonials
│   ├── FAQSection.tsx          # FAQ accordion
│   ├── FinalCTA.tsx            # Call to action
│   └── Footer.tsx          # Footer with legal links
├── public/
│   ├── products/           # Product images
│   └── trust/              # Assets
├── lib/
│   ├── utils.ts            # Utilities
└── tailwind.config.ts      # Config with new colors
```

### Legal Pages

The site includes 3 legal compliance pages accessible from the footer:

| Route | Description |
| :--- | :--- |
| `/privacy-policy` | Privacy practices, data collection, and CCPA rights |
| `/terms-and-conditions` | Terms of service with Florida governing law |
| `/cookies-policy` | Cookie types and browser management instructions |

> ⚠️ **Important**: Legal pages are templates based on open-source generators. Have an attorney review all content before production deployment.

