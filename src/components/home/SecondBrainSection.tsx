import Link from 'next/link'

const capabilities = [
  {
    icon: '🧠',
    title: 'Never Forget',
    body: 'Everything you learn, read, and decide is captured and retrievable. Persistent memory compounds — a two-year-old brain vastly outperforms one started yesterday.',
  },
  {
    icon: '🌙',
    title: 'Dream State Processing',
    body: 'While you sleep, the system reviews the day\'s inputs. Wake up to: "You mentioned X today — this aligns with a strategy you abandoned 6 months ago. Revisit?"',
  },
  {
    icon: '🔍',
    title: 'Hidden Insights',
    body: 'Discover patterns across your knowledge that you\'d never find manually — connections between ideas separated by months or domains.',
  },
  {
    icon: '🎙️',
    title: 'Vibe-to-Workflow',
    body: 'Describe a process in a voice memo. Your second brain automatically builds the automation to execute it — no code, no manual setup.',
  },
  {
    icon: '⚡',
    title: 'Automate the Mundane',
    body: 'Repetitive tasks, routine decisions, and recurring workflows run themselves while you focus on what only humans can do.',
  },
  {
    icon: '💡',
    title: 'Institutional Memory',
    body: 'For organizations: when a key employee leaves, their decision-making patterns stay. The company never loses its best thinking.',
  },
]

export default function SecondBrainSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            The Concept Behind Everything
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Is a{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Second Brain?
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Your biological brain is built for thinking — not remembering. A second brain is an
            AI-powered system that captures, organizes, and acts on information so your first brain
            can do what only humans can: imagine, create, and decide. In 2026, the shift is from
            passive note storage to <em>Personal Context Management</em> — proactive intelligence
            that surfaces the right knowledge at the right moment.
          </p>
        </div>

        {/* 6 Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {capabilities.map((cap) => (
            <div key={cap.title} className="gradient-card p-6 rounded-xl">
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
              <p className="text-foreground/60 text-sm">{cap.body}</p>
            </div>
          ))}
        </div>

        {/* JARVIS Proof Strip */}
        <div className="gradient-card p-8 rounded-xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Live Case Study</div>
              <h3 className="text-2xl font-bold mb-3">JARVIS — A Second Brain Built in Public</h3>
              <p className="text-foreground/70 mb-4">
                JARVIS is my personal second brain, built across 8 phases and documented live on
                YouTube. It monitors markets, captures knowledge, automates workflows, and runs
                24/7 without prompting. This is the proof of concept.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
              >
                See the Full Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🧠', label: 'Multiple phases built' },
                { icon: '📺', label: 'Growing video library' },
                { icon: '⏱️', label: 'Runs autonomously 24/7' },
                { icon: '🔓', label: 'Fully built in public' },
              ].map((stat) => (
                <div key={stat.label} className="bg-card/50 border border-card-border rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xs text-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Paths CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/second-brain#individuals"
            className="gradient-card p-6 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all group block"
          >
            <div className="text-3xl mb-3">👤</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">For Individuals</h3>
            <p className="text-foreground/60 text-sm mb-3">
              Build a personal system that compounds your knowledge and frees your mind to focus
              on thinking, creating, and deciding.
            </p>
            <span className="text-primary text-sm font-semibold">Learn more →</span>
          </Link>
          <Link
            href="/second-brain#organizations"
            className="gradient-card p-6 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all group block"
          >
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">For Organizations</h3>
            <p className="text-foreground/60 text-sm mb-3">
              Build institutional memory that survives employee turnover, accelerates onboarding,
              and deploys AI agents that learn your domain over time.
            </p>
            <span className="text-primary text-sm font-semibold">Learn more →</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
