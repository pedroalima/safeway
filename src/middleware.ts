import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_user")?.value;

  if (!token) {
    if (request.nextUrl.pathname == "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname == "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"]
};