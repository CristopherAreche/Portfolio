"use client";

import { experiences, education } from "@/utils/data";
import { useLanguage } from "@/app/language-provider";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <section
      id="experience"
      aria-label={t.experience.sectionLabel}
      className="mx-auto w-full max-w-6xl min-w-0 px-6 py-12 text-grey_text dark:text-dark_mode_text sm:px-8 sm:py-16"
    >
      <header className="mb-10 max-w-2xl sm:mb-14">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.experience.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {t.experience.subheading}
        </p>
      </header>

      {/* Professional Experience */}
      <div className="mb-14 space-y-8">
        <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
          <FaBriefcase className="h-5 w-5 text-green-700 dark:text-green-400" aria-hidden="true" />
          {t.experience.workHeading}
        </h3>

        <div className="relative border-l border-slate-200 pl-6 space-y-10 dark:border-slate-800 sm:pl-8">
          {experiences.map((exp) => {
            const role = isEs ? exp.roleEs : exp.role;
            const location = isEs ? exp.locationEs : exp.location;
            const period = isEs ? exp.periodEs : exp.period;
            const badge = isEs ? exp.badgeEs : exp.badge;
            const highlights = isEs ? exp.highlightsEs : exp.highlights;

            return (
              <article key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-700 dark:border-slate-950 dark:bg-green-400 sm:-left-[39px]"
                  aria-hidden="true"
                />

                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-green-700/40 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-green-400/40">
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-xl">
                          {role}
                        </h4>
                        {badge && (
                          <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-950/80 dark:text-green-300">
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400 sm:text-base">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-right">
                      <p className="font-semibold">{period}</p>
                      <p>{location}</p>
                    </div>
                  </header>

                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-600 marker:text-green-700 dark:text-slate-300 dark:marker:text-green-400">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul aria-label="Skills used" className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Education & Security Credentials */}
      <div className="space-y-6 border-t border-slate-200 pt-10 dark:border-slate-800">
        <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
          <FaGraduationCap className="h-5 w-5 text-green-700 dark:text-green-400" aria-hidden="true" />
          {t.experience.educationHeading}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
            >
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {isEs ? edu.degreeEs : edu.degree}
              </h4>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {edu.institution}
              </p>
              <p className="mt-2 text-xs font-semibold text-green-700 dark:text-green-400">
                {isEs ? edu.periodEs : edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
