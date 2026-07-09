import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Email updates',
  description:
    'Get a short note when new Byrddynasty explorations land — videos and essays on the choices shaping AI. No noise, unsubscribe anytime.',
}

const YOUTUBE = 'https://youtube.com/@byrddynasty'

export default function NewsletterPage() {
  return (
    <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28">
      <div className="text-center">
        <p className="kicker mb-6">Email updates</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          The important ones,
          <br />
          <span className="text-[color:var(--gold)]">in your inbox.</span>
        </h1>
        <p className="mt-8 text-lg text-[color:var(--cream-dim)] leading-relaxed">
          We publish three times a week. This list is the shortlist — a brief note when an
          exploration is worth your time, with the through-line and the sources.
        </p>
      </div>

      <div className="mt-12">
        <EmailCapture source="newsletter" />
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
        {[
          ['No hype', 'No doom, no utopia — just the trade-offs, weighed fairly.'],
          ['Sourced', 'Every claim points back to where it came from.'],
          ['Unsubscribe anytime', 'One click. No hard feelings.'],
        ].map(([t, d]) => (
          <div key={t} className="bg-[color:var(--ink)] p-6 text-center">
            <p className="font-semibold text-[color:var(--cream)]">{t}</p>
            <p className="mt-2 text-sm text-[color:var(--cream-dim)]">{d}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[color:var(--cream-faint)]">
        Prefer video?{' '}
        <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="text-[color:var(--gold)] hover:underline">
          Subscribe on YouTube — @byrddynasty
        </a>
      </p>
    </div>
  )
}
