const principles = [
  {
    n: '01',
    title: 'Both sides, fairly weighted',
    body: 'Every topic gets its strongest case on both sides — not a straw man and a favorite. If the risk is real and also a business model, we hold both at once. That tension is the point.',
  },
  {
    n: '02',
    title: 'Show the sources',
    body: 'Every claim is grounded and cited on screen — outlet, study, page. Secondhand claims are flagged as secondhand. Credibility isn’t asserted; it’s demonstrated, source by source.',
  },
  {
    n: '03',
    title: 'Explore, don’t predict',
    body: 'We map scenarios and their trade-offs instead of forecasting certainties. Confident about the questions worth asking; humble about which future actually arrives.',
  },
  {
    n: '04',
    title: 'Multi-stakeholder by default',
    body: 'Executives, workers, investors, society — each viewpoint is valid and gets its say. We reveal who benefits, who loses, and who’s quietly making the call.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="kicker mb-6">How we approach every topic</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              Serious about the facts.
              <br />
              Honest about the doubt.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--cream-dim)] leading-relaxed">
              This is a channel you can trust because it earns it out loud — presenting the
              evidence as we see it, weighing both sides, and naming what we don&apos;t know. Serious
              in substance, and made to hold your attention.
            </p>
            <div className="rule-gold mt-10 w-40" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="panel p-6">
                <span className="kicker">{p.n}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream-dim)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
