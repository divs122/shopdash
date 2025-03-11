'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Examples() {
  const caseStudy = {
    title: "Sah Prashad Bhandar",
    description: "A modern e-commerce platform for traditional temple essentials",
    link: "https://sah-prashad-bhandar.vercel.app/",
    features: [
      "Modern E-commerce Platform",
      "Secure Payment Integration",
      "Product Catalog Management",
      "Mobile-Responsive Design",
      "Order Management System",
      "Customer Support Integration"
    ],
    stats: [
      { label: "Products Listed", value: "20+" },
      { label: "Daily Visitors", value: "100+" },
      { label: "Order Success Rate", value: "99%" }
    ],
    screenshots: [
      {
        title: "Homepage",
        description: "Modern landing page showcasing featured products and temple essentials",
        image: "/examples/homepage.jpg"
      },
      {
        title: "Product Catalog",
        description: "Easy-to-browse product listings with detailed information",
        image: "/examples/products.jpg"
      },
      {
        title: "Order Process",
        description: "Streamlined checkout process for better conversion",
        image: "/examples/order.jpg"
      }
    ]
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-primary-100">
              Discover how we help businesses transform their online presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
              <h2 className="text-3xl font-bold mb-4">{caseStudy.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{caseStudy.description}</p>
              
              <Link 
                href={caseStudy.link}
                target="_blank"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
              >
                Visit Website
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {caseStudy.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features List */}
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {caseStudy.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Screenshots */}
              <h3 className="text-2xl font-bold mb-6">Website Showcase</h3>
              <div className="space-y-8">
                {caseStudy.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        width={1920}
                        height={1080}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{screenshot.title}</h4>
                    <p className="text-gray-600">{screenshot.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 