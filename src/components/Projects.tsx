"use client";

import { projects } from "@/utils/data";
import ProjectItem from "./ProjectItem";
import { useLanguage } from "@/app/language-provider";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section
      aria-label={t.projects.sectionLabel}
      className="mx-auto w-full min-w-0 max-w-6xl px-6 py-4 text-grey_text dark:text-dark_mode_text sm:px-8 sm:py-8"
    >
      <header className="mb-10 max-w-2xl sm:mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {t.projects.heading}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {t.projects.introduction}
        </p>
      </header>
      <div className="space-y-10 sm:space-y-14">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
