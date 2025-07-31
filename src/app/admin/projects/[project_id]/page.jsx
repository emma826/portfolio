import { redirect } from "next/navigation";
import { query } from "@/dbh";

import ProjectDescriptionEdit from "@/components/admin/project_description_edit";

export default async function PortfolioDetails({ params }) {
    const { project_id } = await params;
    let project_details = {};
    let project_body = "";

    if (!project_id) {
        redirect("/admin/projects");
    }

    try {
        const { rows: project } = await query("SELECT * FROM portfolio_projects WHERE id = $1", [project_id]);

        if (project.length === 0) {
            redirect("/admin/projects");
        }

        project_details = project[0];
        project_body = project[0].body;
    }
    catch (error) {
        console.error("Error fetching project:", error);
        redirect("/admin/projects");
    }

    return (
        <div className="lg:flex lg:flex-row-reverse gap-4">

            <div className="lg:flex-auto rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project_details.name}</h1>
                {/* <BlogEditor blog_id={blog_id} body={blog_body} /> */}
            </div>

            <div className="lg:w-96 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Edit Project</h2>

                <ProjectDescriptionEdit project={project_details} />
            </div>

        </div>
    );
}