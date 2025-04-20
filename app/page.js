// app/page.jsx
// import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Other sections coming next */}
    </>
  )
}
