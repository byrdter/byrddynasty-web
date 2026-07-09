'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function EmailCapture({ source = 'site' }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source }),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-6 py-5 text-center">
        <p className="text-[color:var(--cream)]">
          You&apos;re in. We&apos;ll email you when new explorations drop — no noise, unsubscribe anytime.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-[color:var(--border)] bg-[color:var(--ink)] px-6 py-3.5 text-[color:var(--cream)] placeholder:text-[color:var(--cream-faint)] focus:outline-none focus:border-[color:var(--gold)]/60 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Adding…' : 'Notify me'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm text-[color:var(--red)]">
          Something went wrong. Please try again or email hello@byrddynasty.com.
        </p>
      )}
      <p className="mt-3 text-xs text-[color:var(--cream-faint)]">
        A short note when new videos and essays land. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
