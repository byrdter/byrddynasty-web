import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Companion essays to the Byrddynasty channel — long-reads on the human choices shaping AI, weighing both sides with the sources shown.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
      <div className="max-w-3xl mb-16">
        <p className="kicker mb-6">Writing</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          Essays for the long argument.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--cream-dim)] leading-relaxed">
          Companion long-reads to the channel — where a topic needs more room than a video to weigh
          both sides and lay out the evidence.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="panel p-12 text-center">
          <h2 className="text-2xl mb-3">First essays are on the way.</h2>
          <p className="text-[color:var(--cream-dim)] mb-8 max-w-lg mx-auto">
            Drop your email and we&apos;ll send the inaugural piece the moment it&apos;s published.
          </p>
          <div className="max-w-md mx-auto text-left">
            <EmailCapture source="writing-empty" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="panel h-full p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-full bg-[color:var(--gold)]/10 px-3 py-1 text-xs font-medium text-[color:var(--gold)]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[color:var(--cream-faint)]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl leading-snug group-hover:text-[color:var(--gold)] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-4 text-[color:var(--cream-dim)] line-clamp-3">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-[color:var(--cream-faint)]">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-[color:var(--gold)] group-hover:underline">Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-20 panel p-10 text-center">
        <h2 className="text-3xl mb-4">Don&apos;t miss an essay</h2>
        <p className="text-[color:var(--cream-dim)] mb-8 max-w-xl mx-auto">
          A short note when new writing and videos land. No noise.
        </p>
        <div className="max-w-md mx-auto text-left">
          <EmailCapture source="writing" />
        </div>
      </div>
    </div>
  )
}
