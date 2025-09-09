import { getPublishedPosts, getCategories } from '@/lib/content'
import { BlogPostPreview } from '@/types/blog'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const posts = getPublishedPosts()
  const categories = getCategories()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TinaCMS Blog</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600">
                Home
              </Link>
              <Link href="/admin" className="text-gray-900 hover:text-blue-600">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Blog
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A modern blog built with Next.js and TinaCMS. Create, edit, and manage content with ease.
          </p>
          <Link
            href="/admin"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Writing
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-6 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
                style={{ borderColor: category.color }}
              >
                <h4 className="text-xl font-semibold mb-2">{category.name}</h4>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Latest Posts</h3>
          <div className="text-center text-gray-600">
            <p>Posts will appear here once you create them in the admin panel.</p>
            <Link
              href="/admin"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your First Post
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 TinaCMS Blog. Built with Next.js and TinaCMS.</p>
        </div>
      </footer>
    </div>
  )
}