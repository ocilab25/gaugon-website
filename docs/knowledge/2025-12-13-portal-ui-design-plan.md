# Portal UI/UX Design Plan
**Date:** 2025-12-13  
**Topic:** Admin/Staff/Customer Portal Design (Inspired by Refine CRM)

---

## Design Inspiration

Based on Refine CRM and modern SaaS portals:
- **Dark Theme** for portals (contrast with White Luxury marketing site)
- **Sidebar Navigation** with icons and active states
- **User Account Display** at top of sidebar
- **Clean, Modern Aesthetic** with subtle animations
- **Role-Based Navigation** (different items per role)

---

## 1. Admin Portal Design

### Sidebar Structure

```
┌─────────────────────────────┐
│ [Logo] Gaugon Portal        │
├─────────────────────────────┤
│ 👤 Admin Account            │
│    admin@gaugon.com         │
│    🟢 Active                │
├─────────────────────────────┤
│ 🏠 Dashboard (Active)        │
│ 📊 Analytics                │
│ 👥 Customers (6)           │
│ 👨‍💼 Staff Management         │
│ 💳 Subscriptions            │
│ 📈 Revenue                  │
│ ⚙️  Settings               │
│ ❓ Help Center              │
└─────────────────────────────┘
```

### Navigation Items

1. **Dashboard** (Home)
   - Overview cards: Total Customers, Active Subscriptions, Revenue, Pending Actions
   - Quick stats grid
   - Recent activity feed

2. **Analytics**
   - Subscription metrics
   - Customer growth charts
   - Revenue trends
   - Plan distribution

3. **Customers** (with badge count)
   - List view with search/filter
   - Customer details modal
   - Subscription status indicators
   - Quick actions (view, edit, suspend)

4. **Staff Management**
   - Staff list
   - Create new staff
   - Permission management
   - Assigned customers per staff

5. **Subscriptions**
   - All subscriptions table
   - Filter by plan/status
   - Create/Edit subscriptions
   - Billing cycle management

6. **Revenue**
   - Revenue dashboard
   - Payment tracking
   - Invoice management (future)

7. **Settings**
   - General settings
   - Security settings
   - Email templates
   - Integration settings

### Main Content Area

- **Dashboard**: Stats grid + activity feed
- **Customers**: Table with filters, search, pagination
- **Staff**: Table with role badges, permissions
- **Subscriptions**: Table with plan badges, status indicators

---

## 2. Staff Portal Design

### Sidebar Structure

```
┌─────────────────────────────┐
│ [Logo] Gaugon Portal        │
├─────────────────────────────┤
│ 👤 Staff Account            │
│    staff@gaugon.com         │
│    🟢 Active                │
├─────────────────────────────┤
│ 🏠 Dashboard (Active)        │
│ 👥 My Customers (3)         │
│ 💳 Subscriptions            │
│ 📊 Reports                  │
│ ⚙️  Settings                │
└─────────────────────────────┘
```

### Navigation Items (Limited Access)

1. **Dashboard**
   - Assigned customers count
   - Recent customer activity
   - Quick actions

2. **My Customers** (only assigned customers)
   - Filtered customer list
   - Customer details (read-only)
   - Contact information

3. **Subscriptions** (view only)
   - View subscriptions for assigned customers
   - Status monitoring
   - No create/edit permissions

4. **Reports** (limited)
   - Customer activity reports
   - Subscription status reports

5. **Settings**
   - Profile settings
   - Password change
   - Notification preferences

### Main Content Area

- **Dashboard**: Assigned customers overview
- **My Customers**: Filtered table (only assigned)
- **Subscriptions**: Read-only subscription list

---

## 3. Customer Portal Design

### Sidebar Structure

```
┌─────────────────────────────┐
│ [Logo] Gaugon Portal        │
├─────────────────────────────┤
│ 👤 John Doe                 │
│    john@company.com         │
│    🟢 Active                │
├─────────────────────────────┤
│ 🏠 Dashboard (Active)        │
│ 👤 My Profile               │
│ 💳 My Subscription          │
│ 📊 Usage & Analytics        │
│ 📞 Support                  │
│ ⚙️  Settings                │
└─────────────────────────────┘
```

### Navigation Items (Self-Service Only)

1. **Dashboard**
   - Subscription status card
   - Plan details
   - Usage summary
   - Quick actions

2. **My Profile**
   - Personal information
   - Company details
   - Contact information
   - Edit profile form

3. **My Subscription**
   - Current plan display
   - Plan features list
   - Billing information
   - Upgrade/Downgrade options
   - Payment method (future)

4. **Usage & Analytics**
   - Service usage metrics
   - API usage (if applicable)
   - Activity logs

5. **Support**
   - Support tickets
   - Knowledge base
   - Contact support form

6. **Settings**
   - Account settings
   - Password change
   - Notification preferences
   - Privacy settings

### Main Content Area

- **Dashboard**: Subscription card + usage summary
- **My Profile**: Edit form with validation
- **My Subscription**: Plan details + upgrade options
- **Usage**: Charts and metrics

---

## 4. Design System

### Color Palette (Dark Theme)

```css
/* Backgrounds */
--bg-primary: #0F0F0F (Dark black)
--bg-secondary: #1A1A1A (Slightly lighter)
--bg-card: #242424 (Card background)
--bg-hover: #2A2A2A (Hover states)

/* Text */
--text-primary: #FFFFFF (White)
--text-secondary: #A0A0A0 (Light grey)
--text-muted: #6B6B6B (Muted grey)

/* Accents (Gaugon Brand) */
--accent-purple: #6B4CFF (Primary actions)
--accent-cyan: #00E0FF (Secondary actions)
--accent-gold: #C9A87C (Highlights, if needed)

/* Status Colors */
--success: #10B981 (Green - Active, Success)
--warning: #F59E0B (Yellow - Pending, Warning)
--error: #EF4444 (Red - Error, Cancelled)
--info: #3B82F6 (Blue - Info)
```

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: 600-700 weight
- **Body**: 400 weight
- **Small Text**: 14px, 400 weight

### Components

#### Sidebar
- Fixed left sidebar (256px width)
- Collapsible on mobile (drawer)
- Active state: Purple background + white text
- Hover state: Subtle background change
- Icons: Lucide React (consistent with shadcn/ui)

#### Cards
- Dark background (`--bg-card`)
- Rounded corners (8px)
- Subtle border (1px, `--bg-hover`)
- Padding: 24px

#### Tables
- Dark theme with hover states
- Striped rows (alternating opacity)
- Action buttons (view, edit, delete)
- Status badges (colored pills)

#### Badges
- Small rounded pills
- Color-coded by status
- Count badges (green pill with number)

#### Forms
- Dark input backgrounds
- Purple focus borders
- White text
- Error states (red border)

---

## 5. shadcn/ui Components to Use

### Core Components
- `Sidebar` (custom or use shadcn sidebar pattern)
- `Card` - For dashboard stats
- `Table` - For data lists
- `Button` - Primary actions
- `Input` - Form inputs
- `Select` - Dropdowns
- `Dialog` - Modals
- `Sheet` - Mobile drawer
- `Badge` - Status indicators
- `Avatar` - User display
- `Separator` - Dividers
- `Skeleton` - Loading states

### Data Display
- `Tabs` - For tabbed content
- `Tooltip` - Hover information
- `Popover` - Context menus
- `Dropdown Menu` - Action menus

### Forms
- `Form` - Form wrapper
- `Label` - Form labels
- `Checkbox` - Checkboxes
- `Switch` - Toggles

---

## 6. Layout Structure

### Desktop Layout

```
┌──────────┬──────────────────────────────┐
│          │ Header (Breadcrumbs, Actions)│
│ Sidebar  ├──────────────────────────────┤
│ (256px)  │                              │
│          │   Main Content Area          │
│          │   (Cards, Tables, Forms)     │
│          │                              │
└──────────┴──────────────────────────────┘
```

### Mobile Layout

- Sidebar becomes drawer (Sheet component)
- Hamburger menu in header
- Full-width content
- Stack cards vertically

---

## 7. Key Features by Role

### Admin Portal Features

1. **Customer Management**
   - View all customers
   - Search and filter
   - Customer details modal
   - Edit customer info
   - Suspend/Activate accounts

2. **Staff Management**
   - Create staff accounts
   - Assign customers to staff
   - Manage permissions
   - View staff activity

3. **Subscription Management**
   - Create subscriptions
   - Update plans
   - Change billing cycles
   - View all subscriptions
   - Revenue tracking

4. **Analytics Dashboard**
   - Customer growth chart
   - Revenue trends
   - Plan distribution
   - Active vs. cancelled

### Staff Portal Features

1. **Assigned Customers**
   - View only assigned customers
   - Customer contact info
   - Subscription status
   - Activity history

2. **Limited Actions**
   - View subscriptions (read-only)
   - Generate reports
   - Contact customers

### Customer Portal Features

1. **Profile Management**
   - Edit personal info
   - Update company details
   - Change password

2. **Subscription View**
   - Current plan details
   - Plan features
   - Billing information
   - Upgrade options

3. **Self-Service**
   - View usage metrics
   - Support tickets
   - Account settings

---

## 8. User Account Display (Top of Sidebar)

### Design Pattern (from inspiration)

```
┌─────────────────────────────┐
│ # Company Name              │
│    user@email.com           │
│    🟢 Active                │
│    [Dropdown Arrow]         │
└─────────────────────────────┘
```

**Implementation:**
- Avatar or hash symbol (#) in rounded square
- Company/User name (bold)
- Email address (muted)
- Status indicator (green dot)
- Dropdown for account switching (admin) or settings

---

## 9. Navigation States

### Active State
- Purple background (`--accent-purple`)
- White text
- Left border accent (optional)

### Hover State
- Slightly lighter background
- Smooth transition (200ms)

### Badge States
- Count badges: Green pill with number
- "New" badges: Green pill with "New" text
- Status badges: Color-coded (success, warning, error)

---

## 10. Responsive Design

### Breakpoints
- **Mobile**: < 768px (Sidebar → Drawer)
- **Tablet**: 768px - 1024px (Collapsible sidebar)
- **Desktop**: > 1024px (Fixed sidebar)

### Mobile Considerations
- Hamburger menu in header
- Sheet component for sidebar
- Stack cards vertically
- Full-width tables with horizontal scroll
- Touch-friendly button sizes (44px min)

---

## 11. Implementation Plan

### Phase 1: Core Layout
1. Create `PortalLayout` component
2. Implement sidebar with navigation
3. User account display at top
4. Main content area
5. Mobile drawer

### Phase 2: Admin Portal
1. Dashboard with stats cards
2. Customers table
3. Staff management
4. Subscriptions table

### Phase 3: Staff Portal
1. Limited navigation
2. Assigned customers view
3. Read-only subscriptions

### Phase 4: Customer Portal
1. Profile management
2. Subscription view
3. Usage analytics

### Phase 5: Polish
1. Animations and transitions
2. Loading states
3. Error handling
4. Accessibility audit

---

## 12. Component File Structure

```
app/
  portal/
    layout.tsx (PortalLayout with sidebar)
    dashboard/
      page.tsx (Role-based redirect)
    admin/
      dashboard/
        page.tsx
      customers/
        page.tsx
      staff/
        page.tsx
      subscriptions/
        page.tsx
    staff/
      dashboard/
        page.tsx
      customers/
        page.tsx
    customer/
      dashboard/
        page.tsx
      profile/
        page.tsx
      subscription/
        page.tsx

components/
  portal/
    PortalLayout.tsx
    PortalSidebar.tsx
    UserAccount.tsx
    DashboardStats.tsx
    CustomersTable.tsx
    SubscriptionsTable.tsx
    StaffTable.tsx
```

---

## 13. Design Mockups Summary

### Admin Portal
- Full navigation (7-8 items)
- Customer management with badges
- Staff management
- Subscription CRUD
- Analytics dashboard

### Staff Portal
- Limited navigation (5 items)
- Assigned customers only
- Read-only subscriptions
- Basic reports

### Customer Portal
- Self-service navigation (6 items)
- Profile editing
- Subscription viewing
- Usage metrics
- Support access

---

## Next Steps

1. Install shadcn/ui components
2. Create PortalLayout component
3. Build Admin dashboard
4. Build Staff portal
5. Build Customer portal
6. Add animations and polish

**Status**: Design plan complete. Ready for frontend implementation.

