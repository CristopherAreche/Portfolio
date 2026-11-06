"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectItemProps } from "@/types";
import { useLanguage } from "@/app/language-provider";

const ProjectItem = ({
  id,
  name,
  image,
  frontend_tech,
  backend_tech,
  description,
  descriptionEs,
  contributions,
  contributionsEs,
  deployment,
  sourceCode,
}: ProjectItemProps) => {
  const { language, t } = useLanguage();
  const details = language === "es" ? contributionsEs : contributions;
  const technologies = Array.from(
    new Set(
      [...frontend_tech, ...(backend_tech ?? [])].map((tech) => tech.name)
    )
  ).filter((name) => !["HTML", "CSS"].includes(name));
  const linkClass =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-green_text hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800";

  return (
    <article
      aria-labelledby={`project-${id}`}
      className="grid min-w-0 gap-6 border-b border-slate-200 pb-10 last:border-0 dark:border-slate-800 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 sm:pb-14 lg:gap-12"
    >
      <div className="min-w-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
          <Image
            src={image}
            alt={t.projects.previewAria(name)}
            fill
            priority={id === 1}
            sizes="(min-width: 1152px) 460px, (min-width: 768px) 42vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
          <span>{t.projects.independent}</span>
          {deployment.status === "in-progress" && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {t.projects.inProgress}
            </span>
          )}
        </div>
        <h2
          id={`project-${id}`}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {name}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {language === "es" ? descriptionEs : description}
        </p>
        <h3 className="mt-5 text-sm font-semibold">
          {t.projects.contribution}
        </h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 marker:text-green-700 dark:text-slate-300 dark:marker:text-green-400">
          {details.map((detail) => (
            <li key={detail} className="cursor-default pl-1">
              {detail}
            </li>
          ))}
        </ul>
        <ul aria-label={t.projects.stack} className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="cursor-default rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {deployment.status === "live" && (
            <Link
              href={deployment.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.visitWebsiteAria(name)}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 dark:bg-green-400 dark:text-slate-950 dark:hover:bg-green-300"
            >
              {t.projects.visitWebsite}
              <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
            </Link>
          )}
          <Link
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.projects.sourceCodeAria(name)}
            className={linkClass}
          >
            <FaGithub aria-hidden="true" />
            {t.projects.sourceCode}
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ProjectItem;
