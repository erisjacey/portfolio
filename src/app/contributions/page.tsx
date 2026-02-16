import type { Metadata } from 'next'
import Link from 'next/link'
import { Spotlight, NeuralMesh, LightRays } from '@/components/decorations'
import { contributions } from '@/constants/projects'
import ContributionCards from './ContributionCards'

export const metadata: Metadata = {
  title: 'OSS Contributions',
  description:
    'Open-source contributions by Eris Jacey Masagca to projects like YAGFI.',
}

const ContributionsPage = () => {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <LightRays />
      <NeuralMesh />
      <Spotlight />

      <main className="mx-auto max-w-3xl pt-0 lg:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="text-text-secondary hover:text-accent mb-8 inline-flex items-center gap-2 font-mono text-sm transition-colors"
        >
          ← Back to home
        </Link>

        {/* Page header */}
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
          OSS Contributions
        </h1>
        <p className="text-text-secondary mb-4 text-lg">
          Open-source pull requests and contributions.
        </p>

        {/* Project link */}
        <p className="text-text-secondary mb-12 text-sm">
          Contributing to{' '}
          <a
            href="http://yagfi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            YAGFI
          </a>{' '}
          — a GitHub &ldquo;good first issue&rdquo; aggregator.
        </p>

        {/* Contribution cards */}
        <ContributionCards contributions={contributions} />
      </main>
    </div>
  )
}

export default ContributionsPage
