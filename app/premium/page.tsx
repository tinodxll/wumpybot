"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Crown, Check, Gift } from 'lucide-react'
import Link from 'next/link'
import { PremiumOrderModal } from "@/components/premium-order-modal"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PremiumPage() {
  const [mounted, setMounted] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (!mounted) return null

  const premiumFeatures = [
    "Unlimited custom commands",
    "Priority support",
    "Exclusive bot voice",
    "Advanced analytics",
    "Custom bot status",
    "Increased audio quality",
    "Extended message logging",
    "Custom role management",
    "Advanced automod features",
    "Customizable welcome messages",
    "Scheduled announcements",
    "Integration with external services"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 py-24">
          <motion.h1 
            className="text-4xl font-bold text-white mb-8 mt-8 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Wumpy Premium
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Unlock the full potential of Wumpy Bot with our premium features!
          </motion.p>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Crown className="mr-2 text-yellow-400" /> Premium
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enhance your Discord experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {premiumFeatures.slice(0,6).map((feature, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="mr-2 text-green-400" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => setIsOrderModalOpen(true)}
                >
                  Upgrade to Premium
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Why Choose Premium?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Wumpy Premium offers an enhanced Discord experience with exclusive features, 
                  priority support, and advanced customization options. Elevate your server 
                  to new heights with our premium offerings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  More Premium Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {premiumFeatures.slice(6).map((feature, index) => (
                    <li key={index + 6} className="flex items-center text-white">
                      <Check className="mr-2 text-green-400" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className="mt-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Gift className="mr-2 text-purple-400" /> Win Premium on Discord
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  Did you know? You can also win Wumpy Premium by participating in events and giveaways on our Discord server!
                </p>
                <p className="text-blue-100">
                  Join our vibrant community, engage with other Wumpy enthusiasts, and get a chance to win Premium access for free!
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                  <a href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer">
                    Join Our Discord Server
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
      <PremiumOrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      <ScrollToTop />
    </div>
  )
}

