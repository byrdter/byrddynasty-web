import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  readTime: string
  content: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  readTime: string
}

export function getAllPosts(): BlogPostMetadata[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author || 'byrddynasty',
        category: data.category || 'Agentic AI',
        readTime: data.readTime || '5 min read',
      }
    })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'byrddynasty',
      category: data.category || 'Agentic AI',
      readTime: data.readTime || '5 min read',
      content,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = allPosts.map(post => post.category)
  return Array.from(new Set(categories))
}
