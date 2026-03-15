"use client";
import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import { useReducedMotion } from "framer-motion";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !isDesktop) {
      return;
    }

    let isCancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!isCancelled) {
        setInit(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [isDesktop, shouldReduceMotion]);

  const getOptions = useCallback((): ISourceOptions => {
    const isDark = resolvedTheme === "dark";

    return {
      background: { color: { value: "transparent" } },
      fpsLimit: 50,
      particles: {
        color: { value: isDark ? "#f8f8f8ff" : "#000000ff" },
        move: {
          enable: true,
          speed: 0.45,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        number: {
          value: 60,
          density: { enable: true, width: 1920, height: 1080 },
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.4,
            sync: false,
          },
        },
        size: {
          value: { min: 2, max: 5 },
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (!init || shouldReduceMotion || !isDesktop) return null;

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      options={getOptions()}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
