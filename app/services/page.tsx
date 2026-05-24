import Link from 'next/link'

const services = [
  {
    icon: '/images/icon-concrete.png',
    title: 'Concrete',
    desc: 'From driveways and sidewalks to foundations and decorative flatwork, we handle all types of concrete projects with precision.',
    items: ['Driveways & Parking Lots', 'Slabs & Foundations', 'Sidewalks & Walkways', 'Retaining Walls', 'Decorative Concrete', 'Concrete Repair'],
  },
  {
    icon: '/images/icon-earthworks.png',
    title: 'Earthworks',
    desc: 'Precision land grading, excavation, and site preparation — ensuring proper drainage and a solid foundation for any project.',
    items: ['Residential Grading', 'Commercial Site Grading', 'Excavation', 'Drainage Correction', 'Lot Leveling', 'Subgrade Preparation'],
  },
]

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        <div className="stripe-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Our Services</h1>
          <div className="section-divider w-24" />
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center py-16 ${i !== services.length - 1 ? 'border-b border-white/5' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <img src={s.icon} alt={s.title} className="w-20 h-20 object-contain mb-5" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{s.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-8">{s.desc}</p>
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-black font-black px-7 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
                  Get a Quote
                </Link>
              </div>
              <div className={`bg-[#141414] border border-white/5 rounded-xl p-8 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-5">Includes</h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Not Sure What You Need?</h2>
        <p className="text-black/70 mb-8 text-lg">Call us or request a quote — we&apos;ll assess your project and recommend the right solution.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white font-black px-10 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
            Get a Free Quote
          </Link>
          <a href="tel:+15125551234" className="border-2 border-black text-black font-black px-10 py-4 rounded text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all inline-block">
            Call Now
          </a>
        </div>
      </section>
    </>
  )
}
