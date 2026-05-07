import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const email = 'Chukwumagodgift6036@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent text-sm font-mono mb-4 block">05. Contact</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let's build something together
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-10 leading-relaxed">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll do my best to get back to you.
          </p>

          {/* Email with copy */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border mb-10">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-text">{email}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-surface-elevated transition-colors"
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-text-dim" />
              )}
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Iamlyongift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border text-sm text-text-muted hover:text-text hover:border-accent/30 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border text-sm text-text-muted hover:text-text hover:border-accent/30 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
