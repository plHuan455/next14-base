import createMiddleware from "next-intl/middleware"

import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|rank|static|favicon|.*\\..*|_next).*)", "/(vi)/:path*"],

  // matcher: ["/((?!api|_next/static|_next/image|images/|favicon.ico|assets|js|robots|sitemap).*)"],
}
