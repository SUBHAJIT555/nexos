"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeIn } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
