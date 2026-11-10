"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCopy, FaFileAlt } from "react-icons/fa";
import clipboard from "clipboard-copy";
import toast from "react-hot-toast";
import { CONTACT_EMAIL } from "@/utils/constants";
import { getLocalizedPathname } from "@/utils/locale";
import { useLanguage } from "@/app/language-provider";
import HeroImageCards from "./HeroImageCards";
import ProfessionalProfile from "./ProfessionalProfile";

const coreStack = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Storybook",
];
const backendStack = [
  "Node.js",
  "Express",
  "C# / .NET",
  "PostgreSQL",
  "SQL Server",
  "Supabase",
];
const workflowStack = [
  "Figma",
  "React Testing Library",
  "Git",
  "GitLab CI/CD",
  "Amazon RDS",
  "Vercel",
  "Cursor",
];

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, t } = useLanguage();

  useEffect(
    () => () => {
      if (copyResetTimerRef.current) clearTimeout(copyResetTimerRef.current);
    },
    []
  );

  const handleCopyClick = async () => {
    try {
      await clipboard(CONTACT_EMAIL);
      setIsCopied(true);
      toast.success(t.hero.copySuccessToast);
      if (copyResetTimerRef.current) clearTimeout(copyResetTimerRef.current);
      copyResetTimerRef.current = setTimeout(() => {
        setIsCopied(false);
        copyResetTimerRef.current = null;
      }, 2000);
    } catch {
      toast.error(t.hero.copyErrorToast);
    }
  };

  const actionClass =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold transition-colors hover:border-green_text dark:border-slate-700 dark:hover:border-green_text";

  return (
    <section
      aria-label={t.hero.sectionLabel}
      className="portfolio-hero mx-auto grid w-full max-w-6xl min-w-0 gap-12 px-6 py-4 text-grey_text dark:text-dark_mode_text sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16 lg:py-12"
    >
      <div className="min-w-0">
        <p className="mb-3 text-base text-slate-600 dark:text-slate-300">
          {t.hero.greeting}
        </p>
        <h1 className="break-words text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Cristopher Areche
        </h1>
        <p className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">
          {t.hero.role}
        </p>
        <p className="mt-3 text-base font-medium text-green-700 dark:text-green-400">
          {t.hero.specialty}
        </p>
        <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          <p>{t.hero.descriptionFirst}</p>
          <p>{t.hero.descriptionSecond}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={getLocalizedPathname(language, "/projects")}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 dark:bg-green-400 dark:text-slate-950 dark:hover:bg-green-300"
          >
            {t.hero.viewWork}
            <FaArrowRight aria-hidden="true" />
          </Link>
          {/* <Link
            href="/assets/CV.pdf?v=10d7034bb736"
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            <FaFileAlt aria-hidden="true" />
            {t.hero.resume}
          </Link> */}
          <a href={`mailto:${CONTACT_EMAIL}`} className={actionClass}>
            {t.hero.contact}
          </a>
        </div>

        <dl className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
          {[
            { label: t.hero.frontend, skills: coreStack },
            { label: t.hero.backend, skills: backendStack },
            { label: t.hero.tools, skills: workflowStack },
          ].map(({ label, skills }) => (
            <div key={label}>
              <dt className="mb-1 text-sm font-semibold">{label}</dt>
              <dd className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {skills.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="break-all underline decoration-slate-400 underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopyClick}
            aria-label={
              isCopied ? t.hero.emailCopiedAria : t.hero.copyEmailAria
            }
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-2 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            <FaCopy aria-hidden="true" />
            {isCopied ? t.hero.copied : t.hero.email}
          </button>
        </div>
      </div>
      <div className="hero-visual flex min-w-0 flex-col items-center gap-6 py-6 lg:py-0">
        <HeroImageCards />
        <ProfessionalProfile />
      </div>
    </section>
  );
};

export default Hero;
