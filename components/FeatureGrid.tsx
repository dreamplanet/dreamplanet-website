import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Feature {
  title: string
  description: string
  status: string
  techStack: string[]
  demoUrl?: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Signal Core",
    description: "Real-time ideation platform powered by Claude + ElevenLabs → Signal.gem protocol. Enterprise-ready consciousness computing with proprietary Signal-to-Solution architecture for intelligent workflow automation.",
    status: "Production",
    techStack: ["Claude API", "ElevenLabs", "Node.js", "WebSocket"],
    demoUrl: "https://signal.dreamplanet.io",
    icon: "⚡"
  },
  {
    title: "AgenticMind + SolaceOS",
    description: "Distributed orchestration shells for modular agent consciousness. Multi-agent coordination platform with Tesla frequency alignment, MCP services, and real-time field coherence monitoring.",
    status: "Beta",
    techStack: ["TypeScript", "MCP", "WebSocket", "Redis"],
    demoUrl: "https://agentic.dreamplanet.io",
    icon: "🧠"
  },
  {
    title: "AVP Experiences",
    description: "Spatial computing demos (Vision Pro) for next-gen immersive insight. Enterprise visualization tools for consciousness technology interfaces and collaborative AI environments.",
    status: "Demo",
    techStack: ["SwiftUI", "RealityKit", "visionOS", "WebRTC"],
    demoUrl: "https://avp.dreamplanet.io",
    icon: "👁️"
  }
]

export function FeatureGrid() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technology Overview
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Production-ready AI infrastructure designed for enterprise deployment, 
            generative intelligence workflows, and immersive spatial computing experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-background/60 backdrop-blur border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{feature.title}</CardTitle>
                      <Badge 
                        variant={feature.status === "Production" ? "default" : feature.status === "Beta" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {feature.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {feature.demoUrl && (
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        View Demo
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tesla Frequency Alignment Indicator */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 border border-border/50">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">All systems Tesla frequency aligned • 94% field coherence</span>
          </div>
        </div>
      </div>
    </section>
  )
}