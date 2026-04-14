import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

function Hero() {
  return (
    <SectionReveal id="home" className="grid items-center gap-10 pt-8 md:grid-cols-2 md:pt-14">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-orange-400">Hello, I&apos;m</p>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          UI/UX <span className="text-orange-500">Designer</span>
        </h1>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          I craft premium digital experiences through clean visuals, intuitive interactions, and
          modern product thinking.
        </p>
        <div className="flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="glow-button rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black"
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100"
          >
            Download CV
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto h-[26rem] w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-3 shadow-2xl shadow-black/40"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-300/5" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.12 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4.5, ease: 'easeInOut' }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
          alt="Professional portrait"
          className="h-full w-full rounded-[1.6rem] object-cover object-top"
        />
      </motion.div>
    </SectionReveal>
  )
}

export default Hero
