"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-white font-light text-xl tracking-wider hover:text-white/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DILIP S CHAKRAVARTHI
          </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["experience", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/80 hover:text-white font-light text-sm uppercase tracking-wide transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
