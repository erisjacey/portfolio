// YAGFI - yet another good first issue
// https://github.com/Regyl/yagfi-back

import type { Project } from './types'

export const yagfiContributions: Project[] = [
  {
    name: 'YAGFI - yet another good first issue',
    type: 'oss',
    oneLiner:
      'Contributing license features to a GitHub "good first issue" aggregator backend',
    description:
      'Multiple contributions to an open-source project that helps developers find beginner-friendly issues. Implemented license fetching and filtering capabilities across the full stack.',
    techStack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'GraphQL',
      'MyBatis',
      'Flyway',
    ],
    highlights: [
      'Repository license field: DB migration, GraphQL query, entity/DTO mapping, API response',
      'License filter: filter DTO, request handling, dynamic SQL with IN/NOT_IN operators',
    ],
    links: [
      {
        label: 'Repo',
        url: 'https://github.com/Regyl/yagfi-back',
        type: 'github',
      },
      {
        label: '#27',
        url: 'https://github.com/Regyl/yagfi-back/pull/27',
        type: 'pr',
      },
      {
        label: '#37',
        url: 'https://github.com/Regyl/yagfi-back/pull/37',
        type: 'pr',
      },
    ],
    featured: true,
    createdAt: '2025-02-03',
  },
]
