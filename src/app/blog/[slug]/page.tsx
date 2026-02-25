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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <header className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-sm text-foreground/50">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-foreground/70 mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 text-sm text-foreground/60">
          <span>By {post.author}</span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
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
      <div className="mt-16 pt-8 border-t border-card-border">
        <div className="text-center p-8 bg-card border border-card-border rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-foreground/70 mb-6">
            Get weekly insights on building production-ready agentic AI delivered to your inbox.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/newsletter"
              className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:border-primary transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
