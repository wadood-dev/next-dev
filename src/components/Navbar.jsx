import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'

const linkClass = ({ isActive }) =>
  `transition duration-300 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-300'}`

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="text-lg font-semibold tracking-[0.25em] text-orange-500">
          LOGO
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="glow-button hidden rounded-xl border border-orange-500/70 bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex rounded-lg border border-white/15 p-2 text-zinc-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="border-t border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 transition ${isActive ? 'bg-orange-500/15 text-orange-400' : 'text-zinc-200 hover:bg-white/5'}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="mt-2 block rounded-xl bg-orange-500 px-3 py-3 text-center font-semibold text-black"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
