import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Database, Shield, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'API Design',
    desc: 'RESTful & GraphQL APIs with clean architecture and comprehensive documentation.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    desc: 'Optimized database schemas, efficient queries, and robust data modeling.',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'JWT auth, rate limiting, input validation, and OWASP best practices.',
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Caching strategies, connection pooling, and horizontal scaling patterns.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-mono mb-4 block">01. About</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Engineering the invisible backbone of great products.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I'm a backend engineer with 3+ years of experience building high-performance
                server-side applications. My expertise spans the JavaScript/TypeScript ecosystem
                (Node.js, Express) and the Java ecosystem (Spring Boot).
              </p>
              <p>
                I believe great backend engineering is invisible — when APIs are fast, reliable,
                and well-documented, frontend teams can build amazing user experiences without
                worrying about what's under the hood.
              </p>
              <p>
                Currently focused on microservices architecture, event-driven systems,
                and cloud-native deployments on AWS and Kubernetes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-medium text-text mb-1">{item.title}</h3>
                  <p className="text-xs text-text-dim leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
