import Link from 'next/link'

const YOUTUBE = 'https://youtube.com/@byrddynasty'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* warm ground glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--gold), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-28">
        <p className="kicker mb-8">Understanding AI · with Dr. Terry Byrd</p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.02] max-w-4xl">
          Technology is neutral.
          <br />
          <span className="text-[color:var(--gold)]">The choices aren&apos;t.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-[color:var(--cream-dim)] leading-relaxed">
          AI doesn&apos;t decide our future — people do, often without realizing they&apos;re
          choosing. This is a channel about those choices: who&apos;s making them, what they&apos;re
          trading off, and what world we&apos;re quietly building.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
          <Link
            href="#approach"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-7 py-3.5 text-sm font-medium text-[color:var(--cream)] hover:border-[color:var(--gold)]/50 transition-colors"
          >
            How we approach every topic
          </Link>
        </div>

        {/* Establish the citation-card motif immediately */}
        <div className="mt-16 max-w-xl citation px-6 py-5">
          <p className="text-lg leading-snug">
            &ldquo;We don&apos;t pick sides. We illuminate trade-offs — and show our sources
            while we do it.&rdquo;
          </p>
          <p className="source mt-3">The Byrddynasty standard</p>
        </div>
      </div>
    </section>
  )
}
