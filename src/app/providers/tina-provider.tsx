'use client'

import { TinaCMS } from 'tinacms'
import { useEffect, useState } from 'react'

export function TinaProvider({ children }: { children: React.ReactNode }) {
  const [cms] = useState(() => new TinaCMS({
    enabled: process.env.NODE_ENV !== 'production',
    sidebar: true,
    toolbar: true,
  }))

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('tinacms').then(({ TinaCMS }) => {
        // Initialize TinaCMS for development
      })
    }
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
