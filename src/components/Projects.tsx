import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, FolderGit2, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'A scalable e-commerce backend built with Spring Boot microservices. Features include product user, product management, order processing. Uses RabbitMQ for event-driven communication between services.',
    tech: ['Spring Boot', 'Java','Express', 'Node', 'RabbitMQ', 'PostgreSQL', 'Docker',],
    github: '#',
    live: 'null',
    featured: true,
  },
  {
    title: 'Jobboard-API',
    description:
    'A production-ready Job Board REST API built with Spring Boot, PostgreSQL, and Docker. Features dual authentication (JWT + OAuth2 via Google/GitHub), role-based access control for Employers and Candidates, CV file uploads, and full-text job search using JPA Specifications. Built as a hands-on deep dive into real-world Spring Security patterns.',
tech: ['Java', 'Springboot', 'Jwt', 'OAuth2', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Iamlyongift/Jobboard-api',
    live: 'null',
    featured: true,
  },
  {
    title: 'MediCore',
    description:
    'A Spring Boot REST API for a Hospital Management System featuring automated appointment scheduling, patient/doctor record management, and custom exception handling.',
    tech: ['Java', 'SpringBoot', 'MySQL', 'Docker', 'JWT',],
    github: 'https://github.com/Iamlyongift/MediCore',
    live: 'null',
    featured: false,
  },
  {
    title: 'RecruitBridge',
    description:
    'A  full-stack recruitment platform API connecting recruiters with top talent — featuring OAuth2 auth, real-time chat, talent sourcing, and subscription management.',
    tech: ['Node.js', 'Express', 'MongoDB','Google OAuth2, LinkedIn OAuth2','Swagger UI + swagger-jsdoc', 'Socket.io'],
    github: 'https://github.com/Iamlyongift/RecruitBridge',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-mono mb-4 block">03. Projects</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Selected work
          </h2>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-6 sm:p-8 rounded-xl border transition-all duration-300 ${
                  project.featured
                    ? 'bg-surface border-border hover:border-accent/30'
                    : 'bg-bg border-border hover:border-accent/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dim hover:text-text transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-dim hover:text-text transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-elevated text-text-dim border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
