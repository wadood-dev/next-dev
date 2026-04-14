import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaDribbble, FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { navLinks } from '../data/portfolioData'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="border-t border-white/10 bg-black/40 px-5 py-8 backdrop-blur-md sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5">
        <Link to="/" className="text-xs uppercase tracking-[0.25em] text-orange-500">
          LOGO
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition hover:text-orange-400">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[FaDribbble, FaBehance, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <a
              key={index}
              href="/"
              className="rounded-full border border-white/20 p-2 text-zinc-300 transition duration-300 hover:border-orange-500 hover:text-orange-500"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-500">Copyright © 2026. All Rights Reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
