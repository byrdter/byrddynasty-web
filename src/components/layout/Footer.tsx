import Link from 'next/link'

const YOUTUBE = 'https://youtube.com/@byrddynasty'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-[color:var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="text-xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
              Byrddynasty
            </Link>
            <p className="mt-4 max-w-sm text-2xl leading-snug text-[color:var(--cream)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Technology is neutral.<br />
              <span className="text-[color:var(--gold)]">Choices aren&apos;t.</span>
            </p>
            <p className="mt-4 text-sm text-[color:var(--cream-faint)]">
              Exploring the human choices that shape AI&apos;s impact on work, society, and meaning.
            </p>
          </div>

          <div>
            <h3 className="kicker mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[color:var(--cream-dim)]">
              <li><Link href="/" className="hover:text-[color:var(--cream)]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[color:var(--cream)]">About</Link></li>
              <li><Link href="/blog" className="hover:text-[color:var(--cream)]">Writing</Link></li>
              <li><Link href="/contact" className="hover:text-[color:var(--cream)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="kicker mb-4">Follow</h3>
            <ul className="space-y-2.5 text-sm text-[color:var(--cream-dim)]">
              <li>
                <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)]">
                  YouTube — @byrddynasty
                </a>
              </li>
              <li><Link href="/newsletter" className="hover:text-[color:var(--cream)]">Email updates</Link></li>
              <li><Link href="/contact" className="hover:text-[color:var(--cream)]">Speaking &amp; press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[color:var(--cream-faint)]">
            © {year} Byrddynasty · Dr. Terry Byrd. All rights reserved.
          </p>
          <p className="text-xs text-[color:var(--cream-faint)]" style={{ fontFamily: 'var(--font-mono)' }}>
            Explore, don&apos;t predict.
          </p>
        </div>
      </div>
    </footer>
  )
}
