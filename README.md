# Portfolio - Eris Jacey Masagca

A modern, minimalist portfolio website built with Next.js 16, featuring a dark underwater theme with bioluminescent accents. Inspired by the depths of the ocean and the elegance of clean code.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19.2.3
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.29.2
- **Icons:** Lucide React + Simple Icons
- **Language:** TypeScript 5

## Features

- Two-column responsive layout (desktop: fixed sidebar + scrolling content)
- Mouse-tracking spotlight effect (bioluminescent flashlight)
- Neural mesh circuit board background pattern
- Animated light caustics (underwater light refraction)
- Depth gradient background (simulating ocean descent)
- Bioluminescent glow effects on hover
- Smooth scroll animations
- Mobile-first design
- Dark theme with accessibility in mind
- SEO optimized (sitemap, robots.txt, Open Graph, Twitter cards, JSON-LD)
- Dynamic sidebar stats (GitHub commits, LeetCode solved, experience years, dives logged)
- Work experience timeline with resume download
- Projects showcase with Personal/OSS Contribution type badges

## Design Theme

**Deep Abyss Meets Tech**

- Dark underwater aesthetic (#0a0a0a background)
- Blue bioluminescent accents (#3b82f6)
- Depth gradients that darken as you scroll
- Minimalist, elegant typography

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── globals.css   # Global styles & Tailwind config
│   ├── layout.tsx    # Root layout + SEO metadata
│   ├── page.tsx      # Home page
│   ├── robots.ts     # SEO robots.txt generation
│   └── sitemap.ts    # SEO sitemap generation
├── components/       # React components
│   ├── About.tsx
│   ├── Caustics.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx    # Work timeline with resume link
│   ├── Footer.tsx
│   ├── Icons.tsx         # Shared simple-icons SVG components
│   ├── MobileHeader.tsx
│   ├── NeuralMesh.tsx
│   ├── Projects.tsx      # Projects showcase with type badges
│   ├── Sidebar.tsx
│   └── Spotlight.tsx
├── constants/        # Shared constants
│   ├── experience.ts     # Work experience data
│   ├── siteMetadata.ts   # Centralized site config (name, URLs, descriptions)
│   ├── socialLinks.tsx   # Social link icons and URLs
│   ├── statsConfig.ts    # Stats configuration (usernames, career start)
│   └── projects/         # Projects data (modular structure)
│       ├── index.ts      # Aggregates and sorts all projects
│       ├── types.ts      # Shared project types
│       ├── yagfi.ts      # YAGFI OSS contributions
│       └── pantrypal.ts  # PantryPal personal project
└── lib/              # Utility functions
    ├── fetchStats.ts     # Server-side stats fetching (GitHub, LeetCode APIs)
    └── formatters.ts     # Formatting utilities (date ranges)
```

## Deployment

Deploy to Vercel for optimal Next.js performance:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Future Enhancements

- Photo gallery integration (Cloudinary)
- Contact form implementation
- Subtle bubble animations
- Open Graph image for social sharing

## License

© 2026 Eris Jacey Masagca. All rights reserved.
