"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Construction } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Wave } from "@/components/wave"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-screen text-center gap-8 pt-24 md:pt-16 pb-32">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12 max-w-2xl w-full"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Construction className="w-16 h-16 md:w-24 md:h-24 text-blue-300 mx-auto mb-6 animate-bounce" />
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                New Dashboard Under Construction
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-blue-100 mb-8"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We're building a powerful new dashboard to help you manage your Discord bot. 
                Join our Discord server to stay updated on the progress!
              </motion.p>
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  asChild
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <a
                    href="https://discord.gg/wumpy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Discord
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30"></div>
        <Wave />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
