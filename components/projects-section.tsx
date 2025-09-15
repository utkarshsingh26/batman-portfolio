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
  status: "Solved" | "Active" | "Classified"
  difficulty: "High" | "Medium" | "Low"
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
    title: "E-Commerce Platform Overhaul",
    description: "Modernized legacy e-commerce system with 300% performance improvement",
    longDescription:
      "Led the complete architectural redesign of a legacy e-commerce platform serving 100K+ users. Implemented microservices architecture, optimized database queries, and introduced modern React frontend with Next.js.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
    status: "Solved",
    difficulty: "High",
    image: "/modern-ecommerce-dashboard.png",
    githubUrl: "https://github.com/utkarsh/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.utkarsh.dev",
    challenges: [
      "Legacy codebase with 50K+ lines of unmaintainable code",
      "Database performance issues with complex queries",
      "Zero test coverage and frequent production bugs",
    ],
    solutions: [
      "Implemented microservices architecture with clear separation of concerns",
      "Optimized database with proper indexing and query optimization",
      "Achieved 95% test coverage with comprehensive testing strategy",
    ],
  },
  {
    id: "2",
    caseNumber: "CASE #002",
    title: "Real-time Analytics Dashboard",
    description: "Built scalable analytics platform processing 1M+ events daily",
    longDescription:
      "Developed a real-time analytics dashboard for a fintech startup, processing over 1 million events daily. Implemented event streaming, data visualization, and predictive analytics capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "D3.js", "Kafka"],
    status: "Solved",
    difficulty: "High",
    image: "/analytics-dashboard.png",
    githubUrl: "https://github.com/utkarsh/analytics-dashboard",
    liveUrl: "https://analytics.utkarsh.dev",
    challenges: [
      "Real-time data processing at scale",
      "Complex data visualization requirements",
      "High availability and fault tolerance needs",
    ],
    solutions: [
      "Implemented Apache Kafka for reliable event streaming",
      "Created custom D3.js visualizations for complex data sets",
      "Built redundant systems with 99.9% uptime guarantee",
    ],
  },
  {
    id: "3",
    caseNumber: "CASE #003",
    title: "AI-Powered Code Review Tool",
    description: "Machine learning system for automated code quality assessment",
    longDescription:
      "Developed an AI-powered code review tool that analyzes code quality, suggests improvements, and detects potential security vulnerabilities using machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
    status: "Active",
    difficulty: "High",
    image: "/ai-code-analysis-interface.jpg",
    githubUrl: "https://github.com/utkarsh/ai-code-review",
    challenges: [
      "Training ML models on diverse codebases",
      "Balancing accuracy with performance",
      "Integration with existing development workflows",
    ],
    solutions: [
      "Curated training dataset from 10K+ open source repositories",
      "Implemented efficient model serving with caching strategies",
      "Built seamless integrations with GitHub, GitLab, and Bitbucket",
    ],
  },
  {
    id: "4",
    caseNumber: "CASE #004",
    title: "Blockchain Voting System",
    description: "Secure, transparent voting platform using blockchain technology",
    longDescription:
      "Created a decentralized voting system ensuring transparency, security, and immutability. Implemented smart contracts for vote recording and verification mechanisms.",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS", "MetaMask"],
    status: "Classified",
    difficulty: "Medium",
    image: "/blockchain-voting-interface.png",
    githubUrl: "https://github.com/utkarsh/blockchain-voting",
    challenges: [
      "Ensuring vote privacy while maintaining transparency",
      "Gas optimization for cost-effective transactions",
      "User experience for non-technical voters",
    ],
    solutions: [
      "Implemented zero-knowledge proofs for privacy",
      "Optimized smart contracts reducing gas costs by 40%",
      "Created intuitive UI with guided voting process",
    ],
  },
  {
    id: "5",
    caseNumber: "CASE #005",
    title: "IoT Device Management Platform",
    description: "Centralized platform managing 10K+ IoT devices across multiple locations",
    longDescription:
      "Built a comprehensive IoT device management platform capable of monitoring, controlling, and updating thousands of connected devices in real-time.",
    technologies: ["Node.js", "MongoDB", "MQTT", "React", "AWS IoT", "InfluxDB"],
    status: "Solved",
    difficulty: "Medium",
    image: "/iot-device-management-dashboard.jpg",
    liveUrl: "https://iot-platform.utkarsh.dev",
    challenges: [
      "Managing diverse device types and protocols",
      "Handling intermittent connectivity issues",
      "Scalable data storage for sensor readings",
    ],
    solutions: [
      "Implemented protocol abstraction layer for device compatibility",
      "Built robust retry mechanisms and offline capabilities",
      "Used time-series database for efficient sensor data storage",
    ],
  },
  {
    id: "6",
    caseNumber: "CASE #006",
    title: "Social Media Content Moderator",
    description: "AI-driven content moderation system with 95% accuracy rate",
    longDescription:
      "Developed an intelligent content moderation system using natural language processing and computer vision to automatically detect and filter inappropriate content.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Redis", "PostgreSQL"],
    status: "Active",
    difficulty: "Medium",
    image: "/content-moderation-ai-interface.jpg",
    challenges: [
      "Handling multiple content types (text, images, videos)",
      "Minimizing false positives while catching violations",
      "Real-time processing at social media scale",
    ],
    solutions: [
      "Built ensemble models combining NLP and computer vision",
      "Implemented human-in-the-loop feedback system",
      "Optimized processing pipeline for sub-second response times",
    ],
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const statusColors = {
    Solved: "bg-green-500/20 text-green-400 border-green-500/30",
    Active: "bg-primary/20 text-primary border-primary/30",
    Classified: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  }

  const difficultyColors = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-green-500/20 text-green-400",
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
  const [filter, setFilter] = useState<"All" | "Solved" | "Active" | "Classified">("All")

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
          {["All", "Solved", "Active", "Classified"].map((status) => (
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
