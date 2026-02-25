export default function RealitySection() {
  const topics = [
    {
      title: "What is Agentic AI?",
      description: "Discover autonomous AI systems that can plan, use tools, and adapt—transforming how we build intelligent applications that think and act independently.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "The Future is Agentic",
      description: "In 5 years, agentic AI will power everything from personalized healthcare to autonomous research—creating a world where AI collaborates with us as true partners.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Leading Frameworks",
      description: "Master today's most powerful agentic frameworks—LangGraph, CrewAI, AutoGen, Bedrock, Pydantic AI—and build systems that define tomorrow's AI landscape.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Agentic AI Matters
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            The AI revolution isn't just about large language models—it's about building autonomous systems that can think, plan, and execute like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl"
            >
              <div className="mb-6">{topic.icon}</div>
              <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
              <p className="text-foreground/70">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
