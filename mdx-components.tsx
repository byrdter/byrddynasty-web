import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-foreground/80 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/80">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/80">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:underline">{children}</a>
    ),
    code: ({ children }) => (
      <code className="bg-card px-2 py-1 rounded text-sm font-mono text-primary">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card p-4 rounded-lg overflow-x-auto mb-4 border border-card-border">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/70">{children}</blockquote>
    ),
    ...components,
  }
}
