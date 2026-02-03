'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md max-w-xl space-y-6 leading-relaxed"
      >
        <p>I&apos;m a backend engineer who takes code quality seriously.</p>

        <p>
          Currently at <span className="text-accent font-semibold">Visa</span>,
          I build payment infrastructure that handles millions of transactions
          daily while maintaining{' '}
          <span className="text-success font-semibold">
            99.999% availability
          </span>
          . I specialize in Java, Spring Boot, and MongoDB, with a focus on
          reliability, performance at scale, and integrating AI capabilities.
        </p>

        <p>
          Outside of work, I&apos;m usually at my local gym trying to set
          personal records, or trying to 100% whatever game I&apos;m currently
          obsessed with. Occasionally, you&apos;ll find me 30 meters underwater
          somewhere, or wandering around a new city.
        </p>
      </motion.div>
    </section>
  )
}

export default About
