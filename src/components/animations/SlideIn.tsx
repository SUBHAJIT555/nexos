"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { slideInFromRight } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

type SlideInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function SlideIn({
  className,
  delay = 0,
  children,
  ...props
}: SlideInProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={slideInFromRight}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
