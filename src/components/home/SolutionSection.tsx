export default function SolutionSection() {
  const pillars = [
    {
      name: "BUILD",
      title: "Autonomous System Architecture",
      skills: [
        "Multi-Agent Orchestration",
        "Interoperability & Integration",
        "Production-Grade Observability"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "CONNECT",
      title: "Data-Centric AI Engineering",
      skills: [
        "Hybrid Memory & Knowledge",
        "Context Economics & Optimization",
        "Data Quality & Grounding"
      ],
      color: "from-cyan-500/20 to-primary/20"
    },
    {
      name: "PROTECT",
      title: "Security, Governance & Capability",
      skills: [
        "Non-Human Identity & IAM",
        "Semantic Capability & Tool Engineering",
        "Agentic Security & Resilience"
      ],
      color: "from-primary/20 to-blue-500/20"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The Nine Skills Framework
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Production-ready agentic AI requires mastery across three pillars. Nine essential skills. The weakest one defines your system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl"
            >
              <div className="mb-6">
                <span className="text-sm font-bold text-secondary tracking-wider">
                  PILLAR {index + 1}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-1">{pillar.name}</h3>
                <p className="text-sm text-foreground/60">{pillar.title}</p>
              </div>

              <ul className="space-y-3">
                {pillar.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground/80 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/60 mb-6">
            Master all nine skills, or watch your system fail in production.
          </p>
          <a
            href="/learn"
            className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Learn the Nine Skills
          </a>
        </div>
      </div>
    </section>
  )
}
