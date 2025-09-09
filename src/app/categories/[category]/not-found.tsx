import Link from 'next/link'

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Category Not Found</h2>
        <p className="text-gray-600 mb-8">
          The category you're looking for doesn't exist or has no posts yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
}
