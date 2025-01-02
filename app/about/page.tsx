import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Instagram, DiscIcon as Discord } from 'lucide-react'
import Link from 'next/link';
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 py-32"> {/* Increased top padding */}
          <h1 className="text-4xl font-bold text-white mb-12 text-center">About Wumpy Bot</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>Wumpy Bot was created with a simple mission: to make Discord servers more engaging, manageable, and fun. We strive to provide a versatile tool that enhances the Discord experience for both moderators and users alike.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="text-white">Our History</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>Founded by Tino, Wumpy Bot started as a passion project to create the ultimate Discord bot. What began as a simple idea has grown into a powerful tool used by numerous servers worldwide, now co-led by Jonatan.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardHeader>
                <CardTitle className="text-white">Our Team</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>We're a dedicated team of developers and community managers passionate about creating the best Discord bot experience. Our team works tirelessly to bring new features and improvements to Wumpy Bot.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Founders</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white/10 backdrop-blur-lg border-none">
                <CardHeader>
                  <CardTitle className="text-white">Tino</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-100">
                  <p>Tino is the original creator of Wumpy Bot. With a passion for Discord and bot development, he started this project to bring innovative features to Discord communities. His vision and dedication have been the driving force behind Wumpy's growth.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-none">
                <CardHeader>
                  <CardTitle className="text-white">Jonatan</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-100">
                  <p>Jonatan joined the Wumpy Bot project as a co-lead, bringing fresh ideas and expertise to the team. His contributions have been instrumental in expanding Wumpy's capabilities and reaching new heights in bot functionality and user experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Connect With Us</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                <Link href="/github">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                <Link href="/instagram">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                <Link href="https://discord.gg/wumpy" target="_blank" rel="noopener noreferrer">
                  <Discord className="mr-2 h-4 w-4" />
                  Discord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

