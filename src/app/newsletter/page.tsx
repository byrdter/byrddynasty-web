'use client'

import { useState } from 'react'

const leakQuestions = [
  {
    id: 'capture',
    label: 'Capture',
    question: 'How often do you lose a good idea because you had no fast way to capture it?',
    options: ['Rarely — I have a system', 'Sometimes — a few times a week', 'Often — daily', 'Constantly — ideas evaporate'],
  },
  {
    id: 'organize',
    label: 'Organize',
    question: 'How would you describe your current notes/files setup?',
    options: ['Clean and findable', 'Decent but could be better', 'Messy — hard to find things', 'Total chaos'],
  },
  {
    id: 'retrieve',
    label: 'Retrieve',
    question: 'When you need something you saved weeks ago, what happens?',
    options: ['I find it quickly', 'Takes a few minutes of searching', 'I often give up and recreate it', 'I rarely find it'],
  },
  {
    id: 'automate',
    label: 'Automate',
    question: 'How much of your routine knowledge work is automated?',
    options: ['A lot — agents handle it', 'Some basic things', 'Almost none', 'None'],
  },
]

const blueprints: Record<string, { title: string; description: string; tools: string[]; next: string }> = {
  strong: {
    title: 'Optimizer',
    description: 'Your system is solid. The next move is adding proactive intelligence — agents that surface insights and automate workflows without you asking.',
    tools: ['GraphRAG for deep connection-finding', 'n8n for workflow automation', 'Claude + MCP for vault-level AI'],
    next: 'Build the Factory layer — automation and proactive agents.',
  },
  capture_gap: {
    title: 'Capturer',
    description: 'Ideas are slipping through the cracks. Your highest-leverage fix is a frictionless capture system — voice memos that auto-transcribe, a single inbox, and zero manual tagging.',
    tools: ['Audionotes (voice → structured notes)', 'Readwise Reader (web + PDF highlights)', 'Obsidian as the single inbox'],
    next: 'Start with the Library layer — capture first, organize later.',
  },
  organize_gap: {
    title: 'Organizer',
    description: "You're capturing but drowning in it. AI-powered organization using the PARA method will turn your pile of notes into a retrievable knowledge base.",
    tools: ['Obsidian + AI tagging plugins', 'PARA method implementation', 'Semantic search setup'],
    next: 'Implement PARA and automate the Organize step of CODE.',
  },
  default: {
    title: 'Builder',
    description: "You're starting from scratch — which is actually the best position. You can build the right architecture from the ground up without inheriting bad habits.",
    tools: ['Obsidian (local-first storage)', 'NotebookLM (first AI + docs experience)', 'n8n for first automations'],
    next: 'Start with the 7 Core Subsystems — Memory Layer first.',
  },
}

function getBlueprint(answers: string[]): typeof blueprints[string] {
  const allGood = answers.filter(a => a === '0').length >= 3
  if (allGood) return blueprints.strong

  const captureScore = answers[0]
  const organizeScore = answers[1]

  if (captureScore === '3' || captureScore === '2') return blueprints.capture_gap
  if (organizeScore === '3' || organizeScore === '2') return blueprints.organize_gap
  return blueprints.default
}

export default function NewsletterPage() {
  const [answers, setAnswers] = useState<string[]>(Array(leakQuestions.length).fill(''))
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState<'audit' | 'email' | 'result'>('audit')
  const [blueprint, setBlueprint] = useState<typeof blueprints[string] | null>(null)

  const allAnswered = answers.every(a => a !== '')

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = getBlueprint(answers)
    setBlueprint(result)
    setStage('email')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: send email + blueprint to backend
    setStage('result')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {stage === 'audit' && (
        <>
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Free · 2 Minutes
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Second Brain{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Audit
              </span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Answer four questions about your current &ldquo;information leaks&rdquo; — forgotten ideas,
              messy folders, repetitive emails — and get a personalized Second Brain Blueprint
              recommending exactly what to build first.
            </p>
          </div>

          <form onSubmit={handleAuditSubmit} className="space-y-8">
            {leakQuestions.map((q, qi) => (
              <div key={q.id} className="gradient-card p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">
                    {q.label}
                  </span>
                  <span className="text-xs text-foreground/40">{qi + 1} of {leakQuestions.length}</span>
                </div>
                <p className="font-semibold mb-4">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <label
                      key={oi}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-all ${
                        answers[qi] === String(oi)
                          ? 'border-primary/60 bg-primary/10'
                          : 'border-card-border hover:border-primary/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={String(oi)}
                        checked={answers[qi] === String(oi)}
                        onChange={() => {
                          const updated = [...answers]
                          updated[qi] = String(oi)
                          setAnswers(updated)
                        }}
                        className="accent-primary"
                      />
                      <span className="text-sm text-foreground/80">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={!allAnswered}
              className="w-full px-8 py-4 bg-white !text-black hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Get My Second Brain Blueprint →
            </button>
          </form>
        </>
      )}

      {stage === 'email' && blueprint && (
        <>
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Audit Complete
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Your Blueprint is Ready
            </h1>
            <p className="text-foreground/70 text-lg">
              Based on your answers, you&rsquo;re a <strong className="text-foreground">{blueprint.title}</strong>.
              Enter your email to unlock the full blueprint.
            </p>
          </div>

          <div className="gradient-card p-8 rounded-xl mb-8 opacity-60 blur-[2px] select-none pointer-events-none">
            <h2 className="text-xl font-bold mb-3">Your Recommended Stack</h2>
            <div className="space-y-2">
              {blueprint.tools.map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-foreground/60">
                  <span className="text-primary">→</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-6 py-4 bg-card border border-card-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white !text-black hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Unlock My Blueprint →
            </button>
            <p className="text-center text-xs text-foreground/40">
              No spam. Unsubscribe anytime. You&rsquo;ll also get weekly second brain insights.
            </p>
          </form>
        </>
      )}

      {stage === 'result' && blueprint && (
        <>
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">🧠</div>
            <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Your Blueprint
            </div>
            <h1 className="text-4xl font-bold mb-4">
              You&rsquo;re a{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {blueprint.title}
              </span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Check your inbox — your full blueprint is on its way. Here&rsquo;s your quick-start summary:
            </p>
          </div>

          <div className="gradient-card p-8 rounded-xl mb-8">
            <h2 className="text-xl font-bold mb-4">Your Situation</h2>
            <p className="text-foreground/70 leading-relaxed mb-6">{blueprint.description}</p>

            <h3 className="font-bold mb-3 text-primary">Recommended Tools</h3>
            <ul className="space-y-2 mb-6">
              {blueprint.tools.map(t => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="text-primary font-bold">→</span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="bg-card/50 border border-primary/20 rounded-xl p-4">
              <span className="text-xs text-primary font-semibold">Your Next Move</span>
              <p className="text-sm text-foreground/70 mt-1">{blueprint.next}</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-foreground/60 text-sm">Ready to start building?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@byrddynasty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                ▶ Watch the Build Series
              </a>
              <a
                href="/frameworks"
                className="inline-block px-8 py-4 bg-[#1e3a5f] text-white hover:bg-[#2a4a75] rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Study the Frameworks
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
