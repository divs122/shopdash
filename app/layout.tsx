'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SHOPDASH - Bring Your Shop Online',
  description: 'Create a custom dashboard and website for your store with SHOPDASH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', darkMode.toString())
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, mounted])

  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <body className={`${inter.variable} font-sans bg-gradient-to-br from-secondary-900 to-secondary-800 min-h-screen`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative z-10">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatePresence mode="wait">
            <motion.div
              key={darkMode ? 'dark' : 'light'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gradient Orbs */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </body>
    </html>
  )
} 