"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { X } from 'lucide-react'

export function PremiumOrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-md"
          >
            <Card className="bg-gray-800 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Wumpy Premium</span>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg mb-4">Coming Soon!</p>
                <p className="text-center mb-4">
                  We're working hard to bring you Wumpy Premium. Stay tuned for updates!
                </p>
                <div className="bg-purple-500/20 p-4 rounded-lg">
                  <p className="text-center mb-2">
                    <span className="font-bold">Did you know?</span> You can win Wumpy Premium for free!
                  </p>
                  <p className="text-center">
                    Join our Discord server to participate in events and giveaways for a chance to win Premium access!
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={onClose} className="bg-blue-500 hover:bg-blue-600">
                  Got it!
                </Button>
                <Button asChild className="bg-purple-500 hover:bg-purple-600">
                  <a href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

