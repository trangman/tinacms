'use client'

import { TinaCMS } from 'tinacms'
import { useEffect, useState } from 'react'

export function TinaProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Always render children
  return <>{children}</>
}
