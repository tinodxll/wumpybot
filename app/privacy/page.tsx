"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { useAdminStore } from "@/lib/store"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const { privacyPolicy, fetchData } = useAdminStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
            {privacyPolicy ? (
              <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} className="prose prose-invert max-w-none" />
            ) : (
              <p className="text-white text-center">Privacy Policy content is not available at the moment.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
