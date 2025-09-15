"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  missionType: "Stealth" | "Tactical" | "Strategic"
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Arizona State University",
    position: "Software Engineer",
    duration: "2024 - Present",
    location: "Tempe, AZ",
    description:
      "Leading the development of next-generation enterprise solutions, architecting scalable systems that serve millions of users worldwide.",
    achievements: [
      "Reduced system latency by 60% through microservices architecture redesign",
      "Led team of 8 developers in delivering critical infrastructure upgrades",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Mentored 5 junior developers, with 100% promotion rate within 18 months",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
    missionType: "Strategic",
  },
  {
    id: "2",
    company: "Resilience, Inc",
    position: "Software Engineer Intern",
    duration: "2024 - 2024",
    location: "Tempe, AZ",
    description:
      "Developed cutting-edge web applications and mobile solutions for high-profile clients, focusing on performance and user experience.",
    achievements: [
      "Built real-time analytics platform processing 1M+ events daily",
      "Increased application performance by 200% through optimization techniques",
      "Developed mobile app with 4.8/5 star rating and 100K+ downloads",
      "Collaborated with design team to improve user engagement by 150%",
    ],
    technologies: ["React Native", "Python", "MongoDB", "Redis", "GraphQL", "TypeScript"],
    missionType: "Tactical",
  },
  {
    id: "3",
    company: "Jio Platforms Ltd",
    position: "Software Engineer",
    duration: "2021 - 2023",
    location: "Mumbai, IND",
    description:
      "Specialized in developing secure, high-availability systems for government and enterprise clients with strict compliance requirements.",
    achievements: [
      "Implemented security protocols achieving SOC 2 Type II compliance",
      "Developed encryption algorithms protecting sensitive government data",
      "Built disaster recovery systems with 99.99% uptime guarantee",
      "Created automated testing framework reducing bugs by 80%",
    ],
    technologies: ["Java", "Spring Boot", "Oracle", "Jenkins", "Terraform", "Ansible"],
    missionType: "Stealth",
  },
  {
    id: "4",
    company: "Cognizant",
    position: "Application Development Intern",
    duration: "2021 - 2021",
    location: "Mumbai, IND",
    description:
      "Started my journey in software development, working on content management systems and digital publishing platforms.",
    achievements: [
      "Developed CMS handling 10M+ page views monthly",
      "Optimized database queries improving load times by 40%",
      "Built responsive web interfaces for mobile-first audience",
      "Contributed to open-source projects with 1K+ GitHub stars",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "WordPress", "jQuery", "Bootstrap"],
    missionType: "Tactical",
  },
]

const ExperienceCard = ({
  experience,
  isExpanded,
  onToggle,
}: { experience: Experience; isExpanded: boolean; onToggle: () => void }) => {
  const missionTypeColors = {
    Stealth: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Tactical: "bg-primary/20 text-primary border-primary/30",
    Strategic: "bg-green-500/20 text-green-400 border-green-500/30",
  }

  return (
    <Card className="bg-card/50 border-border hover:bg-card hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className={`text-xs ${missionTypeColors[experience.missionType]}`}>
            {experience.missionType} Mission
          </Badge>
          <span className="text-sm text-muted-foreground font-source-sans">{experience.duration}</span>
        </div>
        <div>
          <h3 className="font-playfair font-bold text-xl text-card-foreground mb-1">{experience.position}</h3>
          <p className="font-source-sans text-primary font-semibold">{experience.company}</p>
          <p className="font-source-sans text-sm text-muted-foreground">{experience.location}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-source-sans text-muted-foreground leading-relaxed">{experience.description}</p>

        {isExpanded && (
          <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div>
              <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Intel Reports</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="font-source-sans text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-1">▶</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Mission Equipment</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-source-sans">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={onToggle}
          variant="outline"
          size="sm"
          className="w-full font-source-sans hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          {isExpanded ? "Hide Details" : "View Mission Details"}
        </Button>
      </CardContent>
    </Card>
  )
}

export function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Field Operations</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A chronicle of missions completed across various organizations, each contributing to the evolution of a
            software engineering vigilante.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:space-x-8 space-y-8 lg:space-y-0`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Card */}
                <div className="w-full lg:w-5/12">
                  <ExperienceCard
                    experience={experience}
                    isExpanded={expandedCard === experience.id}
                    onToggle={() => toggleCard(experience.id)}
                  />
                </div>

                {/* Spacer for timeline */}
                <div className="hidden lg:block w-2/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
