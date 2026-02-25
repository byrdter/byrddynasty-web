import { getAllPosts, getAllCategories } from '@/lib/blog'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Agentic AI Blog
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          In-depth articles on building production-ready agentic AI systems. From architecture
          patterns to real-world implementations.
        </p>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 bg-primary text-background font-medium rounded-full hover:bg-primary/90 transition-colors">
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-card border border-card-border text-foreground font-medium rounded-full hover:border-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Blog Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-2xl font-bold mb-4">No posts yet</h2>
          <p className="text-foreground/60 mb-8">
            We're working on some amazing content. Check back soon!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/newsletter"
              className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe for Updates
            </Link>
            <Link
              href="/learn"
              className="px-6 py-3 bg-card border border-card-border text-foreground font-semibold rounded-lg hover:border-primary transition-colors"
            >
              Explore Learning Content
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full p-6 bg-card border border-card-border rounded-xl hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-4 text-sm text-foreground/50">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/50">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-primary group-hover:underline">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-20 text-center p-8 bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Don't Miss an Article</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Get weekly insights on building production-ready agentic AI delivered straight to your inbox.
        </p>
        <Link
          href="/newsletter"
          className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </div>
  )
}
