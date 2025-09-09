'use client'

import AdminDashboard from '@/components/admin-dashboard'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <nav className="flex space-x-4">
                <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                  Content Editor
                </Link>
                <Link href="/admin/dashboard" className="text-blue-600 font-semibold">
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

      {/* Dashboard Content */}
      <AdminDashboard />
    </div>
  )
}
