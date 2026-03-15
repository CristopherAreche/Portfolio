import { LanguageCode } from "@/types";

export interface UiTranslations {
  metadata: {
    siteTitle: string;
    siteDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    jobTitle: string;
  };
  layout: {
    skipToContent: string;
  };
  navbar: {
    index: string;
    projects: string;
    languageLabel: string;
    languageToggleLabel: string;
    english: string;
    spanish: string;
  };
  hero: {
    sectionLabel: string;
    greeting: string;
    role: string;
    descriptionFirst: string;
    descriptionSecond: string;
    frontend: string;
    backend: string;
    tools: string;
    resume: string;
    email: string;
    copied: string;
    copyEmailAria: string;
    emailCopiedAria: string;
    copySuccessToast: string;
    copyErrorToast: string;
    linkedinAria: string;
    githubAria: string;
    professionalProfile: string;
  };
  projects: {
    sectionLabel: string;
    heading: string;
    projectAria: (name: string) => string;
    sourceCode: string;
    sourceCodeAria: (name: string) => string;
    visitWebsite: string;
    visitWebsiteAria: (name: string) => string;
    inProgress: string;
  };
  errorBoundary: {
    title: string;
    description: string;
    retry: string;
  };
  themeSwitcher: {
    toLight: string;
    toDark: string;
  };
}

export type TranslationDictionary = Record<LanguageCode, UiTranslations>;
