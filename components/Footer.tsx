import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/siteData'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-black text-sm tracking-wide">
                RMG <span className="text-[#F4E7C9]">CONSTRUCTION</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Quality driveway and earthwork services across Central Texas. Licensed &amp; insured.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-500 hover:text-[#F4E7C9] text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-gray-500 hover:text-[#F4E7C9] text-sm transition-colors">
                  Concrete Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2">
              {SITE.areas.map((a) => (
                <li key={a} className="text-gray-500 text-sm">{a}, TX</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={SITE.phoneLink} className="text-gray-500 hover:text-[#F4E7C9] text-sm transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-gray-500 hover:text-[#F4E7C9] text-sm transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="text-gray-500 text-sm">Austin, TX &amp; Surrounding Areas</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-5 bg-white hover:bg-gray-100 text-black font-bold text-xs px-5 py-2.5 rounded tracking-widest uppercase transition-colors"
            >
              Free Quote
            </Link>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} RMG Construction. All rights reserved.</p>
          <p>Licensed &amp; Insured &middot; Serving Central Texas</p>
        </div>
      </div>
    </footer>
  )
}
