'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { MoveRight } from "lucide-react"

import { get_root_interview_category } from "@/server_actions/interview-actions"

export default function InterviewCategoryQuestion() {
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState({})

    useEffect(() => {
        async function get_category() {
            const { success, message, interview_category } = await get_root_interview_category()

            if (success) {
                setCategory(interview_category)
                return
            }

        }

        get_category().catch((err) => {
            console.error("Error fetching interview categories:", err)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="grid lg:grid-cols-2 gap-2 sm:grid-cols-1">
                {[...Array(4)].map((_, idx) => (
                    <li key={idx} className="animate-pulse flex flex-col items-start border border-zinc-100 dark:border-zinc-700/40 rounded-lg py-2 px-4 w-full">
                        <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mb-2 mt-2"></div>
                        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full mb-2"></div>
                        <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mb-2"></div>
                    </li>
                ))}
            </div>
        )
    }

    return (

        <div className="grid lg:grid-cols-2 gap-2">
            <div className="rounded-xl w-full border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03] max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Category</h2>
                    <Link href="/interview/questions" className="text-green-800 text-sm hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors">
                        View All
                        {" >"}
                    </Link>
                </div>

                <ul>
                    {/* {category?.interview_categories?.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 py-2">
                            <Link href={`/interview/questions/${item.slug}`} className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                {item.name}
                            </Link>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{item.question_count} Questions</span>
                        </li>
                    ))} */}
                </ul>
            </div>
            <div className="rounded-2xl w-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
            </div>
            <div className="rounded-2xl w-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
            </div>
            <div className="rounded-2xl w-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
            </div>
            <div className="rounded-2xl w-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
            </div>
            <div className="rounded-2xl w-full border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">
            </div>
        </div>
    )

}