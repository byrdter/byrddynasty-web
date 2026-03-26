'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    employees: '',
    challenge: '',
    subject: 'consultation'
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Implement contact form API
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        employees: '',
        challenge: '',
        subject: 'consultation'
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Book Your Free{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            AI Consultation
          </span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          30-minute call to discuss your business challenges and identify automation opportunities.
          No obligation, no sales pressure—just honest advice about whether AI can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium mb-2">
                  Company Size
                </label>
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium mb-2">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              >
                <option value="">Select industry</option>
                <option value="professional-services">Professional Services</option>
                <option value="ecommerce">E-commerce / DTC</option>
                <option value="saas">B2B SaaS</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="real-estate">Real Estate</option>
                <option value="agency">Agency / Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                What are you interested in? *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              >
                <option value="consultation">Free Consultation</option>
                <option value="assessment">AI Readiness Assessment</option>
                <option value="automation">Process Automation</option>
                <option value="agents">AI Agent Development</option>
                <option value="knowledge-base">Knowledge Base / RAG</option>
                <option value="retainer">Ongoing Retainer</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                What manual process takes the most time? *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                placeholder="Example: We spend 15 hours/week manually entering data from email into our CRM..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {status === 'loading' ? 'Submitting...' : 'Book Free Consultation'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-primary/10 border border-primary rounded-lg">
                <p className="text-center text-sm text-primary">
                  ✓ Request received! We'll be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                <p className="text-center text-sm text-red-500">
                  Something went wrong. Please email us directly or try again.
                </p>
              </div>
            )}

            <p className="text-xs text-center text-foreground/50">
              By submitting this form, you agree to receive occasional emails about AI automation.
              Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Side Info */}
        <div className="space-y-6">
          <div className="p-6 bg-card border border-card-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">What to Expect</h2>
            <div className="space-y-4 text-sm text-foreground/70">
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">📞</div>
                <div>
                  <strong className="text-foreground">30-Minute Call</strong>
                  <p>Quick, focused conversation about your specific needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">🎯</div>
                <div>
                  <strong className="text-foreground">Identify Opportunities</strong>
                  <p>We'll pinpoint your top 3-5 automation opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">💡</div>
                <div>
                  <strong className="text-foreground">Honest Advice</strong>
                  <p>If AI isn't right for you, we'll tell you. No sales pressure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">📊</div>
                <div>
                  <strong className="text-foreground">Optional Next Steps</strong>
                  <p>If it makes sense, we'll discuss assessment or implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card border border-card-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Prefer to Email?</h2>
            <a
              href="mailto:hello@byrddynasty.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@byrddynasty.com
            </a>
          </div>

          <div className="p-6 bg-card border border-card-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Connect</h2>
            <div className="space-y-3">
              <a
                href="https://youtube.com/@byrddynasty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm">YouTube</span>
              </a>

              <a
                href="https://linkedin.com/in/terry-byrd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-foreground/70">
              <strong className="text-primary">Response time:</strong> Within 24 hours on business days
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
