import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function GitHubComingSoon() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">GitHub Coming Soon</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">We're working on our GitHub presence. Stay tuned!</p>
          <Button asChild variant="outline" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20">
            <Link href="/about">Return to About Us</Link>
          </Button>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
