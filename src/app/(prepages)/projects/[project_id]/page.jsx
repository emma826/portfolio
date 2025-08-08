import { query } from "@/dbh";
import { redirect } from "next/navigation";
import ProjectArticle from '@/components/root/project-article'

import { LinkIcon } from "lucide-react";

async function get_project_details(project_id) {

    try {
        const queryText = "SELECT * FROM portfolio_projects WHERE id = $1";
        const values = [project_id];
        const { rows } = await query(queryText, values);
        if (rows.length === 0) {
            return null; // Blog not found
        }
        return rows[0]; // Return the first blog found
    }
    catch (error) {
        return null
    }
}

export async function generateMetadata({ params }) {
    const { project_id } = await params;
    if (!project_id) {
        return { title: "Project Not Found" };
    }

    const projectDetails = await get_project_details(project_id);
    if (!projectDetails) {
        return { title: "Project Not Found" };
    }

    return {
        title: projectDetails.name,
        description: projectDetails.description,
        openGraph: {
            title: projectDetails.name,
            description: projectDetails.description,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_STORAGE_SERVER}/projects/${projectDetails.feature_image}`,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export default async function Project_idPage({ params }) {
    const { project_id } = await params;

    if (!project_id) {
        return redirect("/projects");
    }

    const projectDetails = await get_project_details(project_id);
    if (!projectDetails) {
        return redirect("/projects");
    }

    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16">
                <div className="mx-auto max-w-2xl lg:container lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="xl:relative">
                            <div className="lg:flex lg:items-center lg:justify-between gap-4">
                                <div className="lg:max-w-96">
                                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 max-w-5xl mx-auto">

                                        <div className="relative mb-4 z-10 flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            {projectDetails.feature_image !== "none" ? (
                                                <img alt={projectDetails.name} width={300} height={300} className="h-11 w-11 rounded-full" src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/projects/${projectDetails.feature_image}`} />
                                            ) : (
                                                <span
                                                    className="h-40 w-40 flex items-center justify-center rounded-full bg-green-700 text-white text-8xl font-extrabold select-none"
                                                    aria-label={projectDetails.name ? projectDetails.name[0].toUpperCase() : "P"}
                                                >
                                                    {projectDetails.name ? projectDetails.name[0].toUpperCase() : "P"}
                                                </span>
                                            )}
                                        </div>

                                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                            {projectDetails.name}
                                        </h1>

                                        <p className="relative z-10 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                                            {projectDetails.description || "No description."}
                                        </p>

                                        <div className="py-3">
                                            <div className="flex flex-col">
                                                {projectDetails.github && (
                                                    <a
                                                        href={projectDetails.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-green-600 hover:underline dark:text-green-400 block py-2"
                                                    >
                                                        View on GitHub
                                                    </a>
                                                )}
                                                {projectDetails.live_demo && (
                                                    <a
                                                        href={projectDetails.live_demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-green-600 hover:underline dark:text-green-400 block py-2"
                                                    >
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="lg:flex-auto py-4">
                                    <ProjectArticle projectDetails={projectDetails} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}