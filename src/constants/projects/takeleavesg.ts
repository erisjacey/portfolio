// TakeLeave.sg - PTO tracking and forecasting for Singapore workers

import type { Project } from './types'

export const takeleavesgProjects: Project[] = [
  {
    name: 'TakeLeave.sg',
    oneLiner: 'PTO tracking and forecasting for Singapore workers',
    description:
      'A personal leave tracking web app with running balance forecasts, a what-if simulator for planning hypothetical leave, and JSON export/import for backups. All data stays in localStorage — no backend, no auth.',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    highlights: [
      'Pure computation engine with zero UI/framework imports — generates timelines, balances, and chart data',
      'Storage service abstraction layer over local storage',
      'What-if simulator for planning hypothetical leave scenarios',
      'Sick leave overlaid as toggleable second line on forecast chart',
      '5-step onboarding wizard for first-run configuration',
    ],
    links: [
      {
        label: 'Project',
        url: 'https://take-leave-sg.vercel.app',
        type: 'external',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/erisjacey/take-leave',
        type: 'github',
      },
    ],
    featured: true,
    createdAt: '2026-02-19',
  },
]
