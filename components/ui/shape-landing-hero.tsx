"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= text.length) return
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, index + 1))
      setIndex(index + 1)
    }, 50)
    return () => clearTimeout(timeout)
  }, [index, text])

  return (
    <span className={className}>
      {displayed}
      {index < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-steel-400 ml-0.5 align-middle animate-pulse" />
      )}
    </span>
  )
}

function HeroNameHeading({
  title1,
  title2,
  className,
}: {
  title1: string
  title2: string
  className?: string
}) {
  const greeting = `Hey, I'm `
  const fullName = `${title1} ${title2}`

  return (
    <h1
      className={cn(
        "font-chillax text-3xl sm:text-5xl md:text-6xl font-medium mb-6 md:mb-8 tracking-[-0.01em]",
        className
      )}
    >
      <TypewriterText
        text={`${greeting}${fullName}`}
        className="text-white [&_.name]:text-steel-400"
      />
    </h1>
  )
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  subtitle = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  backgroundSlot,
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
  backgroundSlot?: ReactNode
}) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {backgroundSlot && (
        <div className="absolute inset-0 z-[1]">
          {backgroundSlot}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-steel-400/70" />
            <span className="font-mono text-xs text-white/60 tracking-widest uppercase">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroNameHeading title1={title1} title2={title2} />
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { HeroGeometric, HeroNameHeading }
