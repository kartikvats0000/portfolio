"use client";

import { FaXTwitter, FaGithub, FaLinkedin, FaAppStore} from "react-icons/fa6";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  LinkIcon,
  Calendar,
  Mail,
  GitFork,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  DownloadIcon,
  Globe,
} from "lucide-react";
import Link from "next/link";

import { BsGooglePlay } from "react-icons/bs";


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Path relative to the public folder
  link.download = "Kartik Vats Resume.pdf"; // Suggested filename for the user
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
];

const projects = [
  {
    id: 1,
    title: "The Beyond Lifestyle App",
    description:
      "A Complete mindfulness and wellness app with guided meditations, Customisations with Themes, and many wellness features like Podcasts, Talk To Me and Know Yourself. Built with Flutter and Node.JS.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "Firebase", "Node JS", "Provider"],
    website : "https://beyondlifestyle.com",
    googlePlay: "https://play.google.com/store/apps/details?id=com.tblstyle",
    appStore: "https://apps.apple.com/in/app/the-beyond-lifestyle/id6478144849",
  },
  {
    id: 2,
    title: "Mehandipur Balaji App",
    description:
      "Spiritual app for devotees of Mehandipur Balaji, offering temple information and community features, with key feature named Ram Naam on which people can chant the name of lord Ram and see other's activity too. Built with Flutter and Node.JS and utilised Socket.IO.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "NodeJS", "GetX", "Socket.IO"],
    googlePlay: "https://play.google.com/store/apps/details?id=com.mehandipurbalaji",
    appStore: "https://apps.apple.com/in/app/mehandipur-balaji/id6450503422",
    website: "https://mehandipurbalaji.app",
    
  },
  {
    id: 3,
    title: "Big Boyz Klub",
    description:
      "Mobile App to book charter planes directly from your phone. The app allows users to book charter flights, view available aircraft, and manage bookings seamlessly. Built with Flutter and NodeJS.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "NodeJS", "MongoDB", "GetX"],
       website : "https://bigboyzklub.com",
    googlePlay: "https://play.google.com/store/apps/details?id=com.bigboyzklub",
    appStore: "https://apps.apple.com/in/app/big-boyz-klub-app/id6744999714",
  },
];

const experiences = [
  {
    id: 1,
    company: "RAJMITH",
    position: "Mobile App Developer",
    duration: "Jan 2023 - Present",
    description:
      "Designed, Built, and maintained premium mobile applications using Flutter. Collaborated with cross-functional teams to define, design, and ship new features. Ensured the performance, quality, and responsiveness of applications.",
    achievements: [
      "Developed 5+ production Flutter apps with 100K+ downloads",
      "Reduced app crash rate by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  }
];

const skills = [
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    category: "Backend & APIs",
    items: ["Firebase", "Node.js", "REST APIs", "MongoDB"],
  },
  {
    category: "State Management",
    items: ["Provider", "Riverpod", "GetX"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "AWS", "Figma"],
  }
  
];

///CONTACT
const email = "kartik.vats0000@gmail.com";
const linkedIn = "https://www.linkedin.com/in/kartik-vats-flutter/";
const github = "https://github.com/kartikvats0000";
const twitter = "https://x.com/kartikvats0000";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

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
                  Hi, I’m Kartik Vats — an app developer with nearly three years
                  of experience building and maintaining thoughtful and
                  functional mobile applications. My work focuses on creating
                  tools that genuinely help users, whether it’s a productivity
                  app, a wellness tool, or something in between. I enjoy turning
                  ideas into polished, real-world products that work smoothly
                  and feel intuitive.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What drives me is a strong passion for clean, modern UI and
                  detail-oriented design. I believe great design isn’t just
                  about how something looks, but how effortlessly it works — and
                  I carry that belief into every project I take on. I’m always
                  looking to create experiences that not only solve problems but
                  also feel good to use.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary">🛠️ Builds Real-World Apps</Badge>
                  <Badge variant="secondary">⚡ Fast & Clean Code</Badge>
                  <Badge variant="secondary">📲 Thoughtful Mobile Experiences</Badge>
                  <Badge variant="secondary">🧠 Design-Driven Thinking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} className="px-5 py-5">

                  
                  <div className="px-5 py-5">
                    <div className="flex items-start justify-between mb-5">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      
                    </div>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                      <Link
                          href={project.appStore} target="blank"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <FaAppStore className="w-5 h-5" />
                        </Link>
                      <Link
                          href={project.googlePlay} target="blank"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <BsGooglePlay className="w-5 h-5" />
                        </Link>
                      <Link
                          href={project.website} target="blank"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Globe className="w-5 h-5" />
                        </Link>
                    </div>
                  </div>

              </Card>
            ))}
          </div>
        );

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
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.duration}
                      </p>
                    </div>
                    <Briefcase className="w-6 h-6 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
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
        );

      case "skills":
        return (
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s Connect</CardTitle>
                <CardDescription>
                  I&apos;m always open to discussing new opportunities,
                  collaborations, or just having a chat about Flutter
                  development.
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
                    href={linkedIn}
                    target="blank"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">
                        {linkedIn.split("https://")[1]}
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={github}
                    target="blank"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">
                        {github.split("https://")[1]}
                      </p>
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
                      <p className="text-sm text-muted-foreground">
                        @{twitter.split("https://x.com/")[1]}
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div>
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
                    <AvatarImage
                      src="/profile.jpg?height=128&width=128"
                      alt="Kartik Vats"
                    />
                    <AvatarFallback className="text-2xl">KV</AvatarFallback>
                  </Avatar>
                </div>
                {/* Name and handle positioned normally below cover */}
                <div className="md:pb-2 md:pt-4">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Kartik Vats
                  </h1>
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
                Mobile App Developer  |  Flutter  |
                 Cross-platform Solutions Expert
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-1 pb-1">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Delhi NCR, India
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <Link
                    href="https://kartikvats.com"
                    target="blank"
                    className="text-blue-500 hover:underline"
                  >
                    kartikvats.com
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined August 2021
                </div>
              </div>
              <div className="flex gap-4 text-sm pt-1 pb-1">
                <span>
                  <strong>5+</strong>{" "}
                  <span className="text-muted-foreground">Projects Done</span>
                </span>
                <span>
                  <strong>500+</strong>{" "}
                  <span className="text-muted-foreground">Coffee Cups Consumed</span>
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
              const Icon = tab.icon;
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
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">{renderTabContent()}</div>
    </div>
  );
}
