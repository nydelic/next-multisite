import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import domains from "./domains.json";

// default host projects url pattern regex with optional port number
const hostProjectPatterns = [
  /^([a-z0-9-]+)\.nydelic-multisite.ch(:[0-9]+)?$/,
  /^([a-z0-9-]+)\.localhost(:[0-9]+)?$/,
];

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host) {
    let project: null | string = null;
    // extract project from host (first subdomain)
    if (hostProjectPatterns.some((pattern) => pattern.test(host))) {
      project = host.split(".")[0];
    }
    // check if host is a domain alias
    Object.entries(domains).forEach(([configProject, domains]) => {
      if (domains.includes(host)) {
        project = configProject;
      }
    });

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
