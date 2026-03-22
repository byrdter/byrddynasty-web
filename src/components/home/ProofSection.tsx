export default function ProofSection() {
  const stats = [
    {
      value: "$23K",
      label: "MRR",
      description: "Bank statement converter",
      detail: "1 person, boring tool"
    },
    {
      value: "$10M",
      label: "ARR",
      description: "Gumroad (Sahil Lavingia)",
      detail: "1 employee: himself"
    },
    {
      value: "85-95%",
      label: "Margins",
      description: "Boring AI businesses",
      detail: "vs 30-40% for viral apps"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real Businesses. Real Revenue.{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Solo Operators.
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            These aren't unicorns or VC-backed startups. They're profitable businesses built by one person + AI agents.
            This is the new normal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-foreground/80 mb-4">
                {stat.label}
              </div>
              <div className="text-foreground/70 font-medium mb-2">
                {stat.description}
              </div>
              <div className="text-sm text-foreground/50">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
