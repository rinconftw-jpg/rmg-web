import Link from 'next/link'

const services = [
  { icon: '🏗️', title: 'Concrete', desc: 'Driveways, slabs, foundations, flatwork, and decorative concrete for residential and commercial projects.' },
  { icon: '🚜', title: 'Grading', desc: 'Land grading, leveling, and site preparation to ensure proper drainage and a stable foundation.' },
  { icon: '💥', title: 'Demolition', desc: 'Safe and efficient demolition of structures, concrete, and debris removal for any size project.' },
  { icon: '🌲', title: 'Land Clearing', desc: 'Complete land clearing, brush removal, tree clearing, and site cleanup for development-ready lots.' },
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '8', label: 'Cities Served' },
  { value: '100%', label: 'Licensed & Insured' },
]

const testimonials = [
  { name: 'James M.', text: 'RMG did an outstanding job on our driveway. Professional, on time, and the quality exceeded our expectations. Will definitely hire again.' },
  { name: 'Lisa R.', text: 'They cleared our entire lot in one day. Great communication, fair pricing, and left the site spotless. Highly recommend.' },
  { name: 'Carlos T.', text: 'From grading to concrete work, RMG handled everything seamlessly. The crew was professional and the results were perfect.' },
]

const areas = ['Austin', 'San Marcos', 'Buda', 'Kyle', 'Bastrop', 'Round Rock', 'Georgetown']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Animated ken-burns background */}
        <div className="hero-bg absolute inset-0 z-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="stripe-overlay absolute inset-0 z-[1]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent z-[3]" />

        <div className="relative z-[4] text-center px-6 max-w-4xl mx-auto">
          <p className="fade-up-1 text-orange-500 text-xs font-bold tracking-[0.35em] uppercase mb-5">
            Serving Austin &amp; Surrounding Areas
          </p>
          <h1 className="fade-up-2 text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-5 tracking-tight">
            <span className="text-white">RMG</span>{' '}
            <span className="text-shimmer">CONSTRUCTION</span>
          </h1>
          <p className="fade-up-3 text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-3 leading-relaxed">
            Concrete · Grading · Demolition · Land Clearing
          </p>
          <p className="fade-up-4 text-gray-500 text-sm mb-10">
            {areas.join(' · ')} &amp; Surrounding Areas
          </p>
          <div className="fade-up-5 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
              Get a Free Quote
            </Link>
            <a href="tel:+15125551234" className="border border-white/20 hover:border-orange-500/60 text-white font-bold px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:bg-white/5">
              Call Now
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
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Services</h2>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover bg-[#141414] border border-white/5 rounded-xl p-8 flex flex-col gap-4 group">
                <span className="text-4xl">{s.icon}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link href="/services" className="text-orange-500 text-sm font-semibold hover:underline mt-auto">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange-500 py-16 px-6">
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
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built on Quality.<br />Driven by Results.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              RMG Construction has been delivering top-quality construction services across Central Texas for over a decade. From small residential jobs to large commercial projects, we bring the same professionalism to every site.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Fully licensed and insured, with transparent pricing, on-time completion, and craftsmanship that lasts.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all">
              About Us <span>→</span>
            </Link>
          </div>
          {/* Replace with <Image> when assets are ready */}
          <div className="relative h-80 md:h-[420px] rounded-xl overflow-hidden bg-[#141414] border border-white/5 flex items-center justify-center">
            <span className="text-gray-600 text-sm">[ Photo goes here ]</span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">What Our Clients Say</h2>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-[#141414] border border-white/5 rounded-xl p-8 flex flex-col gap-4">
                <div className="text-orange-500 text-3xl leading-none">&ldquo;</div>
                <p className="text-gray-300 leading-relaxed text-sm flex-1">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-black text-black text-sm">{t.name[0]}</div>
                  <span className="font-semibold text-white text-sm">{t.name}</span>
                  <div className="ml-auto text-orange-400 text-xs tracking-wider">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
        <div className="stripe-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-10 text-lg">Contact us today for a free, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-lg shadow-orange-500/20">
              Get a Free Quote
            </Link>
            <a href="tel:+15125551234" className="border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-10 py-4 rounded text-sm tracking-widest uppercase transition-all">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
