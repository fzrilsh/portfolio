import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getAllPosts } from '@/lib/blog'

function BlogCard({ post }) {
  const tags = post.hashtag.split(',').map((t) => t.trim())

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block overflow-hidden border border-white-10 bg-white-3 transition-all duration-300 hover:-translate-y-2 hover:border-accent"
    >
      <div className="p-8 max-md:p-6">
        <time className="mb-3 block text-[13px] text-white-7">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <h2 className="mb-3 text-[22px] font-semibold text-white transition-colors group-hover:text-accent max-md:mb-[10px] max-md:text-[19px]">
          {post.title}
        </h2>

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
      </div>
    </Link>
  )
}

function BlogSkeleton() {
  return (
    <div className="grid gap-10 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-md:gap-6 max-md:grid-cols-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="animate-pulse border border-white-10 bg-white-3 p-8 max-md:p-6"
        >
          <div className="mb-3 h-4 w-24 rounded bg-white-10" />
          <div className="mb-3 h-6 w-3/4 rounded bg-white-10" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded bg-white-10" />
            <div className="h-6 w-20 rounded bg-white-10" />
          </div>
        </div>
      ))}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-[18px] text-white-7">No blog posts yet.</p>
      <p className="mt-2 text-[14px] text-white-7">Check back soon for new content.</p>
    </div>
  )
}

function ErrorState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-[18px] text-red-400">Failed to load posts</p>
      <p className="mt-2 text-[14px] text-white-7">{message}</p>
    </div>
  )
}

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Blog — Fazril</title>
        <meta
          name="description"
          content="Thoughts on web development, Laravel, React, and software engineering."
        />
      </Helmet>

      <div className="bg-black px-10 py-[120px] max-md:px-6 max-md:py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[14px] text-white-7 transition-colors hover:text-accent"
          >
            ← Back to Home
          </Link>

          <h1 className="mb-5 text-[48px] font-semibold -tracking-[1px] text-white max-md:mb-4 max-md:text-[32px] max-[414px]:text-[28px]">
            Blog
          </h1>

          <div className="mb-[60px] h-[4px] w-[60px] bg-accent" />

          {loading && <BlogSkeleton />}

          {!loading && error && <ErrorState message={error.message} />}

          {!loading && !error && posts.length === 0 && <EmptyState />}

          {!loading && !error && posts.length > 0 && (
            <div className="grid gap-10 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-md:gap-6 max-md:grid-cols-1">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
