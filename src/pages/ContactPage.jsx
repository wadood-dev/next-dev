import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactPage() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s Work Together</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
            Send a message — I typically reply within one business day.
          </p>
        </motion.header>
        <Contact hideTitle />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
