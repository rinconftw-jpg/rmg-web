import type { Metadata } from 'next'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { SITE, SERVICES } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'RMG Construction | Driveways & Grading Austin TX',
  description:
    'Gravel driveway installation, driveway repairs, land grading, roadbase and asphalt millings in Austin, TX and surrounding areas. Request a free estimate.',
  alternates: { canonical: '/' },
}

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '8', label: 'Cities Served' },
  { value: '100%', label: 'Licensed & Insured' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] sm:h-screen min-h-[500px] sm:min-h-[640px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="RMG Construction driveway project in Austin TX"
          className="hero-bg absolute inset-0 w-full h-full object-cover object-[30%_center] sm:object-center"
        />
        <div className="stripe-overlay absolute inset-0 z-[1]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4E7C9] to-transparent z-[3]" />

        <div className="relative z-[4] text-center px-4 max-w-4xl mx-auto">
          <h1 className="fade-up-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4 tracking-tight">
            <span className="text-[#F4E7C9]">RMG</span>{' '}
            <span className="text-[#F4E7C9]">CONSTRUCTION</span>
          </h1>
          <p className="fade-up-2 text-white text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-3 leading-snug">
            Driveway Installation &amp; Land Grading in Austin, TX
          </p>
          <p className="fade-up-3 text-[#F4E7C9] text-xs font-bold tracking-[0.35em] uppercase mb-10">
            Serving Austin &amp; Surrounding Areas
          </p>
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center px-2">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black font-black px-8 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-lg shadow-white/20"
            >
              Get a Free Estimate
            </Link>
            <a
              href={SITE.phoneLink}
              className="bg-[#1a1a1a] border border-white/10 hover:border-[#F4E7C9]/50 text-[#F4E7C9] font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Services</h2>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-hover bg-[#141414] border border-white/5 rounded-xl p-8 flex flex-col gap-4 group">
                <div className="w-10 h-10 bg-[#F4E7C9]/10 border border-[#F4E7C9]/30 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#F4E7C9] rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#F4E7C9] transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link href={s.href} className="text-[#F4E7C9] text-sm font-semibold hover:underline mt-auto">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-white hover:bg-gray-100 text-black font-black px-8 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#F4E7C9] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black text-black mb-1">{s.value}</div>
              <div className="text-xs font-bold text-black/60 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built on Quality.<br />Driven by Results.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              RMG Construction has been delivering quality driveway and earthwork services across Central Texas for over a decade. From gravel driveway installation and land grading to roadbase and site preparation, we bring the same professionalism to every job.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Fully licensed and insured, with transparent pricing, on-time completion, and work that lasts.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#F4E7C9] font-bold hover:gap-4 transition-all">
              About Us <span>&rarr;</span>
            </Link>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-xl overflow-hidden">
            <BeforeAfterSlider
              before="/images/Driveway Before.jpg"
              after="/images/Driveway After.jpg"
            />
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">What Our Clients Say</h2>
          <div className="section-divider w-24 mx-auto mb-10" />
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-10 flex flex-col items-center gap-6">
            <div className="text-[#F4E7C9] text-5xl leading-none">&ldquo;</div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              See what homeowners across Austin and Central Texas say about our work on Google.
            </p>
            <div className="flex items-center gap-1 text-[#F4E7C9]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <a
              href={SITE.gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black font-black px-8 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105"
            >
              Read Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
        <div className="stripe-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4E7C9]/5 via-transparent to-[#F4E7C9]/5" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-10 text-lg">Contact us today for a free, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-lg shadow-white/20"
            >
              Get a Free Estimate
            </Link>
            <a
              href={SITE.phoneLink}
              className="bg-[#1a1a1a] border border-white/10 hover:border-[#F4E7C9]/50 text-[#F4E7C9] font-bold px-10 py-4 rounded text-sm tracking-widest uppercase transition-all"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
