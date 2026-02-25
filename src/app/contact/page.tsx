'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Implement contact form API
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
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
          Get in Touch
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Have questions about building production-ready agentic AI? Want to collaborate
          or share feedback? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="consulting">Consulting</option>
                <option value="feedback">Feedback</option>
                <option value="technical">Technical Question</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm text-primary">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 bg-card border border-card-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Connect</h2>
            <div className="space-y-4">
              <a
                href="https://youtube.com/@byrddynasty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>

              <a
                href="https://twitter.com/byrddynasty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter/X</span>
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
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="p-6 bg-card border border-card-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className="space-y-3">
              <a
                href="/newsletter"
                className="block text-foreground/70 hover:text-primary transition-colors"
              >
                → Subscribe to Newsletter
              </a>
              <a
                href="/learn"
                className="block text-foreground/70 hover:text-primary transition-colors"
              >
                → Free Educational Content
              </a>
              <a
                href="/about"
                className="block text-foreground/70 hover:text-primary transition-colors"
              >
                → About byrddynasty
              </a>
            </div>
          </div>

          <div className="p-4 bg-card/50 border border-card-border rounded-lg">
            <p className="text-sm text-foreground/60">
              Response time: Usually within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
