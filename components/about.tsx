"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-blue-400/20 rounded-lg transform rotate-3"></div>
              <img
                src="/about.jpg?height=400&width=400"
                alt="Thenakan Sornalinkam"
                className="rounded-lg object-cover w-full h-full relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer with a passion for creating modern web applications
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a dedicated full stack developer with expertise in Next.js, React, TypeScript, and various other
              technologies. I enjoy building responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With a strong foundation in both frontend and backend development, I can handle projects from conception
              to deployment. I'm constantly learning and adapting to new technologies to stay at the forefront of web
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link
                  href="https://drive.google.com/file/d/1Ix_AY21hMB3Pv8J_1tHFVDfKAg6Ca0n8/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://wa.me/94772023472?text=Hey%20Whats%20Up%21
">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

