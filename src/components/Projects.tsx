"use client"

import React from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"
import { ParticleBackground } from "@/components/ParticleBackground"

const projects = [
  {
    title: "TrendX",
    description: "TwitterScrapper using Selenium",
    link: "https://github.com/DilipSC/TrendX",
  },
  {
    title: "PreBuilt-Auth",
    description: "Authentication System using JWT which can reuse for hackathons and while building a new project",
    link: "https://github.com/DilipSC/PreBuilt-Auth",
  },
  {
    title: "CapX-Pro",
    description: "Stock Trading Portfolio Value Tracker",
    link: "https://github.com/DilipSC/CapX-pro",
  },
  {
    title: "SastaSnapchat",
    description: "Anonymous chatting app built using native websockets",
    link: "https://github.com/DilipSC/SastaSnapchat",
  },
  {
    title: "URL-Shortener",
    description: "Shortens Url and can be used to multiple times for free",
    link: "https://github.com/DilipSC/URL-Shortener.git",
  },
  {
    title: "KrishiSEVA",
    description: "A Contract Farming Website which provides both farmer and buyer to trade corps",
    link: "https://github.com/DilipSC/SIH",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 z-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            Projects
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="h-full"
              >
                <ProjectCard 
                  title={project.title} 
                  description={project.description} 
                  link={project.link} 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold p-2 sm:p-3 rounded-full shadow-lg text-sm sm:text-base"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </motion.div>
    </section>
  )
}
