import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Site Preparation Services Austin TX',
  description:
    'RMG Construction provides residential and commercial site preparation in Austin, TX — clearing, grading, excavation, and subgrade work. Free estimates.',
  alternates: { canonical: '/services/site-preparation' },
  openGraph: {
    title: 'Site Preparation Services Austin TX | RMG Construction',
    description:
      'RMG Construction provides residential and commercial site preparation in Austin, TX — clearing, grading, excavation, and subgrade work. Free estimates.',
    images: [{ url: '/images/hero.jpg', alt: 'Site preparation by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Site Preparation', item: `${SITE.url}/services/site-preparation` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Site Preparation',
  serviceType: 'Site Preparation Services',
  description: 'Residential and commercial site preparation including clearing, grading, excavation, and subgrade compaction in Austin, TX and surrounding areas.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'Lot clearing and vegetation removal',
  'Rough grading and site leveling',
  'Excavation and soil management',
  'Drainage planning and swale construction',
  'Subgrade compaction and stabilization',
  'Access road and driveway preparation',
  'Site cleanup and debris disposal',
]

const process = [
  { step: '01', title: 'Site Evaluation', desc: 'We review your plans, walk the property, and assess existing conditions — soil type, drainage patterns, vegetation, and access — before developing a scope of work.' },
  { step: '02', title: 'Lot Clearing', desc: 'We remove vegetation, brush, and debris from the construction area, leaving a clean surface to work from.' },
  { step: '03', title: 'Rough Grading', desc: 'Heavy equipment moves and shapes the soil to establish the elevations and slopes specified in your grading plan.' },
  { step: '04', title: 'Excavation', desc: 'Where needed, we excavate for foundations, utilities, or drainage structures, managing spoil material on-site or hauling it off.' },
  { step: '05', title: 'Drainage Grading', desc: 'We shape the land to direct stormwater away from the structure and toward appropriate outlets, preventing future drainage problems.' },
  { step: '06', title: 'Subgrade Prep & Compaction', desc: 'The finished subgrade is compacted to the specification needed for your project, whether that is a concrete slab, a roadbase driveway, or a landscaped yard.' },
]

const faqs = [
  {
    q: 'What is included in site preparation?',
    a: 'Site preparation typically includes lot clearing, rough grading, excavation, drainage grading, and subgrade compaction. The exact scope depends on the project. A residential homesite preparation looks different from a commercial pad preparation — we scope each project individually.',
  },
  {
    q: 'How long does site preparation take?',
    a: 'A typical residential lot can be cleared, graded, and prepped in one to three days, depending on size and complexity. Larger or more complex sites may take longer. We will give you a realistic timeline during the estimate visit.',
  },
  {
    q: 'What comes after site preparation?',
    a: 'Site prep sets the stage for the next phase of your project. After grading and subgrade compaction, the site is ready for concrete foundations, driveway installation, roadbase, landscaping, or the contractor performing the next scope of work.',
  },
  {
    q: 'Do I need permits for site preparation in Austin?',
    a: 'Depending on the scope of work, grading permits and tree removal permits may be required in Austin and surrounding municipalities. We can help you understand what may apply to your project during the estimate. Final permit responsibility rests with the property owner, and we recommend confirming with your local municipality.',
  },
]

const related = [
  { title: 'Land Grading', href: '/services/land-grading' },
  { title: 'Roadbase Installation', href: '/services/roadbase-installation' },
  { title: 'Gravel Driveway Installation', href: '/services/gravel-driveways' },
]

export default function SitePreparation() {
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
            <span className="text-gray-300">Site Preparation</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Site Preparation Services in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Every successful construction project begins with a properly prepared site. RMG Construction handles the full scope of site prep — clearing, grading, excavation, and subgrade compaction — so your builder, landscaper, or next contractor starts with a solid foundation.
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
              src="/images/hero.jpg"
              alt="Site preparation and earthwork by RMG Construction in Austin TX"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Site Preparation Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Site Preparation</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Homebuilders and developers', desc: 'New construction starts with site prep. Getting the grade, drainage, and subgrade right before any structure goes up saves time and costly corrections later.' },
              { title: 'Homeowners adding a structure', desc: 'Adding a garage, workshop, barn, or ADU to your property? The site needs to be cleared, graded, and compacted before construction can begin.' },
              { title: 'Contractors needing a qualified earthwork partner', desc: 'We work alongside general contractors, concrete companies, and home builders as the earthwork phase of a larger project, taking site prep off your plate.' },
              { title: 'Rural property owners', desc: 'Clearing brush, managing drainage, and grading raw land for use — whether for a home, outbuildings, or agricultural purposes — starts here.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Site Preparation FAQs</h2>
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
