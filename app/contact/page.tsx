'use client'

import { useState } from 'react'

const services = ['Concrete', 'Grading', 'Demolition', 'Land Clearing', 'Multiple Services', 'Other']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to email service (Resend, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        <div className="stripe-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Get a Free Quote</h1>
          <div className="section-divider w-24" />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">
          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-white mb-3">Contact Information</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ready to start your project? Reach out and we&apos;ll get back to you within 24 hours with a free, no-obligation quote.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">📞</div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+15125551234" className="text-white font-bold hover:text-orange-500 transition-colors">(512) 555-1234</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">✉️</div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@rmgconstruction.com" className="text-white font-bold hover:text-orange-500 transition-colors">info@rmgconstruction.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">📍</div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service Area</p>
                  <p className="text-white font-bold">Austin &amp; Surrounding Areas</p>
                  <p className="text-gray-500 text-sm">San Marcos · Buda · Kyle · Bastrop<br />Round Rock · Georgetown</p>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
              <p className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-2">Hours</p>
              <p className="text-white font-semibold text-sm">Monday – Friday: 7am – 6pm</p>
              <p className="text-white font-semibold text-sm">Saturday: 8am – 4pm</p>
              <p className="text-gray-500 text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We&apos;ll get back to you within 24 hours with your free quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">First Name *</label>
                      <input required type="text" placeholder="John" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Last Name *</label>
                      <input required type="text" placeholder="Smith" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Phone *</label>
                      <input required type="tel" placeholder="(512) 555-1234" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Email</label>
                      <input type="email" placeholder="john@email.com" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Service Needed *</label>
                    <select required className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">City / Location *</label>
                    <input required type="text" placeholder="Austin, TX" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Project Details</label>
                    <textarea rows={4} placeholder="Describe your project..." className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-4 rounded-lg text-sm tracking-widest uppercase transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/20">
                    Send Message & Request Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
