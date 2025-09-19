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
    duration: " July 2024 - Present",
    location: "Tempe, AZ",
    description:
      "Leading the design, development, and testing of next-generation healthcare enterprise solutions, architecting scalable systems that can serve millions of users worldwide.",
    achievements: [
      "Built production RAG pipeline using LangChain and OpenAI APIs, processing 10GB+ daily medical records for 500+ healthcare practitioners, reducing clinical prep time by 50% (45→22 minutes) with 95% accuracy",
      "Architected real-time analytics dashboards using D3.js, React, and GCP (Blob Storage, Cloud Functions), capable of vertically scaling to potentially process  50K+ patient data points for 1K+ concurrent users, reducing clinician cognitive burden by 35%",
      "Engineered responsive React and Material UI frontend with component-based architecture, integrating backend GCP APIs, including Firestore for real-time data visualization and interactive clinical decision-making dashboards",
    ],
    technologies: ["React", "LangChain", "Firebase", "D3.js", "Data Visualization", "JavaScript"],
    missionType: "Strategic",
  },
  {
    id: "2",
    company: "Resilience, Inc",
    position: "Software Engineer Intern",
    duration: "May 2024 - July 2024",
    location: "Tempe, AZ",
    description:
      "Developed cutting-edge web applications and mobile solutions for high-profile clients, focusing on performance and user experience.",
    achievements: [
      "Built data processing pipeline using Python, Pandas, and MongoDB for mental health analytics, processing 4K+ daily user interactions and improving prediction accuracy by 60%",
      "Engineered real-time analytics pipeline using Apache Airflow, and PostgreSQL, processing 1K+ daily events and improving data efficiency by 60% while reducing memory usage by 40%, secured with OAuth2 and JWT for user authentication",
      "Implemented monitoring and alerting using Prometheus and Grafana, achieving 99.9% uptime for 2K+ daily users with sub-200ms response times and automated incident recovery",
    ],
    technologies: ["Python", "MongoDB", "Apache Airflow", "Prometheus", "Grafana", "PostgreSQL"],
    missionType: "Tactical",
  },
  {
    id: "3",
    company: "Jio Platforms Ltd",
    position: "Software Engineer",
    duration: "June 2021 - Feb 2023",
    location: "Mumbai, IND",
    description:
      "Specialized in developing secure, high-availability systems for enterprise clients with strict compliance requirements.",
    achievements: [
      "Architected distributed microservices using Apache Kafka, RabbitMQ and Spring Boot for real-time file streaming, reducing latency by 92% (120s→10s) while handling 300TB+ monthly throughput for 1M+ concurrent users",
      "Led the development of front-end for enterprise software using HTML/CSS, Angular, Typescript, improving user experience (UI/UX) for 24K+ clients through Figma-driven design and hybrid cloud integration",
      "Conducted technical design and code review, built CI/CD pipelines using Jenkins, SonarQube, and provided production support for deployments throughout the Software Development Lifecycle (SDLC)",
      "Built enterprise object storage platform using Java and AWS S3 SDK, processing 31M+ files/month with 99.99% availability while reducing storage costs by 35% through automated tiering and compression",
    ],
    technologies: ["Java", "Apache Kafka", "Spring Boot", "RabbitMQ", "Jenkins", "SonarQube"],
    missionType: "Stealth",
  },
  {
    id: "4",
    company: "Cognizant",
    position: "Application Development Intern",
    duration: "Jan 2021 - May 2021",
    location: "Mumbai, IND",
    description:
      "Started my journey in software development, working on content management systems and digital publishing platforms.",
    achievements: [
      "Created API Swagger specs for auto-generating API documentation, developed JUnit and Karate integration tests, ensuring end-to-end quality assurance, automated testing, and increasing test coverage; used Jira, Slack for agile project management",
      "Engineered a REST API in Node.js with Dropwizard for bulk updation of batch printing jobs, integrating AWS DynamoDB with global secondary indexing to enhance performance",
    ],
    technologies: ["Swagger", "Dropwizard", "JUnit", "Karate", "jQuery", "DynamoDB"],
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
    Tactical: "bg-red-500/20 text-red-400 border-red-500/30",
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
