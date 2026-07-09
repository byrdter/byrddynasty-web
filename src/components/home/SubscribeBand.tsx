import EmailCapture from '@/components/EmailCapture'

const YOUTUBE = 'https://youtube.com/@byrddynasty'

export default function SubscribeBand() {
  return (
    <section className="relative z-10 border-t border-[color:var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <p className="kicker mb-6">Join the exploration</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          Think alongside us.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[color:var(--cream-dim)] leading-relaxed">
          Subscribe on YouTube for every new exploration, or drop your email and we&apos;ll tell you
          when the important ones land.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <EmailCapture source="home" />
        </div>

        <div className="mt-8">
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold)] hover:underline"
          >
            Or subscribe on YouTube — @byrddynasty →
          </a>
        </div>
      </div>
    </section>
  )
}
