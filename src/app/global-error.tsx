"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/utils/i18n";

interface GlobalErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalErrorPage({
  error,
  reset,
}: GlobalErrorPageProps) {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/es") ? "es" : "en";
  const t = getTranslations(locale).errorBoundary;

  useEffect(() => {
    console.error("Global route error:", error);
  }, [error]);

  return (
    <html lang={locale}>
      <body className="bg-light_bg font-main-font text-grey_text dark:bg-dark_bg dark:text-dark_mode_text">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
          <h2 className="text-2xl">{t.title}</h2>
          <p className="max-w-xl text-grey_text/80 dark:text-dark_mode_text/80">
            {t.description}
          </p>
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-green_text px-6 py-2 text-sm uppercase tracking-wide transition-colors hover:bg-green_text hover:text-white"
          >
            {t.retry}
          </button>
        </div>
      </body>
    </html>
  );
}
