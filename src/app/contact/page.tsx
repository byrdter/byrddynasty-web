'use client'

import { useState } from 'react'

const YOUTUBE = 'https://youtube.com/@byrddynasty'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'speaking',
    challenge: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setStatus('success')
      setFormData({ name: '', email: '', subject: 'speaking', challenge: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--ink)] px-4 py-3 text-[color:var(--cream)] placeholder:text-[color:var(--cream-faint)] focus:outline-none focus:border-[color:var(--gold)]/60 transition-colors'

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
      <div className="mb-12">
        <p className="kicker mb-6">Get in touch</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--cream-dim)] leading-relaxed">
          For speaking, press, collaborations, or a topic you think we should explore. For quick
          replies, include enough context to skip a round-trip.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name *</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jane@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">What&apos;s this about? *</label>
              <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClass}>
                <option value="speaking">Speaking / interview</option>
                <option value="press">Press / media</option>
                <option value="collaboration">Collaboration</option>
                <option value="topic">A topic to explore</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge" className="block text-sm font-medium mb-2">Your message *</label>
              <textarea id="challenge" name="challenge" required rows={6} value={formData.challenge} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us what you have in mind…" />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full bg-[color:var(--gold)] px-8 py-4 font-semibold text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <div className="rounded-lg border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 p-4">
                <p className="text-center text-sm text-[color:var(--cream)]">✓ Message received. We&apos;ll be in touch soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-lg border border-[color:var(--red)]/50 bg-[color:var(--red)]/10 p-4">
                <p className="text-center text-sm text-[color:var(--red)]">Something went wrong. Please email us directly and we&apos;ll sort it out.</p>
              </div>
            )}
          </form>
        </div>

        <aside className="space-y-6">
          <div className="panel p-6">
            <h2 className="text-xl mb-3">Prefer email?</h2>
            <a href="mailto:info@byrddynasty.com" className="text-[color:var(--gold)] hover:underline">info@byrddynasty.com</a>
          </div>
          <div className="panel p-6">
            <h2 className="text-xl mb-4">Follow along</h2>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[color:var(--cream-dim)] hover:text-[color:var(--gold)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="text-sm">YouTube — @byrddynasty</span>
            </a>
          </div>
          <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--ink-2)] p-4">
            <p className="text-sm text-[color:var(--cream-dim)]">
              <span className="text-[color:var(--gold)] font-semibold">Response time:</span> usually within a few business days.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
