"use client";

import Link from "next/link";
import { TbWorldCode, TbWorldOff } from "react-icons/tb";
import { ProjectDeployment } from "@/types";
import { useLanguage } from "@/app/language-provider";

interface CustomLinkProps {
  deployment: ProjectDeployment;
  name: string;
}

const CustomLink = ({ deployment, name }: CustomLinkProps) => {
  const { t } = useLanguage();

  if (deployment.status === "in-progress") {
    return (
      <div className="flex gap-2 items-center justify-center font-main-font pointer-events-none transition-transform transform hover:scale-90">
        <TbWorldOff
          aria-hidden="true"
          className="w-[35px] h-[35px] text-red-700"
        />
        <span className="hidden whitespace-nowrap tablet:block text-[13px] laptop:text-[14px] tracking-[0.08em] uppercase dark:text-white">
          {t.projects.inProgress}
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center justify-center font-main-font transition-transform transform hover:scale-90">
      <Link
        href={deployment.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2"
        aria-label={t.projects.visitWebsiteAria(name)}
      >
        <TbWorldCode
          aria-hidden="true"
          className="w-[35px] h-[35px] text-grey_text dark:text-white"
        />
        <span className="hidden whitespace-nowrap tablet:block text-[13px] laptop:text-[14px] tracking-[0.08em] uppercase dark:text-white">
          {t.projects.visitWebsite}
        </span>
      </Link>
    </div>
  );
};

export default CustomLink;
