# Next.js App Router + NextAuth v5 with Role-Based Access

## How to Run

1.  **Install packages:**
    npm install
2.  **Run the project:**
    npm run dev
3.  Open `http://localhost:3

## What it does

1.  Lets users log in using a username and password.
2.  Assigns a role to each user (like admin or user).
3.  Protects pages based on roles. For example:
    - Admin pages → only admins can see.
    - Normal user pages → both users and admins can see.
4.  Redirects users to the right page after login based on their role.
5.  Shows how to use middleware to protect pages globally.

## Tech Used

1.  Next.js 16+ (App Router)
2.  React 19+
3.  NextAuth.js v5
4.  TypeScript 5
5.  TailwindCSS (Assuming this will be integrated for styling, though not explicitly in previous code snippets)

## How It’s Organized

1.  `app/` → all your pages
2.  `components/` → reusable React components (like Navbar)
3.  `lib/protectedRoutes.ts` → defines which page needs which role
4.  `middleware.ts` → checks if the user is logged in and allowed to see the page
5.  `auth.ts` → configures NextAuth v5
6.  `types/next-auth.d.ts` → adds a role property to user/session types

## Users & Roles

1. const users = [ { username: "adminuser", password: "adminpassword", role: "admin" }, { username: "normaluser", password: "userpassword", role: "user" }, ];

2. Admin can go to `/admin*` pages.
3. Normal user can go to `/normalUser*` pages.

## How Middleware Works

1.  The middleware looks at each request:
2.  Checks if the page is protected.
3.  If yes, checks if the user is logged in.
4.  If the user is logged in, checks their role.
5.  Redirects to `/` or `/auth/signin` if they aren’t allowed.
6.  This makes sure only the right users see the right pages.
