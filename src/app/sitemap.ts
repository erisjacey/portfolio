import { MetadataRoute } from 'next'
import { siteMetadata } from '@/constants/siteMetadata'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

export default sitemap
