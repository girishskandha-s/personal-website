"use client"

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

const GridPattern = ({
  offsetX,
  offsetY,
  id,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  id: string;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export function InfiniteGridBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + speedX) % 40);
    gridOffsetY.set((gridOffsetY.get() + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative min-h-screen bg-[#0c0c0e]", className)}
    >
      <div className="fixed inset-0 z-0 opacity-[0.06]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-base" />
      </div>

      <motion.div
        className="fixed inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-reveal" />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute right-[-15%] top-[-15%] w-[45%] h-[45%] rounded-full bg-orange-700/20 blur-[160px]" />
        <div className="absolute right-[5%] top-[-5%] w-[25%] h-[25%] rounded-full bg-amber-800/15 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-15%] w-[45%] h-[45%] rounded-full bg-blue-900/25 blur-[160px]" />
        <div className="absolute left-[5%] bottom-[-5%] w-[25%] h-[25%] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
