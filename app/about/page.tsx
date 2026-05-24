import Link from 'next/link'

const values = [
  { title: 'Quality First', desc: 'We never cut corners. Every project is completed to the highest standard, using premium materials and proven techniques.' },
  { title: 'On-Time Delivery', desc: 'We respect your time. Our crews show up when scheduled and finish projects on deadline.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. You get a detailed quote upfront so you always know what you\'re paying.' },
  { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind on every residential and commercial project.' },
]

const areas = ['Austin', 'San Marcos', 'Buda', 'Kyle', 'Bastrop', 'Round Rock', 'Georgetown', 'Surrounding Areas']

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        <div className="stripe-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">About RMG Construction</h1>
          <div className="section-divider w-24" />
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">A Decade of Excellence in Central Texas</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              RMG Construction was founded with a simple mission: deliver quality construction work that homeowners and businesses can trust. Over the past decade, we have grown from a small crew to one of Central Texas&apos;s most respected construction companies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We specialize in concrete work and earthworks — handling everything from residential driveways to large-scale commercial site preparation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every project, regardless of size, receives the same level of dedication and attention to detail. We treat your property like our own.
            </p>
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-black font-black px-8 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
              Get a Free Quote
            </Link>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-xl bg-[#141414] border border-white/5 flex items-center justify-center">
            <span className="text-gray-600 text-sm">[ Photo goes here ]</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Values</p>
            <h2 className="text-4xl font-black text-white">Why Choose RMG</h2>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-hover bg-[#141414] border border-white/5 rounded-xl p-8">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center mb-5">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Where We Work</p>
          <h2 className="text-4xl font-black text-white mb-12">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="bg-[#141414] border border-white/5 text-gray-300 font-medium text-sm px-5 py-2.5 rounded-full">
                {a}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8">Not sure if we serve your area? Give us a call — we may be able to help.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Ready to Work Together?</h2>
        <p className="text-black/70 mb-8 text-lg">Contact us today for a free, no-obligation estimate.</p>
        <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
          Get a Free Quote
        </Link>
      </section>
    </>
  )
}
