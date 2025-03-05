"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample projects - in a real implementation, you might fetch these from GitHub API
const sampleProjects = [
  {
    id: 1,
    title: "Style Sync Ai", 
    description: "A full-stack Style Sync Ai platform built with Next.js, MongoDB, and Stripe integration.",
    image: "/stylesync.png?height=300&width=500",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/Thenakan",
    liveUrl: "https://style-sync-ai.vercel.app/",
  },
  {
    id: 2,
    title: "Plantex",
    description: "A collaborative task management application with real-time updates using Socket.io.",
    image: "/plantex.png?height=300&width=500",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Thenakan",
    liveUrl: "https://thenakan.github.io/Assignment-9/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/portfolio.png?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Thenakan",
    liveUrl: "https://portfolio-two-tau-67.vercel.app/",
  },
  {
    id: 4,
    title: "Coffee Website",
    description: "Make your day great with our special coffee",
    image: "/coffee.png?height=300&width=500",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Thenakan",
    liveUrl: "https://thenakan.github.io/Assignment07_Thenakan/",
  },
]
 
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Check out my GitHub for more!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sampleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-heading">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/Thenakan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects

