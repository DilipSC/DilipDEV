"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

const roles = ["Full Stack Developer", "Gamer", "Traveller", "Photographer"];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateRole = () => {
      const currentRole = roles[currentRoleIndex];
      if (!isDeleting && displayedRole !== currentRole) {
        // Typing effect
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      } else if (isDeleting && displayedRole !== "") {
        // Deleting effect
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole === "") {
        // Move to the next role
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      }

      const typingSpeed = isDeleting ? 60 : 100;
      timeout = setTimeout(animateRole, typingSpeed);
    };

    timeout = setTimeout(animateRole, 200);

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayedRole, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white pt-10">
            Hi, I&#39;m Dilip Chakravarthi.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold font-mono text-gray-300 h-20 mt-0">
            A{" "}
            <span className="text-white font-mono transition-all duration-300 ease-in-out">
              {displayedRole}
            </span>
            <span className="animate-blink ml-1">|</span>
          </h2>
          <p className="text-lg font-mono text-gray-400 max-w-2xl mt-0">
            I am passionate about crafting seamless digital experiences that leave a lasting impression. From designing engaging front-end interfaces to building robust back-end systems, I thrive on bringing ideas to life with clean, scalable, and efficient code. My mission is to create innovative solutions that blend functionality with elegance, making every interaction meaningful.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/DilipSC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dilip-s-chakravarthi-5656ab209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/f1.ftw1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-300 rounded-full animate-pulse"></div>
            <Image
              src="https://i.ibb.co/KnNPVGj/Whats-App-Image-2025-02-13-at-19-54-04-e84d31af.jpg"
              alt="Dilip C."
              width={320}
              height={320}
              className="rounded-full object-cover border-4 border-white relative z-10 transition-all duration-500 ease-in-out filter hover:brightness-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
