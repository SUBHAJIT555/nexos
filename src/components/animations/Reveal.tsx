"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeUp } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({
  className,
  delay = 0,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
