import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { stats } from '../data/portfolioData'

function Stats() {
  return (
    <SectionReveal className="grid gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-xl shadow-black/30 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="text-center"
        >
          <p className="text-3xl font-semibold text-orange-500">{stat.value}</p>
          <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
        </motion.div>
      ))}
    </SectionReveal>
  )
}

export default Stats
