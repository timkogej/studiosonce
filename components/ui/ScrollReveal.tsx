"use client";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? 24 : 0,
        x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          delay,
        },
      }}
      viewport={{ once: true, amount: 0.08 }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
