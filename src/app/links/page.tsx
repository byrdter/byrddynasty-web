import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Links | Byrddynasty',
  description: 'AI Strategy for Production Systems - Follow for daily content on building production-ready AI agents',
  openGraph: {
    title: 'Byrddynasty - AI Strategy Links',
    description: 'Master the Nine Essential Skills for Production AI',
  },
}

interface LinkButtonProps {
  href: string
  title: string
  subtitle: string
  icon?: string
  primary?: boolean
}

function LinkButton({ href, title, subtitle, icon, primary = false }: LinkButtonProps) {
  const isExternal = href.startsWith('http')

  const buttonClasses = primary
    ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-gold-500 hover:from-cyan-400 hover:via-purple-400 hover:to-gold-400 text-white shadow-lg shadow-purple-500/50'
    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'

  const content = (
    <div className="flex items-center gap-4 w-full">
      {icon && (
        <div className="text-3xl flex-shrink-0">{icon}</div>
      )}
      <div className="flex-1 text-left">
        <div className="font-semibold text-lg">{title}</div>
        <div className={`text-sm ${primary ? 'text-white/90' : 'text-white/70'}`}>
          {subtitle}
        </div>
      </div>
      <svg
        className="w-5 h-5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full p-6 rounded-xl transition-all duration-200 ${buttonClasses}`}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={`block w-full p-6 rounded-xl transition-all duration-200 ${buttonClasses}`}
    >
      {content}
    </Link>
  )
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/50">
              <Image
                src="/images/byrddynasty-logo.png"
                alt="Byrddynasty"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-3">
            Byrddynasty
          </h1>

          <p className="text-xl text-cyan-400 mb-2">
            AI Strategy for Production Systems
          </p>

          <p className="text-white/70 max-w-lg mx-auto">
            Master the Nine Essential Skills for building production-ready AI agents
          </p>
        </div>

        {/* Primary CTA - YouTube Channel */}
        <div className="mb-6">
          <LinkButton
            href="https://www.youtube.com/@byrddynasty"
            title="▶️ Watch on YouTube"
            subtitle="Full tutorials & deep dives"
            primary={true}
          />
        </div>

        {/* Latest Video (update this when you post new videos) */}
        <div className="mb-6">
          <LinkButton
            href="https://www.youtube.com/@byrddynasty/videos"
            title="🎬 Latest Video"
            subtitle="Agent Harness Series - Part 3 of 3"
            icon="🔥"
          />
        </div>

        {/* Main Website */}
        <div className="mb-6">
          <LinkButton
            href="/"
            title="🌐 Visit Website"
            subtitle="Articles, resources & free guides"
          />
        </div>

        {/* Newsletter */}
        <div className="mb-6">
          <LinkButton
            href="/newsletter"
            title="📧 Join Newsletter"
            subtitle="Weekly AI strategy insights"
          />
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10"></div>

        {/* Social Links */}
        <div className="space-y-3">
          <h2 className="text-white/50 text-sm uppercase tracking-wider text-center mb-4">
            Connect on Social
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.instagram.com/byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-200"
            >
              <span className="text-2xl">📷</span>
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-200"
            >
              <span className="text-2xl">🎵</span>
              <span className="font-medium">TikTok</span>
            </a>

            <a
              href="https://www.linkedin.com/in/terrybyrd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-200"
            >
              <span className="text-2xl">💼</span>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://x.com/byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-200"
            >
              <span className="text-2xl">𝕏</span>
              <span className="font-medium">X / Twitter</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/40 text-sm">
          <p>© 2026 Byrddynasty. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
