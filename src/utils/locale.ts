import { LanguageCode } from "@/types";
import { SITE_URL } from "@/utils/constants";

export const LOCALES: LanguageCode[] = ["en", "es"];
export const DEFAULT_LOCALE: LanguageCode = "en";
export const LANGUAGE_COOKIE_NAME = "portfolio.lang.v2";

export function isValidLocale(value: string): value is LanguageCode {
  return LOCALES.includes(value as LanguageCode);
}

export function resolveLocale(value?: string | null): LanguageCode {
  if (value === "en" || value === "es") {
    return value;
  }

  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/");
  const [, maybeLocale, ...rest] = segments;

  if (!isValidLocale(maybeLocale)) {
    return pathname || "/";
  }

  const normalizedPath = `/${rest.join("/")}`.replace(/\/+$/, "");
  return normalizedPath === "" ? "/" : normalizedPath || "/";
}

export function getLocalizedPathname(
  locale: LanguageCode,
  pathname: string
) {
  const normalizedPath = stripLocaleFromPathname(pathname || "/");

  if (normalizedPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPath}`;
}

export function getAbsoluteLocalizedUrl(
  locale: LanguageCode,
  pathname: string
) {
  return `${SITE_URL}${getLocalizedPathname(locale, pathname)}`;
}

export function detectLocaleFromAcceptLanguage(
  headerValue: string | null
): LanguageCode {
  if (!headerValue) {
    return DEFAULT_LOCALE;
  }

  const normalizedHeader = headerValue.toLowerCase();

  if (normalizedHeader.includes("es")) {
    return "es";
  }

  return DEFAULT_LOCALE;
}
