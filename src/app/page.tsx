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
            {categories.map((category) => {
              const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-')
              const categoryPosts = posts.filter(post => post.category === category.name)
              
              return (
                <Link
                  key={category.name}
                  href={`/categories/${categorySlug}`}
                  className="block p-6 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors hover:shadow-lg group"
                  style={{ borderColor: category.color }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h4>
                    <span 
                      className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      {categoryPosts.length}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="text-sm text-blue-600 group-hover:text-blue-800 font-medium">
                    View Posts →
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Latest Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 overflow-hidden">
                  {post.heroImage ? (
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm opacity-75">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      href={`/categories/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      {post.category}
                    </Link>
                    <time className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>
                  </div>
                  <h4 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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