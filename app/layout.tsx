import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/siteData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'RMG Construction | Driveways & Grading Austin TX',
    template: '%s | RMG Construction',
  },
  description:
    'Gravel driveway installation, driveway repairs, land grading, roadbase and asphalt millings in Austin, TX and surrounding areas. Request a free estimate.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'RMG Construction | Driveways & Grading Austin TX',
    description:
      'Gravel driveway installation, driveway repairs, land grading, roadbase and asphalt millings in Austin, TX and surrounding areas. Request a free estimate.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'RMG Construction — Driveway & Grading Services Austin TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMG Construction | Driveways & Grading Austin TX',
    description:
      'Gravel driveway installation, driveway repairs, land grading, roadbase and asphalt millings in Austin, TX.',
    images: ['/images/hero.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: '+15129956888',
  email: SITE.email,
  description:
    'RMG Construction provides gravel driveway installation, driveway repair, land grading, asphalt millings, roadbase installation, and site preparation in Austin, TX and surrounding areas.',
  areaServed: SITE.areas.map((city) => ({ '@type': 'City', name: city })),
  sameAs: [SITE.gbp],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
