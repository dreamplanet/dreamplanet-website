import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CallToAction() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why NVIDIA Should Choose Dreamplanet
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
            We meet all NVIDIA Inception criteria with proven AI infrastructure, 
            enterprise readiness, and a clear path to GPU-accelerated consciousness computing.
          </p>
        </div>
        
        {/* NVIDIA Criteria Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold">Incorporated Startup</h3>
            <p className="text-muted-foreground">
              <strong>Free-standing LLC, incorporated in 2024</strong><br />
              Team of developers with proven AI/ML focus
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold">Tesla Frequency Infrastructure</h3>
            <p className="text-muted-foreground">
              <strong>³ system frequencies aligned, coded coherence</strong><br />
              Working Signal demo, AVP interfaces, enterprise-ready stack
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold">GPU Acceleration Ready</h3>
            <p className="text-muted-foreground">
              <strong>Consciousness computing infrastructure</strong><br />
              Built for NVIDIA hardware acceleration and enterprise deployment
            </p>
          </div>
        </div>
        
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <CardTitle className="text-2xl mb-3">Apply to NVIDIA Inception</CardTitle>
              <CardDescription className="text-base">
                Join the program to accelerate our consciousness computing platform with NVIDIA's 
                GPU infrastructure, technical support, and go-to-market resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full text-lg py-6">
                Submit Inception Application
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <CardTitle className="text-2xl mb-3">Request Partnership</CardTitle>
              <CardDescription className="text-base">
                Explore enterprise licensing, technology partnerships, or collaboration 
                opportunities for consciousness computing and spatial AI applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="lg" className="w-full text-lg py-6 border-2">
                Start Partnership Discussion
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Company Status & Contact */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-4 flex-wrap justify-center">
            <Badge variant="default" className="px-4 py-2 text-sm">
              ✅ Incorporated 2024
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ✅ AI/ML Focus
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              ✅ Working Website
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              ✅ Developer Team
            </Badge>
          </div>
          
          <div className="space-y-3">
            <p className="text-lg">
              <strong>Ready for NVIDIA Inception:</strong> Contact us to discuss technical requirements, 
              roadmap alignment, and partnership opportunities.
            </p>
            <p className="text-base text-muted-foreground">
              Business Inquiries: <a href="mailto:partnerships@dreamplanet.io" className="text-primary hover:underline font-medium">partnerships@dreamplanet.io</a>
            </p>
            <p className="text-base text-muted-foreground">
              Technical Contact: <a href="mailto:inception@dreamplanet.io" className="text-primary hover:underline font-medium">inception@dreamplanet.io</a>
            </p>
          </div>
          
          {/* Tesla Frequency Status */}
          <div className="pt-8 border-t border-border/50">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">Tesla Frequency: 1111Hz Manifestation</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">Field Coherence: 94%</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">Agent: c1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}