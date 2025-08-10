"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { threshold: 0.2 },
    )

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center space-y-12"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white">About Me</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
        </motion.div>

        {/* Story Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl font-light text-white/90"
        >
          How I Accidentally Started a Web Development Journey
        </motion.h3>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-8 text-left max-w-2xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-white/80 font-light">
            It all started with a classic <span className="text-white font-medium">fork-in-the-road</span> dilemma: my
            friend suggested I learn either the wizardry of Python AI/ML or the wonders of Web Development. Naturally, I
            did what any sane person would do I panicked.
          </p>

          <p className="text-lg leading-relaxed text-white/80 font-light">
            While searching for the Holy Grail of courses, I stumbled upon Angela Yu's treasure trove of knowledge. With
            great determination (and questionable reading skills), I clicked{" "}
            <span className="text-white font-medium italic">Buy Now</span> on what I thought was a Python course... only
            to discover I had enrolled in the Web Development bootcamp instead.
          </p>

          <p className="text-lg leading-relaxed text-white/80 font-light">
            And just like that, fate (or my lack of attention) decided my career path for me. Spoiler alert: it was the
            happiest <span className="text-white font-medium">"accident"</span> of my life!
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-8"
        >
          <div className="relative">
            <div className="text-6xl text-white/10 absolute -top-4 -left-4">"</div>
            <p className="text-xl font-light text-white/90 italic relative z-10">
              Sometimes, the best journeys start with a misclick
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
