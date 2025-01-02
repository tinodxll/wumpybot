"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollToTop } from "@/components/scroll-to-top"

const commands = [
  {
    name: "/help",
    description: "Displays a list of available commands and their descriptions.",
    category: "General",
  },
  {
    name: "/ping",
    description: "Checks the bot's response time and API latency.",
    category: "General",
  },
  {
    name: "/play",
    description: "Plays a song or adds it to the queue.",
    category: "Music",
  },
  {
    name: "/skip",
    description: "Skips the current song and plays the next one in the queue.",
    category: "Music",
  },
  {
    name: "/ban",
    description: "Bans a user from the server.",
    category: "Moderation",
  },
  {
    name: "/kick",
    description: "Kicks a user from the server.",
    category: "Moderation",
  },
  {
    name: "/poll",
    description: "Creates a poll for server members to vote on.",
    category: "Utility",
  },
  {
    name: "/reminder",
    description: "Sets a reminder for a specific time or duration.",
    category: "Utility",
  },
]

const categories = ["All", ...new Set(commands.map(command => command.category))]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function CommandsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCommands = activeCategory === "All" 
    ? commands 
    : commands.filter(command => command.category === activeCategory)

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
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Wumpy Bot Commands</h1>
          <p className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto">
            Explore the various commands available with Wumpy Bot. From moderation to music, we've got you covered!
          </p>
          
          {/* Mobile: Dropdown for categories */}
          <div className="md:hidden mb-8">
            <Select onValueChange={setActiveCategory} value={activeCategory}>
              <SelectTrigger className="w-full bg-white/10 text-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: Buttons for categories */}
          <div className="hidden md:flex justify-center mb-8 space-x-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors mb-2 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-blue-100 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommands.map((command) => (
              <div key={command.name} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white transition-all duration-300 hover:bg-white/20 active:bg-white/30">
                <h3 className="text-xl font-bold mb-2">{command.name}</h3>
                <p className="text-blue-100 mb-4">{command.description}</p>
                <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {command.category}
                </span>
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
          <ScrollToTop />
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}

