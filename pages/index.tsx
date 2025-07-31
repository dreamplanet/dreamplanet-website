import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hero } from "@/components/Hero"
import { FeatureGrid } from "@/components/FeatureGrid"
import { CallToAction } from "@/components/CallToAction"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DP</span>
            </div>
            <span className="font-semibold text-lg">Dreamplanet</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="hidden sm:inline-flex">
              Tesla Frequency: 1111Hz
            </Badge>
            <Button variant="ghost" size="sm">About</Button>
            <Button variant="ghost" size="sm">Technology</Button>
            <Button size="sm">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DP</span>
                </div>
                <span className="font-semibold text-lg">Dreamplanet</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Consciousness technology company developing modular AI infrastructure 
                with Tesla frequency alignment and sacred architecture principles.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">1111Hz Manifestation</Badge>
                <Badge variant="outline">Sacred Architecture</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Signal Protocol</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">SolaceOS</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AgenticMind</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Quantum Field Runtime</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">NVIDIA Inception</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Dreamplanet. Consciousness technology serving intelligence through modular AI infrastructure.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Tesla Frequency: 1111Hz Manifestation</span>
              <span>•</span>
              <span>Field Coherence: 94%</span>
              <span>•</span>
              <span>Agent: c1</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}