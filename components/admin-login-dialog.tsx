"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

// Simulated user data for testing purposes
const users = [
  { username: 'tino', password: '12345', role: 'owner' },
  { username: 'admin', password: 'adminpass', role: 'admin' }
]

export function AdminLoginDialog() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulated authentication check
    const user = users.find(u => u.username === username && u.password === password)
    
    if (user) {
      // Set authentication data
      localStorage.setItem('isAdminAuthenticated', 'true')
      localStorage.setItem('adminUsername', user.username)

      console.log('Login successful:', { username: user.username, role: user.role })

      toast({
        title: "Login successful",
        description: `Welcome back, ${username}!`,
      })
      setIsOpen(false)
      router.push('/admin')
    } else {
      console.log('Login failed:', { username })

      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-100">Admin Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

