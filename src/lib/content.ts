import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, Category } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const categoriesDirectory = path.join(process.cwd(), 'content/categories')

export function getPostSlugs(): string[] {
  try {
    return fs.readdirSync(postsDirectory)
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      ...data,
      body: content,
      slug,
    } as BlogPost
  } catch {
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  return slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.status === 'published')
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter(post => post.category === category)
}

export function getCategories(): Category[] {
  try {
    const files = fs.readdirSync(categoriesDirectory)
    return files
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = path.join(categoriesDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return data as Category
      })
  } catch {
    return []
  }
}

export function getCategoryByName(name: string): Category | null {
  const categories = getCategories()
  return categories.find(cat => cat.name === name) || null
}
