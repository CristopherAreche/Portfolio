import "../globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import Providers from "../providers";
import Navbar from "@/components/Navbar";
import SkipToContentLink from "@/components/SkipToContentLink";
import {
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/utils/constants";
import { getTranslations } from "@/utils/i18n";
import {
  getAbsoluteLocalizedUrl,
  isValidLocale,
  LOCALES,
} from "@/utils/locale";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-main",
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = getTranslations(locale);
  const localizedHomeUrl = getAbsoluteLocalizedUrl(locale, "/");
  const alternateLanguages = {
    en: getAbsoluteLocalizedUrl("en", "/"),
    es: getAbsoluteLocalizedUrl("es", "/"),
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.metadata.siteTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: t.metadata.siteDescription,
    alternates: {
      canonical: localizedHomeUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title: t.metadata.siteTitle,
      description: t.metadata.siteDescription,
      url: localizedHomeUrl,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.siteTitle,
      description: t.metadata.siteDescription,
      images: [SITE_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: getAbsoluteLocalizedUrl(locale, "/"),
    jobTitle: getTranslations(locale).metadata.jobTitle,
    sameAs: [
      "https://github.com/CristopherAreche",
      "https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} font-main-font dark:bg-dark_bg`}>
        <Providers language={locale}>
          <Toaster position="top-center" />
          <SkipToContentLink />
          <Navbar />
          <main id="main-content" className="relative min-h-screen pt-[56px]">
            <div className="min-h-[calc(100vh-56px)] py-10 flex items-start justify-center overflow-x-hidden">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
