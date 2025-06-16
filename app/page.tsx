"use client"

import { FaXTwitter, FaGithub, FaLinkedin} from "react-icons/fa6";


import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  LinkIcon,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Star,
  GitFork,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  X,
  DownloadIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"


 const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path relative to the public folder
    link.download = "Kartik Vats Resume.pdf";  // Suggested filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


const tabs = [
  { id: "about", label: "About", icon: Code },
  { id: "projects", label: "Projects", icon: GitFork },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
]

const projects = [
  {
    id: 1,
    title: "E-Commerce Flutter App",
    description:
      "A complete e-commerce mobile application built with Flutter and Firebase. Features include user authentication, product catalog, shopping cart, and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "Firebase", "Stripe", "Provider"],
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 45,
    forks: 12,
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description:
      "Beautiful weather app with real-time data, 7-day forecast, and location-based weather updates. Clean UI with smooth animations.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "OpenWeather API", "Bloc", "Hive"],
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 32,
    forks: 8,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Productivity app for managing daily tasks with categories, reminders, and progress tracking. Supports offline functionality.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "SQLite", "Provider", "Local Notifications"],
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 28,
    forks: 6,
  },
]

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Flutter Developer",
    duration: "Jan 2023 - Present",
    description:
      "Leading mobile app development team, architecting scalable Flutter applications, and mentoring junior developers.",
    achievements: [
      "Developed 5+ production Flutter apps with 100K+ downloads",
      "Reduced app crash rate by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Flutter Developer",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Built cross-platform mobile applications from scratch, collaborated with design team for pixel-perfect UI implementation.",
    achievements: [
      "Launched 3 successful mobile apps in fintech domain",
      "Integrated 15+ third-party APIs and services",
      "Maintained 98% app store rating across all projects",
    ],
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Mobile App Developer",
    duration: "Aug 2020 - May 2021",
    description:
      "Developed mobile applications for various clients, focusing on performance optimization and user experience.",
    achievements: [
      "Delivered 8+ client projects on time and within budget",
      "Improved app performance by 35% through optimization",
      "Received 'Developer of the Month' award twice",
    ],
  },
]

const skills = [
  { category: "Mobile Development", items: ["Flutter", "Dart", "Android", "iOS", "React Native"] },
  { category: "Backend & APIs", items: ["Firebase", "Node.js", "REST APIs", "GraphQL", "MongoDB"] },
  { category: "State Management", items: ["Provider", "Bloc", "Riverpod", "GetX", "Redux"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Google Cloud", "Figma"] },
  { category: "Testing", items: ["Unit Testing", "Widget Testing", "Integration Testing", "Mockito"] },
]

///CONTACT
const email = 'kartik.vats0000@gmail.com'
const linkedIn  = 'https://www.linkedin.com/in/kartik-vats-flutter/'
const github = 'https://github.com/kartikvats0000'
const twitter = 'https://x.com/kartikvats0000'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Flutter developer with 4+ years of experience building beautiful, performant mobile
                  applications. I specialize in creating cross-platform solutions that deliver native-like experiences
                  on both iOS and Android.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans the entire mobile development lifecycle, from UI/UX implementation to backend
                  integration, state management, and app store deployment. I'm committed to writing clean, maintainable
                  code and staying up-to-date with the latest Flutter developments.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary">🎯 Problem Solver</Badge>
                  <Badge variant="secondary">🚀 Performance Enthusiast</Badge>
                  <Badge variant="secondary">📱 Mobile First</Badge>
                  <Badge variant="secondary">🎨 UI/UX Focused</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Link href={project.github} className="text-muted-foreground hover:text-foreground">
                          <Github className="w-5 h-5" />
                        </Link>
                        <Link href={project.demo} className="text-muted-foreground hover:text-foreground">
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )

      case "experience":
        return (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">
                        {exp.company}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case "skills":
        return (
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case "contact":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{"Let's Connect"}</CardTitle>
                <CardDescription>
                  {
                    "I'm always open to discussing new opportunities, collaborations, or just having a chat about Flutter development."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Link
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{email}</p>
                    </div>
                  </Link>
                  <Link
                    href = {linkedIn}
                    target="blank"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">{linkedIn.split('https://')[1]}</p>
                    </div>
                  </Link>
                  <Link
                    href= {github}
                    target="blank"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">{github.split('https://')[1]}</p>
                    </div>
                  </Link>
                  <Link
                    href={twitter}
                    target="blank"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <FaXTwitter className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">X</p>
                      <p className="text-sm text-muted-foreground">@{twitter.split('https://x.com/')[1]}</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto">
          {/* Cover Image */}
          <div className="h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Profile Info */}
          <div className="px-4 pb-4 relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Avatar positioned to overlap cover */}
                <div className="relative -mt-16 md:-mt-20">
                  <Avatar className="w-32 h-32 border-4 border-background bg-background">
                    <AvatarImage src="/profile.jpg?height=128&width=128" alt="Kartik Vats" />
                    <AvatarFallback className="text-2xl">KV</AvatarFallback>
                  </Avatar>
                </div>
                {/* Name and handle positioned normally below cover */}
                <div className="md:pb-2 md:pt-4">
                  <h1 className="text-2xl md:text-3xl font-bold">Kartik Vats</h1>
                  <p className="text-muted-foreground">@kartikvats</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0 md:pt-4">
                {/* <Button variant="outline" size="sm" onClick={() => setActiveTab('contact')} >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button> */}
                <Button size="sm" onClick={handleDownload}>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download Resumé
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-lg pt-4">
                🚀 Flutter Developer | 📱 Mobile App Enthusiast | 💻 Cross-platform Solutions Expert
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-1 pb-1">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Delhi NCR, India
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <Link href="https://kartikvats.com" className="text-blue-500 hover:underline">
                    kartikvats.dev
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined August 2021
                </div>
              </div>
              <div className="flex gap-4 text-sm pt-1 pb-1">
                <span>
                  <strong>10+</strong> <span className="text-muted-foreground">Projects</span>
                </span>
                <span>
                  <strong>1.2K</strong> <span className="text-muted-foreground">Followers</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">{renderTabContent()}</div>
    </div>
  )
}
