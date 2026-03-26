export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Build AI That Works?
        </h2>
        <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">
          Join our newsletter for weekly insights on building production-ready agentic AI systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/newsletter"
            className="inline-block px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4a75] transition-all hover:scale-105 shadow-lg"
          >
            Subscribe to Newsletter
          </a>
          <a
            href="https://youtube.com/@byrddynasty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#1e3a5f] text-white border border-card-border font-semibold rounded-lg hover:bg-[#2a4a75] transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
