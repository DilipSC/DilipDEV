"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TrendX",
    description: "Twitter scraper using Selenium for trend analysis and data extraction",
    link: "https://github.com/DilipSC/TrendX",
    tech: ["Python", "Selenium", "Data Analysis"],
  },
  {
    title: "PreBuilt-Auth",
    description: "Reusable JWT authentication system for rapid development and hackathons",
    link: "https://github.com/DilipSC/PreBuilt-Auth",
    tech: ["Node.js", "JWT", "Express"],
  },
  {
    title: "CapX-Pro",
    description: "Stock trading portfolio tracker with real-time value monitoring",
    link: "https://github.com/DilipSC/CapX-pro",
    tech: ["React", "API Integration", "Finance"],
  },
  {
    title: "SastaSnapchat",
    description: "Anonymous real-time chat application built with native WebSockets",
    link: "https://github.com/DilipSC/SastaSnapchat",
    tech: ["WebSocket", "Real-time", "Chat"],
  },
  {
    title: "URL-Shortener",
    description: "Free URL shortening service with analytics and custom links",
    link: "https://github.com/DilipSC/URL-Shortener.git",
    tech: ["Node.js", "MongoDB", "Analytics"],
  },
  {
    title: "KrishiSEVA",
    description: "Contract farming platform connecting farmers and buyers for crop trading",
    link: "https://github.com/DilipSC/SIH",
    tech: ["Full Stack", "Agriculture", "Trading"],
  },
]

function ProjectCard({
  title,
  description,
  link,
  tech,
  index,
}: {
  title: string
  description: string
  link: string
  tech: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="h-full p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5">
        <div className="space-y-4">
          {/* Project Title */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-light text-white group-hover:text-white/90 transition-colors">{title}</h3>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-white/70 font-light leading-relaxed text-sm">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-xs font-light text-white/60 border border-white/20 hover:border-white/40 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
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
          <h2 className="text-4xl sm:text-5xl font-light text-white">Projects</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="pt-8"
        >
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Each project represents a journey of learning, problem-solving, and innovation
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
