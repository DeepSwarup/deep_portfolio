'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-[#0a0e1a] to-[#020204] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <button
            onClick={handleScrollTop}
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full shadow-lg transition-all"
          >
            Scroll to Top
          </button>
        </motion.div>

        {/* Footer Text */}
        <div className="text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Deep. Built with ❤️ using Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
