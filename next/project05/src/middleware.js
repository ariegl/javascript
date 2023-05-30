import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("myTokenName");

  if (request.nextUrl.pathname.includes("/login")) {
    if (jwt) return NextResponse.redirect(new URL("/dashboard", request.url));
  } else {
    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

    try {
      const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode("secret")
      );
      console.log({ payload });

      if (request.nextUrl.pathname.includes("/login")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } else {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // this condition avoid to show the login page if the user is logged in
  // if (jwt) {
  //   if (request.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
  //       return NextResponse.redirect(new URL("/dashboard", request.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*", "/login/:path*"],
};
