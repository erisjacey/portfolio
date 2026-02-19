// YAGFI - yet another good first issue
// https://github.com/Regyl/yagfi-back

import type { Contribution, ContributionSummary } from './types'

const YAGFI_REPO = {
  repoName: 'YAGFI - yet another good first issue',
  repoUrl: 'https://github.com/Regyl/yagfi-back',
  repoOneLiner:
    'Contributing to a GitHub "good first issue" aggregator backend',
  repoTechStack: ['Java', 'Spring Boot'],
}

// Individual contributions (one per PR, newest first)
export const yagfiContributions: Contribution[] = [
  {
    ...YAGFI_REPO,
    prNumber: 83,
    prUrl: 'https://github.com/Regyl/yagfi-back/pull/83',
    prTitle: 'User country detection',
    description:
      'Integrated IPinfo API to detect user country from IP address, enabling country-aware repository filtering. Implemented Feign client with Caffeine LRU cache and graceful error handling.',
    highlights: [
      'Feign client integration with ipinfo.io API for IP-to-country resolution',
      'Caffeine LRU cache with dual cache manager pattern for efficient lookups',
      'Graceful error handling with fallback behavior when API is unavailable',
      '4 unit tests covering cache hits, misses, and error scenarios',
    ],
    additionalTech: ['Feign', 'Caffeine', 'IPinfo'],
    createdAt: '2026-02-16',
  },
  {
    ...YAGFI_REPO,
    prNumber: 56,
    prUrl: 'https://github.com/Regyl/yagfi-back/pull/56',
    prTitle: 'License list endpoint with caching',
    description:
      "Added a cached GET endpoint to list all available licenses, with MyBatis frequency query and the project's first integration test using Testcontainers.",
    highlights: [
      'Cached GET API for license listing',
      'MyBatis frequency query for license aggregation',
      'Testcontainers integration test (project first)',
    ],
    additionalTech: ['MyBatis', 'Testcontainers'],
    createdAt: '2026-02-09',
  },
  {
    ...YAGFI_REPO,
    prNumber: 37,
    prUrl: 'https://github.com/Regyl/yagfi-back/pull/37',
    prTitle: 'License filtering with dynamic SQL',
    description:
      'Implemented license-based filtering for repository search with dynamic SQL operators.',
    highlights: [
      'Filter DTO with license criteria',
      'Dynamic SQL with IN/NOT_IN operators',
      'Request handling and validation',
    ],
    additionalTech: ['MyBatis'],
    createdAt: '2026-02-06',
  },
  {
    ...YAGFI_REPO,
    prNumber: 27,
    prUrl: 'https://github.com/Regyl/yagfi-back/pull/27',
    prTitle: 'Repository license field',
    description:
      'Added license information to repository entities, including database migration and GraphQL query support.',
    highlights: [
      'DB migration for license column',
      'GraphQL query extension',
      'Entity/DTO mapping and API response',
    ],
    additionalTech: ['PostgreSQL', 'GraphQL', 'Flyway'],
    createdAt: '2026-02-03',
  },
]

// Summary card for the homepage Contributions section
export const yagfiSummary: ContributionSummary = {
  name: YAGFI_REPO.repoName,
  oneLiner: YAGFI_REPO.repoOneLiner,
  description:
    "Multiple contributions to an open-source project that helps developers find beginner-friendly issues. Implemented license features, country detection, and the project's first integration test.",
  techStack: YAGFI_REPO.repoTechStack,
  links: [
    { label: 'Project', url: 'http://yagfi.com/', type: 'external' },
    { label: 'Repo', url: YAGFI_REPO.repoUrl, type: 'github' },
  ],
  createdAt: '2026-02-16',
}
