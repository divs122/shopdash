'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function Resume() {
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
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary-600">
              <EnvelopeIcon className="w-5 h-5" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary-600">
              <PhoneIcon className="w-5 h-5" />
              {personalInfo.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              {personalInfo.location}
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BriefcaseIcon className="w-6 h-6 text-primary-600" />
            About Me
          </h2>
          <p className="text-gray-600">{personalInfo.about}</p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CodeBracketIcon className="w-6 h-6 text-primary-600" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BriefcaseIcon className="w-6 h-6 text-primary-600" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-primary-600 mb-4">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-primary-600" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-sm text-primary-600 mb-4">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
} 