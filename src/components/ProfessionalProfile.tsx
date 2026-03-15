"use client";

import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import { useLanguage } from "@/app/language-provider";

const profiles = [
  {
    id: "linkedin",
    href: LINKEDIN_URL,
    icon: "/assets/linkedin.svg",
    name: "LinkedIn",
    ariaLabelKey: "linkedinAria" as const,
  },
  {
    id: "github",
    href: GITHUB_URL,
    icon: "/assets/github.svg",
    name: "GitHub",
    ariaLabelKey: "githubAria" as const,
  },
];

const ProfessionalProfile = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-6 flex w-full max-w-[320px] flex-row items-start gap-3">
      <ul className="flex w-full flex-row gap-3">
        {profiles.map((profile) => (
          <li key={profile.id} className="cursor-default">
            <Link
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero[profile.ariaLabelKey]}
              className="flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white/75 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-green_text/50 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-green_text/50 dark:hover:bg-slate-900"
            >
              <Image
                src={profile.icon}
                alt={profile.name}
                width={42}
                height={42}
                className="h-[42px] w-[42px] rounded-full"
              />
              <span className="font-main-font text-[15px] tracking-[0.12em] text-grey_text dark:text-dark_mode_text">
                {profile.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalProfile;
