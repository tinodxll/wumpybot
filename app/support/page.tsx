import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, BookOpen, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { ScrollToTop } from "@/components/scroll-to-top"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function SupportPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Wumpy Bot Support</h1>
          <p className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto">
            Need help with Wumpy Bot? We're here to assist you. Choose from our various support options below.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Discord Support Server
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Join our community for real-time support and discussions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <a href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer">
                    Join Discord Server
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Mail className="w-6 h-6 mr-2" />
                  Email Support
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Contact our support team directly via email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <a href="mailto:support@wumpybot.com">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Documentation
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Explore our comprehensive documentation for detailed guides.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <Link href="/docs">
                    View Documentation
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <HelpCircle className="w-6 h-6 mr-2" />
                  FAQ
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Find answers to commonly asked questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <Link href="/faq">
                    View FAQ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
            <p className="text-blue-100 mb-6">
              If you couldn't find the answer you were looking for, don't hesitate to reach out to us directly.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="mailto:contact@wumpybot.com">
                Contact Us
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
