"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, MapPin, Code, Smartphone } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      company: "SelfyPage-Win Research Center",
      role: "Full Stack Developer",
      type: "On-site",
      duration: "3 Months",
      achievements: [
        "Developed a Flutter app maintaining Cross platform application",
        "Features like Adaptive bitrate streaming and storage Implementation",
        "Backend CRUD implemented in Gin Framework (GOLANG) and hosted in AWS(EC2)",
        "Used Hosted PostgreSQL from Supabase",
      ],
      technologies: ["Flutter", "Golang", "Gin Framework", "AWS EC2", "PostgreSQL"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      company: "MyPrintCorner",
      role: "Full Stack Developer",
      type: "Remote",
      duration: "2 Month",
      achievements: [
        "Developed and maintained a dynamic web application using React.js, TailwindCSS, Node.js, and Express",
        "Designed and implemented RESTful APIs, integrating MongoDB for efficient data management",
        "Collaborated with a team to enhance website functionality, optimize performance, and resolve bugs",
      ],
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      icon: <Code className="w-6 h-6" />,
    },
  ]

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full space-y-16" // Increased max-w here
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white">Experience</h2>
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
          <p className="text-lg text-white/70 font-light">Building solutions across platforms and technologies</p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10 hidden sm:block">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : index % 2 === 0 ? -50 : 50,
              }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-white/20 flex items-center justify-center text-white rounded-none hidden sm:block"></div>

              {/* Experience Card */}
              <div
                className={`w-full sm:w-[calc(50%-2rem)] p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5 rounded-none ${index % 2 === 0 ? "sm:pr-10" : "sm:pl-10"}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center text-white rounded-none">
                      {" "}
                      {/* Increased icon size here */}
                      {exp.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/70 text-sm font-light">
                        <span className="text-base">{exp.role}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Achievements */}
                    <ul className="space-y-2 list-none pl-0">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-white/80 leading-relaxed text-sm font-light">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-none border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center pt-8"
        >
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Every experience is a step forward in the journey of growth and innovation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
