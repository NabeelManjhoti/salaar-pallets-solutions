import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value
  const { pathname } = request.nextUrl

  const secretKey = process.env.SESSION_SECRET
  if (!secretKey) {
    console.error("SESSION_SECRET is not set")
    return NextResponse.next()
  }
  const encodedKey = new TextEncoder().encode(secretKey)

  let isValidSession = false
  if (sessionCookie) {
    try {
      const { payload } = await jwtVerify(sessionCookie, encodedKey, {
        algorithms: ["HS256"],
      })
      isValidSession = !!payload.userId
    } catch {}
  }

  if (!isValidSession && pathname.startsWith("/admin") && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  if (isValidSession && pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/admin/inquiries", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
