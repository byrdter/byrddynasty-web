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
                'AI agents that learn your domain over time',
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

      {/* 6 Capabilities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">The 6 Core Capabilities</h2>
        <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">
          What a well-built second brain does for you — without you having to ask.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { n: '01', title: 'Memory Without Effort', body: 'Every idea, decision, conversation, and lesson is captured automatically. Nothing falls through the cracks.' },
            { n: '02', title: 'Proactive Reminders', body: 'The system surfaces relevant information at the moment you need it — not when you remember to search.' },
            { n: '03', title: 'Reflection & Growth', body: 'Regular synthesis of your experiences creates an ongoing record of how your thinking evolves — and where to course-correct.' },
            { n: '04', title: 'Automation of the Mundane', body: 'Repetitive tasks, routine decisions, and recurring workflows are delegated to agents that execute them reliably.' },
            { n: '05', title: 'Hidden Insights', body: "AI discovers patterns across your knowledge that you'd never find manually — connections between ideas separated by months or domains." },
            { n: '06', title: 'New Approaches', body: "Your second brain doesn't just store old thinking — it challenges it. Suggesting alternatives, spotting blind spots, proposing what you haven't considered." },
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
            { icon: '🧠', title: 'Cognitive Liberation', body: 'Stop caching, start thinking. When storage is handled, ideas flow faster.' },
            { icon: '📈', title: 'Compound Knowledge', body: 'Every note you add makes the system more valuable. Two years in > two weeks in.' },
            { icon: '⚡', title: 'Automated Routines', body: 'Morning reviews, research synthesis, follow-up reminders — run without touching them.' },
            { icon: '🔮', title: 'Serendipitous Discovery', body: 'A note from 18 months ago becomes relevant today — and the system tells you.' },
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
          captures what your team knows — and makes it available to every person, every agent, forever.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🚀', title: 'Faster Onboarding', body: 'New hires access the full context behind every process and decision from day one.' },
            { icon: '⚖️', title: 'Consistent Decisions', body: 'AI surfaces relevant precedents before decisions are made. Teams stop reinventing the wheel.' },
            { icon: '🤖', title: 'AI-Agent Readiness', body: 'Autonomous agents need persistent memory to learn your domain. Your second brain provides it.' },
            { icon: '🔍', title: 'Cross-Domain Insights', body: 'AI discovers patterns across departments that no individual could see.' },
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
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
        >
          Explore Done-For-You Services →
        </Link>
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
            The tools that make this possible — Claude, GPT-4, local LLMs, vector databases,
            autonomous agents — became accessible to non-engineers in 2024–2025. The barrier to
            building a genuinely intelligent personal system dropped dramatically.
          </p>
          <p>
            The compound advantage is real: a second brain that has been learning your domain for
            two years is vastly more valuable than one you started yesterday.{' '}
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
