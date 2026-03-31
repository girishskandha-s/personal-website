"use client"

import { useEffect, useMemo, useState } from 'react'
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Cpu, Zap, Users, Calendar, GraduationCap } from 'lucide-react'
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { GlowingEffectDemo, TimelineDemo } from "@/components/ui/demo"
import { SplineScene } from "@/components/ui/splite"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [showShader, setShowShader] = useState(true)

  useEffect(() => {
    const shaderTimer = window.setTimeout(() => {
      setShowShader(false)
    }, 3000)

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
      window.clearTimeout(shaderTimer)
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
    <div className="min-h-screen bg-[#030303]">
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white tracking-wider">
              GSS
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {sectionList.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Girish_Skandha_Sudhakar_Resume.pdf';
                link.download = 'Girish_Skandha_Sudhakar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-white text-[#030303] hover:bg-white/85"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      <div>
        <section id="home" className="relative overflow-hidden">
          {showShader && (
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              <ShaderAnimation />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/70" />
            </motion.div>
          )}
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
                <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
              </div>
            }
          />
          <div className="relative -mt-20 pb-6">
            <div className="container mx-auto px-4 flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-white text-[#030303] hover:bg-white/85 text-lg px-8"
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 border-white/20 text-white hover:bg-white/10"
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mt-2">
                <a href="mailto:girishskandhas@gmail.com" className="text-white/50 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-skandha-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/girishskandha-s/girishskandha-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-14 px-4">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <div className="container mx-auto relative">
            <h2 className="text-4xl font-bold text-white text-center mb-10">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Passionate Engineer &amp; Innovator</h3>
                <p className="text-white/55 mb-6 leading-relaxed">
                  I&apos;m a Computer Engineering student at the University of Illinois at Urbana-Champaign with a passion for
                  creating innovative solutions. Currently, I&apos;m spearheading the development of ALUX, a revolutionary
                  JSX-style component programming language that&apos;s pushing the boundaries of web development.
                </p>
                <p className="text-white/55 mb-8 leading-relaxed">
                  With experience spanning from compiler design to mobile app development, I thrive on tackling complex
                  technical challenges and turning ideas into reality. My work combines deep technical knowledge with
                  practical application, always focusing on creating scalable, efficient solutions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">3.81</div>
                    <div className="text-white/40">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/40">Projects</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Cpu className="w-8 h-8 text-white/50 mr-4" />
                    <div>
                      <CardTitle className="text-white">Language Development</CardTitle>
                      <CardDescription className="text-white/40">Compiler Design &amp; AST Parsing</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Zap className="w-8 h-8 text-white/50 mr-4" />
                    <div>
                      <CardTitle className="text-white">Full-Stack Development</CardTitle>
                      <CardDescription className="text-white/40">React Native, Django, Firebase</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Users className="w-8 h-8 text-white/50 mr-4" />
                    <div>
                      <CardTitle className="text-white">Leadership</CardTitle>
                      <CardDescription className="text-white/40">Mentoring &amp; Team Collaboration</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="relative py-14 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
          <div className="container relative mx-auto">
            <TimelineDemo />
          </div>
        </section>

        <section id="projects" className="relative pt-10 pb-14 px-4">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <div className="container mx-auto relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold text-white">Projects</h2>
              <p className="mt-4 text-base text-white/45">
                Select any project to see the full breakdown.
              </p>
            </div>
            <div className="mt-12">
              <GlowingEffectDemo />
            </div>
          </div>
        </section>

        <section id="education" className="relative py-14 px-4">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <div className="container mx-auto relative">
            <h2 className="text-4xl font-bold text-white text-center mb-10">Education</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-white/50 mr-4" />
                      <div>
                        <CardTitle className="text-white text-2xl">University of Illinois at Urbana-Champaign</CardTitle>
                        <CardDescription className="text-white/60 text-lg font-semibold">
                          Bachelor of Science in Computer Engineering
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">3.81/4.0</div>
                      <div className="text-white/40">GPA</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-white/55 mb-6">
                    <Calendar className="w-5 h-5 mr-2" />
                    August 2024 – December 2027
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        'Digital Logic & Systems',
                        'Computer Architecture',
                        'Systems Programming',
                        'Electrical Systems',
                        'Embedded Programming',
                        'Circuit Analysis'
                      ].map((course) => (
                        <div key={course} className="flex items-center text-white/55">
                          <div className="w-2 h-2 bg-white/30 rounded-full mr-3"></div>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-14 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
          <div className="container mx-auto relative text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
            <p className="text-white/45 mb-12 max-w-md mx-auto">
              Open to opportunities and collaborations. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
              <a href="mailto:girishskandhas@gmail.com" className="flex items-center gap-3 text-white/55 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                girishskandhas@gmail.com
              </a>
              <a href="tel:+16802349554" className="flex items-center gap-3 text-white/55 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                +1 (680) 234-9554
              </a>
              <a href="https://www.linkedin.com/in/girish-skandha-s/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/55 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-[#050505] border-t border-white/10 py-12 px-4">
          <div className="container mx-auto text-center">
            <div className="text-2xl font-bold text-white mb-4">
              Girish Skandha Sudhakar
            </div>
            <p className="text-white/35 mb-6">
              Computer Engineering Student | Language Developer | Full-Stack Engineer
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:girishskandhas@gmail.com" className="text-white/35 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/girish-skandha-s/" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/girishskandha-s/girishskandha-s" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="text-white/20 text-sm">
              © 2025 Girish Skandha Sudhakar
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
