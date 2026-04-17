"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Timeline, type TimelineEntry } from "@/components/ui/timeline"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  CheckCircle2,
  CircuitBoard,
  ExternalLink,
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
  summary: string
  achievements: string[]
  icon: LucideIcon
}

type HackathonSubsection = {
  name: string
  award?: string
  link?: { url: string; label: string }
  bullets: string[]
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
  icon: LucideIcon
  area: string
  link?: { url: string; label: string }
  subsections?: HackathonSubsection[]
}

const ExperienceBullet = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 text-sm text-white/70">
    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-steel-400/60" />
    <span>{text}</span>
  </div>
)

const ExperienceMeta = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => (
  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50">
    <Icon className="h-3.5 w-3.5" />
    <span>{label}</span>
  </div>
)

const experienceDetails: ExperienceDetail[] = [
  {
    company: "IBM",
    role: "Software Development (Planning) Intern",
    location: "Bellevue, WA, USA",
    summary: "Incoming Summer 2026",
    achievements: [],
    icon: Briefcase,
  },
  {
    company: "NASA L'SPACE NPWEE",
    role: "Project Manager & Software Developer",
    location: "Tempe, AZ, USA",
    summary:
      "Led a NASA-style proposal team to design an Autonomous Ultrasonic-Welding Robotic Attachment System for orbital repair missions.",
    achievements: [
      "Architected the attachment system to execute in-space repairs, infrastructure assembly, and lifetime-extending maintenance tasks.",
      "Developed the autonomy stack in Python/C++ with A*/RRT* motion planning, closed-loop control, and Gazebo/PyBullet simulations.",
      "Improved SDLC rigor to deliver 23% faster weld time, lower power draw, and greater spacecraft uptime.",
    ],
    icon: Rocket,
  },
  {
    company: "Beunec",
    role: "Software Engineering – Compiler & Framework Systems",
    location: "Marlton, NJ, USA",
    summary:
      "Spearheaded a custom programming language and runtime that beat React by 28% in production rendering benchmarks.",
    achievements: [
      "Designed a component language that reduced developer handoff time while outperforming React in production.",
      "Built a C++ compiler pipeline with AST parsing, scoped CSS transforms, virtual DOM, runtime compiler, bundler, and CLI tools hitting 50 ms renders.",
      "Implemented Hot Module Reloading with a bespoke module inspired by Vite and React Fast Refresh.",
    ],
    icon: CircuitBoard,
  },
  {
    company: "Repos Energy",
    role: "Full-Stack Web Developer",
    location: "Pune, MH, India",
    summary:
      "Delivered secure analytics dashboards and a real-time operations portal for the energy logistics team using Django and modern web stacks.",
    achievements: [
      "Developed a customer analytics dashboard and operations management portal with responsive, mobile-first UX.",
      "Integrated RESTful APIs with hardened authentication, improving backend response time by 15%.",
      "Collaborated with founders to align technical delivery with real-time operational insights.",
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
    icon: Utensils,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/6]",
    link: { url: "https://apps.apple.com/us/app/bayjo/id6749600419", label: "View on App Store" },
  },
  {
    id: "hackathons",
    title: "Hackathons",
    summary: "UIUC Pulse '26 + HackIllinois '26 — award-winning builds under pressure.",
    role: "Team Lead | Full-stack Rapid Prototyping",
    location: "Champaign, IL",
    timeframe: "Feb – Mar 2026",
    tech: "Next.js · React · Modal · Gemini · Tailwind",
    details: [],
    icon: Sparkles,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/6/2/13]",
    subsections: [
      {
        name: "UIUC Pulse '26",
        award: "1st Place — Advanced Track",
        link: { url: "https://github.com/girishskandha-s/foodexpiry-ai", label: "View My Work" },
        bullets: [
          "Won 1st place in the advanced track at UIUC Pulse '26.",
          "Built FreshTrack, an AI-powered grocery freshness tracker with receipt scanning and smart expiration tracking.",
          "Integrated Google Gemini for AI abbreviation decoding, recipe generation, and fallback expiry estimation.",
          "Shipped as a PWA with offline support, real-time dashboard, and 100+ USDA-sourced food shelf-life entries.",
        ],
      },
      {
        name: "HackIllinois '26",
        link: { url: "https://a-r-g-u-s.vercel.app/", label: "View My Work" },
        bullets: [
          "Built A.R.G.U.S., a multi-agent AI restaurant intelligence platform using fine-tuned CLIP vision and Llama 3.1 models on Modal A100 GPUs.",
          "Engineered real-time person tracking with persistent IDs, motion-based standing detection, and table state classification.",
          "Integrated Supermemory for continuous learning and Presage for guest biometrics and urgency scoring.",
          "Deployed a live Next.js dashboard with floor view, urgency-ranked waitlist, and 60-second host recommendations.",
        ],
      },
    ],
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
    icon: Waves,
    area: "md:[grid-area:2/8/3/13] xl:[grid-area:2/8/3/13]",
  },
]

export const experienceTimelineData: TimelineEntry[] = experienceDetails.map(
  ({ company, role, location, summary, achievements }) => ({
    title: company,
    content: (
      <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 will-change-transform">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Badge className="bg-steel-500/10 text-steel-300/80 hover:bg-steel-500/15 border border-steel-500/15 w-fit">
            {role}
          </Badge>
          <ExperienceMeta icon={MapPin} label={location} />
        </div>
        {summary && (
          <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
            {summary}
          </p>
        )}
        {achievements.length > 0 && (
          <div className="mt-6 space-y-3">
            {achievements.map((achievement) => (
              <ExperienceBullet key={achievement} text={achievement} />
            ))}
          </div>
        )}
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
    <Card className="relative h-[520px] w-full overflow-hidden border-white/10 bg-[#030303]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ffffff" />
      <div className="relative z-10 flex h-full flex-col gap-10 md:flex-row">
        <div className="flex flex-1 flex-col justify-center p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">Immersive playground</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl tracking-[-0.03em]">
            Interactive 3D
            <span className="text-steel-400">
              {" "}Workbench
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Bring your UI to life with beautiful 3D scenes powered by Spline.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
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
        className="fixed inset-0 z-[70] bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          className="relative mx-auto mt-16 max-h-[calc(100vh-6rem)] w-[min(92vw,900px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 text-white"
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
          <div className="inline-flex items-center gap-3 rounded-t-3xl border border-white/10 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-widest text-white/70">
            <span>{project.location}</span>
            <span className="text-white/40">&bull;</span>
            <span>{project.timeframe}</span>
          </div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm text-white/70">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-steel-500/10 text-steel-300/80 border border-steel-500/15">{project.role}</Badge>
              <Badge className="bg-white/5 text-white/60 border border-white/10">{project.tech}</Badge>
            </div>
          </div>

          {project.subsections ? (
            <div className="mt-8 space-y-8">
              {project.subsections.map((sub) => (
                <div key={sub.name}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h4 className="font-display text-lg font-semibold text-steel-300 tracking-tight">{sub.name}</h4>
                    {sub.award && (
                      <Badge className="bg-rose-900/20 text-rose-400/70 border border-rose-800/25">
                        {sub.award}
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2.5">
                    {sub.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel-400/50" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  {sub.link && (
                    <a
                      href={sub.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors text-steel-400 hover:text-steel-300"
                    >
                      {sub.link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3 text-sm text-white/80">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel-400/40" />
                  <span>{detail}</span>
                </div>
              ))}
              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-steel-400 hover:text-steel-300 transition-colors"
                >
                  {project.link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
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
  <ScrollReveal className={cn("min-h-[14rem] list-none", area)} delay={0.1}>
    <li className="h-full list-none">
      <button
        type="button"
        onClick={onSelect}
        className="group relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-400/60"
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
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#030303] p-6 transition duration-300 group-hover:-translate-y-1">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-[#111] p-2 text-white/70">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 font-display text-xl font-semibold tracking-tight text-balance text-foreground md:text-2xl">
                  {title}
                </h3>
                <p className="text-sm leading-[1.25rem] text-muted-foreground">
                  {summary}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-steel-400/40">
              Open tab
            </span>
          </div>
        </div>
      </button>
    </li>
  </ScrollReveal>
)
