import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'RMG Construction offers gravel driveways, driveway repair, land grading, asphalt millings, roadbase installation, site preparation, and concrete work in Austin, TX.',
  alternates: { canonical: '/services' },
}

const earthworkServices = SERVICES

const concreteItems = [
  'Driveways & Parking Lots',
  'Slabs & Foundations',
  'Sidewalks & Walkways',
  'Retaining Walls',
  'Decorative Concrete',
  'Concrete Repair',
]

const earthworkItems = [
  'Residential Grading',
  'Commercial Site Grading',
  'Excavation',
  'Drainage Correction',
  'Lot Leveling',
  'Subgrade Preparation',
]

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        <div className="stripe-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            From gravel driveway installation and land grading to concrete work and site preparation — we handle the full range of earthwork and construction services for homeowners and builders across Central Texas.
          </p>
          <div className="section-divider w-24 mt-8" />
        </div>
      </section>

      {/* EARTHWORK & DRIVEWAY SERVICE CARDS */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks &amp; Driveways</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Driveway &amp; Grading Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {earthworkServices.map((s) => (
              <div key={s.href} className="card-hover bg-[#141414] border border-white/5 rounded-xl overflow-hidden flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
                  <img
                    src="/images/Driveway After.jpg"
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1 gap-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F4E7C9] transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="text-[#F4E7C9] text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCRETE SERVICE */}
      <section id="concrete" className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Concrete Work</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Concrete Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center py-10 border-t border-white/5">
            <div>
              <img src="/images/icon-concrete.png" alt="Concrete services" className="w-20 h-20 object-contain mb-5" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Concrete</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                From driveways and sidewalks to foundations and decorative flatwork, we handle all types of concrete projects with precision and professionalism.
              </p>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-black font-black px-7 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
                Get a Quote
              </Link>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-xl p-8">
              <h4 className="text-xs font-bold text-[#F4E7C9] uppercase tracking-widest mb-5">Includes</h4>
              <ul className="space-y-3">
                {concreteItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#F4E7C9] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EARTHWORKS SERVICE */}
          <div id="earthworks" className="grid md:grid-cols-2 gap-12 items-center py-10 border-t border-white/5">
            <div className="md:order-2">
              <img src="/images/icon-earthworks.png" alt="Earthworks services" className="w-20 h-20 object-contain mb-5" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Earthworks</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Precision land grading, excavation, and site preparation — ensuring proper drainage and a solid foundation for any project.
              </p>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-black font-black px-7 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
                Get a Quote
              </Link>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-xl p-8 md:order-1">
              <h4 className="text-xs font-bold text-[#F4E7C9] uppercase tracking-widest mb-5">Includes</h4>
              <ul className="space-y-3">
                {earthworkItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#F4E7C9] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4E7C9] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Not Sure What You Need?</h2>
        <p className="text-black/70 mb-8 text-lg">
          Call us or request a free estimate — we&apos;ll assess your project and recommend the right solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
            Get a Free Estimate
          </Link>
          <a href="tel:+15129956888" className="border-2 border-black text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all inline-block">
            Call (512) 995-6888
          </a>
        </div>
      </section>
    </>
  )
}
