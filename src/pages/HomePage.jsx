import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { portfolioItems } from '../data/portfolioData'

const allFilters = ['All', 'UI Design', 'Branding', 'Web Design']

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-12 pt-6 sm:px-8 lg:px-12">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Skills />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Portfolio
              items={filteredPortfolio}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filters={allFilters}
            />
          </motion.div>
        </AnimatePresence>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
