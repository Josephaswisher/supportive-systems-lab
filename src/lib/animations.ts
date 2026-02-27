import type { Variants } from "motion/react";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 2px 16px rgba(27, 58, 92, 0.06), 0 1px 4px rgba(27, 58, 92, 0.04)",
  },
  hover: {
    y: -6,
    boxShadow: "0 8px 32px rgba(27, 58, 92, 0.10), 0 2px 8px rgba(27, 58, 92, 0.06)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
