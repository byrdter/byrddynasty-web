const themes = [
  {
    title: 'Power & Control',
    body: 'Who owns the compute, who writes the rules, and how power shifts when AI mediates everything.',
  },
  {
    title: 'Economic Futures',
    body: 'Automation vs. augmentation, the fate of the career ladder, and who captures the hours AI saves.',
  },
  {
    title: 'Meaning & Identity',
    body: 'What work, mastery, and agency mean when the machine can out-produce us.',
  },
  {
    title: 'Strategic Choices',
    body: 'The trade-offs leaders face now — and the decisions that will matter in ten years.',
  },
  {
    title: 'Social Consequences',
    body: 'How AI reshapes education, trust, and community — and who gets left behind in the transition.',
  },
]

export default function Explore() {
  return (
    <section className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mb-14">
          <p className="kicker mb-6">What we explore</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            The questions worth wrestling with.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--cream-dim)] leading-relaxed">
            From data-center revolts and the fear economy to the death of the junior engineer and
            what a pope thinks about machines — the terrain is wide. Every episode wrestles with one
            of these.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => (
            <div key={t.title} className="flex flex-col bg-[color:var(--ink)] p-8">
              <span className="kicker">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-xl">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream-dim)]">{t.body}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-[color:var(--ink-2)] p-8">
            <p className="text-lg leading-snug text-[color:var(--cream)]" style={{ fontFamily: 'var(--font-serif)' }}>
              New explorations, three times a week.
            </p>
            <a
              href="https://youtube.com/@byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold)] hover:underline"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
