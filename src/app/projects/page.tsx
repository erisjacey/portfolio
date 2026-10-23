import type { Metadata } from 'next'
import Link from 'next/link'
import { Spotlight, NeuralMesh, LightRays } from '@/components/decorations'
import { ProjectCard } from '@/components/shared'
import { projects } from '@/constants/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects by Eris Jacey Masagca.',
}

const ProjectsPage = () => {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <LightRays />
      <NeuralMesh />
      <Spotlight />

      <main className="mx-auto max-w-3xl pt-0 lg:py-24">
        {/* Back link */}
        <Link
          href="/#projects"
          className="text-text-secondary hover:text-accent mb-8 inline-flex items-center gap-2 font-mono text-sm transition-colors"
        >
          ← Back to home
        </Link>

        {/* Page header */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h1>
          <p className="text-text-secondary text-lg">
            Things I&apos;ve built on my own time.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              expandable
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage
