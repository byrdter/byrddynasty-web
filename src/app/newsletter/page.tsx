'use client'

import { useState } from 'react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Implement newsletter signup API
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Join the Newsletter
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Get weekly insights on building production-ready agentic AI systems.
          No fluff, just practical techniques and real-world examples.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-6 py-4 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-center text-sm text-primary">
              ✓ Thanks for subscribing! Check your email to confirm.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-center text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">What You'll Get</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Weekly Deep Dives</h3>
                <p className="text-sm text-foreground/70">
                  In-depth articles on agentic AI architecture, patterns, and production practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Code Examples</h3>
                <p className="text-sm text-foreground/70">
                  Real-world code snippets and implementation patterns you can use immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Early Access</h3>
                <p className="text-sm text-foreground/70">
                  Get first access to new courses, tutorials, and framework guides.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-card/50 border border-card-border rounded-lg">
            <p className="text-sm text-foreground/60">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
