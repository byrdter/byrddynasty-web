export default function ServicesPage() {
  const services = [
    {
      name: "AI Readiness Assessment",
      icon: "🎯",
      timeline: "2-3 weeks",
      description: "Comprehensive audit of your business processes to identify the highest-impact automation opportunities.",
      deliverables: [
        "Process audit and opportunity analysis",
        "ROI projections for top automation use cases",
        "12-month phased implementation roadmap",
        "Technology stack recommendations",
        "Prioritized action plan"
      ],
      ideal: "Perfect for businesses exploring AI but unsure where to start"
    },
    {
      name: "Business Process Automation",
      icon: "⚡",
      timeline: "6-10 weeks",
      description: "End-to-end workflow automation connecting your tools and eliminating manual, repetitive tasks.",
      deliverables: [
        "Custom workflow automation implementation",
        "System integrations (CRM, email, accounting, project management)",
        "Real-time dashboards and automated reporting",
        "Team training and comprehensive documentation",
        "30-day optimization and refinement period"
      ],
      ideal: "Perfect for businesses spending 15+ hours/week on manual processes"
    },
    {
      name: "AI Agent Development",
      icon: "🤖",
      timeline: "8-12 weeks",
      description: "Custom agentic AI systems that autonomously handle sales, customer service, operations, or marketing tasks 24/7.",
      deliverables: [
        "Custom AI agent architecture and implementation",
        "Integration with existing business systems",
        "Performance monitoring and analytics dashboard",
        "Continuous learning and optimization",
        "Comprehensive documentation and handoff"
      ],
      ideal: "Perfect for businesses ready to scale operations without hiring"
    },
    {
      name: "Knowledge Base & RAG Systems",
      icon: "📚",
      timeline: "6-10 weeks",
      description: "Transform your documents, policies, and institutional knowledge into an AI-powered searchable system for employees or customers.",
      deliverables: [
        "Document processing and intelligent chunking",
        "Vector database and retrieval system setup",
        "AI-powered search and Q&A interface",
        "Integration with Slack, Teams, or web interface",
        "Ongoing content updates and optimization"
      ],
      ideal: "Perfect for businesses with scattered knowledge across documents and email"
    },
    {
      name: "Ongoing Implementation Retainer",
      icon: "🔄",
      timeline: "Monthly",
      description: "Continuous AI implementation, optimization, and strategic advisory as your business evolves.",
      deliverables: [
        "Dedicated monthly implementation hours",
        "Ongoing optimization of existing AI systems",
        "New automation projects as needs arise",
        "Monthly strategic planning sessions",
        "Priority support via Slack or email"
      ],
      ideal: "Perfect for businesses committed to continuous AI-powered improvement"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Done-For-You{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              AI Implementation
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Not ready to build it yourself? We'll handle everything—from strategy to implementation to ongoing optimization.
            Focus on your business. We'll handle the AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:bg-card/80 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Choose the engagement that fits your needs—from initial assessment to full implementation and ongoing support.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-card p-8 rounded-xl"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Title */}
                  <div className="md:w-1/3">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{service.timeline}</span>
                    </div>
                    <div className="text-sm text-accent/80 bg-accent/10 px-3 py-2 rounded-lg inline-block">
                      {service.ideal}
                    </div>
                  </div>

                  {/* Description and Deliverables */}
                  <div className="md:w-2/3">
                    <p className="text-foreground/80 mb-6">
                      {service.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground/90 mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, dIndex) => (
                          <li key={dIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-foreground/70 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-foreground/60">
              A proven methodology that delivers results without disrupting your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assess</h3>
              <p className="text-foreground/70">
                We audit your processes, identify opportunities, and create a detailed roadmap with ROI projections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implement</h3>
              <p className="text-foreground/70">
                We build, test, and deploy AI systems tailored to your specific needs. You stay involved, we do the heavy lifting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimize</h3>
              <p className="text-foreground/70">
                We monitor performance, gather feedback, and continuously improve your systems for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Work With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">⚡ Faster Implementation</h3>
              <p className="text-foreground/70">
                Using AI to build AI, we deliver 3-5X faster than traditional consultants. What takes others 12-16 weeks, we complete in 6-8 weeks.
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">🎯 Proven Methodology</h3>
              <p className="text-foreground/70">
                Our JARVIS framework demonstrates real-world agentic AI in production. We don't just consult—we build systems that work 24/7.
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">📊 Results-Focused</h3>
              <p className="text-foreground/70">
                We deliver measurable outcomes: 60-90% time savings, 4-6 month ROI, documented cost reductions. No fluff, just results.
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">🤝 Transparent Partnership</h3>
              <p className="text-foreground/70">
                Clear communication, realistic timelines, no hidden costs. We're in this together—your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Book a free 30-minute consultation. We'll identify your top automation opportunities and show you exactly how AI can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-lg"
          >
            Book Free Consultation
          </a>
          <p className="mt-6 text-sm text-foreground/50">
            No obligation. No sales pressure. Just honest advice about whether AI is right for your business.
          </p>
        </div>
      </section>
    </div>
  )
}
