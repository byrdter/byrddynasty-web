export default function BusinessIdeasPage() {
  const tiers = [
    {
      name: "Low-Cost to Build & Run",
      description: "Under $100 to start, minimal ongoing costs",
      ideas: [
        { name: "Inbox Zero Agent", revenue: "$500-2K/mo", difficulty: "Easy" },
        { name: "Job Application Auto-Filler", revenue: "$1K-3K/mo", difficulty: "Easy" },
        { name: "Meeting Summary Bot", revenue: "$1K-5K/mo", difficulty: "Medium" },
      ]
    },
    {
      name: "Fast to Market",
      description: "Launch in 2-4 weeks",
      ideas: [
        { name: "Social Media Planner", revenue: "$2K-8K/mo", difficulty: "Medium" },
        { name: "Content Repurposing Engine", revenue: "$3K-10K/mo", difficulty: "Medium" },
        { name: "Event Recommender", revenue: "$1K-5K/mo", difficulty: "Easy" },
      ]
    },
    {
      name: "Highly Scalable",
      description: "1 to 10,000 users without proportional costs",
      ideas: [
        { name: "Autonomous SDR Agent", revenue: "$10K-50K/mo", difficulty: "Hard" },
        { name: "Legal Contract Review", revenue: "$20K-100K/mo", difficulty: "Hard" },
        { name: "Compliance Automation", revenue: "$10K-30K/mo", difficulty: "Medium" },
      ]
    },
    {
      name: "Recurring Revenue Friendly",
      description: "High retention, predictable income",
      ideas: [
        { name: "AI Nutritionist", revenue: "$5K-20K/mo", difficulty: "Medium" },
        { name: "Career Development Tracker", revenue: "$3K-15K/mo", difficulty: "Medium" },
        { name: "Energy Bill Optimizer", revenue: "$5K-25K/mo", difficulty: "Medium" },
      ]
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            50+ AI Business Ideas{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              for Solo Founders
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Real business opportunities you can build this weekend. Organized by cost, time to market, scalability, and revenue potential.
          </p>
        </div>
      </section>

      {/* Business Ideas by Tier */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {tiers.map((tier, index) => (
            <div key={index}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{tier.name}</h2>
                <p className="text-foreground/60">{tier.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.ideas.map((idea, i) => (
                  <div key={i} className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">{idea.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Revenue:</span>
                        <span className="text-primary font-semibold">{idea.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Difficulty:</span>
                        <span className={`font-semibold ${
                          idea.difficulty === 'Easy' ? 'text-green-500' :
                          idea.difficulty === 'Medium' ? 'text-yellow-500' : 'text-orange-500'
                        }`}>
                          {idea.difficulty}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Business?</h2>
          <p className="text-foreground/70 mb-8">
            Get the complete playbook with detailed business plans, tool stacks, and launch timelines.
          </p>
          <a
            href="/newsletter"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Get the Free Playbook
          </a>
        </div>
      </section>
    </div>
  )
}
