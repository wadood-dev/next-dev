import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { services } from '../data/portfolioData'

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Services</p>
          <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">What I Provide</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
            End-to-end design and growth services. Open any service for scope, deliverables, and
            process.
          </p>
        </motion.header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, slug }, index) => (
            <motion.article
              key={slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-zinc-900/65 p-6 shadow-xl shadow-black/30"
            >
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3 text-2xl text-orange-500">
                <Icon />
              </div>
              <h2 className="text-xl font-medium text-white">{title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{body}</p>
              <Link
                to={`/services/${slug}`}
                className="mt-4 inline-block text-sm font-medium text-orange-400 transition hover:text-orange-300"
              >
                View details →
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ServicesPage
