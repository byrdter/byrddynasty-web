export default function WorkflowsPage() {
  const workflows = [
    {
      name: "Sales Lead Qualification",
      category: "Sales",
      problem: "Manually qualifying 100+ leads per week",
      timeSaved: "15 hours/week",
      difficulty: "Medium",
      tools: ["Instantly.ai", "Zapier", "Google Sheets"],
      steps: 5
    },
    {
      name: "Content Repurposing Pipeline",
      category: "Marketing",
      problem: "Turning YouTube videos into blog posts, tweets, LinkedIn",
      timeSaved: "10 hours/week",
      difficulty: "Easy",
      tools: ["ChatGPT", "Make.com", "Buffer"],
      steps: 4
    },
    {
      name: "Customer Support Triage",
      category: "Support",
      problem: "Sorting and routing support tickets 24/7",
      timeSaved: "20 hours/week",
      difficulty: "Medium",
      tools: ["Claude", "Intercom", "Zapier"],
      steps: 6
    },
    {
      name: "Invoice Reconciliation",
      category: "Finance",
      problem: "Monthly invoice matching and reporting",
      timeSaved: "8 hours/month",
      difficulty: "Easy",
      tools: ["ChatGPT", "QuickBooks", "Google Sheets"],
      steps: 3
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI Workflow Library:{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Copy These Automations
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Proven AI workflows you can copy and implement today. Step-by-step guides with templates included.
          </p>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <div key={index} className="gradient-card p-6 rounded-xl">
                <div className="mb-4">
                  <div className="text-sm text-primary font-semibold mb-2">{workflow.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{workflow.name}</h3>
                  <p className="text-foreground/60 text-sm">{workflow.problem}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">{workflow.timeSaved}</div>
                    <div className="text-xs text-foreground/50">Time Saved</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${
                      workflow.difficulty === 'Easy' ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {workflow.difficulty}
                    </div>
                    <div className="text-xs text-foreground/50">Difficulty</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{workflow.steps}</div>
                    <div className="text-xs text-foreground/50">Steps</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2">Tools Needed:</div>
                  <div className="flex flex-wrap gap-2">
                    {workflow.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:scale-105">
                  View Workflow →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want More Workflows?</h2>
          <p className="text-foreground/70 mb-8">
            Get our complete workflow library with 30+ copy-paste automations.
          </p>
          <a
            href="/newsletter"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Get Full Library
          </a>
        </div>
      </section>
    </div>
  )
}
