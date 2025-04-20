'use client'

import { useState, useEffect } from 'react'

const Navbar = () => {
  // const [scrolled, setScrolled] = useState(false)
  // const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerWidth < 768) return

  //     setScrolled(window.scrollY > 50)

  //     if (window.scrollY > lastScrollY) {
  //       setShowNavbar(false)
  //     } else {
  //       setShowNavbar(true)
  //     }

  //     setLastScrollY(window.scrollY)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [lastScrollY])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        showNavbar ? 'top-0' : '-top-24'
      } bg-gray-900/70 backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-white">Deep S.</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium text-white">
          {['Home', 'Skills', 'Projects','Testimonials', 'Contact Me'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-teal-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu with same background as nav */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden px-6 py-6 space-y-4 text-white font-medium bg-gray-900/70 backdrop-blur-md`}
      >
        {['Home', 'Skills', 'Projects', 'Testimonials','Contact Me'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block hover:text-teal-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
