'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ShoppingBagIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="container relative py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bring Your Shop Online with SHOPDASH!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Transform your physical store into a digital powerhouse. Get a custom website tailored to your business needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/request" 
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-primary-600 hover:bg-primary-50 transition-all shadow-soft hover:shadow-hover"
              >
                Get Your Website Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed online</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBagIcon,
                title: "Custom Shop Websites",
                description: "Get a professionally designed website that perfectly represents your shop's brand and values.",
              },
              {
                icon: GlobeAltIcon,
                title: "E-Commerce Setup",
                description: "Enable online ordering and secure payment processing for your customers.",
              },
              {
                icon: ChartBarIcon,
                title: "SEO & Marketing",
                description: "Boost your shop's visibility on Google and attract more customers online.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all"
              >
                <service.icon className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-800 to-secondary-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Digital?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of shopkeepers who have transformed their business with SHOPDASH
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-primary-500 hover:bg-primary-400 transition-all shadow-soft hover:shadow-hover"
              >
                Contact Us Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SHOPDASH?</h2>
            <p className="text-xl text-gray-600">We make it easy to succeed in the digital world</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Modern & Responsive Design",
              "Easy Content Management",
              "SEO Optimization",
              "Secure Payment Integration",
              "24/7 Customer Support",
              "Analytics & Reporting",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors"
              >
                <p className="text-lg font-medium text-gray-800">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 