const lenses = [
  {
    label: 'Lens 01',
    title: 'Power & Choices',
    q: 'Who decides how AI gets used — and what are they optimizing for?',
    body: 'We follow the decision back to the people making it: the CEOs, investors, regulators, and workers, the constraints they face, and the choice being made — often invisibly.',
  },
  {
    label: 'Lens 02',
    title: 'Scenarios & Trade-offs',
    q: 'If we go one way instead of another, what does each future actually look like?',
    body: 'Automate, augment, or transform? We lay out the plausible futures, what has to be true for each, and who thrives or struggles under every branch.',
  },
  {
    label: 'Lens 03',
    title: 'Strategic Navigation',
    q: 'How do you make decisions you won’t regret under deep uncertainty?',
    body: 'Frameworks over hot takes — scenario planning, options thinking, trade-off analysis. Tools to think with, not conclusions to accept.',
  },
]

export default function Lenses() {
  return (
    <section className="relative z-10 border-t border-[color:var(--border)] bg-[color:var(--ink-2)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mb-14">
          <p className="kicker mb-6">Three lenses</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            Every topic, examined three ways.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--cream-dim)] leading-relaxed">
            We look at each subject through one or more of these lenses — because the same
            technology looks different depending on where you stand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {lenses.map((l) => (
            <div key={l.title} className="panel flex flex-col p-8">
              <span className="kicker">{l.label}</span>
              <h3 className="mt-4 text-2xl text-[color:var(--gold)]">{l.title}</h3>
              <p className="mt-4 text-lg leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                {l.q}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--cream-dim)]">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
