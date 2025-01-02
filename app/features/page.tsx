"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Music, Shield, Zap, MessageSquare, Users, Sparkles } from 'lucide-react'
import { ScrollToTop } from "@/components/scroll-to-top"

const features = [
  {
    title: "Music Playback",
    description: "High-quality music streaming from various sources, with playlist support and audio controls.",
    icon: Music,
  },
  {
    title: "Moderation Tools",
    description: "Powerful moderation features to keep your server safe and friendly, including auto-mod and custom rules.",
    icon: Shield,
  },
  {
    title: "Custom Commands",
    description: "Create your own custom commands to automate tasks and enhance server functionality.",
    icon: Zap,
  },
  {
    title: "Advanced Chat Features",
    description: "Engage your community with polls, quizzes, and interactive chat games.",
    icon: MessageSquare,
  },
  {
    title: "Role Management",
    description: "Easily manage roles and permissions with automated role assignment and self-serve role menus.",
    icon: Users,
  },
  {
    title: "Server Statistics",
    description: "Track your server's growth and activity with detailed analytics and customizable reports.",
    icon: Sparkles,
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <motion.main 
        className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Wumpy Bot Features</h1>
          <p className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto">
            Discover the powerful features that make Wumpy Bot the ultimate addition to your Discord server.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white cursor-pointer transition-all duration-300 hover:bg-white/20 active:bg-white/30"
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 mr-3 text-blue-300" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className={`text-blue-100 ${activeFeature === index ? '' : 'line-clamp-2'}`}>
                  {feature.description}
                </p>
                {activeFeature !== index && (
                  <button className="text-blue-300 mt-2 text-sm">Read more</button>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=887217813079609364&permissions=8&integration_type=0&scope=bot+applications.commands"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add Wumpy to Your Server
              </a>
            </Button>
          </div>
        </div>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

