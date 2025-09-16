"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// const BatmanSilhouette = () => (
//   <div className="relative">
//     <svg
//       width="300"
//       height="400"
//       viewBox="0 0 300 400"
//       className="fill-primary/20 hover:fill-primary/30 transition-colors duration-500"
//     >
//       {/* Batman silhouette */}
//       <path d="M150 50c-20 0-35 10-45 25-5 8-8 18-8 28 0 15 8 28 20 35v30c0 20 15 35 35 35s35-15 35-35v-30c12-7 20-20 20-35 0-10-3-20-8-28-10-15-25-25-45-25z" />
//       <path d="M150 180c-25 0-45 20-45 45v80c0 15 10 25 25 25h40c15 0 25-10 25-25v-80c0-25-20-45-45-45z" />
//       <path d="M100 200c-15 0-25 10-25 25v50c0 10 8 18 18 18s18-8 18-18v-50c0-15-10-25-25-25z" />
//       <path d="M200 200c15 0 25 10 25 25v50c0 10-8 18-18 18s-18-8-18-18v-50c0 15 10-25 25-25z" />
//       {/* Cape */}
//       <path d="M80 180c-20 30-30 60-25 90 5 25 20 40 40 45 15 3 30 0 40-8 10 8 25 11 40 8 20-5 35-20 40-45 5-30-5-60-25-90-10-15-25-25-40-25s-30 10-35 25c-5-15-20-25-35-25s-30 10-40 25z" />
//     </svg>
//     <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-xl" />
//   </div>
// )

const BatmanSilhouette = () => (
  <div className="relative">
    {/* Batman PNG */}
    <img
      src="/batman.webp" // replace with your PNG path or URL
      alt="Batman Silhouette"
      className="w-[300px] h-[400px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
    />

    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-xl" />
  </div>
);


const SkillIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="group flex flex-col items-center p-4 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300 hover:scale-105 transform">
    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <span className="text-sm font-source-sans text-center text-card-foreground group-hover:text-primary transition-colors">
      {name}
    </span>
  </div>
)

const TechBadge = ({ tech, level }: { tech: string; level: "Expert" | "Advanced" | "Intermediate" }) => {
  const levelColors = {
    Expert: "bg-primary text-primary-foreground",
    Advanced: "bg-accent/80 text-accent-foreground",
    Intermediate: "bg-muted text-muted-foreground",
  }

  return (
    <div className="flex items-center space-x-2 p-3 rounded-lg bg-card/30 hover:bg-card/50 transition-colors duration-300">
      <Badge variant="secondary" className={`${levelColors[level]} font-source-sans text-xs`}>
        {level}
      </Badge>
      <span className="font-source-sans font-medium text-card-foreground">{tech}</span>
    </div>
  )
}

export function AboutSection() {
  const [activePanel, setActivePanel] = useState<"skills" | "tech">("skills")

  const skills = [
    { name: "Frontend Development", icon: "🦇" },
    { name: "Backend Architecture", icon: "🏢" },
    { name: "Database Design", icon: "🗃️" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "DevOps", icon: "⚙️" },
    { name: "Mobile Development", icon: "📱" },
    { name: "API Development", icon: "🔗" },
    { name: "System Design", icon: "🏗️" },
  ]

  const technologies = [
    { tech: "React/Next.js", level: "Expert" as const },
    { tech: "TypeScript", level: "Expert" as const },
    { tech: "Node.js", level: "Advanced" as const },
    { tech: "Python", level: "Advanced" as const },
    { tech: "PostgreSQL", level: "Advanced" as const },
    { tech: "AWS/Azure", level: "Advanced" as const },
    { tech: "Docker", level: "Intermediate" as const },
    { tech: "Kubernetes", level: "Intermediate" as const },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Mission Briefing</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "Every hero has an origin story. Mine began with a passion for solving complex problems through code, evolving into a mission to build digital solutions that make a difference."
            }
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Panel - Batman Silhouette */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <BatmanSilhouette />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                {/* <Badge variant="outline" className="font-source-sans text-primary border-primary">
                  The Dark Knight
                </Badge> */}
              </div>
            </div>
          </div>

          {/* Right Panel - Skills and Tech */}
          <div className="lg:col-span-3 space-y-8">
            {/* Mission Statement */}
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-2xl text-primary mb-4">Mission Statement</h3>
                <p className="font-source-sans text-card-foreground leading-relaxed mb-4">
                  As a software engineer, I operate in the shadows of complex systems, emerging to solve critical
                  challenges with precision and innovation. My mission is to architect scalable solutions, protect data
                  integrity, and deliver exceptional user experiences.
                </p>
                <p className="font-source-sans text-muted-foreground leading-relaxed">
                  With expertise spanning full-stack development, cloud architecture, and system design, I bring both
                  technical prowess and strategic thinking to every project. Like Gotham&apos;s protector, I&apos;m
                  always ready to tackle the next challenge.
                </p>
              </CardContent>
            </Card>

            {/* Panel Selector */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActivePanel("skills")}
                className={`px-6 py-3 rounded-lg font-source-sans font-semibold transition-all duration-300 ${
                  activePanel === "skills"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-card/80"
                }`}
              >
                Utility Belt
              </button>
              <button
                onClick={() => setActivePanel("tech")}
                className={`px-6 py-3 rounded-lg font-source-sans font-semibold transition-all duration-300 ${
                  activePanel === "tech"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-card/80"
                }`}
              >
                Batcomputer
              </button>
            </div>

            {/* Skills Panel */}
            {activePanel === "skills" && (
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-6">Utility Belt - Core Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <SkillIcon key={index} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tech Panel */}
            {activePanel === "tech" && (
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-6">Batcomputer - Technology Stack</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {technologies.map((item, index) => (
                      <TechBadge key={index} tech={item.tech} level={item.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
