"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function MaintenancePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real application, you would validate credentials against your backend
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAdminAuthenticated', 'true')
      localStorage.setItem('adminUsername', username)
      document.cookie = `isAdminAuthenticated=true; path=/; max-age=3600`;
      router.push('/admin')
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Maintenance Mode</h1>
      <p className="text-xl mb-8">We're currently performing maintenance. Please check back later.</p>
      
      {!showLogin && (
        <button 
          className="text-blue-300 hover:text-blue-100 transition-colors"
          onClick={() => setShowLogin(true)}
        >
          Admin Login
        </button>
      )}

      {showLogin && (
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-800 text-white"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-white"
          />
          <Button type="submit">Login</Button>
        </form>
      )}
    </div>
  )
}

