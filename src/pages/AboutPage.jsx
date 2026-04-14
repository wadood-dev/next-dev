import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">About</p>
          <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Profile &amp; Expertise</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
            Story, visuals, and the tools behind the work.
          </p>
        </motion.header>
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
