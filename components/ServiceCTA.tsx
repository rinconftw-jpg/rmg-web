import Link from 'next/link'
import { SITE } from '@/lib/siteData'

export default function ServiceCTA() {
  return (
    <section className="bg-[#F4E7C9] py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Ready to Get Started?</h2>
      <p className="text-black/70 mb-8 text-lg max-w-xl mx-auto">
        Contact us today for a free, no-obligation estimate. We serve Austin and surrounding areas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="bg-black hover:bg-zinc-900 text-white font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block"
        >
          Get a Free Estimate
        </Link>
        <a
          href={SITE.phoneLink}
          className="border-2 border-black text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all inline-block"
        >
          Call {SITE.phone}
        </a>
      </div>
    </section>
  )
}
