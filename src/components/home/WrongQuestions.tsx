const pairs = [
  {
    wrong: 'Will AI take my job?',
    right: 'What world are we choosing to create?',
  },
  {
    wrong: 'What can AI do?',
    right: 'Who decides how AI gets used?',
  },
  {
    wrong: 'Is this good or bad?',
    right: 'Good for whom — and under what conditions?',
  },
]

export default function WrongQuestions() {
  return (
    <section className="relative z-10 border-t border-[color:var(--border)] bg-[color:var(--ink-2)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="kicker mb-6">Everyone&apos;s asking the wrong questions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            Better questions beat confident answers.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--cream-dim)] leading-relaxed">
            AI is here — and most of the conversation is stuck on the wrong things. We&apos;re not
            prophets, doom-mongers, or utopians. We&apos;re explorers, mapping the futures we&apos;re
            building and the choices that shape them.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">
          {pairs.map((p) => (
            <div key={p.wrong} className="bg-[color:var(--ink)] p-7">
              <p className="text-sm text-[color:var(--cream-faint)] line-through decoration-[color:var(--red)]/70">
                {p.wrong}
              </p>
              <p className="mt-4 text-xl leading-snug text-[color:var(--cream)]" style={{ fontFamily: 'var(--font-serif)' }}>
                {p.right}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
