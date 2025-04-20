'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import avatar1 from './assets/op.png'
import avatar2 from './assets/pr.png'

const testimonials = [
    {
        name: 'Om Prakash Jat',
        role: 'Software Developer',
        text: 'Co-founded Bookhives with Deep. It was a fantastic experience. His attention to detail and ability to bring complex ideas to life is unmatched.',
        avatar: avatar1,
        linkedin: 'https://www.linkedin.com/in/om-prakash-jat-ba4a16228/',
    },
    {
        name: 'Pratik Kumar Jha',
        role: 'Software Developer',
        text: 'Professional, reliable, and extremely talented. Would absolutely collaborate again!',
        avatar: avatar2,
        linkedin: 'https://www.linkedin.com/in/pratik-kumar-jha-b95473259/',
    },
]

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative bg-[#0a0e1a] text-white px-6 md:px-12 pt-20 pb-28 overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-400/10 blur-2xl rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-14 text-teal-400 underline">Testimonials</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 text-center shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-24 h-24 mb-4 mx-auto rounded-full overflow-hidden border-2 border-teal-400">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-gray-300 mb-4 text-sm flex-1">"{item.text}"</p>

                            <div className="mt-auto">
                                <div className="flex justify-center items-center gap-2">
                                    <h4 className="text-teal-300 font-semibold">{item.name}</h4>
                                    {item.linkedin && (
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-teal-400 transition"
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
