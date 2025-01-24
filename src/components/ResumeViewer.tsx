"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut} from "lucide-react"

export function ResumeViewer() {
  const [scale, setScale] = useState(1)

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2))
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5))

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        className="relative aspect-[1400/720] overflow-hidden rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://i.ibb.co/c2F6N0f/Screenshot-2025-01-25-014939.png"
          alt="Resume"
          layout="fill"
          objectFit="contain"
          quality={100}
          style={{ transform: `scale(${scale})`, transition: "transform 0.3s ease-out" }}
        />
      </motion.div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <Button variant="secondary" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        
      </div>
    </div>
  )
}

