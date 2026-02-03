'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Waves } from 'lucide-react'
import { GitIcon, LeetCodeIcon } from '@/components/Icons'
import { socialLinks } from '@/constants/socialLinks'
import { siteMetadata } from '@/constants/siteMetadata'
import type { Stats } from '@/lib/fetchStats'

interface SidebarProps {
  stats: Stats
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

// Simple counter component
const MiniCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      let start = 0
      const end = value
      const duration = 1500
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
          setHasAnimated(true)
        } else {
          setCount(Math.floor(start * 10) / 10)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [value, hasAnimated])

  return (
    <span className="text-text-primary font-mono text-lg font-semibold">
      {count}
      {suffix}
    </span>
  )
}

const Sidebar = ({ stats }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState('')

  const quickStats = [
    {
      icon: <GitIcon />,
      value: stats.githubCommits,
      suffix: '',
      label: 'GitHub commits',
    },
    {
      icon: <LeetCodeIcon />,
      value: stats.leetcodeSolved,
      suffix: '',
      label: 'LeetCode solved',
    },
    {
      icon: <Briefcase size={20} />,
      value: stats.yearsOfExperience,
      suffix: 'y',
      label: 'experience',
    },
    {
      icon: <Waves size={20} />,
      value: stats.divesLogged,
      suffix: '',
      label: 'dives logged',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-16">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link href="/" className="group">
            <h1 className="hover:text-accent mb-3 text-4xl font-bold transition-colors">
              {siteMetadata.name}
            </h1>
          </Link>
          <p className="text-text-secondary font-mono text-lg">
            {siteMetadata.motto}
          </p>
          <p className="text-text-secondary text-md mt-1">
            I build solutions that are{' '}
            <span className="text-accent font-semibold">
              meticulously elegant
            </span>
            .
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 space-y-2"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 transition-all"
              >
                <span
                  className={`h-px transition-all ${
                    isActive
                      ? 'bg-text-primary w-16'
                      : 'bg-text-secondary group-hover:bg-text-primary w-8 group-hover:w-16'
                  }`}
                />
                <span
                  className={`text-md font-mono tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-text-primary font-bold'
                      : 'text-text-secondary group-hover:text-text-primary'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )
          })}
        </motion.nav>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-border space-y-3 border-l-2 pl-4"
        >
          {quickStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-accent">{stat.icon}</span>
              <MiniCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-text-secondary text-md">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Social Links - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-5"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent glow-on-hover transition-all hover:-translate-y-1"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </motion.div>
    </div>
  )
}

export default Sidebar
