import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useAdminStore } from '@/lib/store'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const fetchData = useAdminStore((state) => state.fetchData)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return <Component {...pageProps} />
}

export default MyApp

