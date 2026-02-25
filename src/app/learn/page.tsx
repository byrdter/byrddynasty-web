export default function LearnPage() {
  const categories = [
    {
      title: "Foundation",
      description: "Essential concepts and patterns for building agentic AI systems",
      courses: [
        {
          title: "Introduction to Agentic AI",
          description: "Understand what makes AI systems autonomous and how to architect them",
          duration: "2 hours",
          level: "Beginner",
          type: "Course"
        },
        {
          title: "The Nine Essential Skills",
          description: "Master the complete framework for production-ready agentic AI",
          duration: "8 hours",
          level: "Intermediate",
          type: "Course"
        },
        {
          title: "Agent Framework Wars",
          description: "Compare LangGraph, CrewAI, AutoGen, OpenAI Swarm, Amazon Bedrock & Pydantic AI",
          duration: "90 min",
          level: "Intermediate",
          type: "Guide"
        }
      ]
    },
    {
      title: "Architecture & Orchestration",
      description: "Design patterns for multi-agent systems that scale",
      courses: [
        {
          title: "Multi-Agent Architecture Patterns",
          description: "Hierarchical, sequential, and parallel orchestration strategies",
          duration: "3 hours",
          level: "Intermediate",
          type: "Course"
        },
        {
          title: "State Management for Agents",
          description: "Build reliable state machines and coordination systems",
          duration: "2 hours",
          level: "Advanced",
          type: "Tutorial"
        },
        {
          title: "LangGraph Deep Dive",
          description: "Master stateful, multi-agent workflows with LangGraph",
          duration: "4 hours",
          level: "Intermediate",
          type: "Course"
        }
      ]
    },
    {
      title: "Memory & Context",
      description: "Build hybrid memory systems for long-term agent intelligence",
      courses: [
        {
          title: "Memory Systems Architecture",
          description: "Short-term, long-term, and semantic memory for agents",
          duration: "3 hours",
          level: "Intermediate",
          type: "Course"
        },
        {
          title: "RAG for Agentic Systems",
          description: "Implement retrieval-augmented generation for agent knowledge",
          duration: "2.5 hours",
          level: "Intermediate",
          type: "Tutorial"
        },
        {
          title: "Context Window Optimization",
          description: "Manage token budgets and optimize context for cost and performance",
          duration: "90 min",
          level: "Advanced",
          type: "Guide"
        }
      ]
    },
    {
      title: "Security & Governance",
      description: "Non-human identity, access control, and secure tool execution",
      courses: [
        {
          title: "Non-Human Identity Management",
          description: "OAuth, API keys, and identity patterns for autonomous agents",
          duration: "2 hours",
          level: "Intermediate",
          type: "Course"
        },
        {
          title: "Secure Tool Engineering",
          description: "Build safe, validated capabilities for agent interaction",
          duration: "3 hours",
          level: "Advanced",
          type: "Course"
        },
        {
          title: "Agent Security Patterns",
          description: "Prevent prompt injection, data leakage, and unauthorized actions",
          duration: "2.5 hours",
          level: "Advanced",
          type: "Tutorial"
        }
      ]
    },
    {
      title: "Observability & Debugging",
      description: "Monitor, trace, and debug complex agentic workflows",
      courses: [
        {
          title: "Observability for Agentic AI",
          description: "Implement tracing, logging, and monitoring for agent systems",
          duration: "3 hours",
          level: "Intermediate",
          type: "Course"
        },
        {
          title: "LangSmith & LangFuse",
          description: "Production observability tools for LLM applications",
          duration: "2 hours",
          level: "Intermediate",
          type: "Tutorial"
        },
        {
          title: "Debugging Multi-Agent Systems",
          description: "Strategies for finding and fixing issues in complex workflows",
          duration: "90 min",
          level: "Advanced",
          type: "Guide"
        }
      ]
    },
    {
      title: "Production Deployment",
      description: "Deploy, scale, and maintain agentic AI in production",
      courses: [
        {
          title: "Production Architecture",
          description: "Infrastructure patterns for reliable, scalable agent systems",
          duration: "4 hours",
          level: "Advanced",
          type: "Course"
        },
        {
          title: "CI/CD for AI Systems",
          description: "Automated testing, versioning, and deployment pipelines",
          duration: "2.5 hours",
          level: "Intermediate",
          type: "Tutorial"
        },
        {
          title: "Cost Optimization Strategies",
          description: "Reduce LLM costs while maintaining performance",
          duration: "90 min",
          level: "Intermediate",
          type: "Guide"
        }
      ]
    }
  ]

  const levelColors = {
    Beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
    Intermediate: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Advanced: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  }

  const typeIcons = {
    Course: '📚',
    Tutorial: '🎯',
    Guide: '📖'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Learn Production-Ready Agentic AI
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
          Master the Nine Essential Skills framework through comprehensive courses, tutorials,
          and guides. From architecture to deployment, everything you need to build AI systems
          that work in production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/newsletter"
            className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Free Weekly Lessons
          </a>
          <a
            href="https://youtube.com/@byrddynasty"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:border-primary transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Learning Path */}
      <div className="mb-16 p-8 bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">🎓 Recommended Learning Path</h2>
        <div className="space-y-3 text-foreground/80">
          <p className="flex items-start gap-3">
            <span className="text-primary font-bold">1.</span>
            <span>Start with <strong>Introduction to Agentic AI</strong> to understand core concepts</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-primary font-bold">2.</span>
            <span>Master <strong>The Nine Essential Skills</strong> framework</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-primary font-bold">3.</span>
            <span>Deep dive into specific skills based on your project needs</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-primary font-bold">4.</span>
            <span>Build production systems with <strong>Production Deployment</strong> courses</span>
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-16">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-foreground/60">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className="p-6 bg-card border border-card-border rounded-xl hover:border-primary transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{typeIcons[course.type as keyof typeof typeIcons]}</span>
                    <span className={`px-3 py-1 text-xs font-medium border rounded-full ${levelColors[course.level as keyof typeof levelColors]}`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/50">{course.type}</span>
                    <span className="text-foreground/50">⏱️ {course.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center p-8 bg-card border border-card-border rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Join thousands of AI engineers and tech leads building production-ready agentic AI systems.
          Get weekly lessons, code examples, and early access to new courses.
        </p>
        <a
          href="/newsletter"
          className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Subscribe to Newsletter
        </a>
      </div>
    </div>
  )
}
