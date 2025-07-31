import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ApplyToInception() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters explaining your interest'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = `NVIDIA Inception Application - ${formData.name}`
      const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent via Dreamplanet NVIDIA Inception Application Form`

      const mailtoLink = `mailto:inception@dreamplanet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open mailto link
      window.location.href = mailtoLink
      
      // Show success state
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Head>
          <title>Application Submitted - Dreamplanet NVIDIA Inception</title>
          <meta name="description" content="Your NVIDIA Inception application has been submitted successfully." />
        </Head>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in Dreamplanet's NVIDIA Inception initiative. 
                We'll review your application and get back to you soon.
              </p>
              <Link href="/">
                <Button variant="outline">Return to Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Head>
        <title>Apply to Join Dreamplanet's NVIDIA Inception Initiative</title>
        <meta name="description" content="Apply to join Dreamplanet's NVIDIA Inception program application. Connect with our team about our modular AI stack and enterprise agent orchestration platform." />
        <meta name="keywords" content="NVIDIA Inception, AI startup, modular AI stack, enterprise agent orchestration" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              🚀 NVIDIA Inception Program Application
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Apply to Join Dreamplanet's 
              <br />
              <span className="text-primary">NVIDIA Inception Initiative</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dreamplanet builds modular AI infrastructure for enterprise agent orchestration and custom AI pipelines. 
              We're applying to NVIDIA Inception to accelerate our platform with GPU-powered innovation and bring 
              cutting-edge AI solutions to enterprise customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Interested in our NVIDIA Inception application or want to learn more about our platform? 
                    We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us why you're reaching out, how you'd like to connect, or what interests you about our NVIDIA Inception application..."
                        rows={6}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        Minimum 20 characters
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Platform Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🔧 AgenticMind</h4>
                    <p className="text-sm text-muted-foreground">Multi-agent orchestration stack for enterprise AI coordination</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">⚡ Signal Platform</h4>
                    <p className="text-sm text-muted-foreground">Real-time data processing with feedback-to-action pipelines</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🖥️ SolaceOS</h4>
                    <p className="text-sm text-muted-foreground">Secure runtime environment for production AI agents</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why NVIDIA Inception?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• GPU acceleration for massive parallel processing</li>
                    <li>• Technical support for consciousness computing infrastructure</li>
                    <li>• Go-to-market resources for enterprise deployment</li>
                    <li>• Access to NVIDIA's AI ecosystem and partners</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Request Platform Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in early access to our modular AI platform?
                  </p>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Request Access
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground mb-4">
              Want to learn more about our platform?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button variant="ghost">Homepage</Button>
              </Link>
              <Link href="/solutions">
                <Button variant="ghost">Platform Architecture</Button>
              </Link>
              <Link href="/docs">
                <Button variant="ghost">Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}