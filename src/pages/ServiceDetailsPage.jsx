import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { services } from '../data/portfolioData'

function ServiceDetailsPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-4xl px-5 py-24 text-center">
          <h1 className="text-3xl font-semibold text-white">Service not found</h1>
          <Link to="/" className="mt-5 inline-block text-orange-400">
            Back to home
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const Icon = service.icon

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-zinc-900/65 p-8 shadow-2xl shadow-black/30"
        >
          <div className="mb-6 inline-flex rounded-xl bg-orange-500/15 p-4 text-3xl text-orange-500">
            <Icon />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-orange-400">Service Details</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">{service.title}</h1>
          <p className="mt-5 text-zinc-300">{service.details}</p>
          <p className="mt-4 text-zinc-400">{service.body}</p>
          <div className="mt-8">
            <Link to="/services" className="glow-button rounded-xl bg-orange-500 px-5 py-3 text-black">
              Back to Services
            </Link>
          </div>
        </motion.article>
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetailsPage
