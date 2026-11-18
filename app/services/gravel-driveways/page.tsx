import type { Metadata } from 'next'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Gravel Driveway Installation Austin TX',
  description:
    'RMG Construction installs gravel and crushed limestone driveways across Austin, TX. Durable, affordable, professionally graded. Request a free estimate.',
  alternates: { canonical: '/services/gravel-driveways' },
  openGraph: {
    title: 'Gravel Driveway Installation Austin TX | RMG Construction',
    description:
      'RMG Construction installs gravel and crushed limestone driveways across Austin, TX. Durable, affordable, professionally graded. Request a free estimate.',
    images: [{ url: '/images/Driveway After.jpg', alt: 'Gravel driveway installation by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Gravel Driveway Installation', item: `${SITE.url}/services/gravel-driveways` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gravel Driveway Installation',
  serviceType: 'Gravel Driveway Installation',
  description: 'Professional gravel and crushed limestone driveway installation in Austin, TX and surrounding areas.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'On-site assessment and grading plan',
  'Land clearing and debris removal if needed',
  'Subgrade preparation and compaction',
  'Proper drainage and crown grading',
  'Crushed limestone or gravel delivery and spreading',
  'Final grading and site cleanup',
]

const process = [
  { step: '01', title: 'Free On-Site Estimate', desc: 'We visit your property, assess the existing conditions, and give you a clear, no-obligation estimate.' },
  { step: '02', title: 'Site Preparation', desc: 'We clear vegetation, remove old material, and grade the subbase to create a stable foundation.' },
  { step: '03', title: 'Base Compaction', desc: 'The subgrade is compacted with heavy equipment to prevent settling and rutting down the road.' },
  { step: '04', title: 'Gravel Installation', desc: 'We deliver and spread your chosen gravel — typically crushed limestone or caliche — to the proper depth and profile.' },
  { step: '05', title: 'Final Grading & Cleanup', desc: 'We crown the driveway for drainage, clean up the site, and walk through the finished job with you.' },
]

const faqs = [
  {
    q: 'What type of gravel is best for driveways in Texas?',
    a: 'Crushed limestone is the most popular choice in Central Texas. It compacts well, drains effectively, and holds up to Texas heat. Caliche and decomposed granite are also common options depending on the look and budget you have in mind.',
  },
  {
    q: 'How deep should gravel be for a driveway?',
    a: 'A properly built gravel driveway typically needs 4 to 6 inches of compacted material. We grade the subbase first so the gravel layer sits on a stable foundation — skipping this step is the main reason driveways develop ruts and potholes quickly.',
  },
  {
    q: 'How long does a gravel driveway last?',
    a: 'With proper installation and occasional top-dressing every few years, a gravel driveway can last indefinitely. The key is a well-prepared base and good drainage so water does not undercut the material.',
  },
  {
    q: 'Can you install a gravel driveway on a slope?',
    a: 'Yes. Sloped driveways require careful attention to drainage and crown grading to prevent washout. We factor grade and runoff into every installation plan to keep your driveway in place after heavy rain.',
  },
]

const related = [
  { title: 'Driveway Repair', href: '/services/driveway-repair' },
  { title: 'Roadbase Installation', href: '/services/roadbase-installation' },
  { title: 'Land Grading', href: '/services/land-grading' },
]

export default function GravelDriveways() {
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
            <span className="text-gray-300">Gravel Driveways</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks &amp; Driveways</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Gravel Driveway Installation in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            A well-built gravel driveway is one of the most durable and cost-effective surface choices for homes and rural properties in Central Texas. RMG Construction handles everything from site prep to final grading, so your new driveway looks great and stands up to the elements.
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

      {/* BEFORE / AFTER */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden">
            <BeforeAfterSlider
              before="/images/Driveway Before.jpg"
              after="/images/Driveway After.jpg"
            />
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Gravel Driveway Installation</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Homeowners replacing an old driveway', desc: 'If your existing driveway is rutted, full of potholes, or has poor drainage, a fresh installation with proper base work gives you a driveway that performs correctly from day one.' },
              { title: 'Rural and acreage property owners', desc: 'Gravel is a practical and affordable choice for long driveways, farm roads, and rural access lanes where concrete or asphalt would be cost-prohibitive.' },
              { title: 'New home construction', desc: 'Need a driveway in place before the house is finished? We work with builders and homeowners to install driveways at any stage of construction.' },
              { title: 'Anyone looking for a low-maintenance surface', desc: 'Gravel requires minimal upkeep compared to concrete or asphalt. Occasional top-dressing and regrading is typically all that is needed to keep it in good shape.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Gravel Driveway FAQs</h2>
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
