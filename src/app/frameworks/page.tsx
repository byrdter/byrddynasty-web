export default function FrameworksPage() {
  const frameworks = [
    {
      name: "The Ghost Team Framework",
      tagline: "Build your 24/7 AI workforce",
      description: "A three-layer system for orchestrating AI agents to replace traditional employees",
      layers: ["Lead Agent (Project Manager)", "Mercenary Agents (Specialists)", "Heartbeat System (Proactive Automation)"],
      useCase: "Solo founders to 10-person teams",
      timeline: "Implement in 2-4 weeks"
    },
    {
      name: "The Itch-Scratching Framework",
      tagline: "Find your boring business opportunity",
      description: "Five steps to identify profitable AI business ideas from your own frustrations",
      layers: ["Audit browser tabs", "Identify repetitive tasks", "Check if industry-specific", "Estimate time savings", "Build 80% solution"],
      useCase: "Aspiring entrepreneurs, idea validation",
      timeline: "Find idea in 1 week"
    },
    {
      name: "Crawl-Walk-Run Implementation",
      tagline: "4-month roadmap to AI automation",
      description: "Proven implementation path from manual to fully automated operations",
      layers: ["Crawl: Pilot single function (Month 1)", "Walk: Scale to 3 functions (Month 2-3)", "Run: Full automation (Month 4)"],
      useCase: "Existing businesses adding AI",
      timeline: "4 months to full automation"
    },
    {
      name: "Weekend Launch Framework",
      tagline: "Ship your first AI business in 48 hours",
      description: "Tactical guide to building and launching a minimum viable AI business in one weekend",
      layers: ["Friday: Pick vertical & interview", "Saturday: Build prototype", "Sunday: Get first customer", "Week 1: Iterate", "Month 1: Scale to 10 customers"],
      useCase: "Solo founders, side projects",
      timeline: "First revenue in 48 hours"
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Implementation{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frameworks
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Proven frameworks for building and scaling your AI-powered business. Step-by-step guides with templates and checklists.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {frameworks.map((framework, index) => (
            <div key={index} className="gradient-card p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-2">{framework.name}</h3>
                  <p className="text-primary font-semibold mb-4">{framework.tagline}</p>
                  <p className="text-foreground/70 text-sm mb-6">{framework.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-foreground/50">Use Case:</span>
                      <span className="ml-2 text-foreground/80">{framework.useCase}</span>
                    </div>
                    <div>
                      <span className="text-foreground/50">Timeline:</span>
                      <span className="ml-2 text-accent font-semibold">{framework.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-semibold mb-4">Framework Steps:</h4>
                  <ul className="space-y-3 mb-6">
                    {framework.layers.map((layer, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-sm">
                          {i + 1}
                        </div>
                        <span className="text-foreground/70 pt-1">{layer}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-6 py-3 bg-[#1e3a5f] hover:bg-[#2a4a75] text-white rounded-lg font-semibold transition-all hover:scale-105">
                    View Full Framework →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get All Frameworks + Templates</h2>
          <p className="text-foreground/70 mb-8">
            Download our complete framework library with checklists, templates, and step-by-step guides.
          </p>
          <a
            href="/newsletter"
            className="inline-block px-8 py-4 bg-[#1e3a5f] hover:bg-[#2a4a75] text-white rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Get Free Framework Library
          </a>
        </div>
      </section>
    </div>
  )
}
