'use client'

import { useCallback, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { motion } from 'framer-motion'

// Icons
import { FaReact, FaJsSquare } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql,
  SiPython, SiPandas, SiTensorflow, SiGithub, SiVercel, SiExpress, SiSocketdotio, SiPostman
} from 'react-icons/si'

const techStack = [
  { name: 'Reactjs', icon: <FaReact className="w-14 h-14 text-teal-400" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="w-14 h-14 text-yellow-400" /> },
  { name: 'Nextjs', icon: <SiNextdotjs className="w-14 h-14 text-white" /> },
  { name: 'Nodejs', icon: <DiNodejs className="w-14 h-14 text-green-600" /> },
  { name: 'Expressjs', icon: <SiExpress className="w-14 h-14 text-yellow-600" /> },
  { name: 'Socket.IO', icon: <SiSocketdotio className="w-14 h-14 text-white" /> },
  { name: 'Postman', icon: <SiPostman className="w-14 h-14 text-orange-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-14 h-14 text-teal-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-14 h-14 text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="w-14 h-14 text-blue-500" /> },
  { name: 'Python', icon: <SiPython className="w-14 h-14 text-blue-500" /> },
  { name: 'Pandas', icon: <SiPandas className="w-14 h-14 text-green-600" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="w-14 h-14 text-yellow-600" /> },
  { name: 'GitHub', icon: <SiGithub className="w-14 h-14 text-white" /> },
  { name: 'Vercel', icon: <SiVercel className="w-14 h-14 text-white" /> },
]

const Skills = () => {
  const [isInView, setIsInView] = useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const handleInView = (inView) => {
    if (inView) setIsInView(true)
  }

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0a0e1a] to-[#0a0e1a] text-white px-6 py-24 overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: '#14b8a6' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto text-center"
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => handleInView(entry.isIntersecting),
              { threshold: 0.3 }
            )
            observer.observe(el)
          }
        }}
      >
        <motion.h2
          className="text-4xl md:text-4xl font-extrabold mb-6 text-teal-400 underline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tools & technologies I use to bring ideas to life.
        </motion.p>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              aria-label={tech.name}
            >
              <div className="flex justify-center items-center flex-col">
                {tech.icon}
                <p className="mt-3 text-sm font-medium text-gray-300">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
