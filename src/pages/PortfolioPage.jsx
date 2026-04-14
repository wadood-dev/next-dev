import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { portfolioItems } from '../data/portfolioData'

const allFilters = ['All', 'UI Design', 'Branding', 'Web Design']

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Portfolio</p>
          <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">My Recent Works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
            Filter by category or open a project for the full case study.
          </p>
        </motion.header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Portfolio
              hideTitle
              items={filteredPortfolio}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filters={allFilters}
            />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default PortfolioPage
