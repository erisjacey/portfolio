'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      name ? `Portfolio Contact from ${name}` : 'Portfolio Contact',
    )
    const body = encodeURIComponent(
      [name && `From: ${name}`, email && `Reply-to: ${email}`, '', message]
        .filter(Boolean)
        .join('\n'),
    )

    window.location.href = `mailto:hello@erisjacey.dev?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md space-y-6 leading-relaxed lg:max-w-xl"
      >
        <h2 className="text-text-primary text-2xl font-semibold">
          Let&apos;s Connect
        </h2>
        <p className="text-text-secondary">
          Open to senior software engineering opportunities in Singapore.
        </p>

        <div className="border-border bg-surface rounded-lg border p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border text-text-primary placeholder:text-text-secondary/50 focus:border-accent w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border text-text-primary placeholder:text-text-secondary/50 focus:border-accent w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="bg-background border-border text-text-primary placeholder:text-text-secondary/50 focus:border-accent w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-accent hover:bg-accent/80 glow-strong flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-white transition-all"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="border-border h-px flex-1 border-t" />
            <span className="text-text-secondary/50 text-sm">
              or reach out directly
            </span>
            <div className="border-border h-px flex-1 border-t" />
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:hello@erisjacey.dev"
              className="border-border text-text-primary hover:border-accent hover:text-accent glow-on-hover flex-1 rounded-lg border px-6 py-3 text-center transition-all"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-primary hover:border-accent hover:text-accent glow-on-hover flex-1 rounded-lg border px-6 py-3 text-center transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
