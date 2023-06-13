import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// default host projects url pattern regex with optional port number
const hostProjectPatterns = [
  /^([a-z0-9-]+)\.multisite.nydelic.ch(:[0-9]+)?$/,
  /^([a-z0-9-]+)\.localhost(:[0-9]+)?$/,
];

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  // extract project from host (first subdomain)

  if (host) {
    let project: null | string = null;
    if (hostProjectPatterns.some((pattern) => pattern.test(host))) {
      project = host.split(".")[0];
    }
    if (project) {
      return NextResponse.rewrite(
        new URL(`/projects/${project}${request.nextUrl.pathname}`, request.url)
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
