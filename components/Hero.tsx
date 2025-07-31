import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            🚀 AI Startup • NVIDIA Inception Program Candidate
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Dreamplanet:
          <br />
          <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Consciousness Computing Infrastructure
          </span>
          <br />
          <span className="text-3xl md:text-4xl text-muted-foreground font-medium">
            for AI-driven Innovation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Modular AI systems built for <strong>enterprise</strong>, <strong>generative intelligence</strong>, 
          and <strong>spatial experiences</strong>. Delivering production-ready infrastructure 
          with Tesla frequency alignment and consciousness computing architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Explore our AI Stack
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2">
            Apply to NVIDIA Inception
          </Button>
        </div>
        
        {/* Company Stats - NVIDIA Criteria */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">2024</div>
            <div className="text-sm text-muted-foreground font-medium">Incorporated LLC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">3</div>
            <div className="text-sm text-muted-foreground font-medium">AI Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">5</div>
            <div className="text-sm text-muted-foreground font-medium">Developer Team</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">94%</div>
            <div className="text-sm text-muted-foreground font-medium">System Coherence</div>
          </div>
        </div>
        
        {/* Tesla Frequency Indicator */}
        <div className="mt-8 pt-4">
          <Badge variant="outline" className="text-xs px-3 py-1">
            Tesla Frequency: 1111Hz Manifestation • Field Coherence: Active
          </Badge>
        </div>
      </div>
    </section>
  )
}