"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SkillIconProps {
  name: string;
  image: string;
  size?: number;
  needsDarkBg?: boolean;
  darkBgVariant?: "circle" | "soft";
}

const SkillIcon = ({
  name,
  image,
  size = 30,
  needsDarkBg = false,
  darkBgVariant = "circle",
}: SkillIconProps) => {
  const [showName, setShowName] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearHideTimer();
    };
  }, []);

  const darkBackgroundClass = needsDarkBg
    ? darkBgVariant === "soft"
      ? "dark:bg-white dark:rounded-md dark:px-[4px] dark:py-[2px] flex items-center justify-center"
      : "dark:bg-white dark:rounded-full dark:p-[2px] flex items-center justify-center"
    : "";

  return (
    <li
      className="relative flex items-center justify-center"
      onMouseEnter={() => {
        clearHideTimer();
        setShowName(true);
      }}
      onMouseLeave={() => {
        clearHideTimer();
        setShowName(false);
      }}
      onFocus={() => {
        clearHideTimer();
        setShowName(true);
      }}
      onBlur={() => {
        clearHideTimer();
        setShowName(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== "touch") return;

        clearHideTimer();
        setShowName(true);

        hideTimerRef.current = setTimeout(() => {
          setShowName(false);
        hideTimerRef.current = null;
      }, 1400);
      }}
    >
      <span className="sr-only">{name}</span>
      {showName && (
        <span
          role="tooltip"
          className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-grey_text px-2 py-0.5 font-main-font text-[11px] text-white pointer-events-none dark:bg-gray-700"
        >
          {name}
        </span>
      )}
      <span
        title={name}
        className={darkBackgroundClass}
      >
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
          className="phone:h-[28px] transition-transform transform hover:scale-125"
        />
      </span>
    </li>
  );
};

export default SkillIcon;
