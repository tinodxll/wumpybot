"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Wave } from "@/components/wave"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Enhance Your Discord Server with Wumpy
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A powerful Discord bot that brings new possibilities to your server. Easy to use, reliable, and packed with
              features.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=887217813079609364&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Discord
                </a>
              </Button>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white transition-all duration-300 hover:bg-white/20 active:bg-white/30">
                <h3 className="text-xl font-bold mb-2">Easy Setup</h3>
                <p>Get started in seconds with simple commands and intuitive interface</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white transition-all duration-300 hover:bg-white/20 active:bg-white/30">
                <h3 className="text-xl font-bold mb-2">24/7 Online</h3>
                <p>Reliable performance with high uptime and quick response times</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white transition-all duration-300 hover:bg-white/20 active:bg-white/30">
                <h3 className="text-xl font-bold mb-2">Custom Features</h3>
                <p>Tailored functionality to meet your server's unique needs</p>
              </div>
            </div>
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
