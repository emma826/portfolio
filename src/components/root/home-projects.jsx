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

    return projects.map((project, index) => (
        <div key={index} className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 overflow-hidden">
            {project.feature_image === "none" ? (
                <span className="flex justify-center items-center w-full h-60 bg-zinc-100 dark:bg-zinc-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20 text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                        <circle cx="8.5" cy="8.5" r="2.5" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15l-5-5-4 4-7-7" />
                    </svg>
                </span>
            ) : (
                <img
                    src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/projects/${project.feature_image}`}
                    width={500}
                    height={500}
                    alt={project.name}
                    className="mb-4 w-full max-h-60 object-cover"
                />
            )}

            <div className="p-2">
                <Link href={`/projects/${project.id}`} className="block">
                    <h2 className="text-xl font-bold tracking-tight text-black dark:text-zinc-100 mb-2">{project.name}</h2>
                </Link>
                <p>{project.description}</p>

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
            </div>
        </div>
    ));
}