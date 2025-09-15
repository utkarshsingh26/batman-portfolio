"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  gpa?: string
  achievements: string[]
  relevantCourses: string[]
  classificationLevel: "Top Secret" | "Classified" | "Confidential"
}

const education: Education[] = [
  {
    id: "1",
    institution: "Arizona State University",
    degree: "Master of Science",
    field: "Computer Science",
    duration: "2023 - 2025",
    location: "Tempe, AZ",
    achievements: [
      "Grad Teaching Assistant for grad level Data Viz class",
      "Top 1% performer in the grad level Distributed Databases class",
      "Accepted Publication in HICSS 2026",
      "Honorary Award in IEEE PacificVis 2025",
    ],
    relevantCourses: [
      "Data Visualization",
      "Distributed Systems",
      "Advanced Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud DevOps",
    ],
    classificationLevel: "Top Secret",
  },
  {
    id: "2",
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    duration: "2017 - 2021",
    location: "Chennai, IND",
    achievements: [
      "Magna Cum Laude graduate",
      "President of Computer Science Student Association",
      "Internship at Wayne Enterprises (Summer 2014)",
      "Dean's List for 6 consecutive semesters",
    ],
    relevantCourses: [
      "Data Structures",
      "Object-Oriented Programming",
      "Web Development",
      "Mobile App Development",
      "Computer Networks",
      "Software Testing",
    ],
    classificationLevel: "Classified",
  },
]

const EducationCard = ({ edu }: { edu: Education }) => {
  const classificationColors = {
    "Top Secret": "bg-red-500/20 text-red-400 border-red-500/30",
    Classified: "bg-primary/20 text-primary border-primary/30",
    Confidential: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  }

  return (
    <Card className="bg-card/50 border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className={`text-xs ${classificationColors[edu.classificationLevel]}`}>
            {edu.classificationLevel}
          </Badge>
          <span className="text-sm text-muted-foreground font-source-sans">{edu.duration}</span>
        </div>
        <div>
          <h3 className="font-playfair font-bold text-xl text-card-foreground mb-1">
            {edu.degree} in {edu.field}
          </h3>
          <p className="font-source-sans text-primary font-semibold">{edu.institution}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="font-source-sans text-sm text-muted-foreground">{edu.location}</p>
            {edu.gpa && (
              <Badge variant="secondary" className="text-xs font-source-sans">
                GPA: {edu.gpa}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Training Achievements</h4>
          <ul className="space-y-2">
            {edu.achievements.map((achievement, index) => (
              <li key={index} className="font-source-sans text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2 mt-1">★</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-playfair font-bold text-lg text-card-foreground mb-3">Specialized Training</h4>
          <div className="flex flex-wrap gap-2">
            {edu.relevantCourses.map((course) => (
              <Badge key={course} variant="outline" className="text-xs font-source-sans border-primary/30">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Training & Origins</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The foundation of knowledge and skills acquired through rigorous academic training, forming the bedrock of
            technical expertise.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair font-bold text-2xl text-primary mb-8">Ongoing Training Protocols</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "AWS Solutions Architect",
              "Google Cloud Professional",
              "Kubernetes Administrator",
              "Scrum Master Certified",
            ].map((cert) => (
              <Card key={cert} className="bg-card/50 border-border hover:bg-card transition-colors duration-300">
                <CardContent className="p-4 text-center">
                  <Badge variant="outline" className="font-source-sans text-primary border-primary">
                    {cert}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
