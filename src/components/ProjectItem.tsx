"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectItemProps } from "@/types";
import SkillIcon from "./SkillIcon";
import { useLanguage } from "@/app/language-provider";

const DARK_ICONS = ["nextjs"];
const SOFT_DARK_ICONS = ["prisma"];

const getDarkBgVariant = (image: string) => {
  if (SOFT_DARK_ICONS.some((icon) => image.includes(icon))) {
    return "soft" as const;
  }

  if (DARK_ICONS.some((icon) => image.includes(icon))) {
    return "circle" as const;
  }

  return undefined;
};

const ProjectItem = ({
  id,
  name,
  image,
  frontend_tech,
  backend_tech,
  description,
  descriptionEs,
  deployment,
  sourceCode,
}: ProjectItemProps) => {
  const isOddId = id % 2 !== 0;
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();
  const projectDescription = language === "es" ? descriptionEs : description;

  const enterFromRight = shouldReduceMotion
    ? {}
    : {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: {
          delay: 0.2,
          x: { type: "tween", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.8,
        },
      };

  const enterFromLeft = shouldReduceMotion
    ? {}
    : {
        initial: { x: -100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: {
          delay: 0.1,
          x: { type: "tween", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.1,
        },
      };

  const techMotion = shouldReduceMotion
    ? {}
    : {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: {
          delay: 0.1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.1,
        },
      };

  const projectImage = (
    <Image
      className="tablet:max-w-[340px] tablet:h-[270px] rounded-xl border border-slate-900/15 shadow-lg shadow-slate-300/80 transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1 group-focus-visible:scale-[1.03] group-focus-visible:-translate-y-1 dark:border-white/15 dark:shadow-transparent"
      src={image}
      width={324}
      height={231}
      sizes="(min-width: 1440px) 340px, (min-width: 768px) 40vw, 92vw"
      alt={`Screenshot of ${name} project`}
    />
  );

  const projectImagePreview =
    deployment.status === "live" ? (
      <Link
        href={deployment.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.projects.visitWebsiteAria(name)}
        className="group relative block cursor-pointer overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green_text"
      >
        {projectImage}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      </Link>
    ) : (
      <div className="relative block overflow-hidden rounded-xl">
        {projectImage}
      </div>
    );

  return (
    <article aria-label={t.projects.projectAria(name)}>
      {isOddId ? (
        <motion.div
          {...enterFromRight}
          className="xsPhone:w-[324px] tablet:w-full tablet:gap-8 tablet:min-h-[300px] gap-4 dark:shadow-none flex flex-col md:flex-row items-center tablet:items-start justify-between"
        >
          <div className="flex flex-col h-full">
            {projectImagePreview}
            <div className="flex justify-between items-center mt-3">
              <h3 className="xsPhone:text-[25px] text-grey_text dark:text-green_text font-main-font p-0 m-0 xsPhone:block tablet:hidden">
                {name}
              </h3>
              <div className="w-auto flex justify-end tablet:justify-between gap-[13px]">
                <Link
                  target="_blank"
                  href={sourceCode}
                  rel="noopener noreferrer"
                  className="rounded-full gap-2 flex justify-center items-center font-main-font transition-transform transform hover:scale-90"
                  aria-label={t.projects.sourceCodeAria(name)}
                >
                  <FaGithub
                    aria-hidden="true"
                    className="w-[35px] h-[35px] text-grey_text dark:text-white"
                  />
                  <span className="hidden whitespace-nowrap tablet:block text-[13px] laptop:text-[14px] tracking-[0.08em] uppercase dark:text-white">
                    {t.projects.sourceCode}
                  </span>
                </Link>
                <CustomLink deployment={deployment} name={name} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 tablet:w-auto tablet:h-full">
            <h3 className="xsPhone:hidden tablet:block tablet:text-start text-[45px] font-main-font text-grey_text dark:text-green_text xl:text-left text-center">
              {name}
            </h3>
            <p className="w-full py-3 text-left text-md leading-relaxed text-grey_text dark:text-gray-100">
              {projectDescription}
            </p>
            <motion.div {...techMotion}>
              <ul className="mb-4 flex flex-wrap gap-4">
                {frontend_tech?.map(({ name: techName, image: techImage }) => (
                  (() => {
                    const darkBgVariant = getDarkBgVariant(techImage);

                    return (
                  <SkillIcon
                    key={techName}
                    name={techName}
                    image={techImage}
                    needsDarkBg={Boolean(darkBgVariant)}
                    darkBgVariant={darkBgVariant}
                  />
                    );
                  })()
                ))}
              </ul>
              <ul className="flex flex-wrap gap-4">
                {backend_tech?.map(({ name: techName, image: techImage }) => (
                  (() => {
                    const darkBgVariant = getDarkBgVariant(techImage);

                    return (
                  <SkillIcon
                    key={techName}
                    name={techName}
                    image={techImage}
                    needsDarkBg={Boolean(darkBgVariant)}
                    darkBgVariant={darkBgVariant}
                  />
                    );
                  })()
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...enterFromLeft}
          className="xsPhone:w-[324px] tablet:w-full tablet:gap-8 tablet:min-h-[300px] gap-4 dark:shadow-none flex flex-col-reverse md:flex-row items-center tablet:items-start justify-between"
        >
          <div className="flex flex-col gap-3 tablet:w-auto tablet:h-full">
            <h3 className="xsPhone:hidden tablet:block tablet:text-end text-[45px] font-main-font text-grey_text dark:text-green_text text-center">
              {name}
            </h3>
            <p className="w-full py-3 text-left text-md leading-relaxed text-grey_text dark:text-gray-100 tablet:text-right">
              {projectDescription}
            </p>
            <motion.div
              {...techMotion}
              className="tablet:flex tablet:flex-col tablet:items-end"
            >
              <ul className="mb-4 flex flex-wrap gap-4 tablet:justify-end">
                {frontend_tech?.map(({ name: techName, image: techImage }) => (
                  (() => {
                    const darkBgVariant = getDarkBgVariant(techImage);

                    return (
                  <SkillIcon
                    key={techName}
                    name={techName}
                    image={techImage}
                    needsDarkBg={Boolean(darkBgVariant)}
                    darkBgVariant={darkBgVariant}
                  />
                    );
                  })()
                ))}
              </ul>
              <ul className="flex flex-wrap gap-4 tablet:justify-end">
                {backend_tech?.map(({ name: techName, image: techImage }) => (
                  (() => {
                    const darkBgVariant = getDarkBgVariant(techImage);

                    return (
                  <SkillIcon
                    key={techName}
                    name={techName}
                    image={techImage}
                    needsDarkBg={Boolean(darkBgVariant)}
                    darkBgVariant={darkBgVariant}
                  />
                    );
                  })()
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col h-full">
            {projectImagePreview}
            <div className="flex justify-between items-center mt-3">
              <h3 className="xsPhone:text-[25px] text-grey_text dark:text-green_text font-main-font p-0 m-0 xsPhone:block tablet:hidden">
                {name}
              </h3>
              <div className="w-auto flex justify-end tablet:justify-between gap-[13px]">
                <Link
                  target="_blank"
                  href={sourceCode}
                  rel="noopener noreferrer"
                  className="rounded-full gap-2 flex justify-center items-center font-main-font transition-transform transform hover:scale-90"
                  aria-label={t.projects.sourceCodeAria(name)}
                >
                  <FaGithub
                    aria-hidden="true"
                    className="w-[35px] h-[35px] text-grey_text dark:text-white"
                  />
                  <span className="hidden whitespace-nowrap tablet:block text-[13px] laptop:text-[14px] tracking-[0.08em] uppercase dark:text-white">
                    {t.projects.sourceCode}
                  </span>
                </Link>
                <CustomLink deployment={deployment} name={name} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </article>
  );
};

export default ProjectItem;
