import Link from 'next/link'

const services = ['Concrete', 'Grading', 'Demolition', 'Land Clearing']
const areas = ['Austin', 'San Marcos', 'Buda', 'Kyle', 'Bastrop', 'Round Rock', 'Georgetown']

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-orange-500 flex items-center justify-center rounded font-black text-black text-sm">RMG</div>
              <span className="font-bold text-sm tracking-wide">RMG <span className="text-orange-500">CONSTRUCTION</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Quality construction services across Central Texas. Licensed & insured.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a} className="text-gray-500 text-sm">{a}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15125551234" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">📞 (512) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@rmgconstruction.com" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">✉️ info@rmgconstruction.com</a>
              </li>
              <li className="text-gray-500 text-sm">📍 Austin, TX</li>
            </ul>
            <Link href="/contact" className="inline-block mt-5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs px-5 py-2.5 rounded tracking-widest uppercase transition-colors">
              Free Quote
            </Link>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} RMG Construction. All rights reserved.</p>
          <p>Licensed & Insured · Serving Central Texas</p>
        </div>
      </div>
    </footer>
  )
}
