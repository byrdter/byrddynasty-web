import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Personal Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Auburn Professor & AI Builder
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Terry Byrd.
            </span>
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            I&apos;ve spent decades studying how technology transforms the way people work and think —
            first as a professor at Auburn University, now as an AI builder documenting every step
            in public on YouTube.
          </p>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            I built JARVIS — my own second brain — across 8 phases, live on camera. Every decision,
            every mistake, every breakthrough. It runs 24/7 now. And everything I learned building
            it is what this site is about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/second-brain"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors text-center"
            >
              What Is a Second Brain?
            </Link>
            <a
              href="https://www.youtube.com/@byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:bg-card/80 transition-colors text-center"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-2 border-card-border shadow-2xl">
            <Image
              src="/images/terry-byrd.jpg"
              alt="Terry Byrd — Auburn Professor and AI Builder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* JARVIS Story */}
      <div className="gradient-card p-10 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-6">The Origin of JARVIS</h2>
        <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
          <p>
            As a professor at Auburn University, I&apos;ve spent my career studying information systems
            and how organizations use technology to make better decisions. But watching the AI
            revolution unfold, I realized academic study wasn&apos;t enough — I needed to build.
          </p>
          <p>
            In 2025, I started building <strong className="text-foreground">JARVIS</strong> — Just A Rather
            Very Intelligent System. Not as a research project. As my actual second brain. Something that
            would manage my investments, capture my knowledge, automate my routines, and surface insights
            I&apos;d otherwise miss.
          </p>
          <p>
            I documented every phase on YouTube — the dead ends, the breakthroughs, the decisions
            in real time. Eight phases later, JARVIS runs 24/7. It monitors markets, detects signals,
            learns from experience, and operates autonomously while I sleep.
          </p>
          <p>
            What I discovered building JARVIS applies to everyone — individuals who want to think
            more clearly and businesses that need institutional memory that doesn&apos;t walk out the door.
            That&apos;s what Byrddynasty is about.
          </p>
        </div>
      </div>

      {/* Three Roles */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎓',
              title: 'Auburn University',
              body: 'Professor of Information Systems with decades of research on how organizations leverage technology for competitive advantage.',
            },
            {
              icon: '🤖',
              title: 'AI Builder',
              body: 'Building JARVIS in public — 8 phases documented on YouTube, from first market signal detection to fully autonomous 24/7 operation.',
            },
            {
              icon: '📺',
              title: 'YouTube Educator',
              body: 'Teaching second brain concepts through real builds, not theory. Every video shows actual code, actual data, actual results.',
            },
          ].map((item) => (
            <div key={item.title} className="gradient-card p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two Paths */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Two Paths to a Second Brain</h2>
        <p className="text-foreground/60 mb-8">
          Everything on this site serves one goal: helping you build a second brain that works for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gradient-card p-8 rounded-xl">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold mb-3">Learn & Build (DIY)</h3>
            <p className="text-foreground/70 mb-4">
              For individuals and teams who want to understand and build their own second brain system.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70 mb-6">
              <li>• Weekly playbooks and frameworks</li>
              <li>• YouTube series — JARVIS built live</li>
              <li>• Tool guides and copy-paste workflows</li>
              <li>• Real patterns from real production systems</li>
            </ul>
            <Link
              href="/second-brain"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
            >
              Start Here
            </Link>
          </div>
          <div className="gradient-card p-8 rounded-xl border-2 border-primary/50 relative overflow-visible">
            <div className="absolute -top-3 right-6 bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
              RECOMMENDED FOR FAST RESULTS
            </div>
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-3">Done-For-You Implementation</h3>
            <p className="text-foreground/70 mb-4">
              For businesses that want a second brain built without the learning curve.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70 mb-6">
              <li>• Complete assessment and strategy</li>
              <li>• Full build, testing, and deployment</li>
              <li>• AI agents that learn your domain</li>
              <li>• Measurable ROI in 4–6 months</li>
            </ul>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-all hover:scale-105 shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">What Makes This Different</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Built in Public',
              body: 'JARVIS is a real second brain running in production — not a demo, not a concept. Every phase is documented on YouTube with real data and real decisions.',
            },
            {
              title: 'Academic Rigor + Practical Results',
              body: 'Decades of research on information systems meets hands-on AI building. The frameworks here are tested against real workflows, not invented in a slide deck.',
            },
            {
              title: 'Individual & Organizational',
              body: 'Most AI consultants focus on one audience. This work spans both: personal second brains for individuals and institutional memory systems for teams.',
            },
            {
              title: 'No Fluff',
              body: 'If we can\'t show clear value, we won\'t claim it. Real numbers, real code, real results. The compound advantage of a second brain is real — but it takes real work.',
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 bg-card border border-card-border rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Build Your Second Brain?</h3>
        <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
          Start with the concept, follow the JARVIS journey, or book a call to talk through your specific situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/second-brain"
            className="inline-block px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors text-center"
          >
            Start Here →
          </Link>
          <Link
            href="/case-studies"
            className="inline-block px-6 py-3 bg-card-border text-foreground font-semibold rounded-lg hover:bg-card-border/80 transition-colors text-center"
          >
            See JARVIS in Action
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-card-border text-foreground font-semibold rounded-lg hover:bg-card-border/80 transition-colors text-center"
          >
            Book Free Consultation
          </Link>
        </div>
        <p className="mt-4 text-sm text-foreground/50">No obligation. Just honest conversation about what&apos;s possible.</p>
      </div>

    </div>
  )
}
