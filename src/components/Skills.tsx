"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { title: "JavaScript", image: "/placeholder.svg?height=60&width=60" },
      { title: "TypeScript", image: "/placeholder.svg?height=60&width=60" },
      { title: "Python", image: "/placeholder.svg?height=60&width=60" },
      { title: "C++", image: "/placeholder.svg?height=60&width=60" },
      { title: "C", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "App Development",
    skills: [
      { title: "Flutter", image: "/placeholder.svg?height=60&width=60" },
      { title: "React Native", image: "/placeholder.svg?height=60&width=60" },
      { title: "Dart", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { title: "React", image: "/placeholder.svg?height=60&width=60" },
      { title: "Next.js", image: "/placeholder.svg?height=60&width=60" },
      { title: "Express.js", image: "/placeholder.svg?height=60&width=60" },
      { title: "TailwindCSS", image: "/placeholder.svg?height=60&width=60" },
      { title: "Flask", image: "/placeholder.svg?height=60&width=60" },
      { title: "Node.js", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { title: "MongoDB", image: "/placeholder.svg?height=60&width=60" },
      { title: "Firebase", image: "/placeholder.svg?height=60&width=60" },
      { title: "PostgreSQL", image: "/placeholder.svg?height=60&width=60" },
      { title: "MySQL", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "DevOps Tools",
    skills: [
      { title: "GitHub", image: "/placeholder.svg?height=60&width=60" },
      { title: "Vercel", image: "/placeholder.svg?height=60&width=60" },
      { title: "Docker", image: "/placeholder.svg?height=60&width=60" },
      { title: "Postman", image: "/placeholder.svg?height=60&width=60" },
      { title: "AWS", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "Blockchain Framework",
    skills: [
      { title: "Solidity", image: "/placeholder.svg?height=60&width=60" },
      { title: "Web3.js", image: "/placeholder.svg?height=60&width=60" },
      { title: "Ethereum", image: "/placeholder.svg?height=60&width=60" },
      { title: "Hardhat", image: "/placeholder.svg?height=60&width=60" },
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full text-center space-y-16"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white">Skills & Tech Stack</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Category Title */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-light text-white/90">{category.title}</h3>
                <div className="w-8 h-px bg-white/20 mx-auto"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{
                      delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="group w-full max-w-[120px]"
                  >
                    <div className="flex flex-col items-center space-y-3 p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5 h-full">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={`${skill.title} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-light text-white/70 group-hover:text-white transition-colors duration-300 text-center">
                        {skill.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pt-8"
        >
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies across multiple domains
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
