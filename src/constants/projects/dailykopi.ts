// Daily Kopi - Daily news digest delivered to Telegram

import type { Project } from './types'

export const dailykopiProjects: Project[] = [
  {
    name: 'Daily Kopi',
    oneLiner: 'Daily news digest delivered to Telegram',
    description:
      'A scheduled Go job that pulls curated RSS feeds per topic, skips links already sent, and delivers a morning digest to each recipient on Telegram. Runs entirely on GitHub Actions; no server, no database.',
    techStack: ['Go', 'GitHub Actions', 'Telegram Bot API', 'RSS'],
    highlights: [
      'Per-recipient topic subscriptions, with feeds interleaved round-robin so priority sources lead',
      'Per-recipient link deduplication persisted across runs via actions/cache, pruned after 30 days',
      'Links marked sent only after successful delivery, so retrying a partially failed run never repeats links',
      'Graceful degradation: failing feeds are skipped; the run fails only if every feed or any send fails',
      'Config validated at startup and supplied as a repository secret, so changes need no redeploy',
    ],
    links: [
      {
        label: 'Repo',
        url: 'https://github.com/erisjacey/daily-kopi',
        type: 'github',
      },
    ],
    featured: true,
    createdAt: '2026-10-23',
  },
]
