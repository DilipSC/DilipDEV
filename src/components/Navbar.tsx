'use-client'

"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-gradient-to-r from-gray-900 to-black shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              DILIPSC
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-white hover:bg-gray-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#skills" className="text-white hover:bg-gray-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </Link>
              <Link href="#projects" className="text-white hover:bg-gray-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="#contact" className="text-white hover:bg-gray-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


