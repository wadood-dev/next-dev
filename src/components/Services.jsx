import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'
import { services } from '../data/portfolioData'

function Services() {
  return (
    <SectionReveal id="services" className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Services</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">What I Provide</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body, slug }, index) => (
          <motion.article
            key={slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-2xl border border-white/10 bg-zinc-900/65 p-6 shadow-xl shadow-black/30"
          >
            <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3 text-2xl text-orange-500">
              <Icon />
            </div>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{body}</p>
            <Link
              to={`/services/${slug}`}
              className="mt-4 inline-block text-sm font-medium text-orange-400 transition hover:text-orange-300"
            >
              View details
            </Link>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  )
}

export default Services
