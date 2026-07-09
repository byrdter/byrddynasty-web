import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Byrddynasty is Dr. Terry Byrd exploring the human choices that shape AI — weighing both sides, showing the sources, and asking better questions.',
}

const YOUTUBE = 'https://youtube.com/@byrddynasty'

const areAreNot = {
  are: [
    ['Explorers', 'Genuinely curious about multiple futures, not selling one.'],
    ['Guides', 'Decades of studying how technology reshapes business and society.'],
    ['Provocateurs', 'Asking the questions people aren’t asking yet.'],
    ['Scenario planners', 'Illuminating possibilities and their trade-offs.'],
  ],
  arenot: [
    ['Prophets', 'We don’t claim to know the future.'],
    ['Doom-mongers', 'AI isn’t inevitably bad.'],
    ['Utopians', 'AI isn’t inevitably good, either.'],
    ['Tutorialists', 'This isn’t “how to use ChatGPT.”'],
  ],
}

export default function AboutPage() {
  return (
    <div className="relative z-10">
      {/* Positioning hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24">
        <p className="kicker mb-6">About the channel</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          A channel about the choices,
          <br />
          not the certainties.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[color:var(--cream-dim)] leading-relaxed">
          I&apos;ve spent decades researching how technology transforms business, society, and
          people — first as a professor of information systems, now as someone trying to make sense
          of the fastest transition any of us has lived through.
        </p>
      </section>

      {/* The positioning statement as a citation card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="citation px-8 py-8 md:px-10 md:py-10">
          <div className="space-y-4 text-xl md:text-2xl leading-snug">
            <p>Now AI is here. And everyone&apos;s asking the wrong questions.</p>
            <p>
              Not <span className="line-through decoration-[color:var(--red)]">will AI take my
              job?</span> but <strong>what world are we choosing to create?</strong>
            </p>
            <p>
              Not <span className="line-through decoration-[color:var(--red)]">what can AI
              do?</span> but <strong>who decides how AI gets used?</strong>
            </p>
            <p>
              I don&apos;t have all the answers. But I know how to ask better questions.
            </p>
          </div>
          <p className="source mt-6">Dr. Terry Byrd · founder, Byrddynasty</p>
        </div>
      </section>

      {/* What we are / are not */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[color:var(--border)]">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl mb-6 text-[color:var(--gold)]">We are</h2>
            <ul className="space-y-5">
              {areAreNot.are.map(([t, d]) => (
                <li key={t}>
                  <p className="font-semibold text-[color:var(--cream)]">{t}</p>
                  <p className="text-sm text-[color:var(--cream-dim)]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-6 text-[color:var(--cream-faint)]">We are not</h2>
            <ul className="space-y-5">
              {areAreNot.arenot.map(([t, d]) => (
                <li key={t}>
                  <p className="font-semibold text-[color:var(--cream)]">{t}</p>
                  <p className="text-sm text-[color:var(--cream-dim)]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What viewers get */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[color:var(--border)]">
        <h2 className="text-3xl md:text-4xl mb-10">What you&apos;ll get</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            ['Better questions', 'Stop asking “will AI take my job?” Start asking “what world are we building?”'],
            ['Scenario fluency', 'Understand the range of possible futures and what enables each.'],
            ['Strategic thinking', 'Frameworks for making decisions under real uncertainty.'],
            ['Power awareness', 'See who’s making the choices, and what they’re optimizing for.'],
          ].map(([t, d]) => (
            <div key={t} className="panel p-7">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-3 text-sm text-[color:var(--cream-dim)]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[color:var(--border)]">
        <p className="kicker mb-6">Never compromised</p>
        <ol className="space-y-4 text-lg text-[color:var(--cream-dim)]">
          <li><strong className="text-[color:var(--cream)]">Technology is neutral. Choices aren&apos;t.</strong> Everything flows from this.</li>
          <li><strong className="text-[color:var(--cream)]">Explore, don&apos;t predict.</strong> Genuine curiosity over false certainty.</li>
          <li><strong className="text-[color:var(--cream)]">Illuminate trade-offs.</strong> No free lunches, no easy answers.</li>
          <li><strong className="text-[color:var(--cream)]">Multi-stakeholder perspective.</strong> Executives, workers, society — all valid.</li>
          <li><strong className="text-[color:var(--cream)]">Teach thinking, not conclusions.</strong> Frameworks over opinions.</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[color:var(--border)] text-center">
        <h2 className="text-3xl md:text-4xl">Join the exploration</h2>
        <p className="mt-4 text-[color:var(--cream-dim)]">
          New explorations three times a week. Get a note when the important ones land.
        </p>
        <div className="mt-8 max-w-md mx-auto text-left">
          <EmailCapture source="about" />
        </div>
        <div className="mt-6">
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[color:var(--gold)] hover:underline">
            Subscribe on YouTube — @byrddynasty →
          </a>
        </div>
        <p className="mt-8 text-sm text-[color:var(--cream-faint)]">
          Speaking, press, or collaboration? <Link href="/contact" className="text-[color:var(--gold)] hover:underline">Get in touch</Link>.
        </p>
      </section>
    </div>
  )
}
