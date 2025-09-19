// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"

// // const BatSymbol = () => (
// //   <svg
// //     width="40"
// //     height="40"
// //     viewBox="0 0 100 100"
// //     className="fill-primary hover:fill-accent transition-colors duration-300 glow-animation"
// //   >
// //     <path d="M50 20c-8 0-15 3-20 8-3 3-5 7-5 11 0 2 1 4 2 5l8-3c2-1 4-1 6-1s4 0 6 1l8 3c1-1 2-3 2-5 0-4-2-8-5-11-5-5-12-8-20-8zm-25 25c-3 2-5 5-5 9 0 3 1 6 3 8l12-5c3-1 6-2 10-2s7 1 10 2l12 5c2-2 3-5 3-8 0-4-2-7-5-9l-8 3c-3 1-7 2-10 2s-7-1-10-2l-8-3z" />
// //   </svg>
// // )

// const BatSymbol = () => (
//   <img
//     src="/batman-logo.png"
//     alt="Batman Logo"
//     className="w-20 h-20 hover:scale-110 transition-transform duration-300"
//   />
// );

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState("hero")

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)

//       // Update active section based on scroll position
//       const sections = ["hero", "about", "projects", "experience", "education", "resume", "contact"]
//       const currentSection = sections.find((section) => {
//         const element = document.getElementById(section)
//         if (element) {
//           const rect = element.getBoundingClientRect()
//           return rect.top <= 100 && rect.bottom >= 100
//         }
//         return false
//       })

//       if (currentSection) {
//         setActiveSection(currentSection)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   const navItems = [
//     { id: "about", label: "Mission Briefing" },
//     { id: "projects", label: "Case Files" },
//     { id: "experience", label: "Field Operations" },
//     { id: "education", label: "Training" },
//     { id: "resume", label: "Wayne File" },
//     { id: "contact", label: "Hire" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2 group">
//             <BatSymbol />
//             <span className="font-playfair font-bold text-xl text-foreground group-hover:text-primary transition-colors">
//               UTKARSH SINGH/BATMAN
//             </span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`font-source-sans font-medium transition-colors duration-300 hover:text-primary ${
//                   activeSection === item.id ? "text-primary" : "text-foreground"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="md:hidden"
//             onClick={() => {
//               // Toggle mobile menu (implement if needed)
//             }}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Folder,
  GraduationCap,
  Briefcase,
  UserCheck,
  ScrollText,
} from "lucide-react"

// Bat buckle logo
const BatSymbol = () => (
  <img
    src="/batman-logo.png"
    alt="Batman Logo"
    className="w-20 h-20 hover:scale-110 transition-transform duration-300"
  />
)

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "about", "projects", "experience", "education", "resume", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Pouch-style nav items with icons
  const navItems = [
    { id: "about", label: "Mission Briefing", icon: ScrollText },
    { id: "projects", label: "Case Files", icon: Folder },
    { id: "experience", label: "Field Ops", icon: Briefcase },
    { id: "education", label: "Training", icon: GraduationCap },
    { id: "resume", label: "Wayne File", icon: FileText },
    { id: "contact", label: "Hire", icon: UserCheck },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left belt compartments */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 border-black font-bold shadow-md transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-black text-yellow-400 scale-105"
                      : "bg-yellow-500 text-black hover:bg-black hover:text-yellow-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Bat buckle */}
          <button onClick={() => scrollToSection("hero")} className="flex-shrink-0">
            <BatSymbol />
          </button>

          {/* Right belt compartments */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.slice(3).map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 border-black font-bold shadow-md transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-black text-yellow-400 scale-105"
                      : "bg-yellow-500 text-black hover:bg-black hover:text-yellow-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // toggle mobile menu (to be implemented)
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}

