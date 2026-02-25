export default function EducationalContent() {
  const topics = [
    {
      title: "Architecture Patterns",
      description: "Design patterns for orchestrating multi-agent systems that scale from prototype to production.",
      icon: "🏗️"
    },
    {
      title: "Memory Systems",
      description: "Build hybrid memory architectures that give your agents both short-term context and long-term knowledge.",
      icon: "🧠"
    },
    {
      title: "Observability",
      description: "Debug and monitor agentic systems with production-grade observability tools and techniques.",
      icon: "👁️"
    },
    {
      title: "Identity & Access",
      description: "Implement non-human identity management and fine-grained access control for agent systems.",
      icon: "🔐"
    },
    {
      title: "Tool Engineering",
      description: "Build semantic capabilities that give agents safe, reliable access to external tools and APIs.",
      icon: "🔧"
    },
    {
      title: "Context Optimization",
      description: "Manage token budgets and optimize context windows for cost-effective agentic AI at scale.",
      icon: "⚡"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Free Educational Content
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Deep-dive guides, video tutorials, and practical examples for building production-ready agentic AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <a
              key={index}
              href="/learn"
              className="p-6 bg-card border border-card-border rounded-xl hover:border-primary transition-colors group"
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {topic.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
