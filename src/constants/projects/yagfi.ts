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
      'Multiple contributions to an open-source project that helps developers find beginner-friendly issues. Implemented license fetching, filtering, and listing capabilities across the full stack, including the projects first integration test.',
    techStack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'GraphQL',
      'MyBatis',
      'Flyway',
      'Testcontainers',
    ],
    highlights: [
      'Repository license field: DB migration, GraphQL query, entity/DTO mapping, API response',
      'License filter: filter DTO, request handling, dynamic SQL with IN/NOT_IN operators',
      'License list endpoint: cached GET API, MyBatis frequency query, Testcontainers integration test',
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
      {
        label: '#56',
        url: 'https://github.com/Regyl/yagfi-back/pull/56',
        type: 'pr',
      },
    ],
    featured: true,
    createdAt: '2025-02-03',
  },
]
