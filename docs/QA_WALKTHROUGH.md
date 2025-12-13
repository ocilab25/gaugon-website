# Manual QA Test Script: Admin & Customer Deep Dive

Since the automated tools are identifying network instability, please follow this script to manually verify the integrity of the application.

## 1. Test Setup
- **Browser**: Chrome (or Edge/Firefox/Safari)
- **Environment**: Production
- **Device**: Desktop (primary) and Mobile (resize window or use phone)

## 2. Customer Portal Deep Dive
**Credentials**: `Han.solo@gmaiil.com` / `02Mxqmfve5V7NrR5D`
**URL**: [https://admin.edandcod.gaugon.com/customer/auth](https://admin.edandcod.gaugon.com/customer/auth)

### Step 1: Login & Dashboard
1.  Navigate to the URL and log in.
2.  **Verify**:
    -   [ ] The page does NOT look like "raw HTML". It should have a black background.
    -   [ ] "Active Orders" and "Quick Stats" sections are aligned side-by-side (on desktop).
    -   [ ] Sidebar is visible on the left.

### Step 2: Orders & Navigation
1.  Click **Orders** in the sidebar.
2.  **Verify**:
    -   [ ] The table loads with columns for Order ID, Date, Status, Total.
    -   [ ] Status chips (e.g., "Pending", "In Progress") have colored backgrounds (not plain text).

### Step 3: Service Request (Responsive Check)
1.  Click **Request Service** (or similar button).
2.  **Resize your browser window** to be narrow (like a mobile phone).
3.  **Verify**:
    -   [ ] The Layout adjusts. The Sidebar should disappear or become a hamburger menu.
    -   [ ] No text overlaps horizontally.
    -   [ ] You can scroll down to the bottom of the form.

---

## 3. Admin Portal Deep Dive
**Credentials**: `admin@edandcod.com` / `9YB1PTtJ79Z56xPXg`
**URL**: [https://admin.edandcod.gaugon.com/auth](https://admin.edandcod.gaugon.com/auth)

### Step 1: Login & Theme
1.  Navigate to URL and log in.
2.  **Verify**:
    -   [ ] **Theme**: The "Dark Luxury" look (Black/Gold) is applied.
    -   [ ] **Sidebar**: It should be fixed on the left on Desktop.

### Step 2: Critical Mobile Fix Verification
*This was the main regression we fixed.*
1.  **Resize browser to < 768px width** (mobile size).
2.  **Verify**:
    -   [ ] The Desktop Sidebar **disappears** completely.
    -   [ ] A **Hamburger Menu** icon appears in the top-left header.
    -   [ ] Click the Hamburger Menu. A "Sheet" (drawer) should slide out from the left.
    -   [ ] Click "Orders" inside this drawer. The drawer should close, and the page should navigate.
    -   [ ] **Crucial**: The main content should NOT be obscured or overlapped by a broken sidebar.

### Step 3: Orders & Customers
1.  Navigate to **Orders** (Desktop view).
    -   [ ] Ensure the Kanban board or List view renders correctly.
2.  Navigate to **Customers**.
    -   [ ] Ensure the list of customers appears appropriately.

    - [ ] Ensure the list of customers appears appropriately.

---

## 4. Public Website Deep Dive
**URL**: [https://edandcod.gaugon.com/](https://edandcod.gaugon.com/)

### Step 1: Homepage
1.  Navigate to the URL.
2.  **Verify**:
    -   [ ] The page loads completely.
    -   [ ] "Edward & Co." logo is visible.
    -   [ ] Images (Jewelry) are loaded and not broken.

## 5. Reporting
If any of these boxes are unchecked (fail), please describe:
1.  Which page?
2.  What does it look like? (e.g., "White background instead of black", "Text is off-screen").
