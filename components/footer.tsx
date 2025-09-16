"use client"

import { Button } from "@/components/ui/button"

// const BatSymbolSmall = () => (
//   <svg width="24" height="24" viewBox="0 0 100 100" className="fill-primary">
//     <path d="M50 15c-12 0-22 4-30 12-4 4-7 10-7 16 0 3 1 6 3 8l12-4c3-1 6-2 9-2s6 1 9 2l12 4c2-2 3-5 3-8 0-6-3-12-7-16-8-8-18-12-30-12zm-35 35c-4 3-7 8-7 13 0 4 2 8 4 11l18-7c4-2 9-3 15-3s11 1 15 3l18 7c2-3 4-7 4-11 0-5-3-10-7-13l-12 4c-4 2-10 3-15 3s-11-1-15-3l-12-4z" />
//   </svg>
// )

const BatSymbolSmall = () => (
  <img
    src="/batman-logo.png"
    alt="Batman Logo"
    className="w-20 h-20 hover:scale-110 transition-transform duration-300"
  />
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <BatSymbolSmall />
              <span className="font-playfair font-bold text-xl text-foreground">UTKARSH SINGH</span>
            </div>
            <p className="font-source-sans text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Utkarsh Singh | Gotham
              <br />
              Dark Knight Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/utkarshsingh26"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/singhutkarsh98/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="mailto:singh.utkarsh26@gmail.com"
              className="group p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/definitelynotutkarshsingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            </a>
          </div>

          {/* Right - Back to Top and Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="font-source-sans hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Back to Top
            </Button>
            <div className="flex space-x-4 text-sm">
              <a
                href="https://www.dc.com/characters/batman"
                target="_blank"
                className="font-source-sans text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://www.dc.com/characters/batman" target="_blank" className="font-source-sans text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider and Quote */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-playfair text-sm text-muted-foreground italic">
            {'"It\'s not who I am underneath, but what I do that defines me."'}
          </p>
          <p className="font-source-sans text-xs text-muted-foreground mt-2">- Batman (and every great developer)</p>
        </div>
      </div>
    </footer>
  )
}
