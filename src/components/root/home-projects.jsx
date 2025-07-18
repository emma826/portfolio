import Image from "next/image"
import Link from "next/link"

import { get_home_projects } from "@/server_actions/root_actions"

export default async function HomeProjects() {

    const { success, projects, message } = await get_home_projects();

    if (!success) {
        return (
            <div className="text-red-500">
                {message || "Failed to load projects."}
            </div>
        );
    }
    if (projects.length === 0) {
        return (
            <div className="text-gray-500">
                No projects available.
            </div>
        );
    }

    return (
        <ul role="list" className="overflow-hidden grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
                <li key={project.id || idx} className="group relative flex flex-col items-start border border-zinc-100 dark:border-zinc-700/40 rounded-lg py-2 px-4 overflow-hidden">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        {project.feature_image !== "none" ? (
                            <img alt={project.name} width={300} height={300} className="h-11 w-11 rounded-full" src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/projects/${project.feature_image}`} />
                        ) : (
                            <span
                                className="h-11 w-11 flex items-center justify-center rounded-full bg-green-700 text-white text-2xl font-bold select-none"
                                aria-label={project.name ? project.name[0].toUpperCase() : "P"}
                            >
                                {project.name ? project.name[0].toUpperCase() : "P"}
                            </span>
                        )}
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Link href={`/projects/${project.id}`}>
                            <span className="relative z-10">{project.name || "Project"}</span>
                        </Link>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.description || "No description."}
                    </p>

                    <Link href={project.github} target="_blank" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-600 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                            <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                        </svg>
                        <span className="ml-2">GitHub</span>
                    </Link>

                    <Link href={project.live_demo} target="_blank" className="relative z-10 flex text-sm font-medium text-zinc-600 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                            <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                        </svg>
                        <span className="ml-2">Live Demo</span>
                    </Link>
                </li>
            ))}
        </ul>
    )

}