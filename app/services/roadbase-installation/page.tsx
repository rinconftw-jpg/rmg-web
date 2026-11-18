import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCTA from '@/components/ServiceCTA'
import ServiceAreas from '@/components/ServiceAreas'
import { SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Roadbase Installation Austin TX',
  description:
    'RMG Construction spreads and compacts crushed limestone roadbase for driveways and access roads in Austin, TX. Proper base = lasting results. Free quote.',
  alternates: { canonical: '/services/roadbase-installation' },
  openGraph: {
    title: 'Roadbase Installation Austin TX | RMG Construction',
    description:
      'RMG Construction spreads and compacts crushed limestone roadbase for driveways and access roads in Austin, TX. Proper base = lasting results. Free quote.',
    images: [{ url: '/images/Driveway After.jpg', alt: 'Roadbase installation by RMG Construction in Austin TX' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Roadbase Installation', item: `${SITE.url}/services/roadbase-installation` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roadbase Installation',
  serviceType: 'Roadbase Installation',
  description: 'Crushed limestone roadbase spreading and compaction for driveways, access roads, and construction sites in Austin, TX and surrounding areas.',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+15129956888', url: SITE.url },
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
}

const includes = [
  'Site and sub-base evaluation',
  'Crushed limestone roadbase material delivery',
  'Spreading to specified depth and width',
  'Heavy equipment compaction',
  'Crown and drainage grading',
  'Final surface inspection and cleanup',
]

const process = [
  { step: '01', title: 'Site Evaluation', desc: 'We assess the existing surface, soil conditions, and drainage to determine the right base depth and material specification for your project.' },
  { step: '02', title: 'Sub-base Preparation', desc: 'Any soft spots or unstable areas are addressed before the roadbase goes down. A stable sub-base is what makes a roadbase driveway last.' },
  { step: '03', title: 'Material Delivery', desc: 'Crushed limestone roadbase is delivered to your property in the quantity needed to achieve proper coverage depth across the entire driveway or road.' },
  { step: '04', title: 'Spreading', desc: 'We spread the material evenly using a blade to maintain consistent depth and proper cross-slope for drainage.' },
  { step: '05', title: 'Compaction', desc: 'Heavy compaction equipment presses the base into a dense, load-bearing layer. Proper compaction is what separates a long-lasting base from one that shifts under traffic.' },
]

const faqs = [
  {
    q: 'What is roadbase?',
    a: 'Roadbase — sometimes written as road base or flex base — is a mixture of crushed limestone, fine particles, and aggregate that compacts into a dense, load-bearing surface. It is widely used in Texas as a driveway and road surface and as a stable foundation layer under other materials like gravel or asphalt millings.',
  },
  {
    q: 'What is the difference between roadbase and gravel?',
    a: 'Standard gravel consists of uniformly sized loose rock that does not bind together. Roadbase is a graded mixture of coarse and fine crushed limestone that compacts into a cohesive, almost pavement-like layer. Roadbase is denser, more load-bearing, and less prone to displacement than loose gravel.',
  },
  {
    q: 'How thick should roadbase be for a residential driveway?',
    a: 'Most residential driveways benefit from 4 to 6 inches of compacted roadbase. Heavier use — trucks, trailers, farm equipment — may warrant a deeper base. We will recommend the right depth based on your specific situation during the estimate.',
  },
  {
    q: 'Can heavy vehicles park on roadbase?',
    a: 'Yes. Properly compacted roadbase handles heavy vehicle loads well. It is commonly used on farm and ranch properties, construction staging areas, and commercial access roads precisely because of its load-bearing capacity.',
  },
]

const related = [
  { title: 'Gravel Driveway Installation', href: '/services/gravel-driveways' },
  { title: 'Asphalt Millings', href: '/services/asphalt-millings' },
  { title: 'Site Preparation', href: '/services/site-preparation' },
]

export default function RoadbaseInstallation() {
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
            <span className="text-gray-300">Roadbase Installation</span>
          </nav>
          <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Earthworks &amp; Driveways</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Roadbase Installation in Austin, TX
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            A strong driveway or access road starts with a properly installed base. Crushed limestone roadbase, spread and compacted correctly, provides a dense, load-bearing foundation that keeps driveways firm and stable — whether used as a finished surface or as a base layer under gravel or asphalt millings.
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
              src="/images/Driveway After.jpg"
              alt="Completed roadbase driveway by RMG Construction"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Who Benefits from Roadbase Installation</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'New driveway installations', desc: 'Roadbase is the ideal foundation layer for any new gravel or millings driveway. Starting with a properly compacted base means your surface stays in place and drains correctly from the start.' },
              { title: 'Farm and ranch roads', desc: 'Rural roads and access lanes that handle regular equipment traffic need the load-bearing strength that only a properly compacted base can provide.' },
              { title: 'Construction staging areas', desc: 'Builders and contractors need stable surfaces for equipment access. Roadbase can be installed quickly to create a drivable surface during active construction.' },
              { title: 'Homeowners replacing soft or sunken driveways', desc: 'If your existing driveway is soft, spongy, or sinking, the sub-base may have failed. Fresh roadbase restores the structural foundation beneath the surface.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Roadbase FAQs</h2>
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
