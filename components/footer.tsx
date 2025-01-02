import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Mobile layout (default) */}
        <div className="md:hidden">
          {/* Top section with Navigation and Other */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Navigation column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
                <li><Link href="/status" className="hover:text-blue-300 transition-colors">Status</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-300 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* Other column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="https://discord.com/oauth2/authorize?client_id=887217813079609364&permissions=8&integration_type=0&scope=bot+applications.commands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Bot Invite
                  </a>
                </li>
                <li><a href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Support Server</a></li>
                <li><Link href="/docs" className="hover:text-blue-300 transition-colors">Documentation</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal section centered below */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal-notice" className="hover:text-blue-300 transition-colors">Legal Notice</Link></li>
            </ul>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="flex space-x-16 lg:space-x-24">
            {/* Navigation column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
                <li><Link href="/status" className="hover:text-blue-300 transition-colors">Status</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-300 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* Other column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="https://discord.com/oauth2/authorize?client_id=887217813079609364&permissions=8&integration_type=0&scope=bot+applications.commands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Bot Invite
                  </a>
                </li>
                <li><a href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Support Server</a></li>
                <li><Link href="/docs" className="hover:text-blue-300 transition-colors">Documentation</Link></li>
              </ul>
            </div>

            {/* Legal column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal-notice" className="hover:text-blue-300 transition-colors">Legal Notice</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright and Admin Panel (same for both layouts) */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-center md:text-left text-gray-300">&copy; {new Date().getFullYear()} Wumpy Bot. All rights reserved.</p>
          <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-100" asChild>
            <Link href="/admin">Admin Panel</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

