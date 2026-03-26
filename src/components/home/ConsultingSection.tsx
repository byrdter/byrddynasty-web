export default function ConsultingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Not Ready to Build It Yourself?{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              We'll Do It For You
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Done-for-you AI implementation services for small businesses ready to automate, scale, and optimize—without the learning curve.
          </p>
        </div>

        {/* Two Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* DIY Path */}
          <div className="gradient-card p-8 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-3">Learn & Build (DIY)</h3>
            <p className="text-foreground/70 mb-6">
              Perfect for founders who want to understand and build their own AI systems.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Weekly playbooks and tutorials</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Tool stack guides and workflows</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Community of builders</span>
              </li>
            </ul>
            <a
              href="/workflows"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
            >
              Browse Resources
            </a>
          </div>

          {/* Done-For-You Path */}
          <div className="gradient-card p-8 rounded-xl border-2 border-primary/50 relative overflow-visible">
            <div className="absolute -top-3 right-6 bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
              RECOMMENDED FOR FAST RESULTS
            </div>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Done-For-You Implementation</h3>
            <p className="text-foreground/70 mb-6">
              Perfect for businesses that want results without the learning curve.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Complete assessment and strategy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Full build, testing, and deployment</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground/80">Ongoing optimization and support</span>
              </li>
            </ul>
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-all hover:scale-105 shadow-lg"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Quick Services Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card/50 p-4 rounded-lg border border-card-border">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-sm mb-1">AI Assessment</h4>
            <p className="text-xs text-foreground/60">Identify top opportunities</p>
          </div>
          <div className="bg-card/50 p-4 rounded-lg border border-card-border">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-sm mb-1">Process Automation</h4>
            <p className="text-xs text-foreground/60">Eliminate manual work</p>
          </div>
          <div className="bg-card/50 p-4 rounded-lg border border-card-border">
            <div className="text-2xl mb-2">🤖</div>
            <h4 className="font-semibold text-sm mb-1">AI Agents</h4>
            <p className="text-xs text-foreground/60">24/7 autonomous systems</p>
          </div>
          <div className="bg-card/50 p-4 rounded-lg border border-card-border">
            <div className="text-2xl mb-2">📚</div>
            <h4 className="font-semibold text-sm mb-1">Knowledge Bases</h4>
            <p className="text-xs text-foreground/60">AI-powered search</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            Not sure which path is right for you?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </a>
          <p className="mt-3 text-sm text-foreground/50">
            30-minute call to discuss your specific needs
          </p>
        </div>
      </div>
    </section>
  )
}
