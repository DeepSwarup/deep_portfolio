'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import photo from './assets/ghilbi.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="px-6 md:px-12 py-24 min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 right-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-9xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Tilt
            glareEnable
            glareMaxOpacity={0.25}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl border-4 border-teal-500 shadow-lg shadow-teal-500/30 overflow-hidden hover:shadow-teal-400/40 transition-shadow duration-500"
          >
            <Image
              src={photo}
              alt="profile"
              className="object-cover rounded-2xl"
              width={288}
              height={288}
              priority
            />
          </Tilt>
        </motion.div>

        {/* RIGHT: Intro Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-2xl"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 drop-shadow-lg">
              Deep Swarup
            </span>
          </motion.h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
            A passionate{' '}
            <span className="text-white font-semibold">Software Developer</span> crafting
            beautiful digital solutions that inspire and engage.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl transition-all shadow-lg"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-400 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl transition-all shadow"
            >
              📬 Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#skills"
          className="text-teal-400 hover:text-teal-500 flex flex-col items-center animate-bounce"
        >
          <svg className="w-6 h-6 mb-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
