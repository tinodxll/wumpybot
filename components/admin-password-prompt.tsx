"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface AdminPasswordPromptProps {
  onCorrectPassword: () => void
}

export function AdminPasswordPrompt({ onCorrectPassword }: AdminPasswordPromptProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === '#Wumpy2025#') {
      onCorrectPassword()
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12 max-w-md w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Admin Access</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
        />
        <Button type="submit" className="w-full">
          Access Admin Panel
        </Button>
      </form>
      {error && (
        <p className="text-red-400 mt-2">{error}</p>
      )}
    </motion.div>
  )
}

