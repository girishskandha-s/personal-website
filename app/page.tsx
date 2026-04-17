"use client"

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Phone, Cpu, Zap, Users, Calendar, GraduationCap } from 'lucide-react'
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { GlowingEffectDemo, TimelineDemo } from "@/components/ui/demo"
import { SplineScene } from "@/components/ui/splite"
import { InfiniteGridBackground } from "@/components/ui/the-infinite-grid"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sectionList = useMemo(
    () => ['home', 'about', 'experience', 'projects', 'education', 'contact'],
    []
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <InfiniteGridBackground>
      <nav className="fixed top-0 w-full bg-[#0c0c0e]/95 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-display text-2xl font-bold tracking-[0.15em] text-steel-400">
              GSS
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {sectionList.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-steel-400'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div>
        <section id="home" className="relative overflow-hidden">
          <HeroGeometric
            badge="Computer Engineering • UIUC"
            title1="Girish Skandha"
            title2="Sudhakar"
            subtitle="Computer Engineering Student | Language Developer | Full-Stack Engineer"
            backgroundSlot={
              <div className="relative h-full w-full opacity-70">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
                <div className="absolute inset-x-0 bottom-0 h-52 bg-[#0c0c0e]/80 pointer-events-none" style={{ maskImage: 'linear-gradient(to top, black, transparent)' }} />
              </div>
            }
          />
          <ScrollReveal className="relative -mt-20 pb-8 z-20">
            <div className="container mx-auto px-6 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-steel-500 hover:bg-steel-400 text-white text-lg px-8 font-display font-semibold"
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 border-steel-500/25 text-white hover:bg-steel-500/10 font-display font-semibold"
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mt-2">
                <a href="mailto:girishskandhas@gmail.com" className="text-white/50 hover:text-steel-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-skandha-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-steel-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/girishskandha-s/girishskandha-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-steel-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="about" className="relative py-14 px-6">
          <div className="container mx-auto relative">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-10 uppercase">About Me</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal delay={0.1}>
                <h3 className="font-display text-2xl font-bold text-white mb-6 tracking-tight">Passionate Engineer &amp; Innovator</h3>
                <p className="text-white/55 mb-6 leading-relaxed">
                  I&apos;m a Computer Engineering student at UIUC who likes building systems end-to-end software, hardware, and everything in between.
                  I&apos;ve worked on projects like a NASA robotics system, my own programming language and compiler at Beunec, and co-founded Bayjo, a 
                  student food delivery app. I&apos;m most interested in going deep into how systems work under the hood and turning ideas into real products.
                  
                </p>
                <p className="text-white/55 mb-8 leading-relaxed">
                  This summer, I&apos;ll be interning at IBM, and I&apos;m looking forward to getting more exposure to large scale production systems while 
                  continuing to build on what I&apos;ve learned through my own projects.

                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-steel-400 mb-2 tracking-tight">3.81</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-steel-400 mb-2 tracking-tight">5+</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40">Projects</div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal delay={0.15}>
                  <Card className="bg-[#0a0a0a] border-white/10">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <Cpu className="w-8 h-8 text-steel-400/60 mr-4" />
                      <div>
                        <CardTitle className="font-display text-white tracking-tight">Language Development</CardTitle>
                        <CardDescription className="text-white/40">Compiler Design &amp; AST Parsing</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <Card className="bg-[#0a0a0a] border-white/10">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <Zap className="w-8 h-8 text-steel-400/60 mr-4" />
                      <div>
                        <CardTitle className="font-display text-white tracking-tight">Full-Stack Development</CardTitle>
                        <CardDescription className="text-white/40">React Native, Django, Firebase</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0.35}>
                  <Card className="bg-[#0a0a0a] border-white/10">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <Users className="w-8 h-8 text-steel-400/60 mr-4" />
                      <div>
                        <CardTitle className="font-display text-white tracking-tight">Leadership</CardTitle>
                        <CardDescription className="text-white/40">Mentoring &amp; Team Collaboration</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="relative py-14 px-6">
          <div className="container relative mx-auto">
            <TimelineDemo />
          </div>
        </section>

        <section id="projects" className="relative py-14 px-6">
          <div className="container mx-auto relative">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl md:text-4xl text-white uppercase">Projects</h2>
                <p className="mt-4 text-base text-white/45">
                  Select any project to see the full breakdown.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-12">
                <GlowingEffectDemo />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="education" className="relative py-14 px-6">
          <div className="container mx-auto relative">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-10 uppercase">Education</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="max-w-4xl mx-auto">
                <Card className="bg-[#0a0a0a] border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GraduationCap className="w-8 h-8 text-steel-400/60 mr-4" />
                        <div>
                          <CardTitle className="font-display text-white text-2xl tracking-tight">University of Illinois at Urbana-Champaign</CardTitle>
                          <CardDescription className="text-steel-300/70 text-lg font-semibold">
                            Bachelor of Science in Computer Engineering
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-2xl font-bold text-steel-400 tracking-tight">3.81/4.0</div>
                        <div className="font-mono text-xs uppercase tracking-widest text-white/40">GPA</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-white/55 mb-6">
                      <Calendar className="w-5 h-5 mr-2" />
                      August 2024 – December 2027
                    </div>
                    <div>
                      <h4 className="font-display text-white font-semibold mb-3 tracking-tight">Relevant Coursework:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Digital Logic & Systems',
                          'Computer Architecture',
                          'Systems Programming',
                          'Electrical Systems',
                          'Embedded Programming',
                          'Circuit Analysis'
                        ].map((course) => (
                          <div key={course} className="flex items-center text-white/55 text-sm">
                            <div className="w-2 h-2 bg-steel-400/30 rounded-full mr-3"></div>
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="relative py-14 px-6">
          <div className="container mx-auto relative text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 uppercase">Let&apos;s Connect</h2>
              <p className="text-white/45 mb-12 max-w-md mx-auto">
                Open to opportunities and collaborations. Reach out anytime.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
                <a href="mailto:girishskandhas@gmail.com" className="flex items-center gap-3 text-white/55 hover:text-steel-400 transition-colors text-sm">
                  <Mail className="w-5 h-5" />
                  girishskandhas@gmail.com
                </a>
                <a href="tel:+16802349554" className="flex items-center gap-3 text-white/55 hover:text-steel-400 transition-colors text-sm">
                  <Phone className="w-5 h-5" />
                  +1 (680) 234-9554
                </a>
                <a href="https://www.linkedin.com/in/girish-skandha-s/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/55 hover:text-steel-400 transition-colors text-sm">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal>
          <footer className="border-t border-white/[0.04] py-12 px-6">
            <div className="container mx-auto text-center">
              <div className="font-display text-2xl font-bold mb-4 text-steel-400 tracking-tight">
                Girish Skandha Sudhakar
              </div>
              <p className="text-white/35 mb-6 text-sm">
                Computer Engineering Student | Language Developer | Full-Stack Engineer
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a href="mailto:girishskandhas@gmail.com" className="text-white/35 hover:text-steel-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/girish-skandha-s/" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-steel-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/girishskandha-s/girishskandha-s" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-steel-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <div className="text-white/20 text-xs font-mono tracking-wider">
                © 2026 Girish Skandha Sudhakar
              </div>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </InfiniteGridBackground>
  )
}
