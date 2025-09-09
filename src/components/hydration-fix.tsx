'use client'

import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Clean up browser extension attributes that cause hydration mismatches
    const cleanupExtensionAttributes = () => {
      const body = document.body
      if (body) {
        // Remove Grammarly attributes
        body.removeAttribute('data-new-gr-c-s-check-loaded')
        body.removeAttribute('data-gr-ext-installed')
        
        // Remove other common extension attributes
        body.removeAttribute('data-grammarly-shadow-root')
        body.removeAttribute('data-grammarly')
      }
    }

    // Run cleanup after a short delay to ensure extensions have loaded
    const timeoutId = setTimeout(cleanupExtensionAttributes, 100)
    
    // Also run on DOM mutations
    const observer = new MutationObserver(() => {
      cleanupExtensionAttributes()
    })
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-gr-', 'data-grammarly']
    })

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return null
}
