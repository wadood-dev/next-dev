import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

function Contact({ hideTitle = false }) {
  return (
    <SectionReveal id="contact" className="space-y-8">
      {!hideTitle && (
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Contact Me</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s Work Together</h2>
        </div>
      )}
      <form className="grid gap-4 rounded-2xl border border-white/10 bg-zinc-900/65 p-6 sm:grid-cols-2">
        <motion.input
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="input-field"
          type="text"
          placeholder="Your Name"
        />
        <motion.input
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="input-field"
          type="email"
          placeholder="Your Email"
        />
        <motion.input
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="input-field sm:col-span-2"
          type="text"
          placeholder="Subject"
        />
        <motion.textarea
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="input-field min-h-36 resize-none sm:col-span-2"
          placeholder="Message"
        />
        <button className="glow-button w-fit rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
          Send Message
        </button>
      </form>
    </SectionReveal>
  )
}

export default Contact
