'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading TinaCMS...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">TinaCMS Admin</h1>
              <nav className="flex space-x-4">
                <Link href="/admin" className="text-blue-600 font-semibold">
                  Content Editor
                </Link>
                <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              </nav>
            </div>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </header>

      {/* TinaCMS Admin */}
      <div className="h-screen">
        <iframe
          src="http://localhost:4001/admin/index.html"
          className="w-full h-full border-0"
          title="TinaCMS Admin"
        />
      </div>
    </div>
  )
}
