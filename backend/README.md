# Gaugon Backend API

Express/Node.js backend API for Gaugon Portal system with MongoDB, JWT authentication, and role-based access control.

## Features

- **Multi-Role Authentication**: Admin, Staff, and Customer roles
- **JWT with Refresh Tokens**: Secure token-based authentication
- **Role-Based Access Control**: Admin sees customers, customers cannot see admins
- **Subscription Management**: Full subscription system with plans (Standard, Plus, Max, Enterprise)
- **Rate Limiting**: Brute force protection on auth endpoints
- **Multi-Subdomain CORS**: Supports multiple frontend subdomains on same Render service
- **MongoDB Integration**: Mongoose ODM with connection pooling

## Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: Zod
- **Rate Limiting**: express-rate-limit

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Variables

Create `.env` file (see `.env.example`):

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gaugon
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
PORT=5000
NODE_ENV=development
FRONTEND_URL=https://app.gaugon.com
PORTAL_URL=https://portal.gaugon.com
ALLOW_ADMIN_REGISTER=false
```

### 3. Create First Admin

```bash
# Using tsx (development)
npx tsx src/scripts/createAdmin.ts admin@gaugon.com Admin123!@#

# Or after build
npm run build
node dist/scripts/createAdmin.js admin@gaugon.com Admin123!@#
```

### 4. Run Development Server

```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new customer
- `POST /api/auth/login` - Login (returns token + refreshToken)
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout (invalidate refresh token)
- `GET /api/auth/me` - Get current user

### Admin (Requires Admin Role)

- `GET /api/admin/customers` - List all customers
- `GET /api/admin/customers/:id` - Get customer by ID
- `GET /api/admin/staff` - List all staff
- `POST /api/admin/staff` - Create staff member
- `GET /api/admin/admins` - List all admins

### Customer (Requires Customer Role)

- `GET /api/customer/profile` - Get own profile
- `PUT /api/customer/profile` - Update own profile
- `GET /api/customer/subscription` - Get own subscription

### Subscriptions

- `GET /api/subscriptions` - List all (admin/staff only)
- `GET /api/subscriptions/:customerId` - Get by customer (own data for customers)
- `POST /api/subscriptions` - Create subscription (admin only)
- `PUT /api/subscriptions/:id` - Update subscription (admin only)

### Health

- `GET /api/health` - General health check
- `GET /api/health/db` - Database connection status

## Security Features

### Rate Limiting
- Auth endpoints: 5 attempts per 15 minutes per IP

### Data Isolation
- Customers cannot query admin/staff data
- Customers can only access their own data
- Admin can see all customers

### JWT Tokens
- Access token: 8 hours (default)
- Refresh token: 7 days (default)
- Refresh tokens stored in database (admin/staff only)

## Deployment

### Render.com

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set start command: `node dist/server.js`
4. Add environment variables in Render dashboard
5. Deploy

### Docker

```bash
docker build -t gaugon-backend .
docker run -p 5000:5000 --env-file .env gaugon-backend
```

## Multi-Subdomain CORS

The backend supports multiple frontend subdomains on the same Render service:

```env
FRONTEND_URL=https://app.gaugon.com
PORTAL_URL=https://portal.gaugon.com
ADMIN_URL=https://admin.gaugon.com
```

Or use wildcard pattern:
```env
FRONTEND_URL=https://*.gaugon.com
```

## Database Models

### User (Base)
- `email` (unique, indexed)
- `passwordHash`
- `role` (admin | staff | customer)
- `isActive`
- `refreshToken` (admin/staff only)
- `refreshTokenExpiry`

### Admin (Extends User)
- `permissions` (array)
- `lastLogin`

### Staff (Extends User)
- `permissions` (array)
- `assignedCustomers` (ObjectId[])

### Customer (Extends User)
- `profile` (firstName, lastName, company, phone)
- `subscription` (plan, status, startDate, endDate, billingCycle)

### Subscription (Separate Collection)
- `customerId` (reference)
- `plan` (standard | plus | max | enterprise)
- `status` (active | cancelled | expired | trial)
- `price`
- `billingCycle` (monthly | annual)

## Development

### TypeScript

```bash
# Type check
npm run type-check

# Build
npm run build

# Watch mode (development)
npm run dev
```

## Notes

- Admin/Staff registration requires `ALLOW_ADMIN_REGISTER=true` (disabled by default)
- Use CLI script to create first admin
- Refresh tokens are only stored for admin/staff roles
- Customers use stateless JWT (no refresh token storage)

