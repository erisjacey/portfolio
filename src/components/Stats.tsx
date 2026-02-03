'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Code2, Briefcase, Layers } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  description: string
}

const stats: Stat[] = [
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 123,
    suffix: '',
    description: 'commits this year',
  },
  {
    icon: <Code2 size={24} />,
    label: 'LeetCode',
    value: 87,
    suffix: '',
    description: 'problems solved',
  },
  {
    icon: <Briefcase size={24} />,
    label: 'Visa',
    value: 2.5,
    suffix: ' years',
    description: '99.999% uptime',
  },
  {
    icon: <Layers size={24} />,
    label: 'Tech Stack',
    value: 15,
    suffix: '+',
    description: 'technologies',
  },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start * 10) / 10)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={countRef} className="text-4xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Live Stats
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border-border hover:border-accent group rounded-lg border p-6 transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="text-accent transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <span className="text-text-secondary font-mono text-sm">
                  {stat.label}
                </span>
              </div>

              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-text-secondary text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
