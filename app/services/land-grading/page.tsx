import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Land Grading Services Austin TX',
  description:
    'Professional land grading and yard leveling in Austin, TX. RMG Construction corrects drainage issues, levels properties, and preps sites. Free estimates.',
  alternates: { canonical: '/services/land-grading' },
  openGraph: {
    title: 'Land Grading Services Austin TX | RMG Construction',
    description:
      'Professional land grading and yard leveling in Austin, TX. RMG Construction corrects drainage issues, levels properties, and preps sites. Free estimates.',
    images: [{ url: '/images/hero.jpg', alt: 'Land grading services by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Land Grading', item: `${SITE.url}/services/land-grading` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Land Grading',
  serviceType: 'Land Grading Services',
  description: 'Residential and commercial land grading, yard leveling, and drainage correction in Austin, TX and surrounding areas.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'Residential yard grading and leveling',
  'Drainage swale grading and flow path correction',
  'Site preparation grading for new construction',
  'Rough grading and lot clearing',
  'Finish grading for landscaping or sod',
  'Subgrade preparation for concrete flatwork',
  'Cut and fill work to establish proper grade',
]

const process = [
  { step: '01', title: 'Site Evaluation', desc: 'We walk the property with you, assess existing drainage patterns, identify low spots, and develop a grading plan suited to your goals.' },
  { step: '02', title: 'Rough Grading', desc: 'Heavy equipment moves soil to establish the general slope and elevation needed for proper drainage away from structures.' },
  { step: '03', title: 'Cut & Fill Work', desc: 'We cut high spots and fill low areas, balancing material on-site where possible to control costs.' },
  { step: '04', title: 'Drainage Swales', desc: 'Where needed, we shape drainage channels and swales to direct water safely away from the house and toward appropriate outlets.' },
  { step: '05', title: 'Finish Grading', desc: 'The final pass smooths the surface to your spec — ready for landscaping, sod, concrete, or the next phase of construction.' },
]

const faqs = [
  {
    q: 'When do I need land grading?',
    a: 'The most common sign you need grading is water pooling near your foundation or in low spots in your yard after rain. Other situations include preparing land for a new structure, correcting soil erosion, or leveling a lot before landscaping or sod installation.',
  },
  {
    q: 'What is the difference between rough grading and finish grading?',
    a: 'Rough grading establishes the general slope and elevations — it is the heavy earthmoving phase. Finish grading is the final smoothing pass that prepares the surface for whatever comes next, whether that is sod, concrete, or landscaping. Many projects require both.',
  },
  {
    q: 'Will grading fix my drainage problem?',
    a: 'In most cases, yes. Drainage issues are almost always caused by improper slope or low spots that trap water. Regrading the land to direct flow away from structures and toward appropriate outlets is typically the most effective long-term solution.',
  },
  {
    q: 'Do I need a permit to grade my yard in Austin?',
    a: 'It depends on the scope of work and how much soil is being moved. Some residential grading projects in Austin require a grading permit from the City. We can help you understand what permits may apply to your specific project during the estimate.',
  },
]

const related = [
  { title: 'Site Preparation', href: '/services/site-preparation' },
  { title: 'Driveway Repair', href: '/services/driveway-repair' },
  { title: 'Gravel Driveway Installation', href: '/services/gravel-driveways' },
]

export default function LandGrading() {
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
            <span className="text-gray-300">Land Grading</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Land Grading Services in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Proper grading is the foundation of a healthy yard and a safe home. Whether you are dealing with water pooling near your foundation, preparing a lot for construction, or just want to level out a yard, RMG Construction has the equipment and experience to get the grade right.
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
          <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden">
            <img
              src="/images/hero.jpg"
              alt="Land grading and earthwork by RMG Construction"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Grading Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Land Grading</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Homeowners with drainage problems', desc: 'Water pooling against your foundation is not just an inconvenience — it can cause long-term structural damage. Proper grading directs water away and protects your home.' },
              { title: 'Property owners preparing for construction', desc: 'Any new structure — house, garage, shed, or addition — needs a properly graded site before work begins. Getting the grade right now prevents costly corrections later.' },
              { title: 'Anyone installing sod or landscaping', desc: 'A flat, properly graded yard is the starting point for quality landscaping. Grading before sod installation prevents uneven turf and water problems down the road.' },
              { title: 'Rural and acreage property owners', desc: 'Large properties often develop erosion channels and low spots over time. Land grading restores a uniform surface and controls water movement across the property.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Land Grading FAQs</h2>
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
