import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function LegalNoticePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Legal Notice</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4">Responsible for Content</h2>
            <p className="mb-4">
              [Your Name or Company Name]<br />
              [Your Address]<br />
              [Your City, State, ZIP]<br />
              [Your Country]
            </p>
            <p className="mb-4">
              Email: [Your Email]<br />
              Phone: [Your Phone Number]
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Disclaimer</h2>
            <p className="mb-4">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Copyright</h2>
            <p>
              © {new Date().getFullYear()} Wumpy Bot. All rights reserved. The content, design, and images on this website are protected by copyright laws. Unauthorized use or reproduction of any materials without express and written consent from Wumpy Bot is strictly prohibited.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
