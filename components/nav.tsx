"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { WumpyLogo } from "./wumpy-logo"
import { Menu, X } from 'lucide-react'

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/commands', label: 'Commands' },
    { href: '/premium', label: 'Premium' },
    { href: '/support', label: 'Support' },
    { href: '/faq', label: 'FAQ' },
    { href: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-800/75">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={handleLogoClick}>
            <WumpyLogo />
            <span className="text-2xl font-bold text-white">Wumpy</span>
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href ? 'text-blue-300' : 'text-white hover:text-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-blue-300 bg-gray-900'
                    : 'text-white hover:text-blue-100 hover:bg-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

