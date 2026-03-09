"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
}: ButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg",
  };

  const variants = {
    primary:
      "text-white font-medium rounded-full transition-all duration-300",
    outline:
      "border-2 border-[#D4A574] text-[#D4A574] font-medium rounded-full transition-all duration-300 hover:bg-[#D4A574] hover:text-white",
    ghost:
      "text-stone-700 font-medium transition-all duration-300 hover:text-[#D4A574]",
  };

  const primaryStyle =
    variant === "primary"
      ? { background: "linear-gradient(135deg, #D4A574 0%, #C49660 100%)" }
      : {};

  const content = (
    <motion.span
      className={`inline-flex items-center justify-center gap-2 ${sizes[size]} ${variants[variant]} ${className}`}
      style={primaryStyle}
      whileHover={{
        scale: variant === "ghost" ? 1 : 1.02,
        boxShadow:
          variant === "primary"
            ? "0 8px 30px -8px rgba(212, 165, 116, 0.45)"
            : undefined,
        transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
