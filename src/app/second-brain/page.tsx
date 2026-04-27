import Link from 'next/link'

export const metadata = {
  title: 'What Is a Second Brain? | Byrddynasty',
  description: 'A second brain is an AI-powered system that remembers everything, automates the mundane, and surfaces hidden insights — for individuals and organizations.',
}

export default function SecondBrainPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
          The Concept Behind Everything We Build
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          What Is a{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Second Brain?
          </span>
        </h1>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
          Your biological brain is built for thinking — not remembering. A second brain handles
          the storage, retrieval, and connections so your first brain can do what it does best.
        </p>
      </div>

      {/* Core Idea */}
      <div className="gradient-card p-10 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-6">The Core Idea</h2>
        <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
          <p>
            Every day you encounter valuable information — ideas, decisions, patterns, lessons.
            Your biological brain captures a fraction of it. Most is lost within hours.
          </p>
          <p>
            A second brain is an external system — built with software, AI, and automation — that
            captures, organizes, and retrieves information so your first brain never has to carry
            the weight of storage.
          </p>
          <p>
            The concept was popularized by productivity expert Tiago Forte as a personal knowledge
            management system. With AI, it has evolved into something far more powerful: a system
            that doesn&apos;t just <em>store</em> information, but <em>acts</em> on it — noticing patterns,
            triggering automations, surfacing insights, and proactively helping you think better.
          </p>
          <p>
            In 2026 the term for this has evolved to{' '}
            <strong className="text-foreground">Personal Context Management (PCM)</strong> — the
            shift from passive note storage to proactive, context-aware intelligence that surfaces
            exactly what you need, the moment you need it.
          </p>
        </div>
      </div>

      {/* PKM Evolution */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">The Evolution of Knowledge Management</h2>
        <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">
          Second brains have gone through four major generations. Most people are still stuck in 2.0.
        </p>
        <div className="space-y-4">
          {[
            {
              era: 'PKM 2.0',
              label: 'Digital Filing Cabinet',
              years: 'Pre-2020',
              desc: 'Evernote, Notion, Google Drive. Rigid folder hierarchies. You file things you never find again. High maintenance, low return.',
              dim: true,
            },
            {
              era: 'PKM 3.0',
              label: 'Connected Knowledge',
              years: '2020–2022',
              desc: 'Obsidian, Roam Research. Bidirectional links, knowledge graphs, atomic notes. Better connections — but still entirely manual. High ceiling, high effort.',
              dim: true,
            },
            {
              era: 'PKM 4.0',
              label: 'AI-Enhanced',
              years: '2022–2024',
              desc: 'AI assists with search and summarization inside existing systems. Smarter filing — but AI is still an add-on, not the core.',
              dim: false,
            },
            {
              era: 'PKM 5.0',
              label: 'AI-First / Personal Context Management',
              years: '2025–Now',
              desc: 'AI is the architecture. Semantic understanding, automated connections, proactive surfacing. The system organizes itself. This is the Second Brain we build.',
              highlight: true,
            },
          ].map((item) => (
            <div
              key={item.era}
              className={`gradient-card p-6 rounded-xl flex gap-6 items-start ${item.highlight ? 'border-2 border-primary/40' : ''}`}
            >
              <div className="flex-shrink-0 w-20 text-center">
                <div className={`text-xs font-bold px-2 py-1 rounded-full mb-1 ${item.highlight ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground/40'}`}>
                  {item.era}
                </div>
                <div className={`text-xs ${item.dim ? 'text-foreground/30' : 'text-foreground/50'}`}>{item.years}</div>
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${item.highlight ? 'text-primary' : item.dim ? 'text-foreground/50' : ''}`}>
                  {item.label}
                </h3>
                <p className={`text-sm ${item.dim ? 'text-foreground/40' : 'text-foreground/60'}`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before vs After AI */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Before and After AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gradient-card p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-5">📁 Traditional PKM (Pre-AI)</h3>
            <ul className="space-y-3 text-foreground/70">
              {[
                'Manual capture — you write everything down',
                'Manual tagging and organization',
                'You have to search to find anything',
                'Connections only what you make yourself',
                'Passive archive — sits there waiting',
                'Knowledge resets every session',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-foreground/30 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-card p-8 rounded-xl border-2 border-primary/40">
            <h3 className="text-xl font-bold mb-5 text-primary">🤖 AI-Augmented Second Brain (Now)</h3>
            <ul className="space-y-3 text-foreground/70">
              {[
                'Automated capture from multiple sources',
                'AI organizes, tags, and links knowledge',
                'Information surfaces to you proactively',
                'AI discovers hidden connections across domains',
                'Active system — triggers actions on your behalf',
                'Persistent memory that compounds over time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CODE Framework */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">The CODE Framework</h2>
        <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">
          The four-step process for turning information into intelligence — originally created by
          Tiago Forte, now supercharged with AI at every step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: 'C',
              label: 'Capture',
              subtitle: 'Everything, frictionlessly',
              body: 'Voice memos, web clips, meeting notes, PDFs. Capture from wherever you already work — AI handles the rest. "Capture everything, organize nothing" initially.',
              color: 'text-blue-400',
            },
            {
              step: 'O',
              label: 'Organize',
              subtitle: 'By utility, not origin',
              body: 'AI tags, links, and routes content automatically using the PARA method (Projects, Areas, Resources, Archives). The system structures itself.',
              color: 'text-purple-400',
            },
            {
              step: 'D',
              label: 'Distill',
              subtitle: 'Synthesize at AI speed',
              body: 'The step that historically killed PKM systems. AI can now distill 100 notes, a 60-minute transcript, or a 30-page document into actionable insight in seconds.',
              color: 'text-cyan-400',
            },
            {
              step: 'E',
              label: 'Express',
              subtitle: 'Never start blank',
              body: 'Your second brain assembles pre-distilled building blocks for you. Write faster, decide better, and create from a foundation — not from scratch.',
              color: 'text-emerald-400',
            },
          ].map((item) => (
            <div key={item.step} className="gradient-card p-6 rounded-xl text-center">
              <div className={`text-5xl font-black mb-2 ${item.color}`}>{item.step}</div>
              <h3 className="font-bold text-lg mb-1">{item.label}</h3>
              <div className="text-xs text-foreground/50 mb-3 font-medium">{item.subtitle}</div>
              <p className="text-foreground/60 text-xs leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 gradient-card p-4 rounded-xl text-center">
          <p className="text-sm text-foreground/50">
            <strong className="text-foreground/70">PARA Method</strong> — The organizational backbone: <span className="text-primary font-medium">Projects</span> (deadline-driven) · <span className="text-primary font-medium">Areas</span> (ongoing) · <span className="text-primary font-medium">Resources</span> (reference) · <span className="text-primary font-medium">Archives</span> (completed)
          </p>
        </div>
      </div>

      {/* 6 Capabilities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">What a Second Brain Actually Does</h2>
        <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">
          Six capabilities that separate a real second brain from a fancy note-taking app.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              n: '01',
              title: 'Memory Without Effort',
              body: 'Every idea, decision, conversation, and lesson is captured automatically. Nothing falls through the cracks. Persistent memory means knowledge compounds instead of resetting.',
            },
            {
              n: '02',
              title: 'Dream State Processing',
              body: 'While you sleep, the system reviews the day\'s inputs and prepares a morning insight report: "You mentioned X to a client today — this aligns with a strategy you abandoned 6 months ago. Revisit?"',
            },
            {
              n: '03',
              title: 'Hidden Insights',
              body: "AI discovers patterns across your knowledge that you'd never find manually — connections between ideas separated by months or domains. A 2024 note surfaces to solve a 2026 problem.",
            },
            {
              n: '04',
              title: 'Vibe-to-Workflow',
              body: "Describe a process in a voice memo. Your second brain automatically builds the automation to execute it. Raw, messy thoughts become structured workflows — no code required.",
            },
            {
              n: '05',
              title: 'Automation of the Mundane',
              body: 'Repetitive tasks, routine decisions, and recurring workflows run themselves. AI agents execute reliably in the background while you focus on what only humans can do.',
            },
            {
              n: '06',
              title: 'Reflection & Growth',
              body: "Regular synthesis of your experience creates an ongoing record of how your thinking evolves. Your second brain doesn't just store old thinking — it helps you challenge it.",
            },
          ].map((cap) => (
            <div key={cap.n} className="gradient-card p-6 rounded-xl flex gap-5">
              <div className="text-3xl font-extrabold text-primary/20 flex-shrink-0 leading-none">{cap.n}</div>
              <div>
                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                <p className="text-foreground/60 text-sm">{cap.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Operating Rooms */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Three Operating Rooms</h2>
        <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">
          Every second brain has three zones. Most people only build the first one.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '📚',
              name: 'The Library',
              subtitle: 'Capture & Storage',
              desc: 'Where information enters the system. AI-native ingestion from voice memos, web clips, PDFs, emails, and meeting transcripts — without manual tagging.',
              examples: ['Voice-to-note transcription', 'Auto web clipping', 'Email & Slack ingestion'],
              step: '01',
            },
            {
              icon: '🔬',
              name: 'The Lab',
              subtitle: 'Insights & Discovery',
              desc: 'Where AI connects the dots. Knowledge graphs, semantic search, and pattern recognition surface relationships between ideas you could never find manually.',
              examples: ['Hidden connection discovery', 'Semantic search', 'Pattern analysis across time'],
              step: '02',
            },
            {
              icon: '🏭',
              name: 'The Factory',
              subtitle: 'Automation & Action',
              desc: 'Where knowing becomes doing. Agents live inside your knowledge base and execute tasks — scheduling, research, follow-ups, analysis — triggered by context.',
              examples: ['Agent-driven automation', 'Workflow execution', 'Proactive recommendations'],
              step: '03',
            },
          ].map((room) => (
            <div key={room.name} className="gradient-card p-6 rounded-xl">
              <div className="text-sm text-primary font-semibold mb-1">Room {room.step}</div>
              <div className="text-3xl mb-3">{room.icon}</div>
              <h3 className="text-xl font-bold mb-1">{room.name}</h3>
              <div className="text-xs text-foreground/50 font-medium mb-3">{room.subtitle}</div>
              <p className="text-foreground/60 text-sm mb-4">{room.desc}</p>
              <ul className="space-y-1">
                {room.examples.map((ex) => (
                  <li key={ex} className="text-xs text-foreground/50 flex items-center gap-2">
                    <span className="text-primary">→</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* For Individuals */}
      <div id="individuals" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-4">
          For Individuals:{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stop Memorizing. Start Compounding.
          </span>
        </h2>
        <p className="text-foreground/60 mb-8 text-lg">
          Build a personal AI system that captures your knowledge, automates your routines, and
          grows more powerful every day — so your brain is free to do what only humans can.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🧠', title: 'Cognitive Liberation', body: 'Stop caching, start thinking. When storage is handled externally, creative capacity expands.' },
            { icon: '📈', title: 'Intellectual Compound Interest', body: 'Every note you add makes the system more valuable. A two-year-old brain vastly outperforms one started yesterday.' },
            { icon: '⚡', title: 'Vibe-to-Workflow', body: 'Describe a process in a voice memo. Your second brain turns it into an automated workflow — no code required.' },
            { icon: '🌙', title: 'Dream State Processing', body: 'Overnight AI background reflections. Wake up to insights you would never have connected yourself.' },
          ].map((item) => (
            <div key={item.title} className="gradient-card p-5 rounded-xl flex gap-4">
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-foreground/60 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
        >
          See JARVIS — A Personal Second Brain Built in Public →
        </Link>
      </div>

      {/* For Organizations */}
      <div id="organizations" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-4">
          For Organizations:{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Institutional Memory That Never Walks Out the Door
          </span>
        </h2>
        <p className="text-foreground/60 mb-8 text-lg">
          What happens when your best employee leaves? Build an organizational second brain that
          captures what your team knows — and makes it available to every person and every agent, permanently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🏛️', title: 'Institutional Immortality', body: 'When a key employee leaves, their decision-making patterns stay. The company never loses its best thinking.' },
            { icon: '🚀', title: 'Faster Onboarding', body: 'New hires access the full context behind every process and decision from day one — not from a dusty wiki.' },
            { icon: '⚖️', title: 'Consistent Decisions', body: 'AI surfaces relevant precedents before decisions are made. Teams stop reinventing the wheel — and stop repeating past mistakes.' },
            { icon: '🤖', title: 'AI-Agent Readiness', body: 'Autonomous agents need persistent memory to learn your domain. Your second brain is the foundation every future agent builds on.' },
          ].map((item) => (
            <div key={item.title} className="gradient-card p-5 rounded-xl flex gap-4">
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-foreground/60 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gradient-card p-5 rounded-xl mb-6 border border-primary/20">
          <div className="flex gap-3 items-start">
            <span className="text-2xl">📊</span>
            <div>
              <h4 className="font-bold mb-1">The AI Fitness Advantage</h4>
              <p className="text-foreground/60 text-sm">
                PwC research identifies &quot;AI-fit&quot; companies — those with systematic knowledge
                management and AI infrastructure — achieving <strong className="text-foreground">7.2× higher revenue and efficiency gains</strong> over
                competitors. The second brain is the foundation of AI fitness.
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
        >
          Explore Done-For-You Services →
        </Link>
      </div>

      {/* Knowledge Decay Warning */}
      <div className="gradient-card p-8 rounded-xl mb-16 border border-amber-500/20">
        <div className="flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">⚠️</span>
          <div>
            <h2 className="text-2xl font-bold mb-3">The Knowledge Decay Problem</h2>
            <div className="space-y-3 text-foreground/70 text-sm leading-relaxed">
              <p>
                Most knowledge systems — wikis, Notion databases, Obsidian vaults — become digital
                graveyards within 90 days. Without active maintenance, information goes stale and
                the system becomes more burden than benefit.
              </p>
              <p>
                A well-built second brain solves this with automated maintenance: scheduled
                re-indexing, link checking, decay detection, and periodic synthesis that keeps the
                system fresh without manual effort.
              </p>
              <p className="text-foreground/50 italic">
                The difference between a living brain and a digital graveyard is a single design
                decision: does the system maintain itself?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Human-in-the-Loop */}
      <div className="gradient-card p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold mb-4">The Human-in-the-Loop Principle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              A second brain amplifies your intelligence — it doesn&apos;t replace your judgment.
              The right model is: AI handles the mechanical labor (first drafts, organizing,
              pattern-finding), and you apply the nuance, values, and contextual judgment that
              no system can replicate.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              The trap is <strong className="text-foreground">delegating understanding</strong> — letting
              the AI form your beliefs for you. The second brain should make you a better thinker,
              not a passive consumer of AI-generated conclusions.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: 'AI handles', item: 'Capture, organization, first drafts, pattern-finding' },
              { label: 'You handle', item: 'Judgment, nuance, values, final decisions' },
              { label: 'Together', item: 'Decisions grounded in full context, made with human wisdom' },
            ].map((row) => (
              <div key={row.label} className="flex gap-3 text-sm">
                <span className="text-primary font-semibold w-20 flex-shrink-0">{row.label}</span>
                <span className="text-foreground/60">{row.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Now */}
      <div className="gradient-card p-10 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Now?</h2>
        <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
          <p>
            People have kept journals, notes, and filing systems for centuries. What changed is the
            AI layer — large language models that can read your entire knowledge base, understand
            context, make connections, and take actions.
          </p>
          <p>
            The tools that make this possible — Claude, local LLMs, vector databases, autonomous
            agents — became accessible to non-engineers in 2024–2025. The barrier to building a
            genuinely intelligent personal system dropped dramatically.
          </p>
          <p>
            And 42% of Gen Z knowledge workers report weekly information overwhelm. The volume of
            information keeps growing. The only sustainable response is a system that scales with
            you — not one that requires more manual effort as it grows.
          </p>
          <p>
            The compound advantage is real: a second brain that has been learning your domain for
            two years is vastly more valuable than one started yesterday.{' '}
            <strong className="text-foreground">The best time to start was last year. The second best time is today.</strong>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
          Follow along with JARVIS being built in public, or explore the workflows, frameworks, and
          resources to build your own second brain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/case-studies"
            className="inline-block px-8 py-4 bg-white !text-black hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            See JARVIS in Action
          </Link>
          <a
            href="https://www.youtube.com/@byrddynasty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            ▶ Watch on YouTube
          </a>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#1e3a5f] text-white hover:bg-[#2a4a75] rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

    </div>
  )
}
