import { Metadata } from "next";
import { notFound } from "next/navigation";
import DeferredParticlesBackground from "@/components/DeferredParticlesBackground";
import Projects from "@/components/Projects";
import { getTranslations } from "@/utils/i18n";
import { getAbsoluteLocalizedUrl, isValidLocale } from "@/utils/locale";

interface ProjectsPageProps {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: ProjectsPageProps): Metadata {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = getTranslations(locale);
  const localizedProjectsUrl = getAbsoluteLocalizedUrl(locale, "/projects");

  return {
    title: t.metadata.projectsTitle,
    description: t.metadata.projectsDescription,
    alternates: {
      canonical: localizedProjectsUrl,
      languages: {
        en: getAbsoluteLocalizedUrl("en", "/projects"),
        es: getAbsoluteLocalizedUrl("es", "/projects"),
      },
    },
    openGraph: {
      title: `${t.metadata.projectsTitle} | ${t.metadata.siteTitle}`,
      description: t.metadata.projectsDescription,
      url: localizedProjectsUrl,
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      title: `${t.metadata.projectsTitle} | ${t.metadata.siteTitle}`,
      description: t.metadata.projectsDescription,
    },
  };
}

export default function ProjectsPage() {
  return (
    <>
      <DeferredParticlesBackground />
      <Projects />
    </>
  );
}
