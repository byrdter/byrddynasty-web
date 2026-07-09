import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
      {/* Header */}
      <header className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[color:var(--gold)] hover:underline mb-8 text-sm"
        >
          ← Back to Writing
        </Link>

        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="rounded-full bg-[color:var(--gold)]/10 px-3 py-1 text-xs font-medium text-[color:var(--gold)]">
            {post.category}
          </span>
          <span className="text-[color:var(--cream-faint)]" style={{ fontFamily: 'var(--font-mono)' }}>{post.readTime}</span>
          <span className="text-[color:var(--cream-faint)]">·</span>
          <span className="text-[color:var(--cream-faint)]">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl leading-[1.08] mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-[color:var(--cream-dim)] leading-relaxed">
          {post.excerpt}
        </p>

        <p className="mt-6 text-sm text-[color:var(--cream-faint)]">By {post.author}</p>
      </header>

      {/* Content */}
      <div className="prose-cream max-w-none text-lg">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: ({ ...props }) => (
              <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-2xl font-bold mt-5 mb-2" {...props} />
            ),
            p: ({ ...props }) => (
              <p className="text-foreground/80 mb-4 leading-relaxed" {...props} />
            ),
            ul: ({ ...props }) => (
              <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/80" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/80" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="ml-4" {...props} />
            ),
            a: ({ ...props }) => (
              <a className="text-primary hover:underline" {...props} />
            ),
            code: ({ ...props }) => (
              <code className="bg-card px-2 py-1 rounded text-sm font-mono text-primary" {...props} />
            ),
            pre: ({ ...props }) => (
              <pre className="bg-card p-4 rounded-lg overflow-x-auto mb-4 border border-card-border" {...props} />
            ),
            blockquote: ({ ...props }) => (
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/70" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 pt-8 border-t border-[color:var(--border)]">
        <div className="panel text-center p-8">
          <h2 className="text-2xl mb-3">Keep exploring</h2>
          <p className="text-[color:var(--cream-dim)] mb-6">
            New essays and videos on the choices shaping AI — three times a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="rounded-full bg-[color:var(--gold)] px-6 py-3 font-semibold text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] transition-colors"
            >
              Get email updates
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-[color:var(--border)] px-6 py-3 text-[color:var(--cream)] hover:border-[color:var(--gold)]/50 transition-colors"
            >
              More writing
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
