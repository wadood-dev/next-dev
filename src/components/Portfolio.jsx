import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'

function Portfolio({ items, activeFilter, setActiveFilter, filters, hideTitle = false }) {
  return (
    <SectionReveal id="portfolio" className="space-y-8">
      {!hideTitle && (
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Portfolio</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">My Recent Works</h2>
        </div>
      )}

      <div className="mx-auto flex w-fit flex-wrap justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/65 p-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg px-4 py-2 text-sm transition duration-300 ${
              activeFilter === filter
                ? 'bg-orange-500 font-medium text-black'
                : 'text-zinc-300 hover:bg-white/10'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={item.image} alt={item.title} className="h-40 w-full object-cover sm:h-60" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-[10px] uppercase tracking-[0.15em] text-orange-400 sm:text-xs">{item.category}</p>
              <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">{item.title}</h3>
              <Link
                to={`/portfolio/${item.slug}`}
                className="mt-2 text-xs font-medium text-orange-300 hover:text-orange-200 sm:text-sm"
              >
                Open project
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  )
}

export default Portfolio
