# Session Summary: Portal Architecture Plan (From edandcod-website)
**Date:** 2025-12-13  
**Topic:** MongoDB Portal System with Admin/Staff/Customer Roles & Subscriptions

---

## 1. Current State Analysis

### gaugon-website (Current)
- **Stack:** Next.js 14 (Static Export), Tailwind CSS, TypeScript
- **Deployment:** GitHub Pages (static site)
- **Backend:** None (only guide file)
- **Database:** None
- **Auth:** None
- **Limitation:** `output: 'export'` disables API routes and server-side features

### edandcod-website (Source of Patterns)
- **Stack:** MERN (MongoDB, Express, React, Node.js)
- **Backend:** Express/Node.js deployed to Render
- **Database:** MongoDB with Mongoose
- **Auth:** JWT-based with role-based access
- **Models:** Admin model with role system
- **Deployment:** Frontend (GitHub Pages), Backend (Render)

---

## 2. Requirements

### Core Features
1. **Multi-Role Portal System:**
   - Admin Portal (full access)
   - Staff Portal (limited admin access)
   - Customer Portal (self-service)

2. **Security Requirements:**
   - Admin can see customers
   - Customers **cannot** see admins (data isolation)
   - Role-based API access control

3. **Subscription System:**
   - Customer subscription management
   - Plan tiers (Standard, Plus, Max, Enterprise)
   - Subscription status tracking

4. **Smooth Auth Experience:**
   - Modern login/register pages
   - JWT token management
   - Protected routes

---

## 3. Architecture Proposal

### Option A: Safe/Reversible (Recommended)
**Hybrid Architecture:**
- **Frontend:** Next.js 14 (remove static export, enable API routes)
- **Backend:** Express/Node.js API (separate service)
- **Database:** MongoDB Atlas (cloud-hosted)
- **Deployment:** 
  - Frontend: Vercel/Netlify (supports Next.js API routes)
  - Backend: Render/Railway (Express service)
- **Migration Path:** Gradual - keep marketing site static, add portal as subdomain

**Pros:**
- Clear separation of concerns
- Can deploy backend independently
- Easier to scale
- Reversible (can revert to static if needed)

**Cons:**
- More complex deployment
- Two services to manage
- CORS configuration needed

### Option B: Fast/Risky
**Monolithic Next.js:**
- **Stack:** Next.js 14 with API routes (remove static export)
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (full Next.js support)
- **Migration:** Single codebase, all-in-one

**Pros:**
- Simpler deployment (one service)
- Faster development
- Built-in API routes

**Cons:**
- Harder to scale backend separately
- Vendor lock-in (Vercel)
- Less reversible

---

## 4. MongoDB Schema Design

### User Model (Base)
```typescript
interface User {
  _id: ObjectId;
  email: string; // unique, indexed
  passwordHash: string; // bcrypt
  role: 'admin' | 'staff' | 'customer';
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
```

### Admin Model (Extends User)
```typescript
interface Admin extends User {
  role: 'admin';
  permissions: string[]; // ['view_customers', 'manage_staff', 'manage_subscriptions']
  lastLogin: Date;
}
```

### Staff Model (Extends User)
```typescript
interface Staff extends User {
  role: 'staff';
  permissions: string[]; // ['view_customers', 'view_subscriptions'] (limited)
  assignedCustomers: ObjectId[]; // optional: staff can be assigned to specific customers
}
```

### Customer Model (Extends User)
```typescript
interface Customer extends User {
  role: 'customer';
  profile: {
    firstName: string;
    lastName: string;
    company?: string;
    phone?: string;
  };
  subscription: {
    plan: 'standard' | 'plus' | 'max' | 'enterprise';
    status: 'active' | 'cancelled' | 'expired' | 'trial';
    startDate: Date;
    endDate?: Date;
    billingCycle: 'monthly' | 'annual';
  };
  // Security: Customers cannot query admin/staff data
}
```

### Subscription Model (Separate Collection)
```typescript
interface Subscription {
  _id: ObjectId;
  customerId: ObjectId; // reference to Customer
  plan: 'standard' | 'plus' | 'max' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  billingCycle: 'monthly' | 'annual';
  price: number;
  paymentMethod?: string; // future: Stripe integration
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 5. API Routes Structure

### Backend Routes (Express)
```
/api/auth
  POST /register
  POST /login
  POST /logout
  GET  /me (current user)

/api/admin
  GET  /customers (admin/staff only)
  GET  /customers/:id
  GET  /staff (admin only)
  POST /staff (admin only)

/api/customer
  GET  /profile (customer only)
  PUT  /profile (customer only)
  GET  /subscription (customer only)
  PUT  /subscription (customer only)

/api/subscriptions
  GET  / (admin/staff only - all subscriptions)
  GET  /:customerId (admin/staff/customer - own data)
  POST / (admin only - create subscription)
  PUT  /:id (admin only - update subscription)
```

### Security Middleware
```typescript
// Role-based access control
const requireRole = (roles: string[]) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

// Data isolation: Customers cannot query admin/staff
const customerDataIsolation = (req, res, next) => {
  if (req.user.role === 'customer') {
    // Filter out admin/staff from any queries
    req.query.role = { $ne: ['admin', 'staff'] };
  }
  next();
};
```

---

## 6. Frontend Portal Pages

### Route Structure
```
/portal
  /login
  /register
  /dashboard (role-based redirect)
    /admin (admin only)
      - Customer list
      - Staff management
      - Subscription overview
    /staff (staff only)
      - Assigned customers
      - Limited admin tools
    /customer (customer only)
      - Profile
      - Subscription details
      - Service usage
```

### Protected Route Component
```typescript
// components/portal/ProtectedRoute.tsx
const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <Loading />;
  if (!user) return <Redirect to="/portal/login" />;
  if (!allowedRoles.includes(user.role)) return <AccessDenied />;
  
  return children;
};
```

---

## 7. Migration Strategy

### Phase 1: Backend Setup (Week 1)
1. Create `backend/` directory with Express/Node.js
2. Set up MongoDB connection (MongoDB Atlas)
3. Create User models (Admin, Staff, Customer)
4. Implement JWT auth endpoints
5. Deploy backend to Render

### Phase 2: Frontend Portal (Week 2)
1. Remove `output: 'export'` from `next.config.mjs`
2. Create `/portal` routes
3. Build login/register pages (White Luxury design)
4. Implement auth context/provider
5. Create role-based dashboard layouts

### Phase 3: Subscription System (Week 3)
1. Create Subscription model
2. Build subscription management UI
3. Implement plan upgrade/downgrade flows
4. Add subscription status indicators

### Phase 4: Security & Polish (Week 4)
1. Implement data isolation (customers can't see admins)
2. Add role-based API middleware
3. Security audit (Agent 03)
4. QA testing (Agent 00)

---

## 8. Deployment Considerations

### Current: GitHub Pages (Static)
- **Issue:** Cannot host Next.js API routes
- **Solution:** Move to Vercel/Netlify OR keep marketing site static, add portal subdomain

### Recommended: Vercel
- Supports Next.js API routes
- Automatic deployments from GitHub
- Free tier for small projects
- Easy environment variable management

### Backend: Render/Railway
- Express/Node.js service
- MongoDB connection
- Environment variables for secrets
- Auto-deploy from GitHub

---

## 9. Security Checklist (Agent 03 Review)

- [ ] JWT tokens stored in httpOnly cookies (not localStorage)
- [ ] Password hashing with bcrypt (salt rounds: 12+)
- [ ] Rate limiting on auth endpoints
- [ ] CORS configured for frontend domain only
- [ ] Input validation with Zod on all endpoints
- [ ] Role-based access control middleware
- [ ] Data isolation: Customers cannot query admin/staff collections
- [ ] MongoDB indexes on email, role fields
- [ ] Environment variables for secrets (never in code)
- [ ] HTTPS only (enforce in production)

---

## 10. Files to Create/Modify

### New Backend Files
```
backend/
  src/
    models/
      User.ts
      Admin.ts
      Staff.ts
      Customer.ts
      Subscription.ts
    routes/
      auth.ts
      admin.ts
      customer.ts
      subscriptions.ts
    middleware/
      auth.ts
      roles.ts
      dataIsolation.ts
    server.ts
    db.ts
  package.json
  .env.example
  Dockerfile (for Render)
```

### New Frontend Files
```
app/
  portal/
    login/
      page.tsx
    register/
      page.tsx
    dashboard/
      admin/
        page.tsx
      staff/
        page.tsx
      customer/
        page.tsx
  api/ (Next.js API routes - if Option B)
components/
  portal/
    ProtectedRoute.tsx
    AuthProvider.tsx
    LoginForm.tsx
    RegisterForm.tsx
lib/
  auth.ts
  api.ts (API client)
```

### Modified Files
```
next.config.mjs (remove output: 'export' if Option B)
package.json (add dependencies)
.env.example (add MongoDB, JWT secrets)
```

---

## 11. Dependencies Needed

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "zod": "^3.22.4",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```

### Frontend
```json
{
  "axios": "^1.6.0", // or fetch API
  "js-cookie": "^3.0.5", // for httpOnly cookie handling
  "zod": "^3.22.4" // shared validation
}
```

---

## 12. Next Steps & Approval

### ⚠️ STOP PROTOCOL TRIGGERED
This change touches:
- Core server/auth/db (MongoDB, Express, JWT)
- >2 files (major refactor)
- Deployment strategy (static → dynamic)

### Decision Required
**Option A (Safe/Reversible):** Hybrid architecture with separate backend  
**Option B (Fast/Risky):** Monolithic Next.js with API routes

### Questions for User
1. Which deployment option do you prefer? (A or B)
2. Do you have MongoDB Atlas account ready?
3. Should we keep marketing site static and add portal as subdomain? (e.g., `portal.gaugon.com`)
4. Timeline preference? (4-week phased approach or faster?)

---

## 13. Lessons from edandcod-website

1. **Static Export Limitation:** Next.js `output: 'export'` prevents API routes. Must remove for dynamic features.
2. **CORS Configuration:** Backend must restrict CORS to frontend domain in production.
3. **Environment Variables:** Use `NEXT_PUBLIC_*` for client-side, regular vars for server-side.
4. **Admin Creation:** Use CLI script to create first admin (don't enable public registration).
5. **Data Isolation:** Implement middleware to prevent customers from querying admin/staff data.

