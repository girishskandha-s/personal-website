"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TimelineEntry {
  title: string
  content: ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
  heading?: string
  description?: string
  className?: string
}

export function Timeline({
  data,
  heading = "Changelog from my journey",
  description = "Here's a timeline of the milestones that mattered.",
  className,
}: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return
      setHeight(ref.current.getBoundingClientRect().height)
    })
    resizeObserver.observe(ref.current)
    setHeight(ref.current.getBoundingClientRect().height)

    return () => resizeObserver.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className={cn("w-full md:px-10", className)}
      ref={containerRef}
    >
      {(heading || description) && (
        <div className="mx-auto max-w-7xl px-4 py-0 md:px-8 lg:px-10 text-center">
          {heading && (
            <h2 className="mb-4 text-4xl font-bold text-white">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mx-auto max-w-xl text-sm text-white/45 md:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-32"
          >
            <div className="sticky top-32 z-40 flex max-w-xs flex-col items-center self-start md:max-w-sm md:w-full md:flex-row">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#030303]">
                <div className="h-4 w-4 rounded-full border border-white/20 bg-white/10 p-2" />
              </div>
              <h3 className="hidden text-xl font-bold text-white/25 md:block md:pl-20 md:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-xl font-bold text-white/25 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-white/20 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-white/40 via-white/20 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
