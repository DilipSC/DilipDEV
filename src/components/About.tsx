"use client"

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  // Track when the section comes into view
  const inViewOptions = {
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      inViewOptions
    )

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [inViewOptions])

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 py-20 px-4 text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: inView ? 0 : -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.h3
          initial={{ y: -20 }}
          animate={{ y: inView ? 0 : -20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          How I Accidentally Started a Web Development Journey?
        </motion.h3>
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg leading-relaxed font-mono"
          >
            It all started with a classic <span className="font-semibold text-xl">fork-in-the-road</span> dilemma: my friend suggested I learn either the wizardry of Python AI/ML or the wonders of Web Development. Naturally, I did what any sane person would do—I panicked.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg leading-relaxed font-mono"
          >
            While searching for the Holy Grail of courses, I stumbled upon Angela Yu&apos;s treasure trove of knowledge. With great determination (and questionable reading skills), I clicked <span className="font-semibold italic">Buy Now</span> on what I thought was a Python course... only to discover I had enrolled in the Web Development bootcamp instead.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg leading-relaxed font-mono"
          >
            And just like that, fate (or my lack of attention) decided my career path for me. Spoiler alert: it was the happiest &quot;accident&quot; of my life!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-xl font-semibold italic">
            Sometimes, the best journeys start with a misclick!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
