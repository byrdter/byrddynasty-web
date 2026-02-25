import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              byrddynasty
            </Link>
            <p className="mt-4 text-sm text-foreground/60">
              Learn to Build & Deploy Real-World Agentic AI Applications
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/60 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-foreground/60 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-sm text-foreground/60 hover:text-primary">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/newsletter" className="text-sm text-foreground/60 hover:text-primary">
                  Newsletter
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/@byrddynasty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-primary"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="text-center text-sm text-foreground/40">
            © {currentYear} byrddynasty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
