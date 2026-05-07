import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Backend Engineer',
    company: 'Arigo Technologies',
    location: 'Lekki, Lagos State',
    period: '2024 — 2025',
    description:
      'Built real-time data ingestion pipelines and REST APIs with Node.js and Express. Designed database schemas for time-series data. Implemented CI/CD pipelines with GitHub Actions and Docker.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Docker'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KodexAfrica',
    location: 'Awka, Anambra state',
    period: '2023 — 2024',
    description:
      'Gained Experience as a backend engineer with authentication systems, payment processing modules, and reporting APIs. Worked closely with frontend teams to design schemas.',
    tech: ['Node', 'Express', 'MongoDB'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-mono mb-4 block">04. Experience</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Where I've worked
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative sm:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg hidden sm:block" />

                  <div className="p-6 rounded-xl bg-bg border border-border hover:border-accent/20 transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <h3 className="text-base font-medium text-text">{exp.role}</h3>
                      <span className="text-accent text-sm font-medium">@ {exp.company}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-surface-elevated text-text-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
