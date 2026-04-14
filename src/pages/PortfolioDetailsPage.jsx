import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { portfolioItems } from '../data/portfolioData'

function PortfolioDetailsPage() {
  const { slug } = useParams()
  const item = portfolioItems.find((project) => project.slug === slug)

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-4xl px-5 py-24 text-center">
          <h1 className="text-3xl font-semibold text-white">Project not found</h1>
          <Link to="/" className="mt-5 inline-block text-orange-400">
            Back to home
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/65 shadow-2xl shadow-black/30"
        >
          <img src={item.image} alt={item.title} className="h-80 w-full object-cover sm:h-[26rem]" />
          <div className="p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400">{item.category}</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{item.title}</h1>
            <p className="mt-5 text-zinc-300">{item.details}</p>
            <div className="mt-8">
              <Link to="/portfolio" className="glow-button rounded-xl bg-orange-500 px-5 py-3 text-black">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}

export default PortfolioDetailsPage
