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
    <div id="projects" className="relative min-h-screen w-full bg-black text-white ">
      <ParticleBackground />
      <div className="absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <ProjectCard title={project.title} description={project.description} link={project.link} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          ↑
        </button>
      </motion.div>
    </div>
  )
}

