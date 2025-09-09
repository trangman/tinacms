import { getPostsByCategory, getCategories } from '@/lib/content'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const categories = getCategories()
  return categories.map((category) => ({
    category: category.name.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const posts = getPostsByCategory(categoryName)
  const categories = getCategories()
  const currentCategory = categories.find(cat => 
    cat.name.toLowerCase() === categoryName.toLowerCase()
  )

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              TinaCMS Blog
            </Link>
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

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {currentCategory?.name || categoryName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {currentCategory?.description || `All posts in the ${categoryName} category`}
          </p>
          <div className="flex justify-center">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ 
                backgroundColor: currentCategory?.color || '#3B82F6',
                color: 'white'
              }}
            >
              {posts.length} {posts.length === 1 ? 'Post' : 'Posts'}
            </span>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  {post.heroImage ? (
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm opacity-75">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-sm font-semibold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: currentCategory?.color || '#3B82F6' }}
                    >
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
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

      {/* Back to Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            ← Back to All Categories
          </Link>
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
