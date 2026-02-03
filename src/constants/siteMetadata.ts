export const siteMetadata = {
  name: 'Eris Jacey Masagca',
  jobTitle: 'Backend Engineer',
  employer: 'Visa',
  siteUrl: 'https://erisjacey.dev',
  email: 'hello@erisjacey.dev',
  locale: 'en_SG',

  // Computed
  get title() {
    return `${this.name} | ${this.jobTitle}`
  },

  // Descriptions
  description:
    'Backend Engineer crafting meticulously elegant solutions. Singapore-based developer focused on code quality and scalable systems.',
  motto: 'Developer. Diver. Dreamer.',
  tagline: 'Script kiddie who likes being underwater.', // Fun version for Twitter

  // Social links (URLs only - icons are in socialLinks.tsx)
  social: {
    github: 'https://github.com/erisjacey',
    linkedin: 'https://www.linkedin.com/in/eris-jacey-masagca-309795197/',
  },

  keywords: [
    'Software Engineer',
    'Backend Engineer',
    'Code Quality',
    'Scalable Systems',
    'Java',
    'Spring Boot',
    'MongoDB',
    'TypeScript',
    'Next.js',
    'Singapore',
  ],

  expertise: [
    'Backend Development',
    'Scalable Systems',
    'Java',
    'Spring Boot',
    'MongoDB',
    'TypeScript',
    'Next.js',
  ],
}
