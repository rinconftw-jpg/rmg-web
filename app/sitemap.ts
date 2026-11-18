import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/siteData'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/services/gravel-driveways`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/driveway-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/land-grading`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/asphalt-millings`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/roadbase-installation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/site-preparation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]
}
