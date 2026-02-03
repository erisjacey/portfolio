import { MetadataRoute } from 'next'
import { siteMetadata } from '@/constants/siteMetadata'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}

export default robots
