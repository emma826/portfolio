import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-32 flex-none">
            <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</Link>
                                        <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/blog">Blog</Link>
                                        <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/Amoke Emmanuel Chinonye - Resume.pdf">Resume</Link>
                                        <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About Me</Link>
                                    </div>
                                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                        © 2025 Amoke Emmanuel. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}