'use client'

import { TinaCMS } from 'tinacms'
import { useEffect, useState } from 'react'

export function TinaProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [cms, setCms] = useState<TinaCMS | null>(null)

  useEffect(() => {
    setMounted(true)
    
    // Initialize TinaCMS only on client side
    if (process.env.NODE_ENV !== 'production') {
      const tinaCms = new TinaCMS({
        enabled: true,
        sidebar: true,
        toolbar: true,
      })
      
      setCms(tinaCms)
      
      // Store CMS instance globally for development
      if (typeof window !== 'undefined') {
        ;(window as any).tina = tinaCms
      }
    }
  }, [])

  // Always render children, but TinaCMS will only be active after mount
  return <>{children}</>
}
