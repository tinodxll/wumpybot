"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronUp } from 'lucide-react'
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

// This is a placeholder for documentation content. In a real application, this would be fetched from a CMS or database.
const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: [
      { id: "introduction", title: "Introduction", content: "Welcome to Wumpy Bot! This documentation will guide you through setting up and using Wumpy Bot in your Discord server." },
      { id: "installation", title: "Installation", content: "To add Wumpy Bot to your server, simply click the 'Add to Discord' button on our homepage and follow the prompts." },
      { id: "configuration", title: "Configuration", content: "Once Wumpy Bot is in your server, use the !config command to set up your preferences and enable/disable features." },
    ],
  },
  {
    id: "features",
    title: "Features",
    content: [
      { id: "moderation", title: "Moderation", content: "Wumpy Bot offers powerful moderation tools including auto-mod, custom rules, and advanced logging." },
      { id: "music", title: "Music Playback", content: "Enjoy high-quality music streaming from various sources with our advanced music playback feature." },
      { id: "custom-commands", title: "Custom Commands", content: "Create your own custom commands to automate tasks and enhance your server's functionality." },
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    content: [
      { id: "api-integration", title: "API Integration", content: "Integrate Wumpy Bot with other services using our comprehensive API." },
      { id: "webhooks", title: "Webhooks", content: "Set up webhooks to receive real-time updates and notifications from Wumpy Bot." },
      { id: "troubleshooting", title: "Troubleshooting", content: "Having issues? Check out our troubleshooting guide for common problems and solutions." },
    ],
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentActiveSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentActiveSection = section.id
        }
      })

      setActiveSection(currentActiveSection)
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const filteredSections = docSections.map(section => ({
    ...section,
    content: section.content.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.content.length > 0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <motion.h1 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Wumpy Bot Documentation
          </motion.h1>
          <motion.div 
            className="max-w-xl mx-auto mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.nav 
              className="md:w-1/4 bg-white/10 backdrop-blur-lg rounded-lg p-6 h-fit md:sticky md:top-20 self-start"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">Contents</h2>
              <ul className="space-y-2">
                {docSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full ${activeSection === section.id ? 'text-blue-300' : 'text-white'} hover:text-blue-100 transition-colors`}
                    >
                      {section.title}
                    </button>
                    <ul className="ml-4 mt-2 space-y-1">
                      {section.content.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left w-full text-sm ${activeSection === item.id ? 'text-blue-300' : 'text-white/80'} hover:text-blue-100 transition-colors`}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <div className="md:w-3/4">
              {filteredSections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="mb-12"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <h2 className="text-3xl font-semibold text-white mb-6">{section.title}</h2>
                  {section.content.map((item) => (
                    <div key={item.id} id={item.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-blue-100">{item.content}</p>
                    </div>
                  ))}
                </motion.section>
              ))}
            </div>
          </div>

          {filteredSections.length === 0 && (
            <p className="text-center text-white mt-8">No results found. Try a different search term.</p>
          )}
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      <ScrollToTop />
    </div>
  )
}

