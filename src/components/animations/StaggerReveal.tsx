"use client";

import { Children, type ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  className?: string;
  children: ReactNode;
};

export function StaggerReveal({ className, children }: StaggerRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {Children.map(children, (child) => (
        <motion.div variants={fadeUp}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
