import { Heart, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono text-text-dim">
            Chukwuma.Godgift
          </span>
        </div>

        <p className="text-xs text-text-dim flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-accent" /> using React & Tailwind
        </p>

        <p className="text-xs text-text-dim">
          &copy; {new Date().getFullYear()} Lyon Gift. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
