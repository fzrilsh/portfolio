import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug } from '@/lib/blog'

function PostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-5 w-24 rounded bg-white-10" />
      <div className="mb-3 h-10 w-3/4 rounded bg-white-10" />
      <div className="mb-8 flex gap-2">
        <div className="h-6 w-16 rounded bg-white-10" />
        <div className="h-6 w-20 rounded bg-white-10" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-white-5" />
        <div className="h-4 w-5/6 rounded bg-white-5" />
        <div className="h-4 w-4/6 rounded bg-white-5" />
      </div>
    </div>
  )
}

function NotFoundState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-[48px] font-bold text-white-10">404</p>
      <p className="mt-4 text-[18px] text-white-7">Post not found</p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 text-[14px] text-accent transition-colors hover:text-white"
      >
        ← Back to Blog
      </Link>
    </div>
  )
}

function ErrorState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-[18px] text-red-400">Failed to load post</p>
      <p className="mt-2 text-[14px] text-white-7">{message}</p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 text-[14px] text-accent transition-colors hover:text-white"
      >
        ← Back to Blog
      </Link>
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setNotFound(false)

    getPostBySlug(slug)
      .then((data) => {
        if (!data) {
          setNotFound(true)
        } else if (!data.frontmatter?.title) {
          setNotFound(true)
        } else {
          setPost(data)
        }
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  const tags = post?.frontmatter?.hashtag
    ? post.frontmatter.hashtag.split(',').map((t) => t.trim())
    : []

  const description = post?.content
    ? post.content.replace(/[#*`>\[\]()!\-_~]/g, '').substring(0, 160).trim() + '...'
    : ''

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{post ? `${post.frontmatter.title} — Fazril's Blog` : 'Blog — Fazril'}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="bg-black px-10 py-[120px] max-md:px-6 max-md:py-[60px]">
        <div className="mx-auto max-w-[800px]">
          {loading && <PostSkeleton />}

          {!loading && notFound && <NotFoundState />}

          {!loading && error && <ErrorState message={error.message} />}

          {!loading && !notFound && !error && post && (
            <>
              <Link
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 text-[14px] text-white-7 transition-colors hover:text-accent"
              >
                ← Back to Blog
              </Link>

              <article>
                <header className="mb-10">
                  <time className="mb-4 block text-[14px] text-white-7">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  <h1 className="mb-6 text-[40px] font-semibold -tracking-[1px] leading-[1.2] text-white max-md:text-[32px] max-[414px]:text-[28px]">
                    {post.frontmatter.title}
                  </h1>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent-10 px-3 py-[6px] border border-accent-30 text-[12px] text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </header>

                <div className="prose-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
