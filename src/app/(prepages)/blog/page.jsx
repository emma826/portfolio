import BlogIndex from "@/components/root/blog-index"

export default function BlogPage() {
    return (

        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-3xl font-bold tracking-tight text-green-800">
                                    Writing about deep learning, computer vision and the challenges of learning and building in public
                                </h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    Notes from my journey into AI, vision systems and intelligent agents. <br/> I write to understand, share what I'm learning and build a footprint as I grow in this field
                                </p>
                            </header>

                            <BlogIndex />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}