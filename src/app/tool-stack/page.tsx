import Link from 'next/link'

export const metadata = {
  title: 'Second Brain Tech Stack | Byrddynasty',
  description: 'The 2026 tech stack for building an AI-powered second brain — storage, intelligence, automation, and interface layers.',
}

const categories = [
  {
    layer: '01',
    name: 'Storage Layer',
    description: 'Where your knowledge lives. Local-first and private by default — your data never leaves your control.',
    tools: [
      {
        name: 'Obsidian',
        pricing: 'Free',
        badge: 'Most Popular',
        use: 'Local-first markdown notes with bidirectional linking and plugin ecosystem. The foundation for a privacy-first second brain.',
        bestFor: 'Individuals who want full control',
      },
      {
        name: 'Anytype',
        pricing: 'Free / $10/mo',
        badge: 'Open Source',
        use: 'Encrypted, local-first knowledge base with rich objects (not just notes). Built-in graph view and relation system.',
        bestFor: 'Structured knowledge with privacy',
      },
      {
        name: 'Notion',
        pricing: 'Free / $10/mo',
        badge: 'Cloud',
        use: 'Flexible workspace for teams. Easier to share and collaborate — trades local privacy for accessibility.',
        bestFor: 'Teams and collaborative knowledge bases',
      },
    ],
  },
  {
    layer: '02',
    name: 'Intelligence Layer',
    description: 'The AI that reads, reasons, and retrieves across your knowledge base. This is what transforms storage into a second brain.',
    tools: [
      {
        name: 'Claude',
        pricing: '$20/mo (Pro)',
        badge: 'Recommended',
        use: 'Long context window (200K tokens) — can reason across your entire knowledge base at once. Best for synthesis and deep analysis.',
        bestFor: 'Complex synthesis and long documents',
      },
      {
        name: 'GraphRAG',
        pricing: 'Open source',
        badge: 'Advanced',
        use: 'Graph-based Retrieval-Augmented Generation. Finds relationships between disparate data points — the "hidden connections" engine.',
        bestFor: 'Deep pattern finding across large knowledge bases',
      },
      {
        name: 'NotebookLM',
        pricing: 'Free',
        badge: 'Beginner Friendly',
        use: 'Google\'s research assistant. Upload PDFs, notes, and transcripts — chat with your sources. Easy entry point for RAG.',
        bestFor: 'Getting started with AI + your own documents',
      },
    ],
  },
  {
    layer: '03',
    name: 'Automation Layer',
    description: 'Where knowing becomes doing. Workflows that execute based on context — triggered by your second brain, not by you.',
    tools: [
      {
        name: 'n8n',
        pricing: 'Free (self-hosted)',
        badge: 'Recommended',
        use: 'Open-source workflow automation. Self-hosted means your data stays private. Used by JARVIS to power automated knowledge workflows.',
        bestFor: 'Privacy-conscious builders who want full control',
      },
      {
        name: 'Make.com',
        pricing: '$0–$29/mo',
        badge: 'Visual',
        use: 'Visual workflow builder with 1,000+ app integrations. Easier to start than n8n — slightly less flexible at the edges.',
        bestFor: 'Non-technical builders needing fast automation',
      },
      {
        name: 'Lindy',
        pricing: '$20–50/mo',
        badge: 'No-Code AI',
        use: 'Build AI agents that live in your workflow — email triage, scheduling, research synthesis. No code required.',
        bestFor: 'Individuals wanting AI agents without coding',
      },
    ],
  },
  {
    layer: '04',
    name: 'Interface Layer',
    description: 'How you interact with your second brain. The best interface is one that fits into where you already work.',
    tools: [
      {
        name: 'Perplexity',
        pricing: 'Free / $20/mo',
        badge: 'Real-Time',
        use: 'Grounds your second brain in live web data. Ask questions that require current information — bridges your private knowledge with the public web.',
        bestFor: 'Research and real-time knowledge grounding',
      },
      {
        name: 'Obsidian + MCP',
        pricing: 'Free',
        badge: 'Advanced',
        use: 'Connect Claude directly to your Obsidian vault via Model Context Protocol. Chat with your notes without leaving your local environment.',
        bestFor: 'Privacy-first local AI interaction',
      },
      {
        name: 'Slack / Telegram Bot',
        pricing: 'Free',
        badge: 'Conversational',
        use: 'Deploy your second brain as a chat bot in tools you already use. Ask it questions, trigger workflows, get proactive updates.',
        bestFor: 'Teams wanting shared AI knowledge access',
      },
    ],
  },
  {
    layer: '05',
    name: 'Capture Layer',
    description: 'The entry points into your second brain. Frictionless capture is what keeps the system alive — if it\'s hard to add, you stop adding.',
    tools: [
      {
        name: 'Audionotes',
        pricing: '$10/mo',
        badge: 'Voice First',
        use: 'AI-native voice memo app. Speak your thoughts, get structured notes with summaries and action items automatically.',
        bestFor: 'Voice-first capture and Vibe-to-Workflow',
      },
      {
        name: 'Readwise Reader',
        pricing: '$8/mo',
        badge: 'Reading',
        use: 'Capture highlights from web articles, PDFs, ebooks, and newsletters. Syncs to Obsidian, Notion, and other tools.',
        bestFor: 'Readers and researchers',
      },
      {
        name: 'Day One',
        pricing: '$35/yr',
        badge: 'Journaling',
        use: 'AI-powered journaling with mood tracking, pattern analysis, and insight reports. Best-in-class for personal reflection.',
        bestFor: 'Personal reflection and growth tracking',
      },
    ],
  },
]

export default function ToolStackPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            2026 Stack
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The Second Brain{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Five layers, organized by function. Privacy-focused by default. Every tool here is
            used in production second brains — including JARVIS.
          </p>
          <Link
            href="/second-brain"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            ← What Is a Second Brain?
          </Link>
        </div>
      </section>

      {/* Stack Architecture Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-5xl mx-auto gradient-card p-6 rounded-xl">
          <p className="text-sm text-foreground/50 text-center mb-4 font-medium">The Five Layers</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['01 Storage', '02 Intelligence', '03 Automation', '04 Interface', '05 Capture'].map((layer) => (
              <span key={layer} className="bg-primary/10 border border-primary/20 text-primary text-sm px-4 py-2 rounded-full font-medium">
                {layer}
              </span>
            ))}
          </div>
          <p className="text-xs text-center text-foreground/40 mt-4">
            A complete second brain needs all five layers. Most people start with Storage + Intelligence and add from there.
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {categories.map((category) => (
            <div key={category.layer}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-primary/20">{category.layer}</span>
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>
                <p className="text-foreground/60 max-w-2xl">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="gradient-card p-6 rounded-xl flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                        {tool.badge}
                      </span>
                    </div>
                    <div className="text-primary font-bold mb-3">{tool.pricing}</div>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4 flex-1">{tool.use}</p>
                    <div className="pt-4 border-t border-card-border">
                      <span className="text-xs text-foreground/40">Best for: </span>
                      <span className="text-xs text-foreground/60">{tool.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JARVIS stack callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto gradient-card p-8 rounded-xl border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Live Implementation</div>
              <h2 className="text-2xl font-bold mb-3">What JARVIS Uses</h2>
              <p className="text-foreground/70 text-sm mb-4">
                JARVIS — the second brain built in public on this channel — runs on a specific
                subset of this stack. Bun + SQLite for the runtime, Claude for intelligence,
                n8n-style automation via custom agents, and Obsidian as the knowledge vault.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors text-sm"
              >
                See the Full JARVIS Stack →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Storage', value: 'SQLite + Obsidian' },
                { label: 'Intelligence', value: 'Claude (Anthropic)' },
                { label: 'Automation', value: 'Custom agents (Bun)' },
                { label: 'Interface', value: 'React + CLI' },
              ].map((item) => (
                <div key={item.label} className="bg-card/50 border border-card-border rounded-xl p-4">
                  <div className="text-xs text-foreground/40 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground/80">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-sm text-foreground/40">
          <p>
            Some links on this page may be affiliate links. We only recommend tools used in real second brain builds.
          </p>
        </div>
      </section>
    </div>
  )
}
