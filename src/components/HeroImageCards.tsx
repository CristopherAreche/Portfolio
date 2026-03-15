"use client";

import Image from "next/image";
import { KeyboardEvent, PointerEvent, useRef, useState } from "react";

interface HeroImageCard {
  id: string;
  image: string;
  alt: string;
  label: string;
  accentClassName: string;
}

const DEFAULT_HERO_CARDS: HeroImageCard[] = [
  {
    id: "portrait-card-1",
    image: "/assets/profile/training.jpg",
    alt: "Portrait photo of Cristopher Areche, card one",
    label: "Lifter",
    accentClassName: "from-emerald-500/20 via-transparent to-slate-950/70",
  },
  {
    id: "portrait-card-2",
    image: "/assets/profile/coding.PNG",
    alt: "Portrait photo of Cristopher Areche, card two",
    label: "Builder",
    accentClassName: "from-cyan-500/20 via-transparent to-slate-950/75",
  },
  {
    id: "portrait-card-3",
    image: "/assets/profile/portrait.jpg",
    alt: "Portrait photo of Cristopher Areche, card three",
    label: "Creator",
    accentClassName: "from-amber-400/20 via-transparent to-slate-950/75",
  },
];

interface HeroImageCardsProps {
  cards?: HeroImageCard[];
}

type CardPosition = "current" | "next" | "prev" | "hidden";

const SWIPE_THRESHOLD = 36;

const getWrappedIndex = (index: number, total: number) =>
  (index + total) % total;

const getCardPosition = (
  cardIndex: number,
  activeIndex: number,
  total: number
): CardPosition => {
  const relativeIndex = getWrappedIndex(cardIndex - activeIndex, total);

  if (relativeIndex === 0) {
    return "current";
  }

  if (relativeIndex === 1) {
    return "next";
  }

  if (relativeIndex === total - 1) {
    return "prev";
  }

  return "hidden";
};

const HeroImageCards = ({ cards = DEFAULT_HERO_CARDS }: HeroImageCardsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const showNextCard = () => {
    setActiveIndex((currentIndex) =>
      getWrappedIndex(currentIndex + 1, cards.length)
    );
  };

  const showPreviousCard = () => {
    setActiveIndex((currentIndex) =>
      getWrappedIndex(currentIndex - 1, cards.length)
    );
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const swipeDistance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
      return;
    }

    if (swipeDistance < 0) {
      showNextCard();
      return;
    }

    showPreviousCard();
  };

  const handlePointerLeave = () => {
    pointerStartX.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousCard();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextCard();
    }
  };

  return (
    <div
      aria-label="Profile image cards"
      className="hero-card-stack relative z-[60] flex flex-col items-center gap-4 overflow-visible"
    >
       <p className="rounded-full border border-black/10 bg-white/75 px-4 py-1 font-main-font text-[12px] uppercase tracking-[0.28em] text-grey_text shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:text-dark_mode_text">
        {cards[activeIndex]?.label}
      </p>
      <div
        className="relative flex items-center justify-center overflow-visible"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-12 bottom-4 rounded-full bg-green_text/20 blur-3xl dark:bg-green_text/25"
        />
        <div
          role="region"
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Profile image stack. Swipe or use the arrow keys to rotate the cards."
          className="hero-card-stack__deck"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onKeyDown={handleKeyDown}
        >
          {cards.map((card, index) => {
            const position = getCardPosition(index, activeIndex, cards.length);

            return (
              <div
                key={card.id}
                aria-hidden={position !== "current"}
                className={`hero-card-stack__card hero-card-stack__card--${position}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-black/10 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-900/85 dark:shadow-[0_22px_65px_rgba(0,0,0,0.45)]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    priority={position === "current"}
                    sizes="(min-width: 1440px) 312px, (min-width: 768px) 248px, 186px"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t ${card.accentClassName}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 ring-1 ring-inset ring-white/35 dark:ring-white/10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroImageCards;
