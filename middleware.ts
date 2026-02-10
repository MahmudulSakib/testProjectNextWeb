import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { getRequiredRolesForPath } from "./lib/protectedRoutes";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  const requiredRoles = getRequiredRolesForPath(pathname);

  // Public route
  if (!requiredRoles) {
    return NextResponse.next();
  }

  const session = req.auth;

  // Not logged in
  if (!session) {
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  const userRole = session.user?.role;

  // Role check
  if (!userRole || !requiredRoles.includes(userRole)) {
    const url = new URL("/", req.url);
    url.searchParams.set("error", "AccessDenied");
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users
  if (pathname === "/" || pathname === "/auth/signin") {
    if (userRole === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    if (userRole === "user") {
      return NextResponse.redirect(new URL("/normalUser", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
