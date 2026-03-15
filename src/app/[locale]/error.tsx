"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getTranslations } from "@/utils/i18n";
import { resolveLocale } from "@/utils/locale";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const params = useParams<{ locale?: string }>();
  const locale = resolveLocale(params?.locale);
  const t = getTranslations(locale).errorBoundary;

  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-2xl font-main-font text-grey_text dark:text-dark_mode_text">
        {t.title}
      </h2>
      <p className="max-w-xl text-grey_text dark:text-dark_mode_text/80">
        {t.description}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md border border-green_text px-6 py-2 text-sm font-main-font uppercase tracking-wide text-grey_text transition-colors hover:bg-green_text hover:text-white dark:text-dark_mode_text"
      >
        {t.retry}
      </button>
    </div>
  );
}
