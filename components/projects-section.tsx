"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Project {
  id: string
  caseNumber: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  status: "Solved" | "Active"
  difficulty: "High" | "Medium" | "Low" | "Publication" | "Project"
  image: string
  githubUrl?: string
  liveUrl?: string
  challenges: string[]
  solutions: string[]
}

const projects: Project[] = [
  {
    id: "1",
    caseNumber: "CASE #001",
    title: "PatientLens: AI-Enabled Interactive Avatars for Patient Report Summarization and Visualization",
    description: "Revolutionized patient healthcare.",
    longDescription:
      "This thesis develops an AI-driven clinical assistant that integrates large language models, humanoid avatars, and timeline visualizations to streamline physician workflows. By combining RAG pipelines with intuitive data displays, the system enables faster, more trustworthy access to patient information. Evaluations with Mayo Clinic clinicians demonstrated reduced pre-visit preparation time (48 → 30 minutes) and improved confidence in AI-generated insights. The mission is to advance AI-enabled healthcare where clinicians spend more time with patients and less time navigating data",
    technologies: ["React", "LangChain", "Firebase", "D3.js", "Data Visualization", "JavaScript"],
    status: "Solved",
    difficulty: "Publication",
    image: "/hicss-2026.jpeg",
    githubUrl: "https://www.youtube.com/watch?v=EmCFjHRFd6c&t=4s",
    liveUrl: "https://www.youtube.com/watch?v=GdtbjqOSDXk&t=2s",
    challenges: [
      "HIPAA Compliance",
      "Processing Thousnads of Patient Files",
      "Reduce prep-time upper limit of 60 mins",
    ],
    solutions: [
      "Siloed LLMs",
      "Utilized the full potential of Google's Blob Storage",
      "Prep-time reduced by 50%",
    ],
  },
  {
    id: "2",
    caseNumber: "CASE #002",
    title: "The Story of Wagyu: Bringing Charm of Japan's Pride to the World",
    description: "Built scalable analytics platform processing 1M+ events daily",
    longDescription:
      "Developed a real-time analytics dashboard for a fintech startup, processing over 1 million events daily. Implemented event streaming, data visualization, and predictive analytics capabilities.",
    technologies: ["Next.js", "Scrollama", "D3.js", "MongoDB", "Pandas", "Kafka"],
    status: "Solved",
    difficulty: "Publication",
    image: "/pacific-vis-2025.png",
    githubUrl: "https://y0uk1.github.io/PacificVis2025/",
    challenges: [
      "Comprehensive storytelling",
    ],
    solutions: [
      "Scrollama and other visualization techniques",
    ],
  },
  {
    id: "3",
    caseNumber: "CASE #003",
    title: "A Comprehensive Survey on Movie Recommendation Systems",
    description: "A literature survey on the latest technqiues beign used in the realm of movie recommendation.",
    longDescription:
      "This survey investigates the latest techniques in movie recommendation systems, spanning collaborative filtering, content-based models, hybrid approaches, and deep learning methods. The mission is to provide a comprehensive understanding of current innovations, highlight their strengths and limitations, and identify promising directions for future research in personalized media recommendations.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Django", "MongoDB", "Docker"],
    status: "Solved",
    difficulty: "Publication",
    image: "/ieee-xplore.png",
    githubUrl: "https://ieeexplore.ieee.org/abstract/document/9395759",
    challenges: [
      "The cold start problem",
      "Separating the useful methods from the rest",
    ],
    solutions: [
      "A combination of orthodox and current methods",
      "Unrelenting grit and hardwork",
    ],
  },
  {
    id: "4",
    caseNumber: "CASE #004",
    title: "SNAPE: Redifing Healthcare (Thesis)",
    description: "Secure, avatar based technology to reduce pre-checkup prep time.",
    longDescription:
      "This thesis develops an AI-driven clinical assistant that integrates large language models, humanoid avatars, and timeline visualizations to streamline physician workflows. By combining RAG pipelines with intuitive data displays, the system enables faster, more trustworthy access to patient information. Evaluations with Mayo Clinic clinicians demonstrated reduced pre-visit preparation time (48 → 30 minutes) and improved confidence in AI-generated insights. The mission is to advance AI-enabled healthcare where clinicians spend more time with patients and less time navigating data.",
    technologies: ["JavaScript", "React", "LangChain", "Firebase", "D3.js", "Data Visualization"],
    status: "Solved",
    difficulty: "Project",
    image: "/doctors-office.jpg",
    githubUrl: "https://www.youtube.com/watch?v=EmCFjHRFd6c&t=4s",
    liveUrl: "https://www.youtube.com/watch?v=GdtbjqOSDXk&t=2s",
    challenges: [
      "HIPAA Compliance",
      "Processing Thousnads of Patient Files",
      "Reduce prep-time upper limit of 60 mins",
    ],
    solutions: [
      "Siloed LLMs",
      "Utilized the full potential of Google's Blob Storage",
      "Prep-time reduced by 50%",
    ],
  },
  {
    id: "5",
    caseNumber: "CASE #005",
    title: "Premier League Real-Time Match Analytics Dashboard",
    description: "Exciting stuff coming soon.",
    longDescription:
      "Exciting stuff coming soon.",
    technologies: ["Node.js", "MongoDB", "MQTT", "React", "AWS IoT", "InfluxDB"],
    status: "Active",
    difficulty: "Project",
    image: "/premier-league.jpg",
    challenges: [
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
    ],
    solutions: [
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
    ],
  },
  {
    id: "6",
    caseNumber: "CASE #006",
    title: "Demon Slayer Hashira Classifier and Diaglogue Generator",
    description: "Exciting stuff coming soon.",
    longDescription:
      "Exciting stuff coming soon.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Redis", "PostgreSQL"],
    status: "Active",
    difficulty: "Project",
    image: "/rengoku.jpg",
    challenges: [
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
    ],
    solutions: [
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
      "Exciting stuff coming soon.",
    ],
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const statusColors = {
    Solved: "bg-green-500/20 text-green-400 border-green-500/30",
    Active: "bg-primary/20 text-primary border-primary/30",
    // Classified: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  }

  const difficultyColors = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-green-500/20 text-green-400",
    Publication: "bg-red-500/20 text-red-400",
    Project: "bg-yellow-500/20 text-yellow-400"
  }

  return (
    <Card className="group bg-card/50 border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="font-mono text-xs text-primary border-primary">
            {project.caseNumber}
          </Badge>
          <div className="flex space-x-2">
            <Badge variant="outline" className={`text-xs ${statusColors[project.status]}`}>
              {project.status}
            </Badge>
            <Badge variant="outline" className={`text-xs ${difficultyColors[project.difficulty]}`}>
              {project.difficulty}
            </Badge>
          </div>
        </div>
        <h3 className="font-playfair font-bold text-xl text-card-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <p className="font-source-sans text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-source-sans">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs font-source-sans">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full font-source-sans hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Case Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-playfair text-2xl text-primary">
                {project.caseNumber}: {project.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Mission Overview</h4>
                <p className="font-source-sans text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              <div>
                <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Technology Arsenal</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-source-sans">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Challenges Faced</h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="font-source-sans text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Solutions Implemented</h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="font-source-sans text-muted-foreground flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4 pt-4">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="font-source-sans bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="font-source-sans">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<"All" | "Solved" | "Active">("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.status === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Case Files</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of solved cases and ongoing investigations. Each project represents a unique challenge
            conquered through strategic thinking and technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {["All", "Solved", "Active"].map((status) => (
            <Button
              key={status}
              onClick={() => setFilter(status as any)}
              variant={filter === status ? "default" : "outline"}
              className="font-source-sans"
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-source-sans text-muted-foreground mb-6">Interested in collaborating on the next case?</p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            size="lg"
            className="font-source-sans font-semibold glow-animation"
          >
            Signal the Bat
          </Button>
        </div>
      </div>
    </section>
  )
}
