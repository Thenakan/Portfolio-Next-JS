"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si"
import { BiServer } from "react-icons/bi"
import { FiFigma } from "react-icons/fi"
import { DiGithubAlt } from "react-icons/di"

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <FaReact 
        className="h-8 w-8 mb-4" 
        style={{
          animation: "glow 1.5s ease-in-out infinite",
          background: "none",
          color: "#61DAFB", // React Icon Color (light blue)
        }} 
      />
    ),
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  
  {
    title: "Backend",
    icon: (
      <FaNodeJs 
        className="h-8 w-8 mb-4" 
        style={{
          animation: "glow 1.5s ease-in-out infinite",
          background: "none",
          color: "#68A063", // Node.js Icon Color (green)
        }} 
      />
    ),
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  
  {
    title: "DevOps & Tools",
    icon: (
      <FaAws 
        className="h-8 w-8 mb-4" 
        style={{
          animation: "glow 1.5s ease-in-out infinite",
          background: "none",
          color: "#FF9900", // AWS Icon Color (orange)
        }} 
      />
    ),
    skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD"],
  },
  
  {
    title: "Design & Others",
    icon: (
      <FiFigma 
        className="h-8 w-8 mb-4" 
        style={{
          animation: "glow 1.5s ease-in-out infinite",
          background: "none",
          color: "#F24E1E", // Figma Icon Color (orange-red)
        }} 
      />
    ),
    skills: ["Figma", "Canva", "Google Docs", "Google Sheets", "Google Forms"],
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack development spectrum. Here are some of the
            key skills I've developed over the years.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold gradient-heading">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

// CSS (Updated Glow Effect)
const glowEffect = `
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
    }
    50% {
      box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
    }
    100% {
      box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
    }
  }
`

// Injecting the CSS rule into the document
if (typeof document !== "undefined") {
  const styleTag = document.createElement('style')
  styleTag.innerHTML = glowEffect
  document.head.appendChild(styleTag)
}
