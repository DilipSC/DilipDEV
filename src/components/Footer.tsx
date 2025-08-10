"use client"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Github, Linkedin, Instagram, Mail, Phone, Heart } from "lucide-react"

export default function Footer() {
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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/DilipSC",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dilip-s-chakravarthi-5656ab209/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/f1.ftw1/",
      icon: <Instagram className="w-6 h-6" />,
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "dilipchakravarthi570@gmail.com",
      href: "mailto:dilipchakravarthi570@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 7975077029",
      href: "tel:+917975077029",
    },
  ]

  return (
    <footer id="contact" ref={ref} className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white">Get In Touch</h2>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
            <p className="text-lg text-white/70 font-light">{"Let's create something amazing together"}</p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        {contact.icon}
                      </div>
                      <span className="font-light">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-white/60 text-sm font-light"
                >
                  Follow me for updates on my latest projects and tech insights
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-center space-y-6"
          >
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/60 text-sm font-light">
              <span>© {new Date().getFullYear()} Dilip S Chakravarthi.</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
