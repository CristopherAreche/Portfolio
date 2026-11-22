"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/utils/data";
import ProjectItem from "./ProjectItem";
import { useLanguage } from "@/app/language-provider";
import { getLocalizedPathname } from "@/utils/locale";

const FeaturedProjects = () => {
  const { language, t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const showMoreLink = projects.length > 1;

  return (
    <section
      aria-label={t.projects.featuredHeading}
      className="mx-auto w-full max-w-6xl min-w-0 border-t border-slate-200 px-6 py-12 text-grey_text dark:border-slate-800 dark:text-dark_mode_text sm:px-8 sm:py-16"
    >
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.projects.featuredHeading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.projects.featuredIntro}
          </p>
        </header>

        {showMoreLink && (
          <Link
            href={getLocalizedPathname(language, "/projects")}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
          >
            {t.projects.viewAll}
            <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>

      <div className="space-y-12 sm:space-y-16">
        {featured.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>

      {showMoreLink && (
        <div className="mt-12 text-center sm:mt-16">
          <Link
            href={getLocalizedPathname(language, "/projects")}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold transition-colors hover:border-green-700 hover:text-green-700 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-green-400 dark:hover:text-green-400"
          >
            {t.projects.viewAll}
            <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
