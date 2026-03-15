"use client";

import { ComponentType, useEffect, useState } from "react";

type ParticlesComponent = ComponentType<Record<string, never>>;

export default function DeferredParticlesBackground() {
  const [ParticlesComponent, setParticlesComponent] =
    useState<ParticlesComponent | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!desktopQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    let isCancelled = false;
    let timeoutId: number | null = null;
    let idleCallbackId: number | null = null;
    const requestIdleCallback =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback.bind(window)
        : null;
    const cancelIdleCallback =
      typeof window.cancelIdleCallback === "function"
        ? window.cancelIdleCallback.bind(window)
        : null;

    const loadParticles = async () => {
      const particlesModule = await import("./ParticlesBackground");

      if (!isCancelled) {
        setParticlesComponent(() => particlesModule.default);
      }
    };

    if (requestIdleCallback) {
      idleCallbackId = requestIdleCallback(() => {
        void loadParticles();
      });
    } else {
      timeoutId = window.setTimeout(() => {
        void loadParticles();
      }, 250);
    }

    return () => {
      isCancelled = true;

      if (idleCallbackId !== null && cancelIdleCallback) {
        cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!ParticlesComponent) {
    return null;
  }

  return <ParticlesComponent />;
}
