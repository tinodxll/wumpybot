import { create } from 'zustand'

interface BlogPost {
  id: number
  title: string
  content: string
  createdAt: string
}

interface AdminStore {
  blogPosts: BlogPost[]
  termsOfService: string | null
  privacyPolicy: string | null
  fetchData: () => void
}

export const useAdminStore = create<AdminStore>((set) => ({
  blogPosts: [],
  termsOfService: null,
  privacyPolicy: null,
  fetchData: async () => {
    // In a real application, this would fetch from an API
    set({
      blogPosts: [
        {
          id: 1,
          title: "Welcome to Wumpy Bot",
          content: "We're excited to announce the launch of our new Discord bot...",
          createdAt: new Date().toISOString(),
        },
      ],
      termsOfService: `
        <h1>Terms of Service</h1>
        <p>Welcome to Wumpy Bot. By using our services, you agree to these terms...</p>
      `,
      privacyPolicy: `
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy outlines how we handle your data...</p>
      `,
    })
  },
}))

