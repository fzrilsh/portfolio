import frontMatter from 'front-matter';

export async function getAllPosts() {
  const response = await fetch('/blog-contents/index.json')
  if (!response.ok) {
    throw new Error('Failed to fetch blog index')
  }
  const posts = await response.json()
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostBySlug(slug) {
  const response = await fetch(`/blog-contents/${slug}.md`)
  if (!response.ok) {
    return null
  }

  const raw = await response.text()
  const { attributes: frontmatter, body: content } = frontMatter(raw)
  
  return { frontmatter, content, slug }
}

export async function getAllTags() {
  const posts = await getAllPosts()
  const tagSet = new Set()
  posts.forEach((post) => {
    post.hashtag.split(',').forEach((tag) => {
      tagSet.add(tag.trim())
    })
  })
  return [...tagSet].sort()
}
