import { motion } from "motion/react";
import { useState } from "react";
import type { Variants } from "motion/react";

type MemoryCard = {
  src: string;
  alt: string;
  caption: string;
  rotation: number;
  offsetY: number;
};

const MEMORY_CARDS: Array<MemoryCard> = [
  {
    src: "/images/memories/memory-01.png",
    alt: "Coffee and stethoscope on a wooden table",
    caption: "Shift start",
    rotation: -11,
    offsetY: 14,
  },
  {
    src: "/images/memories/memory-02.png",
    alt: "Nurse holding patient's hand",
    caption: "Compassion",
    rotation: -7,
    offsetY: 7,
  },
  {
    src: "/images/memories/memory-03.png",
    alt: "Serene hospital garden view",
    caption: "Brief pause",
    rotation: -4,
    offsetY: 4,
  },
  {
    src: "/images/memories/memory-04.png",
    alt: "Sunset view from a vehicle",
    caption: "Late commute",
    rotation: -1,
    offsetY: 2,
  },
  {
    src: "/images/memories/memory-05.png",
    alt: "Clipboard and nurse badge",
    caption: "Duty ready",
    rotation: 2,
    offsetY: 4,
  },
  {
    src: "/images/memories/memory-06.png",
    alt: "Night shift notes and tea",
    caption: "Night shift",
    rotation: 6,
    offsetY: 7,
  },
  {
    src: "/images/memories/memory-07.png",
    alt: "Knitted blanket and clinical clogs",
    caption: "Rest & recovery",
    rotation: 10,
    offsetY: 14,
  },
];

type PolaroidStripProps = {
  shouldReduceMotion?: boolean | null;
};

export function PolaroidStrip({
  shouldReduceMotion = false,
}: PolaroidStripProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const stripVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delayChildren: 0.1,
            staggerChildren: 0.12,
          },
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
        },
      };
  const cardEntryVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { 
          opacity: 0, 
          scale: 0.85,
          filter: "blur(16px) contrast(120%) brightness(110%)"
        },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px) contrast(100%) brightness(100%)",
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          scale: 0.995,
          filter: "blur(4px) contrast(100%) brightness(100%)",
          transition: { duration: 0.18, ease: [0.33, 1, 0.68, 1] },
        },
      };

  return (
    <motion.div
      variants={stripVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative mt-7 sm:mt-8"
    >
      <div className="absolute inset-x-8 -bottom-4 h-7 rounded-full bg-black/10 blur-xl" />

      <motion.ul
        className="relative left-1/2 flex w-[min(95vw,560px)] -translate-x-1/2 items-end justify-center pb-2"
        aria-label="Memory polaroids"
      >
        {MEMORY_CARDS.map((card, index) => {
          const isActive = activeIndex === index;
          const y = card.offsetY + (isActive ? -10 : 0);
          const rotate = isActive ? card.rotation * 0.55 : card.rotation;
          const scale = isActive ? 1.03 : 1;

          return (
            <motion.li
              key={card.src}
              variants={cardEntryVariants}
              className="-mx-[22px] sm:-mx-[25px]"
              style={{ zIndex: isActive ? 40 : index + 10 }}
            >
              <motion.button
                type="button"
                aria-label={`Focus ${card.alt}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex((currentIndex) =>
                    currentIndex === index ? null : index,
                  )
                }
                className="block cursor-pointer rounded-[3px] bg-[#f5f5f3] dark:bg-zinc-900 p-[8px] pb-[12px] shadow-[0_10px_22px_rgba(10,10,10,0.16)] dark:shadow-[0_10px_22px_rgba(0,0,0,0.5)] transition-[transform,box-shadow,filter] duration-300 ease-out select-none hover:shadow-[0_15px_28px_rgba(10,10,10,0.22)] dark:hover:shadow-[0_15px_28px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30 focus-visible:outline-none"
                style={{ transformOrigin: "center bottom" }}
                animate={{ y, rotate, scale }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 240, damping: 24, mass: 0.7 }
                }
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  draggable={false}
                  className="h-[100px] w-[88px] object-cover sm:h-[120px] sm:w-[115px]"
                />
                <p
                  className="mt-2 min-h-[22px] w-[88px] text-center text-[11px] leading-[1.18] text-black/72 dark:text-white/72 sm:w-[115px] sm:text-[12px]"
                  style={{
                    fontFamily:
                      '"Bradley Hand", "Segoe Print", "Snell Roundhand", "Comic Sans MS", cursive',
                  }}
                >
                  {card.caption}
                </p>
              </motion.button>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
