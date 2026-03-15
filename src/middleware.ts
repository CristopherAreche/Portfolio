import { NextRequest, NextResponse } from "next/server";
import {
  detectLocaleFromAcceptLanguage,
  isValidLocale,
  LANGUAGE_COOKIE_NAME,
  LOCALES,
} from "@/utils/locale";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

function hasLocalePrefix(pathname: string) {
  return LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE_PATTERN.test(pathname) ||
    hasLocalePrefix(pathname)
  ) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;
  const locale = isValidLocale(cookieLocale ?? "")
    ? (cookieLocale ?? "en")
    : detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LANGUAGE_COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
