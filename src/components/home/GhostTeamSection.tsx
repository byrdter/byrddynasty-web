export default function GhostTeamSection() {
  const layers = [
    {
      title: "Lead Agent",
      subtitle: "Your AI Project Manager",
      description: "Takes your high-level goal, breaks it into sub-tasks, and delegates to specialist agents. Like Jarvis from Iron Man.",
      examples: ["Perplexity Computer", "Claude Projects", "Custom GPTs"],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Mercenary Agents",
      subtitle: "Specialist AI Workers",
      description: "Each agent handles a specific domain: sales, marketing, support, finance, dev, ops. They work independently but report back.",
      examples: ["Sales agent", "Marketing agent", "Support agent", "Finance agent", "Dev agent"],
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Heartbeat System",
      subtitle: "Proactive Automation",
      description: "Runs without your input. Every morning at 8 AM, sales agent pulls leads. Every evening, finance agent reconciles. Every Monday, ops reports.",
      examples: ["Daily automation", "Weekly reports", "Monthly reconciliation", "Always-on monitoring"],
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The Ghost Team:{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your 24/7 AI Workforce
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Now, more and more, small businesses aren't doing it alone. They're operating a coordinated network of AI agents working around the clock.
          </p>
        </div>

        <div className="space-y-12">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {layer.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{layer.title}</h3>
                    <p className="text-primary font-semibold">{layer.subtitle}</p>
                  </div>

                  <p className="text-foreground/70 mb-6 text-lg">
                    {layer.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {layer.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/frameworks"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-[#0a1628] rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            See the Full Framework
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
