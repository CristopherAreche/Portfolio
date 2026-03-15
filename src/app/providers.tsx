"use client";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./language-provider";
import { LanguageCode } from "@/types";

interface ProvidersProps {
  children: React.ReactNode;
  language: LanguageCode;
}

export default function Providers({ children, language }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider language={language}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
