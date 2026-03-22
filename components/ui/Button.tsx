"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "ghost" | "danger";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyan-500/10 border border-cyan-400/60 text-cyan-100 hover:bg-cyan-500/20 shadow-roko-glow",
  ghost:
    "bg-transparent border border-slate-700/80 text-slate-200 hover:bg-slate-800/60",
  danger:
    "bg-rose-500/10 border border-rose-400/60 text-rose-100 hover:bg-rose-500/20",
};

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
