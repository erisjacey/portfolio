// YAGFI - yet another good first issue
// https://github.com/Regyl/yagfi-back

import type { Project } from './types'

export const yagfiContributions: Project[] = [
  {
    name: 'YAGFI - yet another good first issue',
    type: 'oss',
    oneLiner:
      'Added repository license field to a GitHub "good first issue" aggregator backend',
    description:
      'Implemented end-to-end feature to fetch and expose repository license information, enabling the frontend to display license badges for open-source projects.',
    techStack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'GraphQL',
      'MyBatis',
      'Flyway',
    ],
    highlights: [
      'Database migration for blue-green table pattern',
      'GraphQL query extension to fetch license data from GitHub API',
      'DTO, Entity, and Mapper layer updates',
      'MyBatis XML mappings for persistence and querying',
      'REST API response enhancement',
    ],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/Regyl/yagfi-back',
        type: 'github',
      },
      // TODO: Add PR link once merged
      // { label: 'Pull Request', url: '', type: 'pr' },
    ],
    featured: true,
    createdAt: '2025-02-03',
  },
]
