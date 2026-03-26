export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "JARVIS: Autonomous Investment Analysis System",
      subtitle: "Internal Framework Demonstrating Agentic AI Capabilities",
      challenge: {
        title: "The Challenge",
        items: [
          "Manual investment analysis required 10-15 hours per week",
          "Screening 14 ETFs for opportunities was time-consuming and prone to delays",
          "Daily portfolio monitoring for stop losses required constant vigilance",
          "Market condition analysis had to compete with other priorities",
          "Weekly reporting consumed valuable weekend time"
        ]
      },
      solution: {
        title: "The Solution",
        description: "Built JARVIS, an agentic AI framework with specialized autonomous agents working 24/7:",
        agents: [
          {
            name: "ETF Screener Agent",
            description: "Automatically screens 14 ETFs using technical indicators (200 SMA, MACD, RSI). Identifies Stage 2 opportunities and ranks by potential."
          },
          {
            name: "Portfolio Monitor Agent",
            description: "Daily position checks against stop losses, exit signals, and risk parameters. Instant alerts on critical changes."
          },
          {
            name: "Market Insights Agent",
            description: "Automated analysis of Chris Vermeulen's YouTube content. Transcribes videos, extracts actionable insights, and maps to portfolio."
          },
          {
            name: "Performance Tracker Agent",
            description: "Monthly validation of strategy effectiveness. Tracks realized gains, compares to benchmarks, identifies patterns."
          },
          {
            name: "Heartbeat System",
            description: "Fully autonomous orchestration. Runs daily market analysis, weekly screening, monthly performance reviews without human intervention."
          }
        ]
      },
      technology: {
        title: "Technology Stack",
        items: [
          "Claude Code for orchestration and decision-making",
          "Alpaca API for real-time market data (200+ day history)",
          "Progressive disclosure context system for efficient memory management",
          "Autonomous scheduling with heartbeat execution",
          "Obsidian integration for second-brain knowledge management"
        ]
      },
      results: {
        title: "Results",
        metrics: [
          {
            label: "Time Savings",
            value: "87% reduction",
            detail: "10-15 hrs/week → 1-2 hrs/week"
          },
          {
            label: "Coverage",
            value: "24/7 monitoring",
            detail: "14 ETFs analyzed continuously vs. weekly manual checks"
          },
          {
            label: "Response Time",
            value: "Instant alerts",
            detail: "Real-time notifications vs. delayed manual reviews"
          },
          {
            label: "Accuracy",
            value: "100% rule-based",
            detail: "Zero human error in signal detection"
          }
        ],
        impact: "This framework demonstrates exactly what we build for clients—autonomous AI systems that work 24/7, make intelligent decisions, and deliver measurable time savings."
      },
      applicability: {
        title: "How This Applies to Your Business",
        examples: [
          {
            scenario: "Sales Pipeline Monitoring",
            solution: "Same framework autonomously qualifies leads, tracks deal progress, and alerts on opportunities requiring attention."
          },
          {
            scenario: "Customer Support",
            solution: "24/7 AI agents handle FAQs, route complex issues, and provide instant responses—just like JARVIS monitors markets continuously."
          },
          {
            scenario: "Operations Reporting",
            solution: "Automated dashboards and alerts that run on schedule, just like JARVIS's heartbeat system."
          },
          {
            scenario: "Knowledge Management",
            solution: "Extract insights from documents, videos, and data sources automatically—like JARVIS analyzes market commentary."
          }
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Proof of{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Implementation
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real agentic AI systems, real results. See exactly how we build autonomous agents that deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index}>
              {/* Title */}
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">{study.title}</h2>
                <p className="text-lg text-foreground/60">{study.subtitle}</p>
              </div>

              {/* Challenge */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚠️</span>
                  {study.challenge.title}
                </h3>
                <div className="gradient-card p-6 rounded-xl">
                  <ul className="space-y-3">
                    {study.challenge.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">🤖</span>
                  {study.solution.title}
                </h3>
                <p className="text-foreground/70 mb-6">{study.solution.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.solution.agents.map((agent, i) => (
                    <div key={i} className="gradient-card p-6 rounded-xl">
                      <h4 className="font-bold text-primary mb-2">{agent.name}</h4>
                      <p className="text-sm text-foreground/70">{agent.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚙️</span>
                  {study.technology.title}
                </h3>
                <div className="gradient-card p-6 rounded-xl">
                  <ul className="space-y-2">
                    {study.technology.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  {study.results.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {study.results.metrics.map((metric, i) => (
                    <div key={i} className="gradient-card p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground/80 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="gradient-card p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
                  <p className="text-foreground/80 italic">
                    <strong>Impact:</strong> {study.results.impact}
                  </p>
                </div>
              </div>

              {/* Applicability */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  {study.applicability.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.applicability.examples.map((example, i) => (
                    <div key={i} className="gradient-card p-6 rounded-xl">
                      <h4 className="font-bold text-accent mb-2">{example.scenario}</h4>
                      <p className="text-sm text-foreground/70">{example.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Your Own AI Transformation?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            We can build similar systems for your business—autonomous agents that work 24/7, make intelligent decisions, and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:bg-card/80 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
