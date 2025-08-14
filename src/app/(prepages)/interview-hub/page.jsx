import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

import InterviewCategoryQuestion from "@/components/root/interview-question-category"

export default async function InterviewHub() {
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-12 sm:mt-24">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl mx-auto">
                                <h1 className="text-4xl font-bold tracking-tight text-green-800 text-center lg:text-5xl">
                                    Welcome to Interview Hub
                                </h1>
                                {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    
                                </p> */}

                                <div className="mt-6 rounded-4xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] max-w-5xl mx-auto">
                                    <div className="flex overflow-hidden rounded-3xl">
                                        <Input type="text" className={`block py-6 px-4 text-lg outline-none border-none rounded-none`} placeholder="Search question ..." />
                                        <Button className="bg-none outline-none px-2 py-6 rounded-none border-none hover:bg-green-800 hover:text-white transition-all duration-300">
                                            <Send className="my-4 mr-1 font-bold" size={`4`} />
                                        </Button>
                                    </div>
                                </div>
                            </header>

                            <div className="mt-12">
                                <h2 className="text-2xl font-bold tracking-tight text-green-800 text-center lg:text-3xl">
                                    Explore Interview Questions
                                </h2>
                                <p className="mt-4 mb-6 text-base text-zinc-600 dark:text-zinc-400 text-center">
                                    Browse through a wide range of interview questions to prepare for your next job interview.
                                </p>

                                <InterviewCategoryQuestion />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}