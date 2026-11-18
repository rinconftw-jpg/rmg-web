import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Asphalt Millings Driveway Austin TX',
  description:
    'RMG Construction installs recycled asphalt millings driveways in Austin, TX. A durable, low-cost alternative to gravel. Get a free estimate today.',
  alternates: { canonical: '/services/asphalt-millings' },
  openGraph: {
    title: 'Asphalt Millings Driveway Austin TX | RMG Construction',
    description:
      'RMG Construction installs recycled asphalt millings driveways in Austin, TX. A durable, low-cost alternative to gravel. Get a free estimate today.',
    images: [{ url: '/images/Driveway After.jpg', alt: 'Asphalt millings driveway installation by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Asphalt Millings', item: `${SITE.url}/services/asphalt-millings` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asphalt Millings Driveway Installation',
  serviceType: 'Asphalt Millings Installation',
  description: 'Recycled asphalt millings driveway installation in Austin, TX and surrounding areas. A durable, affordable surface for residential and rural driveways.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'Site and subbase assessment',
  'Proper base grading and compaction',
  'Asphalt millings delivery and spreading',
  'Compaction to activate the natural binding agent',
  'Crown grading for drainage',
  'Final cleanup and inspection',
]

const process = [
  { step: '01', title: 'Site Assessment', desc: 'We evaluate your existing surface, drainage conditions, and base stability before recommending a material depth and installation plan.' },
  { step: '02', title: 'Base Preparation', desc: 'The subbase is graded and compacted to give the millings a stable, well-drained foundation. This step is critical for longevity.' },
  { step: '03', title: 'Millings Delivery', desc: 'Recycled asphalt millings are delivered to your site in the quantity needed for proper coverage depth.' },
  { step: '04', title: 'Spreading & Compaction', desc: 'We spread the millings evenly, then compact them with heavy equipment. Heat from compaction activates the natural asphalt binder, bonding the material together.' },
  { step: '05', title: 'Final Grading', desc: 'The driveway is crowned for drainage and edges are cleaned up. The surface continues to firm up over the first few weeks with sunlight and use.' },
]

const faqs = [
  {
    q: 'What are asphalt millings?',
    a: 'Asphalt millings are pieces of recycled pavement ground up when roads or parking lots are resurfaced. Rather than going to a landfill, the material is reused as a driveway and road surface. It contains the original asphalt binder, which re-activates under heat and compaction, giving the surface a semi-bound feel.',
  },
  {
    q: 'Are asphalt millings a good choice for driveways?',
    a: 'Yes, particularly for homeowners who want a firmer, more stable surface than loose gravel but do not want the cost of new asphalt or concrete. Millings compact into a cohesive layer that handles vehicle traffic well and resists displacement better than conventional gravel.',
  },
  {
    q: 'Do asphalt millings harden over time?',
    a: 'Yes. The natural asphalt binder in the material re-activates with heat and compaction, causing the surface to firm up gradually. Sun exposure during warm Texas summers accelerates this process. The result is a surface that behaves more like pavement than loose material.',
  },
  {
    q: 'How long do asphalt millings driveways last?',
    a: 'With proper installation and compaction, an asphalt millings driveway can last many years with minimal maintenance. Periodic top-dressing may be needed in high-traffic areas over time.',
  },
]

const related = [
  { title: 'Gravel Driveway Installation', href: '/services/gravel-driveways' },
  { title: 'Roadbase Installation', href: '/services/roadbase-installation' },
  { title: 'Driveway Repair', href: '/services/driveway-repair' },
]

export default function AsphaltMillings() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        <div className="stripe-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#F4E7C9] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#F4E7C9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Asphalt Millings</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks &amp; Driveways</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Asphalt Millings Driveway Installation in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Asphalt millings offer a practical middle ground between loose gravel and full pavement. They compact into a firm, stable surface, resist displacement, and cost significantly less than new concrete or asphalt. RMG Construction installs asphalt millings driveways throughout the Austin area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-black font-black px-8 py-4 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block">
              Get a Free Estimate
            </Link>
            <a href={SITE.phoneLink} className="bg-transparent border border-white/20 hover:border-[#F4E7C9]/50 text-[#F4E7C9] font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all inline-block">
              Call {SITE.phone}
            </a>
          </div>
          <div className="section-divider w-24 mt-10" />
        </div>
      </section>

      {/* INCLUDES + PHOTO */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Provide</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">What&apos;s Included</h2>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="w-5 h-5 bg-[#F4E7C9]/10 border border-[#F4E7C9]/30 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-[#F4E7C9] rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden">
            <img
              src="/images/Driveway After.jpg"
              alt="Completed driveway project by RMG Construction"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Installation Process</h2>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-[#141414] border border-white/5 rounded-xl p-8">
                <div className="text-[#F4E7C9] font-black text-3xl mb-4 opacity-40">{p.step}</div>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Is This Right for You?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Asphalt Millings</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Homeowners wanting a firmer surface', desc: 'If loose gravel migrates out of your driveway or gets tracked into your garage, millings are a great upgrade. They compact into a more cohesive surface that stays put.' },
              { title: 'Budget-conscious property owners', desc: 'Asphalt millings cost less than new asphalt or concrete while delivering a surface that performs similarly in many residential applications.' },
              { title: 'Eco-conscious homeowners', desc: 'Recycled asphalt millings divert material from landfills and reduce the need for newly mined aggregate — a sustainable choice for your driveway.' },
              { title: 'Rural and high-traffic driveways', desc: 'Long driveways and properties with heavy vehicle use benefit from the binding properties of millings, which reduce the ruts and displacement common with standard gravel.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#141414] border border-white/5 rounded-xl p-7">
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Common Questions</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Asphalt Millings FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/5 pb-6">
                <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-6">Related Services</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-[#141414] border border-white/5 rounded-xl p-6 text-white font-bold hover:border-[#F4E7C9]/30 hover:text-[#F4E7C9] transition-all group"
              >
                {r.title} <span className="ml-1 group-hover:ml-2 transition-all">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <ServiceCTA />
    </>
  )
}
