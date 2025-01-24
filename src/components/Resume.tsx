"use client"

import React from "react"
import { motion } from "framer-motion"
import { ResumeViewer } from "@/components/ResumeViewer"

export function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 text-white">
      <div className="max-w-6xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-semibold text-white mb-2">Get to know about me more through my</h1>
          <motion.span
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            RESUME
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ResumeViewer />
        </motion.div>
      </div>
    </div>
  )
}

