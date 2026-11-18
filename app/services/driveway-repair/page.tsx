import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Driveway Repair Austin TX',
  description:
    'RMG Construction repairs gravel driveways in Austin, TX — regrading, resurfacing, pothole repair, and drainage correction. Request a free estimate today.',
  alternates: { canonical: '/services/driveway-repair' },
  openGraph: {
    title: 'Driveway Repair Austin TX | RMG Construction',
    description:
      'RMG Construction repairs gravel driveways in Austin, TX — regrading, resurfacing, pothole repair, and drainage correction. Request a free estimate today.',
    images: [{ url: '/images/Driveway Before.jpg', alt: 'Driveway repair by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Driveway Repair', item: `${SITE.url}/services/driveway-repair` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Driveway Repair',
  serviceType: 'Driveway Repair',
  description: 'Gravel driveway regrading, resurfacing, pothole repair, and drainage correction in Austin, TX and surrounding areas.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'Driveway assessment and grading evaluation',
  'Removal of loose, damaged, or displaced material',
  'Regrading and re-leveling the base',
  'Pothole and rut repair',
  'Fresh gravel or roadbase top-dressing',
  'Drainage correction and crown re-establishment',
  'Compaction and final cleanup',
]

const process = [
  { step: '01', title: 'Driveway Assessment', desc: 'We walk the driveway with you, identify problem areas — potholes, ruts, washouts, poor drainage — and explain what repair work makes sense.' },
  { step: '02', title: 'Remove Damaged Material', desc: 'Loose and displaced material is cleared out or redistributed to create a clean base to work from.' },
  { step: '03', title: 'Regrade the Base', desc: 'We re-establish the proper grade and crown so water sheds to the edges rather than pooling in the middle of the driveway.' },
  { step: '04', title: 'Add Fresh Material', desc: 'New gravel or roadbase is spread and compacted to restore the surface to its original depth and profile.' },
  { step: '05', title: 'Final Inspection', desc: 'We check drainage flow, smooth out the surface, and make sure the repaired driveway is ready for everyday use.' },
]

const faqs = [
  {
    q: 'How do I know if my driveway needs repair or full replacement?',
    a: 'Most gravel driveways can be repaired rather than replaced. If the base is still intact and the problem is surface ruts, potholes, or washouts, repair is typically the right call. If the base has completely failed, drainage is severely compromised, or the material has been almost entirely displaced, a fresh installation may be more cost-effective long-term.',
  },
  {
    q: 'What causes a gravel driveway to wash out or rut?',
    a: 'The most common causes are poor initial drainage, an improperly crowned surface that lets water pool in the middle, inadequate compaction of the base, or simply heavy use over time. Heavy rain events can accelerate erosion on drives that were not graded for proper runoff.',
  },
  {
    q: 'How often should a gravel driveway be regraded?',
    a: 'Most driveways benefit from a fresh regrading every two to five years, depending on use and weather. After heavy rain seasons or if you notice new ruts and potholes forming, it is worth having us take a look.',
  },
  {
    q: 'How long does driveway repair typically take?',
    a: 'Most residential driveway repairs can be completed in a single day. Longer driveways or those with significant drainage issues may take a little longer. We will give you a realistic timeline during the estimate.',
  },
]

const related = [
  { title: 'Gravel Driveway Installation', href: '/services/gravel-driveways' },
  { title: 'Roadbase Installation', href: '/services/roadbase-installation' },
  { title: 'Land Grading', href: '/services/land-grading' },
]

export default function DrivewayRepair() {
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
            <span className="text-gray-300">Driveway Repair</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks &amp; Driveways</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Driveway Repair Services in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Potholes, ruts, washouts, and poor drainage are common problems for gravel driveways in Central Texas. RMG Construction restores your driveway to a smooth, properly graded surface — often in a single day.
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
              src="/images/Driveway Before.jpg"
              alt="Gravel driveway before repair by RMG Construction"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-black px-3 py-1 rounded tracking-widest uppercase">
              Before Repair
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Repair Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Driveway Repair</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Homeowners after a wet season', desc: 'Heavy Texas rains can wash out material and create deep ruts almost overnight. Repair work restores proper drainage before the problem gets worse.' },
              { title: 'Properties with high vehicle traffic', desc: 'Regular use from trucks, trailers, or multiple vehicles displaces gravel faster. Periodic regrading keeps the surface smooth and drivable.' },
              { title: 'Driveways with standing water', desc: 'If water puddles in the middle or along the edges after rain, your driveway needs re-crowning. Left alone, standing water will continue to erode the base.' },
              { title: 'Anyone putting a property on the market', desc: 'A clean, well-maintained driveway improves curb appeal and helps buyers feel confident about the condition of your property.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Driveway Repair FAQs</h2>
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
