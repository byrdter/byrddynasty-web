export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Byrddynasty</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-foreground/80 mb-6">
          Byrddynasty helps small businesses build or implement AI agents that automate processes,
          scale operations, and deliver measurable results—without massive teams or budgets.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Two Paths to AI Transformation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="gradient-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-foreground">🛠️ Learn & Build (DIY)</h3>
            <p className="text-foreground/70 mb-4">
              For solo founders and small teams who want to understand and build their own AI systems.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Weekly playbooks and frameworks</li>
              <li>• Tool stack guides and tutorials</li>
              <li>• Real-world workflows and case studies</li>
              <li>• Community of builders</li>
            </ul>
          </div>

          <div className="gradient-card p-6 rounded-xl border-2 border-primary/50">
            <h3 className="text-xl font-bold mb-3 text-foreground">🚀 Done-For-You Implementation</h3>
            <p className="text-foreground/70 mb-4">
              For businesses that want results without the learning curve. We handle everything.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• AI readiness assessment and strategy</li>
              <li>• Full implementation and testing</li>
              <li>• Ongoing optimization and support</li>
              <li>• Measurable ROI in 4-6 months</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">What Makes Us Different</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Proven Implementation Experience</h3>
            <p className="text-foreground/70">
              Our JARVIS framework demonstrates real-world agentic AI in production—autonomous agents
              that work 24/7, make intelligent decisions, and deliver measurable time savings. We don't
              just consult; we build, deploy, and optimize systems that actually work.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Faster Delivery</h3>
            <p className="text-foreground/70">
              Using AI to build AI, we deliver implementations 3-5X faster than traditional consultants.
              What takes others 12-16 weeks, we complete in 6-8 weeks—without sacrificing quality.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Results-Focused Approach</h3>
            <p className="text-foreground/70">
              We deliver measurable outcomes: 60-90% time savings, 4-6 month ROI, documented cost
              reductions. If we can't show clear value, we won't take the project. No fluff, just results.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Transparent Partnership</h3>
            <p className="text-foreground/70">
              Clear communication, realistic timelines, honest assessments. We're in this together—
              your success is our success. If AI isn't the right solution for your specific problem,
              we'll tell you.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Our Methodology</h2>

        <div className="space-y-4 text-foreground/70">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Phase 1: Assess (2-3 weeks)</h3>
            <p>
              We audit your processes, identify automation opportunities, and create a detailed roadmap
              with ROI projections. You get a clear picture of what's possible before committing to implementation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Phase 2: Pilot (4-6 weeks)</h3>
            <p>
              We build the highest-ROI automation first to prove value quickly. You see real time/cost
              savings before expanding to additional processes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Phase 3: Scale (Ongoing)</h3>
            <p>
              We expand to additional processes, optimize existing systems, and provide ongoing support
              as your business evolves. Continuous improvement, not one-and-done.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Industries We Serve</h2>
        <ul className="space-y-2 text-foreground/70">
          <li>• Professional Services (consulting, accounting, legal, HR)</li>
          <li>• E-commerce & DTC Brands</li>
          <li>• B2B SaaS Companies</li>
          <li>• Service Businesses (agencies, real estate, property management)</li>
          <li>• Healthcare & Medical Practices</li>
          <li>• Manufacturing & Operations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">Who We Work With</h2>
        <p className="text-foreground/70 mb-6">
          We work with small and medium businesses (typically 10-500 employees) that are:
        </p>
        <ul className="space-y-2 text-foreground/70 mb-6">
          <li>• Spending 15+ hours/week on manual, repetitive processes</li>
          <li>• Ready to invest in efficiency and scalability</li>
          <li>• Open to new technology but need expert guidance</li>
          <li>• Looking for measurable ROI, not experimental projects</li>
          <li>• Committed to transformation, not just automation</li>
        </ul>

        <div className="mt-12 p-6 bg-card border border-card-border rounded-xl">
          <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-foreground/70 mb-4">
            Book a free 30-minute consultation. We'll discuss your specific challenges, identify potential
            automation opportunities, and give you honest advice about whether AI is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors text-center"
            >
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-card-border text-foreground font-semibold rounded-lg hover:bg-card-border/80 transition-colors text-center"
            >
              Explore Services
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/50">
            No obligation. No sales pressure. Just honest conversation about what's possible.
          </p>
        </div>
      </div>
    </div>
  )
}
