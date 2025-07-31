import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, MessageSquare, Box, Shield, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Dreamplanet: AI Systems for Enterprise Scale</title>
        <meta name="description" content="Build, deploy, and orchestrate intelligent agents across your organization. Our modular platform transforms complex workflows into automated solutions that deliver measurable business outcomes." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.dreamplanet.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dreamplanet.com/" />
        <meta property="og:title" content="Dreamplanet: AI Systems for Enterprise Scale" />
        <meta property="og:description" content="Build, deploy, and orchestrate intelligent agents across your organization." />
        <meta property="og:image" content="https://www.dreamplanet.com/og-image.svg" />
        <meta property="og:site_name" content="Dreamplanet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dreamplanet.com/" />
        <meta name="twitter:title" content="Dreamplanet: AI Systems for Enterprise Scale" />
        <meta name="twitter:description" content="Build, deploy, and orchestrate intelligent agents across your organization." />
        <meta name="twitter:image" content="https://www.dreamplanet.com/og-image.svg" />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">DP</span>
                </div>
              <span className="font-bold">Dreamplanet</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost">Solutions</Button>
            <Button variant="ghost">Company</Button>
            <Button>Request Access</Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 sm:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Dreamplanet: AI Systems for Enterprise Scale
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Build, deploy, and orchestrate intelligent agents across your organization. Our modular platform transforms complex workflows into automated solutions that deliver measurable business outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-access" passHref>
              <Button size="lg">Request Access</Button>
            </Link>
            <Link href="/demo" passHref>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </Link>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="container mx-auto px-4 py-20 sm:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start">
              <Zap className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Orchestrated Intelligence</h3>
              <p className="text-muted-foreground">
                Deploy multi-agent systems that coordinate seamlessly across departments, reducing manual handoffs and accelerating decision cycles by up to 70%.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <MessageSquare className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Feedback-to-Action Pipeline</h3>
              <p className="text-muted-foreground">
                Transform unstructured input from teams, customers, and systems into prioritized actions with built-in execution tracking and ROI measurement.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <Box className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Immersive Development</h3>
              <p className="text-muted-foreground">
                Enable distributed teams to collaborate on complex problems through spatial computing environments that visualize data relationships and accelerate R&D cycles.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <Shield className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Enterprise-Ready Infrastructure</h3>
              <p className="text-muted-foreground">
                Secure, scalable agent runtime with enterprise SSO, audit logging, and compliance controls that meet Fortune 500 security requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">A Modular Platform for Intelligent Automation</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AgenticMind</CardTitle>
                  <p className="text-muted-foreground">Multi-Agent Orchestration Stack</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Coordinate intelligent agents across complex enterprise workflows. AgenticMind provides the orchestration layer for deploying, monitoring, and scaling agent-based automation throughout your organization.</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Real-time agent coordination</li>
                    <li>Workflow dependency mapping</li>
                    <li>Performance analytics and optimization</li>
                    <li>Enterprise security and compliance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Signal</CardTitle>
                  <p className="text-muted-foreground">Feedback-to-Action Pipeline</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Capture, process, and route organizational feedback into actionable insights. Signal transforms unstructured input from multiple sources into prioritized tasks with automated execution tracking.</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Multi-channel input processing</li>
                    <li>Intelligent task prioritization</li>
                    <li>Automated workflow routing</li>
                    <li>Impact measurement and reporting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SolaceOS</CardTitle>
                  <p className="text-muted-foreground">Agent Runtime Environment</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Secure, scalable runtime for deploying production AI agents. SolaceOS provides the foundational infrastructure for running intelligent automation at enterprise scale with full observability.</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Container-based agent deployment</li>
                    <li>Resource management and scaling</li>
                    <li>Security isolation and controls</li>
                    <li>Real-time monitoring and logging</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-20 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Enterprise Applications</h2>
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><div><p className="text-muted-foreground"><span className="font-semibold text-foreground">Strategic Intake & Reflection:</span> Automate the capture and analysis of strategic feedback from leadership, customers, and market research to inform planning cycles.</p></div></div>
            <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><div><p className="text-muted-foreground"><span className="font-semibold text-foreground">Immersive R&D Environments:</span> Enable distributed teams to collaborate on complex technical problems through Apple Vision Pro spatial computing interfaces.</p></div></div>
            <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><div><p className="text-muted-foreground"><span className="font-semibold text-foreground">Agent-Based Task Execution:</span> Deploy intelligent agents that handle routine operational tasks, freeing human resources for strategic work.</p></div></div>
            <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><div><p className="text-muted-foreground"><span className="font-semibold text-foreground">Cross-Functional Workflow Automation:</span> Connect siloed departments through intelligent routing and coordination of complex multi-step processes.</p></div></div>
            <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><div><p className="text-muted-foreground"><span className="font-semibold text-foreground">Executive Decision Support:</span> Provide leadership with real-time insights and recommendations based on comprehensive organizational data analysis.</p></div></div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise Operations?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
              See how leading organizations use Dreamplanet's AI systems to reduce operational overhead, accelerate decision-making, and unlock new capabilities through intelligent automation.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/request-access" passHref>
                <Button size="lg">Request Access</Button>
              </Link>
              <Link href="/demo" passHref>
                <Button size="lg" variant="outline">Book a Demo</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Dreamplanet. All rights reserved.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">Trusted by enterprise teams building the future of work.</p>
        </div>
      </footer>
    </div>
  );
}