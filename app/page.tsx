"use client"

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Code, Cpu, Zap, Users, Calendar, GraduationCap } from 'lucide-react'
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { HeroGeometric, HeroNameHeading } from "@/components/ui/shape-landing-hero"
import { GlowingEffectDemo, SplineSceneBasic, TimelineDemo } from "@/components/ui/demo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [introDone, setIntroDone] = useState(false)
  const [showIntroOverlay, setShowIntroOverlay] = useState(true)

  useEffect(() => {
    const introMainTimer = window.setTimeout(() => {
      setIntroDone(true)
    }, 1900)

    const introHideTimer = window.setTimeout(() => {
      setShowIntroOverlay(false)
    }, 2600)
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
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
      window.clearTimeout(introMainTimer)
      window.clearTimeout(introHideTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sectionList = useMemo(
    () => ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'],
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GSS
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {sectionList.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-white/60 hover:text-white'
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* One-time intro zoom */}
      <AnimatePresence>
        {showIntroOverlay && (
          <motion.section
            className="fixed inset-0 z-[60] bg-black"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
          >
            <div className="absolute inset-0">
              <ShaderAnimation />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
            <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 18 }}
                animate={{ opacity: 1, scale: 1.06, y: 0 }}
                transition={{ duration: 1.6, ease: [0.23, 0.86, 0.39, 0.96] }}
                className="text-center"
              >
                <HeroNameHeading
                  title1="Girish Skandha"
                  title2="Sudhakar"
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_0_30px_rgba(0,0,0,0.85)]"
                />
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main site (zooms in once after intro) */}
      <motion.div
        initial={false}
        animate={introDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="origin-top"
      >
        {/* Hero Section */}
        <section id="home" className="pt-20">
          <HeroGeometric
            badge="Computer Engineering • UIUC"
            title1="Girish Skandha"
            title2="Sudhakar"
            subtitle="Computer Engineering Student | Language Developer | Full-Stack Engineer"
          />
          <div className="relative -mt-24 pb-12">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4">
              <p className="text-lg text-white/45 max-w-2xl text-center">
                Building the future of programming languages and scalable applications. Currently developing ALUX, a revolutionary JSX-style component language.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8"
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
              <div className="flex justify-center space-x-6 mt-4">
                <a href="mailto:gss7@illinois.edu" className="text-white/55 hover:text-blue-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-skandha-s-619a6a260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/girishskandha-s/girishskandha-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive 3D spotlight */}
        <section className="relative -mt-10 px-4 pb-24" aria-label="Interactive 3D hero">
          <div className="container mx-auto">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-slate-900/0 to-purple-500/10 blur-3xl" />
              <SplineSceneBasic />
            </div>
          </div>
        </section>

      {/* About Section */}
      <section id="about" className="relative -mt-16 py-20 px-4 z-[10]">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Passionate Engineer & Innovator</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a Computer Engineering student at the University of Illinois at Urbana-Champaign with a passion for 
                creating innovative solutions. Currently, I'm spearheading the development of ALUX, a revolutionary 
                JSX-style component programming language that's pushing the boundaries of web development.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                With experience spanning from compiler design to mobile app development, I thrive on tackling complex 
                technical challenges and turning ideas into reality. My work combines deep technical knowledge with 
                practical application, always focusing on creating scalable, efficient solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3.81</div>
                  <div className="text-slate-400">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-slate-400">Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Cpu className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <CardTitle className="text-white">Language Development</CardTitle>
                    <CardDescription className="text-slate-400">Compiler Design & AST Parsing</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Zap className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <CardTitle className="text-white">Full-Stack Development</CardTitle>
                    <CardDescription className="text-slate-400">React Native, Django, Firebase</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Users className="w-8 h-8 text-green-400 mr-4" />
                  <div>
                    <CardTitle className="text-white">Leadership</CardTitle>
                    <CardDescription className="text-slate-400">Mentoring & Team Collaboration</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative -mt-16 py-20 px-4 z-[20]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-rose-500/[0.06]" />
        <div className="container relative mx-auto">
          <TimelineDemo />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative -mt-16 py-20 px-4 z-[30]">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Modular builds</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Glowing Project Capsules</h2>
            <p className="mt-4 text-base text-slate-300">
              Hover or tap on any capsule to open a floating tab that breaks down the full story—timeline, role, tech, and
              battle-tested outcomes.
            </p>
          </div>
          <div className="mt-12">
            <GlowingEffectDemo />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative -mt-16 py-20 px-4 z-[40]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-rose-500/[0.06]" />
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="w-6 h-6 mr-2 text-blue-400" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'JavaScript', level: 95 },
                  { name: 'Python', level: 90 },
                  { name: 'Java', level: 85 },
                  { name: 'C/C++', level: 80 },
                  { name: 'Assembly', level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-purple-400" />
                  Frameworks & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'React Native', level: 90 },
                  { name: 'Django', level: 85 },
                  { name: 'Firebase', level: 80 },
                  { name: 'Git', level: 95 },
                  { name: 'Expo', level: 85 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Cpu className="w-6 h-6 mr-2 text-green-400" />
                  Specialized Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Compiler Design', level: 95 },
                  { name: 'Digital Logic', level: 90 },
                  { name: 'System Architecture', level: 85 },
                  { name: 'Mobile Development', level: 90 },
                  { name: 'Full-Stack Development', level: 88 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative -mt-16 py-20 px-4 z-[50]">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
                    <div>
                      <CardTitle className="text-white text-2xl">University of Illinois at Urbana-Champaign</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">
                        Bachelor of Science in Computer Engineering
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">3.81/4.0</div>
                    <div className="text-slate-400">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-slate-300 mb-6">
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
                      <div key={course} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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

      {/* Contact Section */}
      <section id="contact" className="relative -mt-16 py-20 px-4 z-[60]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-rose-500/[0.06]" />
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or collaborating on cutting-edge technology. Whether you're a recruiter, 
                  fellow developer, or just want to chat about tech, I'd love to hear from you!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:gss7@illinois.edu" className="text-slate-300 hover:text-blue-400 transition-colors">
                        gss7@illinois.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+16802349554" className="text-slate-300 hover:text-purple-400 transition-colors">
                        +1 (680) 234-9554
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/girish-skandha-s-619a6a260/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-green-400 transition-colors"
                      >
                        linkedin.com/in/girish-skandha-s-619a6a260/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Quick Message</CardTitle>
                  <CardDescription className="text-slate-400">
                    Send me a message and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Girish Skandha Sudhakar
          </div>
          <p className="text-slate-400 mb-6">
            Computer Engineering Student | Language Developer | Full-Stack Engineer
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:gss7@illinois.edu" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/girish-skandha-s-619a6a260/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/girishskandha-s/girishskandha-s" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 Girish Skandha Sudhakar. Built with passion and precision.
          </div>
        </div>
      </footer>
      </motion.div>
    </div>
  )
}
