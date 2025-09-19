"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const CloudySky = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated clouds */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-muted/20 rounded-full blur-xl animate-pulse"
        style={{
          width: `${100 + Math.random() * 200}px`,
          height: `${50 + Math.random() * 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${8 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
)

const BatSignalButton = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => (
  <div className="relative">
    {/* Signal Beam */}
    <div
      className={`absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 transition-all duration-1000 ${
        isActive ? "opacity-40 scale-110" : "opacity-10 scale-100"
      }`}
    >
      <div className="w-full h-full bg-gradient-radial from-primary/30 via-primary/15 to-transparent rounded-full blur-2xl" />
    </div>

    {/* Bat Signal Button */}
    <button
      onClick={onClick}
      className={`relative z-10 group transition-all duration-500 hover:scale-110 ${
        isActive ? "bat-signal-animation" : ""
      }`}
    >
      <div
        className={`w-32 h-32 rounded-full border-4 border-primary bg-card/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
          isActive ? "bg-primary/20 border-primary shadow-2xl" : "hover:bg-primary/10 hover:border-primary/80"
        }`}
      >
      <img
        src="/batman-logo.png" // your PNG path in public/ folder
        alt="Bat Signal"
        className={`w-16 h-16 object-contain transition-all duration-500 ${
          isActive ? "scale-110 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]" : "group-hover:scale-105"
        }`}
      />

      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="font-source-sans text-sm text-muted-foreground">
          {isActive ? "Signal Active" : "Activate Signal"}
        </span>
      </div>
    </button>
  </div>
)

export function ContactSection() {
  const [isSignalActive, setIsSignalActive] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSignalClick = () => {
    setIsSignalActive(!isSignalActive)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Signal Received!",
      description: "Your message has been transmitted to the Batcave. Expect a response within 24 hours.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSignalActive(false)
  }

  return (
    <section id="contact" className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Background */}
      <CloudySky />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Bat-Signal</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When Gotham needs a hero, they light the signal. When you need a developer, send a message.
          </p>
        </div>

        {/* Bat Signal */}
        <div className="flex justify-center mb-16">
          <BatSignalButton isActive={isSignalActive} onClick={handleSignalClick} />
        </div>

        {/* Contact Form */}
        <div
          className={`transition-all duration-1000 ${
            isSignalActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-playfair font-bold text-2xl text-primary mb-2">Emergency Communication</h3>
                <p className="font-source-sans text-muted-foreground">
                  Transmit your message through the secure Bat-Network (won't work unless you're Jim Gordon)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-source-sans font-semibold text-card-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-source-sans font-semibold text-card-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-source-sans font-semibold text-card-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Describe your project, timeline, and how I can help..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="font-source-sans font-semibold px-8 py-6 glow-animation hover:scale-105 transition-transform duration-300"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Signal"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair font-bold text-xl text-primary mb-6">Alternative Communication Channels</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:utkarsh@example.com"
              className="group flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="font-source-sans text-sm text-muted-foreground group-hover:text-primary">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/singhutkarsh98/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span className="font-source-sans text-sm text-muted-foreground group-hover:text-primary">LinkedIn</span>
            </a>

            <a
              href="https://github.com/utkarshsingh26"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <span className="font-source-sans text-sm text-muted-foreground group-hover:text-primary">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
