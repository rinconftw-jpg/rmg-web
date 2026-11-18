import { SITE } from '@/lib/siteData'

export default function ServiceAreas() {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#F4E7C9] text-xs font-bold tracking-[0.3em] uppercase mb-3">Where We Work</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Service Areas</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {SITE.areas.map((area) => (
            <span
              key={area}
              className="bg-[#141414] border border-white/5 text-gray-300 font-medium text-sm px-5 py-2.5 rounded-full"
            >
              {area}, TX
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Not sure if we cover your area?{' '}
          <a href={SITE.phoneLink} className="text-[#F4E7C9] hover:underline">
            Give us a call
          </a>{' '}
          — we may be able to help.
        </p>
      </div>
    </section>
  )
}
