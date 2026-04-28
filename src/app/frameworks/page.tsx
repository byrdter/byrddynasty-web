import Link from 'next/link'

export const metadata = {
  title: 'Second Brain Frameworks | Byrddynasty',
  description: 'Proven frameworks for building an AI-powered second brain — CODE, PARA, Three Operating Rooms, and the 7 Core Subsystems.',
}

const frameworks = [
  {
    id: 'code',
    badge: 'Foundation',
    audience: 'Personal & SME',
    name: 'The CODE Framework',
    tagline: 'Capture → Organize → Distill → Express',
    description: 'Originally developed by Tiago Forte, CODE is the foundational workflow for any second brain. AI transforms every step — especially Distill, which was historically the bottleneck that killed most PKM systems.',
    steps: [
      { letter: 'C', label: 'Capture', desc: 'Everything, frictionlessly. Voice memos, web clips, PDFs, emails. "Capture everything, organize nothing" initially — friction kills the habit.' },
      { letter: 'O', label: 'Organize', desc: 'By utility, not origin. AI routes content into the PARA structure automatically — no manual tagging required. The system structures itself.' },
      { letter: 'D', label: 'Distill', desc: 'AI synthesizes 100 notes, a 60-minute transcript, or a 30-page document into actionable insight in seconds. This is where most manual systems fail — and where AI wins.' },
      { letter: 'E', label: 'Express', desc: 'Never start blank. Assemble pre-distilled building blocks. Write faster, decide better, create from a foundation instead of from scratch.' },
    ],
    useCase: 'Individuals and knowledge workers',
  },
  {
    id: 'para',
    badge: 'Organization',
    audience: 'Personal & Organizational',
    name: 'The PARA Method',
    tagline: 'Projects · Areas · Resources · Archives',
    description: 'PARA organizes everything you capture by time horizon and actionability — not by subject or source. It is the organizational backbone of the CODE framework, now automated by AI tagging.',
    steps: [
      { letter: 'P', label: 'Projects', desc: 'Deadline-driven outcomes. Active work with a defined end state. These get your attention now. Days to weeks.' },
      { letter: 'A', label: 'Areas', desc: 'Ongoing responsibilities with no end date — health, finances, team management, professional development. Always alive.' },
      { letter: 'R', label: 'Resources', desc: 'Topics of ongoing interest — reference material, research, reading lists. You access these when relevant, not constantly.' },
      { letter: 'A', label: 'Archives', desc: 'Completed projects and inactive items. AI search makes archiving safe — nothing is truly lost, just out of the way.' },
    ],
    useCase: 'Knowledge base organization at any scale',
  },
  {
    id: 'operating-rooms',
    badge: 'Architecture',
    audience: 'Personal & Organizational',
    name: 'Three Operating Rooms',
    tagline: 'Library → Lab → Factory',
    description: 'Every well-built second brain has three zones. Most people only build the first one — the filing cabinet. The Factory is where knowledge stops being passive and starts driving action.',
    steps: [
      { letter: '📚', label: 'The Library', desc: 'Capture & Storage. AI-native ingestion from voice memos, web clips, PDFs, emails, and meeting transcripts — without manual tagging. Where information enters the system.' },
      { letter: '🔬', label: 'The Lab', desc: 'Insights & Discovery. Knowledge graphs, semantic search, and pattern recognition surface relationships between ideas you could never find manually. Where connections are made.' },
      { letter: '🏭', label: 'The Factory', desc: 'Automation & Action. Where knowing becomes doing. Agents live inside your knowledge base and execute tasks — triggered by context, not by you.' },
    ],
    useCase: 'Designing a complete second brain architecture',
  },
  {
    id: 'subsystems',
    badge: 'Technical',
    audience: 'Builders',
    name: 'The 7 Core Subsystems',
    tagline: 'The minimum viable architecture for a living second brain',
    description: "Both Cole Medin's conversational second brain and JARVIS converged on the same seven subsystems — strong evidence this is the right architecture pattern regardless of implementation style or language.",
    steps: [
      { letter: '1', label: 'Memory Layer', desc: 'Store, index, and retrieve everything. SQLite + full-text search as the baseline; vector embeddings for semantic similarity.' },
      { letter: '2', label: 'Ingestion Pipeline', desc: 'Bring new information into the system from wherever you already work — APIs, web crawlers, file uploads, voice transcription.' },
      { letter: '3', label: 'Proactive Intelligence', desc: 'Monitor and alert autonomously via scheduled heartbeat jobs. The system runs whether you ask or not.' },
      { letter: '4', label: 'Reflection Agent', desc: 'Curate and distill over time. Daily/weekly synthesis promotes key insights to long-term memory and prunes noise.' },
      { letter: '5', label: 'Chat Interface', desc: 'Conversational access to your knowledge — Slack bot, local web UI, or CLI. How you ask the brain questions.' },
      { letter: '6', label: 'Skills System', desc: 'Extend capabilities via markdown-based SKILL files. Add new behaviors without touching the core codebase.' },
      { letter: '7', label: 'Scheduler', desc: 'Prevent knowledge decay. Weekly re-index, link checking, staleness detection. What separates a living brain from a digital graveyard.' },
    ],
    useCase: 'Builders implementing their own second brain',
  },
]

export default function FrameworksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            How to Build Right
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Second Brain{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Frameworks
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Proven frameworks for building an AI-powered second brain — from the foundational CODE
            workflow to the seven subsystems that separate a living brain from a digital graveyard.
          </p>
          <Link
            href="/second-brain"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            ← Back to What Is a Second Brain?
          </Link>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {frameworks.map((framework) => (
            <div key={framework.id} id={framework.id} className="scroll-mt-24">
              <div className="gradient-card p-8 rounded-xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary/10 border border-primary/30 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {framework.badge}
                  </span>
                  <span className="text-xs text-foreground/40 border border-foreground/10 px-3 py-1 rounded-full">
                    {framework.audience}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-2">{framework.name}</h2>
                <p className="text-primary font-semibold mb-4">{framework.tagline}</p>
                <p className="text-foreground/70 mb-8">{framework.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {framework.steps.map((step, i) => (
                    <div key={i} className="bg-card/50 border border-card-border rounded-xl p-5 flex gap-4">
                      <div className="text-2xl font-black text-primary/30 flex-shrink-0 w-8 leading-none">
                        {step.letter}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{step.label}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-card-border flex items-center gap-2 text-sm text-foreground/50">
                  <span>Best for:</span>
                  <span className="text-foreground/70">{framework.useCase}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center gradient-card p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">See These Frameworks in Practice</h2>
          <p className="text-foreground/60 mb-8">
            JARVIS implements all of these frameworks. Watch it being built from scratch on YouTube,
            or explore the case study to see how they fit together in a real system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 bg-white !text-black hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              See JARVIS Case Study
            </Link>
            <a
              href="https://www.youtube.com/@byrddynasty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
