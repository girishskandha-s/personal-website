'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Cpu, Zap, Users, Award, Calendar, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GSS
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-slate-300 hover:text-white'
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Girish Skandha
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sudhakar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Computer Engineering Student | Language Developer | Full-Stack Engineer
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Building the future of programming languages and scalable applications. 
            Currently developing ALUX, a revolutionary JSX-style component language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
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
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Cpu className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <CardTitle className="text-white">Language Development</CardTitle>
                    <CardDescription className="text-slate-400">Compiler Design & AST Parsing</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Zap className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <CardTitle className="text-white">Full-Stack Development</CardTitle>
                    <CardDescription className="text-slate-400">React Native, Django, Firebase</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
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
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {/* Beunec */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Nexlify Language Developer</CardTitle>
                    <CardDescription className="text-blue-400 font-semibold">Beunec • Marlton, NJ</CardDescription>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    June 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3">
                <p>• Spearheading the design and development of ALUX, a custom JSX-style component programming language with AST-scoped CSS</p>
                <p>• Engineered a full compiler pipeline with AST parsing, scoped CSS transformation, and virtual DOM generation</p>
                <p>• Implemented Hot Module Reloading (HMR) via a custom @alux/hmr module inspired by Vite and React Fast Refresh</p>
                <p>• Developed a modular runtime environment with component composition, scoped rendering, & live-reload testing</p>
              </CardContent>
            </Card>

            {/* UIUC */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Alumni Outreach</CardTitle>
                    <CardDescription className="text-blue-400 font-semibold">Engineering Student Alumni Association, UIUC</CardDescription>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    January 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3">
                <p>• Planned and hosted networking events, alumni panels, and outreach initiatives</p>
                <p>• Facilitated connections to support professional growth and mentorship of students</p>
                <p>• Promoted active alumni engagement within the engineering community</p>
              </CardContent>
            </Card>

            {/* Repos Energy */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Web Developer</CardTitle>
                    <CardDescription className="text-blue-400 font-semibold">Repos Energy • Pune, India</CardDescription>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    April 2023 - May 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-3">
                <p>• Collaborated directly with founders to design and implement full-stack web applications using Django framework</p>
                <p>• Gained hands-on experience across both frontend and backend development</p>
                <p>• Worked in the Founder's Office to create the company's Investment Pitch Deck</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ALUX Project */}
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">ALUX Programming Language</CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Custom JSX-style component language with AST-scoped CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Revolutionary programming language featuring full compiler pipeline, Hot Module Reloading, 
                  and modular runtime environment. Built from scratch with AST parsing and virtual DOM generation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Compiler Design</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">AST Parsing</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Virtual DOM</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Bayjo App */}
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">Bayjo - Food Delivery App</CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Student-led app for affordable, home-cooked meals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Cross-platform mobile application connecting students with local cooks. Features secure authentication, 
                  real-time messaging, and scalable architecture built with React Native and Firebase.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">React Native</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400">Firebase</Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Expo</Badge>
                </div>
              </CardContent>
            </Card>

            {/* LED Switching Device */}
            <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">Acoustic-Activated LED Device</CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Digital sound-triggered LED switching circuit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Innovative digital circuit activated by hand claps using flip-flops, counters, and pulse generators. 
                  Implemented clock division and state sequencing for acoustic pulse detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">Digital Logic</Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400">Circuit Design</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Hardware</Badge>
                </div>
              </CardContent>
            </Card>

            {/* TFA Fellowship */}
            <Card className="bg-slate-800 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">Teach For America Ignite Fellowship</CardTitle>
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Educational mentorship and leadership program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Mentored 7th-grade students in Math through weekly virtual sessions, fostering academic growth 
                  and confidence while supporting equitable learning outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Leadership</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Mentoring</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Education</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
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

            <Card className="bg-slate-800 border-slate-700">
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

            <Card className="bg-slate-800 border-slate-700">
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
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
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
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
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
              <Card className="bg-slate-800 border-slate-700">
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
    </div>
  )
}
