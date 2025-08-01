'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"

export default function BlogIndex() {

    const [blogs, setBlogs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const limit = 12;

    useEffect(() => {
        loadBlogs(0);
    }, []);

    function loadBlogs(newOffset) {
        setLoading(true);
        fetch(`/api/root/get_blog?offset=${newOffset}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if (newOffset === 0) {
                        setBlogs(data.blogs);
                    } else {
                        setBlogs(prev => [...prev, ...data.blogs]);
                    }
                    setHasMore(data.hasMore);
                    setOffset(newOffset + limit);
                }
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    if (loading && blogs.length === 0) {
        return (
            <div className="mt-16 sm:mt-20">
                <div className="space-y-6">
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className="animate-pulse">
                            <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-4xl flex-col space-y-12 mx-auto">
                    {blogs.map((blog, idx) => (
                        <article key={blog.id || idx} className="md:grid md:grid-cols-4 md:items-baseline">
                            <div className="md:col-span-3 group relative flex flex-col items-start">
                                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    <Link href={`/blog/${blog.url}`}>
                                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                        <span className="relative z-10">{blog.title || "Blog Title"}</span>
                                    </Link>
                                </h2>
                                <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime={blog.created_at}>
                                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>
                                    {new Date(blog.created_at).toLocaleDateString()}
                                </time>
                                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    {blog.meta_description || "No description."}
                                </p>
                                <Link href={`/blog/${blog.id}`} className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                    Read more
                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                        <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                            <time className="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" dateTime={blog.created_at}>
                                {new Date(blog.created_at).toLocaleDateString()}
                            </time>
                        </article>
                    ))}
                </div>
                {hasMore && (
                    <Button className="max-w-60 mx-auto bg-green-800 text-white mt-16 block hover:bg-green-600" onClick={() => loadBlogs(offset)}>Load More</Button>
                )}
            </div>
        </div>
    );
}