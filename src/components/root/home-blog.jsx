'use client'

import { useState, useEffect } from 'react';

import { home_blog } from "@/server_actions/blog_actions";
import Link from "next/link";

export default async function HomeBlog() {

    const [main_blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHomeBlogs() {
            const { success, message, blogs } = await home_blog();
            if (success) {
                setBlogs(blogs);
            } else {
                console.error(message || "Failed to load blogs.");
            }
            setLoading(false);
        }
        fetchHomeBlogs();
    }, []);

    return main_blogs.map((blog, idx) => (

        <article key={idx} className="group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <Link href={`/blog/${blog.url}`}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">{blog.title}</span>
                </Link>
            </h2>
            <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime={blog.created_at}>
                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                {new Date(blog.created_at).toLocaleDateString("en-GB")}
            </time>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{blog.meta_description}</p>
            <Link href={`/blog/${blog.url}`} className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                Read more
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </Link>
        </article>
    ))


}