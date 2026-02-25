export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">About byrddynasty</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-foreground/80 mb-6">
          byrddynasty teaches AI/ML engineers and tech leads how to build production-ready agentic AI systems.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The Problem</h2>
        <p className="text-foreground/70 mb-6">
          Most AI projects never make it to production. Not because the AI isn't smart enough,
          but because the infrastructure, architecture, and operational practices aren't ready.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The Solution</h2>
        <p className="text-foreground/70 mb-6">
          The Nine Essential Skills Framework provides a comprehensive approach to building
          agentic AI systems that work in production. From orchestration to security, from
          memory management to observability—every skill you need to succeed.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">What You'll Learn</h2>
        <ul className="space-y-3 text-foreground/70 mb-6">
          <li>• How to architect multi-agent systems that scale</li>
          <li>• Production-grade observability and debugging techniques</li>
          <li>• Memory systems that give agents both context and knowledge</li>
          <li>• Security patterns for non-human identity and access control</li>
          <li>• Cost optimization and context management strategies</li>
          <li>• Tool engineering for safe, reliable agent capabilities</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">Who This Is For</h2>
        <p className="text-foreground/70 mb-6">
          AI/ML engineers, tech leads, and architects who are building (or planning to build)
          agentic AI systems and want to do it right the first time.
        </p>

        <div className="mt-12 p-6 bg-card border border-card-border rounded-xl">
          <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-foreground/70 mb-4">
            Join our newsletter for weekly insights on building production-ready agentic AI.
          </p>
          <a
            href="/newsletter"
            className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  )
}
