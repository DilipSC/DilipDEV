"use client"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
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

  // Replace this with your actual PDF URL
  const resumePdfUrl = "resume_v6.pdf" 

  return (
    <section id="resume" ref={ref} className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full space-y-12"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white">Resume</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
          <p className="text-lg text-white/70 font-light">Get to know more about my professional journey</p>
        </motion.div>

        {/* Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-black backdrop-blur-sm border border-white/10  p-8 hover:bg-white/10 transition-all duration-300"
        >
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="bg-black border-white/20 text-white hover:bg-white hover:text-black"
              onClick={() => window.open(resumePdfUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Screen
            </Button>
            <Button
              variant="outline"
              className="bg-black border-white/20 text-white hover:bg-white hover:text-black"
              onClick={() => {
                const link = document.createElement("a")
                link.href = resumePdfUrl
                link.download = "resume.pdf"
                link.click()
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="relative w-full h-[800px]  overflow-hidden">
            <iframe
              src={`${resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="Resume PDF"
            />

            {/* Fallback for browsers that don't support iframe PDF viewing */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="text-center space-y-4">
                <p className="text-white/70">{"Can't view the PDF? "}</p>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => window.open(resumePdfUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center pt-8"
        >
          <div className="relative">
            <div className="text-6xl text-white/10 absolute -top-4 left-1/2 transform -translate-x-1/2">"</div>
            <p className="text-xl font-light text-white/90 italic relative z-10">
              Every line tells a story of growth and dedication
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
