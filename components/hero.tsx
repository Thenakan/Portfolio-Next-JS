"use client"

import { ArrowDown, Facebook, Github, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import TypedText from "./typed" // TypedText component import
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-heading">Thenakan Sornalinkam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">
            <TypedText /> {/* Typed text component added here */}
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-gray-600 dark:text-gray-400">
            I build modern web applications with Next.js, React, TypeScript, and more. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild className="bg-primary hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
  asChild
  variant="outline"
  className="transition-all transform hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]"
>
  <a
    href="https://drive.google.com/file/d/1Ix_AY21hMB3Pv8J_1tHFVDfKAg6Ca0n8/view?usp=drive_link"
  >
    Download CV
  </a>
</Button>


          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button asChild variant="ghost" size="icon" className="transition-all transform hover:scale-110 hover:text-primary hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link href="https://github.com/Thenakan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="transition-all transform hover:scale-110 hover:text-primary hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link
                href="https://www.linkedin.com/in/thenakan-sornalinkam-905471324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>

            <Button asChild variant="ghost" size="icon" className="transition-all transform hover:scale-110 hover:text-primary hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link href="https://www.instagram.com/the_nu14/profilecard/?igsh=MTcxNDcybTE0ODVtbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
            </Button>

            <Button asChild variant="ghost" size="icon" className="transition-all transform hover:scale-110 hover:text-primary hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link href="https://www.facebook.com/Thenakan14?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
            </Button>

            <Button asChild variant="ghost" size="icon" className="transition-all transform hover:scale-110 hover:text-primary hover:shadow-[0_0_30px_8px_rgba(0,123,255,1)]">
              <Link
                href="https://wa.me/+94772023472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full"></div>
            <img
              src="/my.jpg?height=400&width=400"
              alt="Thenakan Sornalinkam"
              className="rounded-full object-cover w-full h-full relative z-10"
            />
          </div>
        </motion.div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  )
}

export default Hero
