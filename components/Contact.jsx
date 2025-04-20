'use client'

import { Mail, Linkedin } from 'lucide-react' // icons from lucide-react
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0a0e1a] to-[#0a0e1a] text-white py-20 px-6 md:px-12 text-center relative"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#0a0e1a] opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-teal-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Feel free to reach out via email or connect with me on LinkedIn.
        </motion.p>

        <div className="flex justify-center gap-8 text-teal-400 text-3xl">
          <motion.a
            href="mailto:deepswarup2702@gmail.com"
            className="transition transform hover:scale-110 hover:text-teal-300"
            aria-label="Email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Mail size={36} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/deep-swarup/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-teal-300"
            aria-label="LinkedIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Linkedin size={36} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact
