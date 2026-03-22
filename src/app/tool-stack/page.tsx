export default function ToolStackPage() {
  const categories = [
    {
      name: "No-Code AI Builders",
      description: "Build AI agents without coding",
      tools: [
        { name: "Lindy", pricing: "$20-50/mo", use: "Personal AI assistant builder" },
        { name: "Activepieces", pricing: "$25/mo", use: "Open-source automation" },
        { name: "Bardeen", pricing: "$99/mo", use: "Browser automation + AI" },
      ]
    },
    {
      name: "Automation Platforms",
      description: "Connect and automate workflows",
      tools: [
        { name: "Zapier", pricing: "Free-$50/mo", use: "200+ app integrations" },
        { name: "Make.com", pricing: "$0-29/mo", use: "Advanced visual automation" },
        { name: "n8n", pricing: "Free (self-hosted)", use: "Open-source workflows" },
      ]
    },
    {
      name: "Foundation Models",
      description: "Core AI capabilities",
      tools: [
        { name: "ChatGPT", pricing: "$20/mo", use: "General purpose AI" },
        { name: "Claude", pricing: "$20/mo", use: "Long context, analysis" },
        { name: "Gemini", pricing: "$20/mo", use: "Google integration" },
      ]
    },
    {
      name: "Sales Automation",
      description: "Lead gen, outreach, qualification",
      tools: [
        { name: "Instantly.ai", pricing: "$30-50/mo", use: "Cold email automation" },
        { name: "Seamless.AI", pricing: "$147/mo", use: "Lead database + intent" },
        { name: "B2B Rocket", pricing: "$500/mo", use: "Autonomous SDR agent" },
      ]
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The Complete{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Agent Tool Stack
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Every tool you need to build and run your AI-powered business. Organized by function with pricing, use cases, and integration guides.
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-foreground/60">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, i) => (
                  <div key={i} className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="text-2xl font-bold text-primary">{tool.pricing}</div>
                      <p className="text-sm text-foreground/70">{tool.use}</p>
                    </div>
                    <button className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center text-sm text-foreground/50">
          <p>
            Some links on this page may be affiliate links. We only recommend tools we've personally tested and believe in.
            Your support helps us create more free content.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing Your Stack?</h2>
          <p className="text-foreground/70 mb-8">
            Use our interactive Stack Builder to get personalized recommendations based on your business type.
          </p>
          <a
            href="/calculator"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Build Your Stack →
          </a>
        </div>
      </section>
    </div>
  )
}
