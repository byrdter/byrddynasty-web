export default function FounderStoriesPage() {
  const founders = [
    {
      name: "Jake",
      business: "Bank Statement Converter",
      revenue: "$23K MRR",
      employees: "Solo (1 person)",
      story: "Built a boring tool that converts PDF bank statements to CSV for accountants.",
      tools: ["ChatGPT API", "Basic OCR", "Stripe"],
      image: "/images/founders/placeholder.jpg"
    },
    {
      name: "Sahil Lavingia",
      business: "Gumroad",
      revenue: "$10M ARR",
      employees: "1 (himself)",
      story: "Runs Gumroad completely solo using AI agents and contractors. No employees, 90% margins.",
      tools: ["V0", "Cursor", "Notion", "Contractors"],
      image: "/images/founders/sahil.jpg"
    },
    {
      name: "Pieter Levels",
      business: "Nomad List, RemoteOK",
      revenue: "$3M+ ARR",
      employees: "Solo",
      story: "Built 70+ projects, 4 became profitable. Ships at 70% done, validates fast.",
      tools: ["PHP", "Simple stack", "Twitter audience"],
      image: "/images/founders/pieter.jpg"
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Solo Founders Building{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              $100K+ Businesses
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Real stories from founders using AI agents to replace employees and build profitable one-person empires.
          </p>
        </div>
      </section>

      {/* Founder Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {founders.map((founder, index) => (
            <div key={index} className="gradient-card p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-foreground/60 mb-4">{founder.business}</p>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{founder.revenue}</div>
                    <div className="text-sm text-foreground/60">{founder.employees}</div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold mb-4">The Story</h4>
                  <p className="text-foreground/70 mb-6">{founder.story}</p>

                  <h4 className="text-lg font-semibold mb-3">Tools Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button className="px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary font-semibold transition-colors">
                    Read Full Story →
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
          <h2 className="text-3xl font-bold mb-4">Want to Be Featured?</h2>
          <p className="text-foreground/70 mb-8">
            Building a business with AI agents? We'd love to share your story.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#1e3a5f] hover:bg-[#2a4a75] text-white rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </div>
  )
}
