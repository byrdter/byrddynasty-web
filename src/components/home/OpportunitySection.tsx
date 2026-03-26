export default function OpportunitySection() {
  const tiers = [
    {
      title: "Solo Founder",
      revenue: "$20K-$150K/year",
      employees: "Just you + AI agents",
      examples: [
        "Compliance automation",
        "Bank statement converters",
        "Industry-specific data tools",
        "Vertical AI agencies"
      ],
      tools: "Zapier, ChatGPT, Claude Code",
      highlight: false
    },
    {
      title: "Micro Team",
      revenue: "$150K-$400K/year",
      employees: "2-10 people + AI augmentation",
      examples: [
        "SaaS products with AI support",
        "AI consulting services",
        "E-commerce with automation",
        "Content production studios"
      ],
      tools: "Custom AI agents, workflow automation",
      highlight: false
    },
    {
      title: "Small Business",
      revenue: "$400K-$1M/year",
      employees: "10-25 people, AI-enhanced operations",
      examples: [
        "Professional services firms",
        "Digital agencies at scale",
        "Multi-product SaaS",
        "Hybrid human-AI customer service"
      ],
      tools: "Full agent stack, custom integrations",
      highlight: true
    },
    {
      title: "Growing Enterprise",
      revenue: "$1M-$3M/year",
      employees: "25-100 people, AI-first culture",
      examples: [
        "Automated sales & marketing",
        "AI-powered operations teams",
        "Knowledge management systems",
        "Predictive analytics & forecasting"
      ],
      tools: "Enterprise AI platforms, RAG systems",
      highlight: false
    },
    {
      title: "Established Business",
      revenue: "$3M+/year",
      employees: "100+ people, transformation at scale",
      examples: [
        "Department-level automation",
        "Company-wide knowledge bases",
        "Multi-agent orchestration",
        "Strategic AI integration"
      ],
      tools: "Custom AI infrastructure, dedicated systems",
      highlight: false
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What You Can Build with AI Agents in 2026
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            From solo founders to 100+ person teams—AI agents unlock new possibilities at every stage of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/50'
                  : 'gradient-card'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {tier.revenue}
                </div>
                <div className="text-xs text-foreground/60">{tier.employees}</div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground/80 text-sm">Examples:</h4>
                <ul className="space-y-2">
                  {tier.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                      <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <div className="text-xs text-foreground/50">
                  <span className="font-semibold">Tools:</span> {tier.tools}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
