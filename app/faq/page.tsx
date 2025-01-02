"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollToTop } from "@/components/scroll-to-top"

// Placeholder FAQ data
const faqs = [
  {
    id: 1,
    question: "What is Wumpy Bot?",
    answer: "Wumpy Bot is a versatile Discord bot designed to enhance your server experience with moderation tools, music playback, and custom commands.",
    categoryId: 1
  },
  {
    id: 2,
    question: "How do I add Wumpy Bot to my server?",
    answer: "You can add Wumpy Bot to your server by clicking the 'Add to Discord' button on our homepage and following the authorization process.",
    categoryId: 1
  },
  // Add more FAQs as needed
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const toggleFaqExpansion = (id: number) => {
    setExpandedFaqs(prev => 
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    )
  }

  const filteredFaqs = selectedCategory
    ? faqs.filter(faq => faq.categoryId === selectedCategory)
    : faqs

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>
          
          <div className="mb-8">
            <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : Number(value))} value={selectedCategory?.toString() || "all"}>
              <SelectTrigger className="bg-white/10 text-white">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {/* Add category items here if you have categories */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transition-all hover:bg-white/20 cursor-pointer"
                onClick={() => toggleFaqExpansion(faq.id)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                </div>
                {expandedFaqs.includes(faq.id) && (
                  <p className="text-blue-100 mb-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="text-center text-blue-100 mt-8">No FAQs available at the moment.</p>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
