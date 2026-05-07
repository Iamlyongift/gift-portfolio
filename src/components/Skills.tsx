import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    title: 'Frameworks & Runtime',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 95 },
      { name: 'Spring Boot', level: 90 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 88 },
      { name: 'SQlite', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'AWS (EC2, S3, Lambda)', level: 60 },
      { name: 'Kubernetes', level: 50 },
      { name: 'Git / GitHub Actions', level: 92 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text">{name}</span>
        <span className="text-xs font-mono text-text-dim">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-mono mb-4 block">02. Skills</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Technologies I work with
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-6 rounded-xl bg-bg border border-border"
              >
                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-5">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
