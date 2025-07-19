import Link from "next/link"
import Image from "next/image"
import ProjectIndex from "@/components/root/project-index"

export default function ProjectsPage() {
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-12">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-3xl">
                                <h1 className="text-2xl font-bold tracking-tight text-green-800 sm:text-4xl">
                                    Things I’ve made while learning to build intelligent vision systems.
                                </h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    I'm exploring the intersection of computer vision, reinforcement learning and autonomy. These projects reflect both what I've leaned and where I'm headed.Most are open-source; you can contribute or give feedback if you have any ideas.
                                </p>
                            </header>

                            <ProjectIndex />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}