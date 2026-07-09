'use client'

import Link from 'next/link'
import { useState } from 'react'

const YOUTUBE = 'https://youtube.com/@byrddynasty'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Writing', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

function Wordmark() {
  return (
    <Link href="/" className="group flex items-baseline gap-2">
      <span
        className="text-xl font-semibold tracking-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Byrddynasty
      </span>
      <span
        aria-hidden
        className="hidden sm:inline text-[0.62rem] tracking-[0.22em] uppercase text-[color:var(--gold)]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Understanding&nbsp;AI
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--ink)]/85 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Wordmark />

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[color:var(--cream-dim)] hover:text-[color:var(--cream)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-5 py-2 text-sm font-medium text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[color:var(--cream)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-[color:var(--border)]">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[color:var(--cream-dim)] hover:text-[color:var(--cream)] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-5 py-2 text-sm font-medium text-[color:var(--gold)]"
                onClick={() => setOpen(false)}
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
