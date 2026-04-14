import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

function About() {
  return (
    <SectionReveal id="about" className="grid items-center gap-8 md:grid-cols-2">
      <motion.img
        whileHover={{ scale: 1.03 }}
        src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80"
        alt="About portrait"
        className="h-[24rem] w-full rounded-[1.8rem] border border-white/10 object-cover object-top shadow-xl shadow-black/35"
      />
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-400">About Me</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Designing Digital Products With Purpose
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
          I combine design strategy with user-centered thinking to build interfaces that look
          elegant and perform exceptionally. My process focuses on structure, usability, and visual
          storytelling.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="glow-button rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black"
        >
          Download CV
        </motion.button>
      </div>
    </SectionReveal>
  )
}

export default About
