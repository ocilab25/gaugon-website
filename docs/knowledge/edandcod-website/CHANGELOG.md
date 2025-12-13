# Changelog

## [2025-12-13] - Security Hardening (Agent_00 + Agent_03)
### Added
- **Rate Limiting**: Login endpoint (`/api/auth/login`) now limited to 5 attempts per 15 minutes per IP to prevent brute force attacks.
  - Uses `express-rate-limit` middleware
  - Returns 429 status with clear message on limit exceeded
- **JWT Refresh Tokens**: Improved session management with token rotation:
  - `POST /api/auth/login` now returns both `token` (8h access) and `refreshToken` (7-day)
  - `POST /api/auth/refresh` endpoint for silent token refresh with automatic rotation
  - `POST /api/auth/logout` endpoint to invalidate refresh tokens
  - Refresh tokens stored in Admin model and validated server-side
- **Audit Logging System**: Complete audit trail for all invoice operations:
  - New `AuditLog` MongoDB model with indexed fields for efficient queries
  - `AuditService` helper for consistent logging across routes
  - Tracked actions: `INVOICE_CREATE`, `INVOICE_UPDATE`, `INVOICE_DELETE`, `INVOICE_DOWNLOAD`, `INVOICE_EMAIL`, `INVOICE_MARK_PAID`
  - Captures user ID, email, IP address, user agent, and operation details

### Changed
- **Admin Model**: Added `refreshToken` and `refreshTokenExpiry` fields for session management.

### Fixed
- **seedQA.ts**: Corrected import path and password hashing to match Admin model schema.

## [2025-12-13] - Database Optimization & Monitoring
### Added
- **Database Health Check**: New `/api/health/db` endpoint returning MongoDB connection status, host, and database name.
- **Connection Pooling**: Configured `maxPoolSize` (default: 10) for production load handling, overridable via `MONGO_POOL_SIZE` environment variable.

### Optimized
- **Index Cleanup**: Removed duplicate indexes that were redundant with unique constraints:
  - `Order.orderNumber` - already indexed via `unique: true` declaration
  - `Customer.email` - already indexed via `unique: true` declaration
  - `Invoice.invoiceNumber` - already indexed via `unique: true` declaration
- **Performance**: Eliminated MongoDB index warnings in logs and improved query efficiency.

## [2025-12-13] - Invoice System Complete
### Added
- **Invoice System (Phase 11 Compliance)**:
    - Backend: Implemented `PDFService` (using `pdfkit`) for professional invoice generation.
    - **Email**: Implemented `EmailService` using Nodemailer to send invoices w/ PDF attachments via SMTP.
    - Security: Enforced secure `auth` middleware on all invoice routes.
    - API: Added `GET /pdf` (download) and `POST /send` (email functionality).
    - UI: Created `InvoiceForm` component and updated `InvoicesPage` in Admin Panel with CRUD, PDF download, and Email Send actions.

### Fixed
- **Type Safety**: Resolved Mongoose middleware typing issues in `Invoice.ts`.

## [2025-12-12] - Admin Sidebar Redesign & Portal Logos
### Added
- **Admin Panel Logo**: New exclusive `admin-logo.jpg` for admin portal branding.
- **Active User Status**: Refine-style user status card in sidebar showing avatar, green online dot, and admin email.

### Changed
- **Sidebar Header**: Replaced "Ed&Co. Admin" text with logo-only display (larger, centered).
- **Navigation Style**: Updated from border-left accents to rounded hover effects (refine.dev-inspired).
- **Customer Portal Logo**: Replaced image logo with text-based "Edward & Co." styled like footer typography.

## [2025-12-12] - Website Content Updates (Gallery, FAQ, About/Contact)
### Added
- **`/gallery` Page**: New dedicated gallery with photo grid, review carousel, Google rating badge, Facebook community cards.
- **`/faq` Page**: Dedicated FAQ page reusing existing questions with contact CTA.
- **`GalleryGrid.tsx`**: Reusable photo grid component with lightbox modal.
- **FAQ Shortcut**: Added 'Have questions? Check our FAQ' link to FinalCTA section.

### Changed
- **About/Contact Page**: Added store info cards (location, phone, hours) and prominent 'Start Your Journey' message.
- **Navbar**: Gallery link now points to `/gallery` instead of anchor.
- **Footer**: Updated navigation links (Appraisals → /schedule-appraisal, Gallery → /gallery, added FAQ).

### Roadmap (Future)
- Admin gallery upload from admin portal.
- Calendar-based appointment booking.

## [2025-12-12] - Appraisal Page Redesign (Option B: Visual Card Selector)
### Added
- **Two-Step Flow**: Select jewelry type → Enter details
- **Visual Card Selection**: 5 jewelry type cards with icons (Ring, Necklace, Watch, Bracelet, Heirloom)
- **Animated Transitions**: Smooth step transitions with Framer Motion
- **Estimated Value Field**: Optional field for pre-appraisal context

### Changed
- Differentiated from generic About/Contact form with focused UX
- Improved success confirmation screen

### Roadmap (Future Enhancements)
- **Calendar Scheduler**: Book real appointment slots with availability
- **Wizard Multi-Step**: Evolve into Jewelers Mutual-style detailed wizard
- **Photo Upload**: Add image attachment capability

## [2025-12-12] - Main Page Frontend Polish
### Enhanced
- **Hero Section**:
  - Gradient text with shimmer animation on headline.
  - Floating gold particles for subtle ambient effect.
  - Slide-fill hover effect on primary CTA button.
- **Navbar**:
  - Scroll-based background opacity change (darker on scroll).
  - Underline slide animation on link hover.
  - Logo scale effect on hover.
- **FinalCTA Section**:
  - Fixed placeholder phone number and maps URL.
  - Added ambient background glow.
  - Slide-fill hover effect on "Get Directions" button.

### Added
- `animate-shimmer` CSS animation keyframes to `globals.css`.

## [2025-12-12] - Repo-Wide Cleanup & Refactor
### Fixed
- **Unused Import**: Removed unused `cn` import from `Navbar.tsx`.

### Identified (For Future Sprint)
- **Dead Code**: 4 components not currently imported: `WatchesGifts.tsx`, `ServiceRepair.tsx`, `ServicesOverview.tsx`, `AppraisalsSection.tsx`.

### Verified
- **Accessibility**: All interactive elements have proper `focus-visible` states.
- **Security**: hCaptcha integration verified, no exposed API keys.
- **Heading Hierarchy**: Proper h1→h2→h3 order across all pages.

## [2025-12-12] - Admin Portal Enhancements (Command Center & Settings)
### Added
- **Dashboard Overview** (`/admin/dashboard`): New "Command Center" with stats grid (Revenue, Active Repairs, Portfolio Value, Pending Leads) and Quick Actions panel.
- **Switch Component**: Custom Framer Motion toggle component for settings preferences.
- **Settings Redesign**: Sidebar+Content layout with tabbed navigation (General, Profile, Security, Notifications, Subscription) and preference toggles.

### Changed
- **Sidebar**: Removed vertical border for cleaner look. Added "Overview" link to Dashboard.
- **Admin Root Redirect**: Now redirects to internal `/admin/dashboard` instead of external subdomain.

## [2025-12-12] - Front Door Upgrade & Documentation
### Added
- **Native Admin Login**: Refactored `frontend/app/admin/login` from a redirect to a fully styled "Dark Luxury" Login page using the new Design System.
- **UI Components**: Added `Card` primitive (`frontend/components/ui/card.tsx`) to support the new login layout.
- **Documentation**:
  - `docs/DOMAIN_PORTABILITY_STRATEGY.md`: detailed plan for centralizing environment variables.
  - `docs/QA_WALKTHROUGH.md`: Manual test script for QA verification.
  - `docs/QA_REPORT_2025_12_12.md`: QA findings summary.

## [2025-12-12] - Admin Panel UI/UX Restoration (Final Polish)
### Fixed
- **Critical Style Regression**: Migrated `admin-panel/src/index.css` to **Tailwind CSS v4** syntax (`@import "tailwindcss";`) to fix raw HTML appearance in production.
- **Mobile Responsiveness**: Refactored `DashboardLayout` to use a **Sheet-based Sidebar** (Hamburger menu) on mobile, eliminating overlap issues.
- **Theme Consistency**: Explicitly registered "Dark Luxury" theme variables in `@theme` block to ensure compatibility with Tailwind v4 engine.

## [2025-12-12] - Admin Portal UI/UX Restoration & Tailwind Fix
### Fixed
- **Build System**: Resolved Tailwind CSS v4 incompatible build by migrating to `@tailwindcss/postcss` and standard CSS properties.
- **UI "Disconfiguration"**: Fixed broken styles across Admin Panel, Customer Customer, and Auth pages.
- **Visuals**:
  - Restored "Dark Luxury" (Gold/Black) theme to **CustomerAuthPage** and **AuthPage**.
  - Enforced centered "Card" layout for login screens.
- **Layout**:
  - **DashboardLayout**: Added `overflow-x-hidden` to prevent horizontal scrolling on mobile.
  - **Sidebar**: Renamed "Main Pages" to "Overview" and updated active state indicators.
  - **CustomerDashboard**: Refactored to a clean 2-column grid (Active Orders vs Quick Stats).



## [2025-12-12] - Admin Portal Framework Migration (MUI → shadcn/ui)
### Added
- **shadcn/ui Library**: Integrated full suite of shadcn/ui components (Card, Table, Button, Input, Select, Dialog, Sheet, Popover, Tooltip, Avatar, Badge, Separator, Skeleton).
- **Icons**: Migrated from `@mui/icons-material` to `lucide-react` for a consistent, modern icon set.
- **Styling**: Enforced "Dark Luxury" theme using Tailwind CSS and `class-variance-authority`.

### Changed
- **Framework Swap**: Completely removed Material-UI (`@mui/material`, `@emotion/react`) from `admin-panel`.
- **Pages Rewritten**:
  - `OrdersPage`: Now uses shadcn Table, Popover actions, and Dialogs.
  - `CustomersPage`: Migrated table and status badges.
  - `ProductList`: Updated to shadcn Table and forms.
  - `UsersPage`: Replaced MUI Dialogs/Table with shadcn equivalents.
  - `SettingsPage`, `InquiryInbox`, `DashboardApps`: Full UI refresh.
  - **Customer Portal**: All customer-facing pages (`OrderDetails`, `ServiceRequest`, `Auth`) updated to match new design system.
- **Components**:
  - `KanbanBoard`: Refactored to use shadcn Cards/Badges while preserving `dnd-kit` logic.
  - `Breadcrumbs`: Rewritten with Tailwind and Lucide icons.
  - `ProgressTracker`: Updated styling.

### Technical
- **Build Optimization**: Reduced bundle size by removing heavy MUI libraries.
- **Type Safety**: Fixed strict TypeScript errors across all migrated files.

## [2025-12-12] - shadcn/ui Component Migration
### Added
- **shadcn/ui Component Library**: Migrated from Material UI buttons to shadcn/ui for consistent "Dark Luxury" styling.
- **UI Components** (`admin-panel/src/components/ui/`):
  - `button.tsx`: Gold default, ghost, outline, destructive, link variants
  - `input.tsx`: Dark background with gold focus borders
  - `label.tsx`: Gold, mono-spaced, uppercase styling
  - `sheet.tsx`: Slide-over drawer with dark theme
- **EditArtifactSheet**: Reusable artifact edit drawer replacing 200+ lines of inline code.
- **Utility**: `cn()` helper for Tailwind class merging.

### Changed
- **OrdersPage**: View toggle buttons → shadcn/ui
- **CustomerDashboard**: Request Service buttons → shadcn/ui
- **CustomerOrders**: New Request buttons → shadcn/ui
- **ServiceRequestForm**: Back + Submit buttons → shadcn/ui
- **OrderDetail**: All 7 buttons including dialog actions → shadcn/ui
- **CustomerAuthPage**: Sign In, Create Account, Google, Apple buttons → shadcn/ui
- **the-algorithms page**: Replaced inline Framer Motion drawer with EditArtifactSheet component (-371 lines)

### Technical
- Added dependencies: `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`, `@radix-ui/react-dialog`, `@radix-ui/react-slot`, `@radix-ui/react-label`
- Configured `@/` path aliases in Vite and TypeScript for admin-panel
- Updated `.gitignore` to track `admin-panel/src/lib/`

## [2025-12-12] - Privacy Link & Admin Customers Page
### Added
- **Admin Customers Page** (`CustomersPage.tsx`): View all registered customers with order counts.
- **Admin Customer API** (`adminCustomerRoutes.ts`): GET endpoints for customer list and details.
- **Sidebar Link**: "Customers" menu item in admin dashboard.

### Fixed
- **Privacy Policy Link**: Now links to actual `https://edandcod.gaugon.com/privacy-policy` URL.
- **Terms of Service Link**: Now links to actual `https://edandcod.gaugon.com/terms` URL.

## [2025-12-12] - Customer Portal Bug Fixes & Improvements
### Fixed
- **View Order Crash**: Admin view dialog now handles service requests without shippingAddress.
- **Order Numbers**: New orders get human-readable `EC-2024-0001` format (auto-increment).
- **Description Column**: Admin orders table shows service request description with tooltip.
- **Cancel Reason Required**: Admin must provide reason when cancelling orders (saved to history).
- **Customer Cancel**: Customers can cancel pending_review orders before admin processes them.

### Added
- `Counter.ts` model for order number sequence generation.
- Cancel confirmation dialogs for both admin and customer portals.

### Deferred
- **Photo Upload**: Requires cloud storage (Cloudinary/S3) - moved to future sprint.

## [2025-12-12] - Customer Portal Frontend (Phase 10)
### Added
- **Customer Layout** (`CustomerLayout.tsx`): Simplified sidebar with Dashboard, Orders, Messages, Settings.
- **Customer Dashboard** (`CustomerDashboard.tsx`): Stats cards, active orders, and "Request Service" button.
- **Customer Orders** (`CustomerOrders.tsx`): Order list with status chips and progress bars.
- **Order Detail** (`OrderDetail.tsx`): Full progress tracker, timeline, quote approval with dialog.
- **Service Request Form** (`ServiceRequestForm.tsx`): Item type dropdown, description, photo URLs.
- **Customer Auth** (`CustomerAuthPage.tsx`): Login/Register tabs with Edward & Co branding.
- **Progress Tracker** (`ProgressTracker.tsx`): Gold gradient progress bar with stage indicators.
- **Routes**: Added `/customer/*` routes for customer portal (separate from `/admin`).

## [2025-12-12] - Customer Service Portal & Access Management
### Added
- **Customer Model** (`Customer.ts`): Separate customer accounts with auth.
- **Customer Routes** (`customerRoutes.ts`): Full API for customer login, registration, and order management.
- **Service Request Flow**: Customers can submit repair requests with item type, description, and photos.
- **Quote System**: Admin sets estimated price → Customer approves → Order moves to Manufacturing Board.
- **Progress Tracking**: Real-time progress percentage and status labels for customers.
- **Breadcrumbs Navigation**: Added navigation trail to all admin pages (`Breadcrumbs.tsx`).
- **Skeleton Loaders**: Replaced spinners with content-aware loading skeletons (`Skeletons.tsx`).

### Security (Access Management)
- **Role Editing**: Super Admins can change other users' roles via dropdown.
- **Self-Edit Protection**: Cannot modify your own role or delete your own account.
- **Last Super Admin Safety**: Cannot demote the only remaining Super Admin.
- **"You" Badge**: Visual indicator showing your own account in the Users table.

### Changed
- **Order Schema**: Added `orderType`, `serviceRequest`, `statusHistory`, `customerId` fields.
- **Status History**: All status changes now logged with timestamp and updater info.

## [2025-12-12] - Phase 8: Order Manufacturing Pipeline
### Added
- **Kanban Board**: Visual manufacturing workflow with drag-and-drop status management (`KanbanBoard.tsx`).
- **New Order Statuses**: Added Confirmed, Designing, Casting, Setting, Polishing, Quality Check stages.
- **Admin Panel Deployment**: Separate Vite Static Site deployed to `admin.edandcod.gaugon.com`.
- **View Toggle**: Switch between List View and Manufacturing Board in Orders page.

### Changed
- **Legacy Admin Routes**: Redirected `/admin` and `/admin/login` to new Admin Portal.
- **CORS Configuration**: Updated backend to allow Admin Panel custom domain.

### Fixed
- **List View White Background**: Added `elevation={0}` to remove Paper shadow.
- **TypeScript Compliance**: Fixed `verbatimModuleSyntax` import errors.

## [0.12.0] - Frontend Polish & Mobile Upgrade
### Added
- **Mobile Menu**: Full responsive navigation with Hamburger toggle and fullscreen overlay (`Navbar.tsx`).
- **Admin**: Added "Service" column to `InquiryInbox` table for better lead tracking.

### Fixed
- **Mobile Safety**:/Global `overflow-x-hidden` applied to `layout.tsx` to prevent horizontal scrolling.
- **HTML Validation**: Fixed invalid button nesting in `TheAlgorithms` component.

## [2025-12-11] - Phase 7.2: Contact Form Security Refactor
- **Security**: Moved Web3Forms API call from frontend to backend.
- **Removed**: Exposed `WEB3FORMS_ACCESS_KEY` from client-side JavaScript.
- **Backend**: Added fire-and-forget email notification in `inquiryRoutes.ts`.
- **Frontend**: `ContactForm.tsx` now submits to our `/api/inquiries` endpoint.
- **Fixes**: 
  - Added `User-Agent` header to bypass Cloudflare 403 blocks.
  - Forward `h-captcha-response` token to Web3Forms API.
  - Production-safe logging (no PII in console output).
- **Docs**: Created `backend/WEB3FORMS-INTEGRATION.md` guide.

## [2025-12-11] - Phase 7.1: Auth Token Fix
- **Bugfix**: Fixed 401 errors on all admin pages (Users, Products, Orders, Messages).
- **Root Cause**: Token was stored in `sessionStorage` during login but pages were reading from `localStorage`.
- **Fixed Files**: `UsersPage.tsx`, `ProductList.tsx`, `OrdersPage.tsx`, `InquiryInbox.tsx`, `DashboardHome.tsx`.

## [2025-12-11] - Phase 7: Auth Security & UI Polish
- **Security**: Switched from `localStorage` to `sessionStorage` (Auto-logout on tab close).
- **Fix**: Implemented `handleLogout` in DashboardLayout to properly clear session.
- **UI**: Redesigned `AuthPage` with "Deep Black & Gold" aesthetic and high-contrast inputs.

## [2025-12-11] - Phase 6: User Management (Admin)
- **Feature**: `UsersPage` with full CRUD (List, Add, Delete Admin users).
- **Backend**: Added protected routes `/api/auth/users`, `/api/auth/create`, `/api/auth/users/:id`.
- **Cleanup**: Removed redundant "Authentication" link from sidebar.
- **Deploy**: Production dashboard updated at `/dashboard/`.

## [2025-12-11] - Phase 5: Order Management
- **Agent 1**: `Order` Schema with guest support and item snapshots.
- **Agent 3**: Admin API for listing orders and updating status (`PATCH /status`).
- **Agent 2**: Building Orders Dashboard (Next).

## [2025-12-11] - Phase 4: Admin Authentication
- **Agent 2**: Implement dedicated Admin Login page (`AuthPage.tsx`).
- **Security**: Add `ProtectedRoute` wrapper for dashboard access.
- **Fix**: Solves "Port Isolation" issue (token missing on port 5173).

## [2025-12-11] - Phase 3: Inventory Engine (CRUD)
- **Agent 1**: Define Product schema (jewelry fields).
- **Agent 3**: Build GET/POST/DELETE API endpoints.
- **Agent 2**: Implement ProductList with MUI Table + Add Product modal.

## [2025-12-11] - Phase 2.2: Dashboard Expansion (Complete)
- **Visuals**: Applied "Ed&Co" Dark/Gold theme to all admin pages.
- **Structure**: Implemented 9-item Sidebar.
- **Status**: UI polished; Backend logic for Products is next.

## [2025-12-11] - Phase 2.2: Dashboard Expansion
- **Directive**: Update Layout to match "HOTASH" structure but "Ed&Co" Style.
- **Sidebar**: Adding Users, Invoices, Orders, Messages, Notifications.
- **Feature**: Dashboard home with summary cards (dark/gold).
- **Action**: Connecting all pages to real API endpoints.

## [2025-12-11] - Phase 3: Product Inventory Display
- **Agent 2**: Implementing ProductList with jewelry data from API.
- **Features**: Card grid layout, status chips, price formatting.

## [2025-12-11] - Phase 2: Backend-Frontend Integration
- **Goal**: Connect Admin Panel UI to Main Server API.
- **Agent 3**: Configuring CORS for cross-origin requests.
- **Agent 2**: Implementing `InquiryInbox` with live data fetch.

## [2025-12-11] - Phase 1.3: Admin Shell Complete
- **Verified**: Dashboard Layout, Sidebar, and Routing are active.
- **Status**: Admin Panel is running locally on port 5173.
- **Next**: Connect UI to Backend API (Phase 2).

## [2025-12-11] - Phase 1.3: Admin Layout Construction
- **Status**: Phase 1.2 (Scaffolding) Verified.
- **Action**: Authorizing Agent 2 (Frontend) to build the visual shell.
- **Goal**: Create the Dashboard Sidebar, Navigation, and Page Shells.

## [2025-12-11] - Phase 1.2 Admin Setup
- **Action**: Generated installation prompt for "Minimal Free" MUI Dashboard.
- **Safety**: Enforced directory isolation (`/admin-panel`).
- **Next**: Verify installation and connect to `Offer Architect` for product schema.

## v1.3.1 (2025-12-11) - Phase 5: Admin UX Upgrade
- **Admin**: Replaced "Edit Artifact" modal with a high-performance **Slide-Over Drawer**.
- **UX**: Implemented responsive form grid (2-column) with "Dark Luxury" aesthetics.
- **Fixes**: Sidebar no longer appears on Login page.
- **Tooling**: Connected "Reset Portfolio" button to backend seed route.

## v1.3.0 (2025-12-11) - Phase 3: Inquiry Inbox
- **Backend**: Added `Inquiry` model for permanent lead management.
- **API**: New `/api/inquiries` endpoints (POST public, GET/PATCH protected).
- **Features**: Status lifecycle (PENDING → CONTACTED → IN_PROGRESS → COMPLETED → ARCHIVED).
- **Security**: Email validation, required field checks, JWT auth on admin routes.

## v1.2.1 (2025-12-11) - Sidebar Fix
- **Bugfix**: Sidebar now hides immediately on logout (no visual persistence).

## v0.14.0 (2025-12-12)
- **Admin Panel**: Enhanced User Management and Settings.
  - **Users Page**: Added UI for creating/deleting Staff vs Super Admins (with Name support).
  - **Settings Page**: Implemented Password Change form and Profile view.

## v0.13.0 (2025-12-12)
- **Admin Panel**: implemented Role-Based Access Control (RBAC).
  - Added 'SUPER_ADMIN' and 'STAFF' roles to Backend.
  - Restricted 'Users' and 'Settings' access to Super Admins only.
  - Updated Auth Page with official "Edward & Co." branding.
  - Hided restricted sidebar items for Staff.

## v0.12.0 (2025-12-12) - Admin Portal Overhaul
- **Admin**: New sidebar navigation (OpenAI-inspired) with Portfolio, Settings, Security sections.
- **Admin**: Settings page with business info display.
- **Admin**: Security page with Change Password functionality.
- **Backend**: Added `POST /api/auth/change-password` endpoint.

## v1.1.1 (2025-12-11) - Security Hardening
- **Security**: Added hCaptcha to Admin Login to prevent brute-force attacks.
- **Admin**: Added `/admin` gateway page with smart redirection.

## v1.1.0 (2025-12-11) - Developer Experience Update
- **Admin**: Added "Reset Portfolio" button to dashboard.
- **Workflow**: Automated one-click DB seeding from UI (calls `/api/admin/the-algorithms/seed`).

## v1.0.3 (2025-12-11)
- **Developer Tools**: Added POST `/api/admin/the-algorithms/seed` endpoint for automated content population.
- **Content**: Pre-loaded "3 Archetypes" (Custom, Collector, Repair) for Lead Gen demo.

## v1.0.2 (2025-12-11)
- **Security**: Integrated `@hcaptcha/react-hcaptcha` to satisfy Web3Forms high security requirements.
- **Frontend**: Updated `ContactForm.tsx` to include "I am not a robot" widget (Dark Theme).

## v1.0.1 (2025-12-11) Production Launch 🚀
### Milestone
- **Official Release**: Edward & Co. Designer Jeweler is live.
- **Architecture**: Headless MERN Stack (Next.js Frontend + Express Backend + MongoDB Atlas).

### Key Features
- **Commerce Engine**: "The Algorithm" showcases products with Price, Status (Sold/Custom), and Gallery support.
- **Service-First UX**: Homepage linked directly to a "Service Selector" Contact Form.
- **Trust Layer**: Integrated Google Reviews and "Community Love" social links.
- **SEO Suite**: Full OpenGraph/Metadata optimization for local search dominance ("Jewelry Repair Oviedo").

### Security
- **Hardened Auth**: Admin registration strictly gated via environment variables.
- **Sanitized Inputs**: Zod validation on all public forms.
- **Protection**: `robots.txt` blocking admin routes and API endpoints.

## [0.11.0] - Phase 3: Commerce Engine
### Added
- **Product Model**: Extended `AlgorithmPiece` with `price`, `inventoryStatus` (In Stock, Sold, Made to Order, Hidden), and `galleryImages`.
- **Admin Dashboard**: Added Price inputs, Status dropdowns, and visual Status Badges to the management table.
- **Public UI**: Updated "The Algorithms" cards to display USD prices and overlay badges for Sold/Custom items.
- **Logic**: Public API automatically filters out `hidden` items; "Sold" items have disabled Inquiry buttons.

## [0.11.1] - Phase 4: SEO & Metadata
### Added
- **Global Metadata**: Updated `layout.tsx` with metadataBase, Open Graph, Twitter Cards, and improved keywords.
- **robots.txt**: Created with `/admin` and `/api/` exclusions for search crawler guidance.
- **Homepage SEO**: Added service-focused metadata (Jewelry Repair, Watch Batteries, Ring Resizing).
- **Footer Socials**: Instagram, Facebook, Yahoo Reviews, MapQuest links with Lucide icons.
- **Tagline**: Added "Expert Repairs & Service Since 1995" to footer.

## [0.10.0] - MERN Stack Evolution Start
### Safety & Audit (Phase 1)
- **Environment**: Verified `backend/.env` contains `MONGODB_URI`.
- **Audit**: Identified critical core files (`server.ts`, `AlgorithmPiece.ts`, `Admin.ts`).
- **Backup**: Confirmed clean Git state.

### Phase 2: Contact Form (Web3Forms)
- **Removed**: Backend `emailService.ts`, `contactRoutes.ts` (SMTP approach abandoned).
- **Added**: Frontend `ContactForm.tsx` component using Web3Forms API.
- **Features**: Dark luxury styling, Framer Motion animations.

### Phase 3: AlgorithmPiece Model Extension
- **Extended**: `backend/models/AlgorithmPiece.ts` with e-commerce fields.
- **Added Fields**: `price`, `inventoryStatus` (enum), `galleryImages[]`.
- **API Routes**: Public GET now filters out `hidden` items; admin routes already compatible.
- **Admin UI**: Added price input, status dropdown, gallery textarea; table shows colored status badges.
- **Public UI**: Added USD price display, sold/custom order badges, dimming for sold items, disabled CTA.

## [0.9.0] - Legal Compliance & Footer Redesign
### Added
- **Privacy Policy**: `/privacy-policy` page covering data collection, usage, and "No Sale" clause.
- **Terms & Conditions**: `/terms-and-conditions` page with service terms and Florida governing law.
- **Cookies Policy**: `/cookies-policy` page explaining cookie types and browser management.

### Changed
- **Footer Redesign**: Cleaner WhoWhatWear-inspired layout with 3-column grid (Visit, Contact, Hours).
- **Footer Navigation**: Added navigation links row and expanded legal links (Privacy, Terms, Cookies).

### Note
> ⚠️ **Legal Review Required**: Legal pages are templates based on open-source generators. An attorney should review all content before production deployment.

## [0.8.0] - Google Reviews Integration
### Added
- **Google Reviews Carousel**: Real-time reviews from Google Places API with auto-advancing animation.
- **Backend Proxy**: `GET /api/google-reviews` route with 15-minute in-memory cache.
- **Rating Link**: "4.9 ★ on Google (200+ reviews)" now links to the live Google Maps listing.
### Changed
- **Reviews Section**: Updated to fetch live reviews with skeleton loading and fallback data.

## [0.7.0] - Phase 4: Production Readiness
### Security
- **Strict Gating**: `/api/auth/register` now requires `ALLOW_ADMIN_REGISTER=true`.
- **CORS Policy**: Restricted API access to trusted frontend origin.
### Infrastructure
- **Docker Support**: Added `Dockerfile` and `.dockerignore` for container deployment.
- **Render Ready**: Backend verified for Render/Railway deployment.
### Documentation
- **Production Checklist**: Added `PRODUCTION_CHECKLIST.md` for go-live procedures.
- **Render Guide**: Added `RENDER_DEPLOY.md` with deployment checklist.
- **Admin Guide**: Added setup instructions and analytics events to README.
### UX
- **Admin Dashboard**: Enhanced "Edit Algorithm" modal with validation and feedback.


## [0.6.0] - Phase 3: Polish & Completion
### Added
- **SEO Suite**: Comprehensive OpenGraph tags, Twitter Cards, and JSON-LD Structured Data.
- **UX Enhancements**: Global smooth scrolling.
- **Performance**: Optimized font loading strategy.

## [0.5.0] - Phase 2: Database & Admin CMS
### Added
- **Featured Collection**: New "Algorithms" section on homepage.
- **Backend API**: Node.js/Express server linked to MongoDB.
- **Admin CMS**: Login and Dashboard to manage products.
- **Security**: JWT Auth, bcrypt hashing, and production route protection.

## [0.4.2] - Phase 1 Complete
- Initial Scaffolding and Security Audit.
