"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Timeline, type TimelineEntry } from "@/components/ui/timeline"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"
import {
  Calendar,
  CheckCircle2,
  CircuitBoard,
  Globe,
  MapPin,
  Radio,
  Rocket,
  Sparkles,
  Utensils,
  Waves,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ExperienceDetail = {
  company: string
  role: string
  location: string
  timeframe: string
  summary: string
  achievements: string[]
  images: { src: string; alt: string }[]
  icon: LucideIcon
}

type ProjectHighlight = {
  id: string
  title: string
  summary: string
  role: string
  location: string
  timeframe: string
  tech: string
  details: string[]
  images: { src: string; alt: string }[]
  icon: LucideIcon
  area: string
}

const ExperienceBullet = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-200">
    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500 dark:text-blue-300" />
    <span>{text}</span>
  </div>
)

const ExperienceMeta = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => (
  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 dark:text-neutral-300">
    <Icon className="h-3.5 w-3.5" />
    <span>{label}</span>
  </div>
)

const experienceDetails: ExperienceDetail[] = [
  {
    company: "NASA L'SPACE NPWEE",
    role: "Project Manager & Software Developer",
    location: "Tempe, AZ, USA",
    timeframe: "Aug 2025 – Dec 2025",
    summary:
      "Led a NASA-style proposal team to design an Autonomous Ultrasonic-Welding Robotic Attachment System for orbital repair missions.",
    achievements: [
      "Architected the attachment system to execute in-space repairs, infrastructure assembly, and lifetime-extending maintenance tasks.",
      "Developed the autonomy stack in Python/C++ with A*/RRT* motion planning, closed-loop control, and Gazebo/PyBullet simulations.",
      "Improved SDLC rigor to deliver 23% faster weld time, lower power draw, and greater spacecraft uptime.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
        alt: "Satellite servicing concept",
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        alt: "Astronaut preparing robotic tools",
      },
    ],
    icon: Rocket,
  },
  {
    company: "Beunec",
    role: "Software Engineering – Compiler & Framework Systems",
    location: "Marlton, NJ, USA",
    timeframe: "Jun 2025 – Oct 2025",
    summary:
      "Spearheaded a custom programming language and runtime that beat React by 28% in production rendering benchmarks.",
    achievements: [
      "Designed a component language that reduced developer handoff time while outperforming React in production.",
      "Built a C++ compiler pipeline with AST parsing, scoped CSS transforms, virtual DOM, runtime compiler, bundler, and CLI tools hitting 50 ms renders.",
      "Implemented Hot Module Reloading with a bespoke module inspired by Vite and React Fast Refresh.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        alt: "Compiler architecture sketches",
      },
      {
        src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
        alt: "Developer working on multi-screen setup",
      },
    ],
    icon: CircuitBoard,
  },
  {
    company: "Repos Energy",
    role: "Full-Stack Web Developer",
    location: "Pune, MH, India",
    timeframe: "Apr 2023 – May 2023",
    summary:
      "Delivered secure analytics dashboards and a real-time operations portal for the energy logistics team using Django and modern web stacks.",
    achievements: [
      "Developed a customer analytics dashboard and operations management portal with responsive, mobile-first UX.",
      "Integrated RESTful APIs with hardened authentication, improving backend response time by 15%.",
      "Collaborated with founders to align technical delivery with real-time operational insights.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        alt: "Team reviewing analytics dashboards",
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        alt: "Responsive web application on tablet",
      },
    ],
    icon: Globe,
  },
]

const projectHighlights: ProjectHighlight[] = [
  {
    id: "bayjo",
    title: "Bayjo — Food Delivery App",
    summary: "Campus-only delivery network for home-cooked meals at UIUC.",
    role: "Co-founder | React Native + Firebase",
    location: "Urbana, IL",
    timeframe: "Jun 2025 – Present",
    tech: "React Native · Expo · Firebase · Node.js",
    details: [
      "Co-founded a student-led platform connecting local cooks with dorm demand for fresh meals.",
      "Implemented Firebase Auth with OAuth + email flows and Firestore-backed messaging.",
      "Shipped modular cross-platform UI with Expo, tuned for low-latency updates and reliability.",
      "Architected Node.js services that keep the stack scalable while remaining student-maintained.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        alt: "Home-cooked meal containers",
      },
      {
        src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
        alt: "Delivery rider prepping bags",
      },
    ],
    icon: Utensils,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/6]",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    summary: "UIUC Pulse + HackIllinois builds focused on rapid impact prototypes.",
    role: "Team Lead | Full-stack Rapid Prototyping",
    location: "Champaign, IL",
    timeframe: "Feb 2026",
    tech: "Next.js · Cloud Functions · Design Systems",
    details: [
      "Led cross-disciplinary squads through ideation, scoping, and final judging.",
      "Built full-stack prototypes that integrated live campus data APIs within 36 hours.",
      "Delivered polished storytelling decks and on-device demos for judges and sponsors.",
      "Mentored first-time hackers on Git rituals, accessibility, and presentation polish.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        alt: "Hackathon team collaborating",
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        alt: "Code projected in dark room",
      },
    ],
    icon: Sparkles,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/6/2/13]",
  },
  {
    id: "radio",
    title: "Superheterodyne AM Receiver",
    summary: "Multi-stage RF receiver with mixers, filters, and IF chain instrumentation.",
    role: "RF Systems Designer",
    location: "Urbana, IL",
    timeframe: "Dec 2025",
    tech: "Op-amps · Mixers · Filters · Modulation",
    details: [
      "Built RF amplification, frequency translation, IF filtering, and envelope detection stages.",
      "Characterized gain, bandwidth, and filter performance across op-amp based stages.",
      "Designed local oscillator + mixer pair to reliably down-convert RF to IF.",
      "Documented modulation fidelity and troubleshooting steps for future lab cohorts.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
        alt: "RF lab equipment on bench",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        alt: "Analog circuits close-up",
      },
    ],
    icon: Radio,
    area: "md:[grid-area:2/1/3/8] xl:[grid-area:2/1/3/8]",
  },
  {
    id: "acoustic",
    title: "Acoustic LED Switching Device",
    summary: "Sound-triggered LED sequencer driven by flip-flops and discrete logic.",
    role: "Digital Logic Designer",
    location: "Urbana, IL",
    timeframe: "May 2025",
    tech: "Flip-flops · nMOS/BJT · Op-amps",
    details: [
      "Engineered a clap-activated LED latch using counters, pulse shaping, and filtering.",
      "Implemented clock division and sequencing to debounce acoustic events.",
      "Optimized gate-level logic for stability, observability, and lab-friendly debugging.",
      "Validated responsiveness with oscilloscopes, multimeters, and discrete instruments.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
        alt: "Breadboard with LEDs",
      },
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
        alt: "Engineer adjusting analog circuit",
      },
    ],
    icon: Waves,
    area: "md:[grid-area:2/8/3/13] xl:[grid-area:2/8/3/13]",
  },
]

export const experienceTimelineData: TimelineEntry[] = experienceDetails.map(
  ({ company, role, location, timeframe, summary, achievements, images, icon: Icon }) => ({
    title: company,
    content: (
      <div className="rounded-3xl border border-neutral-100/60 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur dark:border-white/10 dark:bg-neutral-900/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Icon className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/30 p-2 text-purple-600 dark:text-purple-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                Impact Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:bg-blue-500/20 dark:text-blue-100">
                  {role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <ExperienceMeta icon={MapPin} label={location} />
            <ExperienceMeta icon={Calendar} label={timeframe} />
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 md:text-base">
          {summary}
        </p>
        <div className="mt-6 space-y-3">
          {achievements.map((achievement) => (
            <ExperienceBullet key={achievement} text={achievement} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {images.map((image) => (
            <Image
              key={image.alt}
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="h-28 w-full rounded-2xl object-cover shadow-lg shadow-black/10 md:h-40"
            />
          ))}
        </div>
      </div>
    ),
  })
)

export function TimelineDemo() {
  return (
    <Timeline
      heading="Professional Experience"
      description="NASA mission software, compilers, and full-stack systems pushing throughput, autonomy, and user trust."
      data={experienceTimelineData}
    />
  )
}

export function GlowingEffectDemo() {
  const [activeProject, setActiveProject] = useState<ProjectHighlight | null>(null)

  return (
    <div className="relative">
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
        {projectHighlights.map((project) => (
          <GridItem
            key={project.id}
            area={project.area}
            icon={project.icon}
            title={project.title}
            summary={project.summary}
            onSelect={() => setActiveProject(project)}
          />
        ))}
      </ul>
      <ProjectOverlay project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[520px] w-full overflow-hidden border-white/10 bg-gradient-to-br from-black via-[#04030f] to-[#050505]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ffffff" />

      <div className="relative z-10 flex h-full flex-col gap-10 md:flex-row">
        <div className="flex flex-1 flex-col justify-center p-10">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">Immersive playground</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Interactive 3D
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Workbench
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Bring your UI to life with beautiful 3D scenes powered by Spline. Blend cinematic lighting, real-time motion,
            and tactile interactions into the rest of your blacked-out interface.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-white/60">
            Scene powered by Spline Runtime
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}

const ProjectOverlay = ({
  project,
  onClose,
}: {
  project: ProjectHighlight | null
  onClose: () => void
}) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          className="relative mx-auto mt-16 w-[min(92vw,900px)] rounded-3xl border border-white/10 bg-[#060606]/95 p-8 text-white shadow-2xl"
          initial={{ y: 48, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 48, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.23, 0.86, 0.39, 0.96] }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:text-white"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="inline-flex items-center gap-3 rounded-t-3xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span>{project.location}</span>
            <span className="text-white/40">•</span>
            <span>{project.timeframe}</span>
          </div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/70">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-500/10 text-blue-200">{project.role}</Badge>
              <Badge className="bg-purple-500/10 text-purple-200">{project.tech}</Badge>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.images.map((image) => (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="h-40 w-full rounded-2xl object-cover shadow-lg shadow-black/40"
              />
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {project.details.map((detail) => (
              <div key={detail} className="flex items-start gap-3 text-sm text-white/80">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

interface GridItemProps {
  area: string
  icon: LucideIcon
  title: string
  summary: string
  onSelect: () => void
}

const GridItem = ({ area, icon: Icon, title, summary, onSelect }: GridItemProps) => (
  <li className={cn("min-h-[14rem] list-none", area)}>
    <button
      type="button"
      onClick={onSelect}
      className="group relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
      aria-label={`Open details for ${title}`}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/80 p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted/60 p-2 text-white/70">
              <Icon className="h-4 w-4" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold tracking-[-0.04em] text-balance text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.25rem] text-muted-foreground">
                {summary}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
            Open tab
          </span>
        </div>
      </div>
    </button>
  </li>
)
