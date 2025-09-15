"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const ClassifiedDocument = () => (
  <div className="relative">
    <Card className="bg-card/80 backdrop-blur-sm border-primary/30 shadow-2xl max-w-md mx-auto">
      <CardContent className="p-8">
        {/* Top Secret Header */}
        <div className="text-center mb-6">
          <Badge variant="destructive" className="mb-4 font-mono text-xs px-4 py-2">
            TOP SECRET
          </Badge>
          <h3 className="font-playfair font-bold text-2xl text-primary mb-2">WAYNE FILE</h3>
          <p className="font-source-sans text-sm text-muted-foreground">Personnel Dossier - Utkarsh Singh</p>
        </div>

        {/* Document Preview */}
        <div className="space-y-4 mb-6">
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-3/4" />
          <div className="h-2 bg-muted rounded w-5/6" />
          <div className="h-2 bg-muted rounded w-2/3" />
          <div className="h-2 bg-muted rounded w-4/5" />
          <div className="h-2 bg-muted rounded w-1/2" />
          <div className="h-2 bg-muted rounded w-3/4" />
          <div className="h-2 bg-muted rounded w-5/6" />
        </div>

        {/* Classification Stamps */}
        <div className="flex justify-between items-center mb-6">
          <div className="transform -rotate-12">
            <Badge variant="outline" className="border-red-500 text-red-500 font-mono text-xs">
              CLASSIFIED
            </Badge>
          </div>
          <div className="transform rotate-12">
            <Badge variant="outline" className="border-primary text-primary font-mono text-xs">
              AUTHORIZED
            </Badge>
          </div>
        </div>

        {/* File Details */}
        <div className="space-y-2 text-sm font-source-sans text-muted-foreground mb-6">
          <div className="flex justify-between">
            <span>Classification Level:</span>
            <span className="text-primary">Top Secret</span>
          </div>
          <div className="flex justify-between">
            <span>Document Type:</span>
            <span className="text-primary">Personnel File</span>
          </div>
          <div className="flex justify-between">
            <span>Last Updated:</span>
            <span className="text-primary">September 2025</span>
          </div>
          <div className="flex justify-between">
            <span>File Size:</span>
            <span className="text-primary">2.4 MB</span>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
          <p className="text-xs font-source-sans text-destructive text-center">
            ⚠️ CONFIDENTIAL DOCUMENT ⚠️
            <br />
            Authorized personnel only. Unauthorized access is prohibited.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
)

export function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "File Downloaded",
      description: "Wayne File has been securely transmitted to your device.",
    })

    setIsDownloading(false)

    // In a real implementation, this would trigger the actual download
    // const link = document.createElement('a');
    // link.href = '/path/to/resume.pdf';
    // link.download = 'Utkarsh_Singh_Resume.pdf';
    // link.click();
  }

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">Wayne File</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-source-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Access the complete personnel dossier containing detailed mission history, technical specifications, and
            operational capabilities.
          </p>
        </div>

        {/* Document Preview and Download */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Document Preview */}
          <div>
            <ClassifiedDocument />
          </div>

          {/* Download Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair font-bold text-2xl text-primary mb-4">Document Access</h3>
              <p className="font-source-sans text-muted-foreground leading-relaxed mb-6">
                This classified document contains comprehensive intelligence on technical capabilities, mission history,
                and operational expertise. Download requires proper authorization.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-source-sans text-sm text-card-foreground">Complete work history</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-source-sans text-sm text-card-foreground">Technical skill assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-source-sans text-sm text-card-foreground">Project portfolio summary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-source-sans text-sm text-card-foreground">Contact information</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                size="lg"
                className="font-source-sans font-semibold px-8 py-6 glow-animation hover:scale-105 transition-transform duration-300"
              >
                {isDownloading ? "Accessing File..." : "Download Wayne File"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4 font-source-sans">
                PDF Format • 2.4 MB • Last updated September 2025
              </p>
            </div>

            {/* Security Notice */}
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-source-sans font-semibold text-sm text-card-foreground mb-1">
                      Secure Download
                    </h4>
                    <p className="font-source-sans text-xs text-muted-foreground">
                      All file transfers are encrypted and monitored by Wayne Enterprises security protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
