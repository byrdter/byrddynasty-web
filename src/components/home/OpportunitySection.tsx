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
      tools: "Zapier, ChatGPT, Claude Code, Vercel",
      highlight: false
    },
    {
      title: "Small Team",
      revenue: "$200K-$750K/year",
      employees: "2-5 people + AI augmentation",
      examples: [
        "SaaS products with AI support",
        "AI consulting agencies",
        "Service businesses at scale",
        "E-commerce with automation"
      ],
      tools: "Full AI agent stack, custom workflows",
      highlight: true
    },
    {
      title: "Micro Enterprise",
      revenue: "$750K-$2M+/year",
      employees: "6-10 people, AI-first operations",
      examples: [
        "Hybrid human-AI teams",
        "Multi-product SaaS",
        "Service agencies",
        "Digital product studios"
      ],
      tools: "Enterprise AI platforms, custom agents",
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
            Whether you're going solo or running a small team, AI agents unlock business models that were impossible before.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/50'
                  : 'gradient-card'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {tier.revenue}
                </div>
                <div className="text-sm text-foreground/60">{tier.employees}</div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground/80">Examples:</h4>
                <ul className="space-y-2">
                  {tier.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <div className="text-sm text-foreground/50">
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
