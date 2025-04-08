import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the user is authenticated for admin routes
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isLoginRoute = request.nextUrl.pathname === "/admin/login"

  if (isAdminRoute && !isLoginRoute) {
    // Check for the authentication cookie/token
    const hasAuthToken = request.cookies.has("my-wee-bar-auth")

    if (!hasAuthToken) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
