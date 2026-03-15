"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { backEndSkills, frontEndSkills, tools } from "@/utils/data";
import { FaFileAlt, FaCopy } from "react-icons/fa";
import Link from "next/link";
import clipboard from "clipboard-copy";
import toast from "react-hot-toast";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_EMAIL } from "@/utils/constants";
import SkillIcon from "./SkillIcon";
import HeroImageCards from "./HeroImageCards";
import ProfessionalProfile from "./ProfessionalProfile";
import { useLanguage } from "@/app/language-provider";

const DARK_ICONS = ["nextjs"];

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    return () => {
      if (copyResetTimerRef.current) {
        clearTimeout(copyResetTimerRef.current);
      }
    };
  }, []);

  const handleCopyClick = async () => {
    try {
      await clipboard(CONTACT_EMAIL);
      setIsCopied(true);
      toast.success(t.hero.copySuccessToast);
      if (copyResetTimerRef.current) {
        clearTimeout(copyResetTimerRef.current);
      }
      copyResetTimerRef.current = setTimeout(() => {
        setIsCopied(false);
        copyResetTimerRef.current = null;
      }, 2000);
    } catch {
      toast.error(t.hero.copyErrorToast);
    }
  };

  return (
    <section
      aria-label={t.hero.sectionLabel}
      className="w-full max-w-full overflow-visible pt-[2em] pb-[4em] xsPhone:pb-6 phone:pb-6 laptop:pt-0 laptop:pb-0 phone:w-full phone:items-center laptop:items-start laptop:w-[1100px] tablet:w-[500px] h-auto tablet:mt-[60px] mx-[15px] scrollbar-hide flex phone:flex-col-reverse items-center gap-14 phone:gap-0 phone:justify-between laptop:flex-row laptop:justify-between justify-center"
    >
      {/* Left */}
      <div className="ml-1 phone:w-full phone:max-w-[498px] xsPhone:w-full xsPhone:max-w-full h-auto xsPhone:gap-6 xsPhone:justify-center tablet:max-w-[550px] laptop:justify-between flex flex-col phone:justify-start laptop:gap-4 phone:gap-8">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 0.1,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 0.5,
                }
          }
          className="flex flex-col phone:justify-center phone:items-center laptop:items-start"
        >
          <div className="xsPhone:px-[15px] xsPhone:text-center laptop:px-0 font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] mb-4 text-start text-grey_text dark:text-dark_mode_text">
            {t.hero.greeting} <span className="text-[#53E767]">Cristopher</span>
          </div>
          <h1 className="xsPhone:px-[15px] text-center laptop:px-0 tablet:text-center laptop:text-start uppercase font-main-font font-normal xsPhone:text-[30px] phone:text-[38px] text-grey_text dark:text-dark_mode_text">
            {t.hero.role}
          </h1>
        </motion.div>
        {/* Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 0.1,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 0.8,
                }
          }
          className="xsPhone:px-[15px] laptop:text-start laptop:px-0 phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text phone:text-center"
        >
          {t.hero.descriptionFirst}
          <br />
          <br />
          {t.hero.descriptionSecond}
        </motion.p>
        {/* Tech Stack */}
        <div className="flex flex-col xsPhone:items-start laptop:items-start gap-3 xsPhone:px-[15px] laptop:px-0">
          {/* frontend */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="hidden tablet:flex tablet:gap-4">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                <span className="tablet:hidden">FRONT</span>
                <span className="hidden tablet:inline">{t.hero.frontend}</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <ul className="flex flex-wrap gap-[10px] items-center">
              {frontEndSkills?.map((skill) => (
                <SkillIcon
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                />
              ))}
            </ul>
          </motion.div>
          {/* backend */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="hidden tablet:flex tablet:gap-4">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                <span className="tablet:hidden">BACK</span>
                <span className="hidden tablet:inline">{t.hero.backend}</span>
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <ul className="flex flex-wrap gap-[10px] items-center">
              {backEndSkills?.map((skill) => (
                <SkillIcon
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                  needsDarkBg={DARK_ICONS.some((icon) =>
                    skill.image.includes(icon)
                  )}
                />
              ))}
            </ul>
          </motion.div>
          {/* tools */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
            className="flex"
          >
            <div className="hidden tablet:flex tablet:gap-4">
              <p className="flex uppercase font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text dark:text-dark_mode_text">
                {t.hero.tools}
              </p>
              <p className="font-main-font xsPhone:text-[12px] phone:text-[16px] tablet:text-[20px] text-grey_text mr-6 dark:text-dark_mode_text">
                |
              </p>
            </div>
            <ul className="flex flex-wrap gap-[10px] items-center">
              {tools?.map((tool) => (
                <SkillIcon key={tool.id} name={tool.name} image={tool.image} />
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Email and CV */}
        <div className="flex flex-wrap items-center justify-start gap-3 pb-2 tablet:gap-6 xsPhone:px-[15px] laptop:px-0">
          {/* CV */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
          >
            <Link
              href="/assets/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-auto items-center gap-3 rounded-2xl border border-black/10 bg-white/75 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-green_text/50 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-green_text/50 dark:hover:bg-slate-900"
            >
              <FaFileAlt
                aria-hidden="true"
                className="h-[18px] w-[18px] text-center text-grey_text dark:text-dark_mode_text"
              />
              <p className="font-main-font whitespace-nowrap text-[15px] tracking-[0.12em] text-grey_text dark:text-dark_mode_text">
                {t.hero.resume}
              </p>
            </Link>
          </motion.div>
          {/* Email */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.1,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 0.8,
                  }
            }
          >
            <button
              type="button"
              onClick={handleCopyClick}
              aria-label={
                isCopied ? t.hero.emailCopiedAria : t.hero.copyEmailAria
              }
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/75 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-green_text/50 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-green_text/50 dark:hover:bg-slate-900"
            >
              <FaCopy
                aria-hidden="true"
                className="h-[18px] w-[18px] text-center text-grey_text dark:text-dark_mode_text"
              />
              <span className="font-main-font whitespace-nowrap text-[15px] tracking-[0.12em] text-grey_text dark:text-dark_mode_text">
                {isCopied ? t.hero.copied : t.hero.email}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right */}
      <motion.div
        initial={shouldReduceMotion ? false : { x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }
        }
        className="relative z-30 phone:flex phone:h-auto phone:w-full phone:max-w-full phone:overflow-visible tablet:w-[520px] xsPhone:hidden"
      >
        <div className="relative z-30 w-full flex justify-center overflow-visible">
          <motion.div
            initial={shouldReduceMotion ? false : { x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 0.5,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                  }
            }
          >
            <div className="z-20 mb-10 flex flex-col items-center laptop:h-auto">
              <HeroImageCards />
              <ProfessionalProfile />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
