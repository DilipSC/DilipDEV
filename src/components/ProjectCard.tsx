"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <motion.h3 className="text-xl font-bold mb-2 text-purple-400" animate={{ y: isHovered ? -5 : 0 }}>
            {title}
          </motion.h3>
          <motion.p className="text-gray-300" animate={{ opacity: isHovered ? 1 : 0.7 }}>
            {description}
          </motion.p>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-purple-400 hover:text-purple-300"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            View Project →
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

