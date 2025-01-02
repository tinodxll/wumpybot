"use client"

import { useEffect } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { useAdminStore } from "@/lib/store"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPage() {
  const { blogPosts, fetchData } = useAdminStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Wumpy Bot Blog</h1>
          <div className="space-y-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-sm text-blue-200 mb-4">Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="text-white/80">{post.content}</p>
              </div>
            ))}
          </div>
          {blogPosts.length === 0 && (
            <p className="text-center text-blue-100 mt-8">No blog posts available at the moment.</p>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

