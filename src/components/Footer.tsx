"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react'


export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          {/* Contact Information and Social Links side by side */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
            {/* Contact Information */}
            <div className="space-y-4 flex-1">
              <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>dilipchakravarthi570@gmail.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7975077029</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 flex-1">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/DilipSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dilip-s-chakravarthi-5656ab209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/f1.ftw1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Button */}
        <button className="bg-gray-700 p-4 m-4 font-mono rounded-lg" onClick={() => window.open("https://pdflink.to/dscr/", "_blank")}>
  View my Resume
</button>


        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Dilip S Chakravarthi. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
