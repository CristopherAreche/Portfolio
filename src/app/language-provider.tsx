"use client";

import { createContext, useContext, useMemo } from "react";
import { LanguageCode } from "@/types";
import { getTranslations } from "@/utils/i18n";

interface LanguageContextValue {
  language: LanguageCode;
  t: ReturnType<typeof getTranslations>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  language,
}: {
  children: React.ReactNode;
  language: LanguageCode;
}) {
  const value = useMemo(
    () => ({
      language,
      t: getTranslations(language),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
