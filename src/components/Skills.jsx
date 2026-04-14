import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionReveal from './SectionReveal'
import { skills } from '../data/portfolioData'

function SkillRing({ name, value }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (value / 100) * circumference
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    if (inView) {
      setOffset(progress)
    }
  }, [inView, progress])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative grid place-items-center">
        <svg width="96" height="96" className="-rotate-90">
          <circle cx="48" cy="48" r={radius} strokeWidth="9" className="fill-none stroke-zinc-700" />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            strokeWidth="9"
            strokeLinecap="round"
            className="fill-none stroke-orange-500"
            style={{ strokeDasharray: circumference }}
            animate={{ strokeDashoffset: offset }}
            initial={{ strokeDashoffset: circumference }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <span className="absolute text-sm font-semibold text-white">{value}%</span>
      </div>
      <p className="text-sm text-zinc-300">{name}</p>
    </div>
  )
}

function Skills() {
  return (
    <SectionReveal className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Skills</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">My Expertise</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-zinc-900/65 p-6 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <SkillRing key={skill.name} {...skill} />
        ))}
      </div>
    </SectionReveal>
  )
}

export default Skills
