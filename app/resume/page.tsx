'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])
  const scale = useTransform(scrollY, [0, 100], [1, 0.95])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const personalInfo = {
    name: "Divyanshu Sah",
    title: "Full Stack Developer",
    email: "divyanshusah9675@gmail.com",
    phone: "+91 9675738746",
    location: "Ghorakhal, Uttarakhand",
    about: "Passionate Full Stack Developer with expertise in creating modern web applications. Specialized in Next.js, React, and Node.js development."
  }

  const skills = [
    "Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "Git", "Docker", "AWS",
    "REST APIs", "GraphQL", "Jest", "CI/CD", "Agile"
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing custom web applications and e-commerce solutions for clients using Next.js, React, and Node.js."
    },
    {
      title: "Web Developer",
      company: "Sah Prashad Bhandar",
      period: "2022 - 2023",
      description: "Created and maintained the e-commerce platform for Sah Prashad Bhandar, implementing modern design patterns and best practices."
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Your University",
      period: "2018 - 2022",
      description: "Computer Science and Engineering"
    }
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 transition-colors duration-300 dark:bg-secondary-900">
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-28 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-soft hover:scale-110 transition-transform duration-300"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      <div className="container">
        {/* Hero Section */}
        <motion.div
          style={{ opacity, scale }}
          className="relative text-center mb-24 p-8 rounded-2xl bg-gradient-to-br from-primary-600/10 to-primary-600/5 dark:from-primary-400/10 dark:to-primary-400/5 backdrop-blur-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent dark:from-primary-400 dark:to-accent">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                {personalInfo.email}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                {personalInfo.phone}
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <MapPinIcon className="w-5 h-5" />
                {personalInfo.location}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
            <BriefcaseIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{personalInfo.about}</p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
            <CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium backdrop-blur-lg border border-primary-100 dark:border-primary-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
            <BriefcaseIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-secondary-800 shadow-soft dark:shadow-none border border-gray-100 dark:border-secondary-700"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
            <AcademicCapIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-secondary-800 shadow-soft dark:shadow-none border border-gray-100 dark:border-secondary-700"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
} 