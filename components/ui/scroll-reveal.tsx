"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 40,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
