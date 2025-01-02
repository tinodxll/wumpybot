"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Crown } from 'lucide-react'
import Link from 'next/link'

export default function PremiumUpgradePage() {
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
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl font-bold text-white mb-8 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Upgrade to Wumpy Premium
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Unlock all premium features and take your Discord server to the next level!
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Crown className="mr-2 text-yellow-400" /> Premium Subscription
                </CardTitle>
                <CardDescription className="text-blue-100">
                  $9.99/month or $99.99/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
                    </div>
                    <div>
                      <Label htmlFor="card" className="text-white">Card Information</Label>
                      <Input id="card" type="text" placeholder="1234 5678 9012 3456" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white">Expiry Date</Label>
                        <Input id="expiry" type="text" placeholder="MM/YY" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-white">CVC</Label>
                        <Input id="cvc" type="text" placeholder="123" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Subscribe Now
                </Button>
                <p className="text-sm text-blue-100">
                  By subscribing, you agree to our <Link href="/terms" className="text-blue-300 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-300 hover:underline">Privacy Policy</Link>.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

