export default function IndustriesPage() {
  const industries = [
    {
      name: "E-Commerce",
      tier: "Tier 1",
      opportunity: "High",
      automations: [
        "Product descriptions (AI writing)",
        "Customer support chatbots",
        "Inventory forecasting",
        "Dynamic pricing optimization",
        "Order processing & fulfillment"
      ],
      revenue: "$50K-$500K/year potential",
      examples: ["Dropshipping stores", "Print-on-demand", "Digital products"]
    },
    {
      name: "SaaS & Software",
      tier: "Tier 1",
      opportunity: "Very High",
      automations: [
        "Customer onboarding automation",
        "Support ticket triage",
        "Feature request analysis",
        "Code generation & testing",
        "Documentation writing"
      ],
      revenue: "$100K-$1M+/year potential",
      examples: ["Micro-SaaS", "API services", "No-code tools"]
    },
    {
      name: "Professional Services",
      tier: "Tier 1",
      opportunity: "High",
      automations: [
        "Client intake & qualification",
        "Proposal generation",
        "Project management",
        "Reporting & analytics",
        "Billing & invoicing"
      ],
      revenue: "$75K-$300K/year potential",
      examples: ["Consulting", "Accounting", "Legal services", "Marketing agencies"]
    },
    {
      name: "Healthcare (Non-Clinical)",
      tier: "Tier 2",
      opportunity: "Medium-High",
      automations: [
        "Appointment scheduling",
        "Insurance verification",
        "Billing & claims processing",
        "Patient communication",
        "Documentation & reporting"
      ],
      revenue: "$100K-$500K/year potential",
      examples: ["Medical billing", "Health coaching", "Wellness apps"]
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Industries Ripe for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Deep dives into industries where AI agents create the biggest opportunities for ultra-small businesses.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {industries.map((industry, index) => (
            <div key={index} className="gradient-card p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs text-primary font-semibold">
                      {industry.tier}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      industry.opportunity === 'Very High' ? 'bg-green-500/20 border border-green-500/40 text-green-500' :
                      industry.opportunity === 'High' ? 'bg-green-500/20 border border-green-500/40 text-green-500' :
                      'bg-yellow-500/20 border border-yellow-500/40 text-yellow-500'
                    }`}>
                      {industry.opportunity} Opportunity
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-6">{industry.revenue}</div>
                  <div>
                    <div className="text-sm font-semibold mb-2">Examples:</div>
                    <div className="space-y-1">
                      {industry.examples.map((example, i) => (
                        <div key={i} className="text-sm text-foreground/60">• {example}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-semibold mb-4">Key Automation Opportunities:</h4>
                  <ul className="space-y-2 mb-6">
                    {industry.automations.map((automation, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{automation}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:scale-105">
                    View Full Industry Guide →
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
          <h2 className="text-3xl font-bold mb-4">Find Your Industry Opportunity</h2>
          <p className="text-foreground/70 mb-8">
            Get our complete industry analysis with market size, competition, and specific business ideas.
          </p>
          <a
            href="/business-ideas"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Explore Business Ideas →
          </a>
        </div>
      </section>
    </div>
  )
}
