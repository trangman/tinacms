export interface BlogPost {
  title: string
  excerpt: string
  heroImage?: string
  publishedAt: string
  author: string
  category: string
  status: 'draft' | 'pending' | 'approved' | 'published'
  body: string
  slug: string
}

export interface Category {
  name: string
  description: string
  image?: string
  color?: string
}

export interface BlogPostPreview {
  title: string
  excerpt: string
  heroImage?: string
  publishedAt: string
  author: string
  category: string
  slug: string
}
