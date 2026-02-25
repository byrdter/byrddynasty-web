export default function RealitySection() {
  const problems = [
    {
      title: "Fragile Infrastructure",
      description: "Your demo works perfectly until the first edge case hits production. Then everything falls apart.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: "Hallucination Hell",
      description: "LLMs generate plausible but wrong answers. Without proper grounding and validation, your users lose trust fast.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Security Nightmares",
      description: "Prompt injection, data leaks, unauthorized actions. One vulnerability and your agentic system becomes a liability.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Most AI Projects Never Make It to Production
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            90% of AI projects fail - not because the AI isn't smart enough, but because the infrastructure isn't ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl"
            >
              <div className="mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-foreground/70">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
