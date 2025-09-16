"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const GothamSkyline = () => (
  <svg
    viewBox="0 0 1200 300"
    className="absolute bottom-0 left-0 w-full h-auto text-card fill-current opacity-80"
    preserveAspectRatio="none"
  >
    <path d="M0,300 L0,200 L50,200 L50,150 L100,150 L100,180 L150,180 L150,120 L200,120 L200,160 L250,160 L250,100 L300,100 L300,140 L350,140 L350,90 L400,90 L400,170 L450,170 L450,110 L500,110 L500,190 L550,190 L550,130 L600,130 L600,200 L650,200 L650,80 L700,80 L700,150 L750,150 L750,120 L800,120 L800,180 L850,180 L850,100 L900,100 L900,160 L950,160 L950,140 L1000,140 L1000,200 L1050,200 L1050,170 L1100,170 L1100,220 L1150,220 L1150,190 L1200,190 L1200,300 Z" />
  </svg>
)

const BatSignal = ({ isActive }: { isActive: boolean }) => (
  <div className="relative">
    {/* Bat Signal Beam */}
    <div
      className={`absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 transition-opacity duration-1000 ${
        isActive ? "opacity-30" : "opacity-10"
      }`}
    >
      <div className="w-full h-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-xl" />
    </div>

    {/* Bat Symbol */}
    <div
      className={`relative z-10 transition-all duration-1000 ${
        isActive ? "bat-signal-animation text-shadow-glow" : ""
      }`}
    >
      {/* <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        className={`fill-primary transition-all duration-1000 ${isActive ? "drop-shadow-2xl" : ""}`}
      >
        <path d="M50 15c-12 0-22 4-30 12-4 4-7 10-7 16 0 3 1 6 3 8l12-4c3-1 6-2 9-2s6 1 9 2l12 4c2-2 3-5 3-8 0-6-3-12-7-16-8-8-18-12-30-12zm-35 35c-4 3-7 8-7 13 0 4 2 8 4 11l18-7c4-2 9-3 15-3s11 1 15 3l18 7c2-3 4-7 4-11 0-5-3-10-7-13l-12 4c-4 2-10 3-15 3s-11-1-15-3l-12-4zm20 25c-2 1-4 3-4 5 0 1 0 2 1 3l8-3c2-1 4-1 6-1s4 0 6 1l8 3c1-1 1-2 1-3 0-2-2-4-4-5l-4 1c-2 1-4 1-6 1s-4 0-6-1l-4-1z" />
      </svg> */}
        <img
      src="/batman-logo.png" // put your image in /public and use its filename
      alt="Bat Signal"
      className={`w-28 h-28 object-contain transition-all duration-1000 ${
        isActive ? "scale-110 drop-shadow-2xl" : "group-hover:scale-105"
      }`}
    />
    </div>

    {/* Name in Bat Signal */}
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
        isActive ? "text-shadow-glow scale-110" : "scale-100"
      }`}
    >
      <h1 className="font-playfair font-black text-4xl md:text-6xl text-primary text-center leading-tight">
        UTKARSH
        <br />
        SINGH
      </h1>
    </div>
  </div>
)

export function HeroSection() {
  const [isSignalActive, setIsSignalActive] = useState(false)

  useEffect(() => {
    // Activate bat signal after component mounts
    const timer = setTimeout(() => {
      setIsSignalActive(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gotham-gradient" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gotham Skyline */}
      <GothamSkyline />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Bat Signal */}
        <div className="mb-8">
          <BatSignal isActive={isSignalActive} />
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="font-source-sans text-xl md:text-2xl text-muted-foreground mb-2">Software Engineer by Day</p>
          <p className="font-playfair text-2xl md:text-3xl text-foreground font-bold">Vigilante by Night</p>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="font-source-sans font-semibold text-lg px-8 py-6 glow-animation hover:scale-105 transition-transform duration-300"
          >
            See My Mission
          </Button>
          <p className="text-sm text-muted-foreground font-source-sans">Scroll to explore case files</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        >
          <path d="M7 13l3 3 7-7" />
          <path d="M12 17l-3-3 3-3 3 3-3 3z" />
        </svg>
      </div>
    </section>
  )
}
