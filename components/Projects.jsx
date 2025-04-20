'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

// Assets
import book from './assets/book.png'
import conso from './assets/conso.png'
import ex from './assets/ex.png'
import game from './assets/game.png'
import weather from './assets/weat.png'
import llm from './assets/llm.png'
import Bookmark from './assets/bookmark.png'
import Port from './assets/port.png'

const allProjects = [
  {
    title: 'Bookhives.com',
    description: `Developed and deployed a full-stack web application for renting and lending books online for my college VNIT Nagpur. Implemented secure OTP-based authentication. Deployed under bookhives.com. Reached 45+ users in the first month.`,
    tech: ['Reactjs', 'Expressjs', 'Tailwind', 'Clerk', 'OTP auth'],
    image: book,
    Github: "https://github.com/DeepSwarup",
    website: 'https://bookhives.com/',
  },
  {
    title: 'Consortium',
    description: `Built frontend components for VNIT's annual E-summit “Consortium” using React and Tailwind. The site gained 10k+ views and 1k+ registrations.`,
    tech: ['React', 'Tailwind', 'Typescript', 'Framer motion'],
    image: conso,
    Github: "https://github.com/DeepSwarup",
    website: 'https://consortium.ecellvnit.org/',
  },
  {
    title: 'Weather Dashboard',
    description: `Created a weather app with caching and history support using SWR and MongoDB. Fetches real-time weather via OpenWeather API.`,
    tech: ['Nextjs', 'API', 'SWR', 'MongoDB'],
    image: weather,
    Github: "https://github.com/DeepSwarup/weather-dashboard",
    website: 'https://github.com/DeepSwarup/weather-dashboard',
  },
  {
    title: 'Expense Tracker',
    description: `A full-stack app with NextAuth and server actions. Tracks user expenses by category and month using MongoDB aggregation.`,
    tech: ['Nextjs', 'NextAuth', 'MongoDB'],
    image: ex,
    Github: "https://github.com/DeepSwarup/expense-tracker",
    website: 'https://github.com/DeepSwarup/expense-tracker',
  },
  {
    title: 'Multiplayer Game',
    description: `Socket.io based real-time multiplayer game with matchmaking, 10-player rooms, chat, and leaderboard system.`,
    tech: ['React', 'Express', 'Socket.IO', 'Game'],
    image: game,
    Github: "https://github.com/DeepSwarup/game_multiplayer",
    website: 'https://game-multiplayer-qa1c.vercel.app/',
  },
  {
    title: 'Sentiment Analysis',
    description: `Developed a scalable web application using Next.js and Tailwind CSS to analyze user reviews and social media text for sentiment (positive/negative) in real-time. Integrated Hugging Face’s DistilBERT model for accurate sentiment classification and MongoDB for storing analysis results. Implemented server-side API routes for efficient text processing, enhancing e-commerce and marketing insights.`,
    tech: ['Nextjs', 'Hugging Face', 'LLM', 'API'],
    image: llm,
    Github: "https://github.com/DeepSwarup/sentiment_analysis", 
    website: 'https://sentiment-analysis-gules.vercel.app/',
  },
  {
    title: 'Bookmark Manager',
    description: `Built a feature-rich bookmark manager with Next.js 14, Tailwind CSS for a responsive UI. Features include bookmark creation/editing, custom tag categorization, real-time fuzzy search, drag-and-drop reordering, and bulk import/export, demonstrating skills in modern JavaScript and user-focused front-end development.`,
    tech: ['Nextjs', 'MongoDB', 'NextAuth', 'JWT'],
    image: Bookmark,
    Github: "https://github.com/DeepSwarup/bookmark-manager", 
    website: 'https://github.com/DeepSwarup/bookmark-manager',
  },
  {
    title: 'Portfolio',
    description: `Built a feature-rich bookmark manager with Next.js 14, Tailwind CSS for a responsive UI. Features include bookmark creation/editing, custom tag categorization, real-time fuzzy search, drag-and-drop reordering, and bulk import/export, demonstrating skills in modern JavaScript and user-focused front-end development.`,
    tech: ['Nextjs', 'Tailwind', 'Framer-motion', 'TSparticles'],
    image: Port,
    Github: "https://github.com/DeepSwarup/deep_portfolio", 
    website: 'https://deep-portfolio-six.vercel.app/',
  },
]

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const [expandedProject, setExpandedProject] = useState(null)

  const handleCardClick = (project) => {
    setExpandedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseDetails = () => {
    setExpandedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-12 pt-10 pb-20 bg-[#0a0e1a] text-white overflow-hidden scroll-smooth"
    >
      {/* Subtle middle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-400/10 blur-2xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-teal-400 underline">
          Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProjects.slice(0, visibleProjects).map((project, i) => (
            <Tilt
              key={i}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#14b8a6"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={1000}
            >
              <motion.div
                className="bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden rounded-xl flex flex-col justify-between cursor-pointer"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <div className="text-center mt-10">
          {visibleProjects < allProjects.length ? (
            <button
              onClick={() => setVisibleProjects(allProjects.length)}
              className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-400 transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setVisibleProjects(4)}
              className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-400 transition"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Modal */}
        {expandedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleCloseDetails}
          >
            <motion.div
              className="bg-gray-900 p-10 rounded-xl max-w-4xl w-full text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-semibold mb-4">{expandedProject.title}</h3>
              <p className="text-lg text-gray-400 mb-4">{expandedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {expandedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={expandedProject.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-teal-300 px-5 py-2 rounded-full hover:bg-white/20 transition font-medium"
                >
                  View on GitHub
                </a>
                <a
                  href={expandedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-400 transition font-medium"
                >
                  Visit Website
                </a>
              </div>

              <button
                onClick={handleCloseDetails}
                className="text-teal-300 hover:text-teal-400 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
