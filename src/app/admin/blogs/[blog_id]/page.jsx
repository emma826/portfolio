import BlogEditor from "@/components/admin/blog_editor";
import { redirect } from "next/navigation";
import { query } from "@/dbh";
import BlogDescriptionEdit from "@/components/admin/blog_description_edit";

export default async function Blog_idPage({ params }) {
	const { blog_id } = await params;
	let blog_body = ""
	let blog_details = {}

	if (!blog_id) {
		redirect("/admin/blogs");
	}

	try {
		// Check if the blog exists
		const { rows: blog } = await query("SELECT * FROM portfolio_blogs WHERE id = $1", [blog_id]);

		if (blog.length === 0) {
			redirect("/admin/blogs");
		}

		blog_body = blog[0].body;
		blog_details = blog[0];
	}
	catch (error) {
		console.error("Error fetching blog:", error);
		redirect("/admin/blogs");
	}

	return (
		<div className="lg:flex lg:flex-row-reverse gap-4">

			<div className="lg:flex-auto rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{blog_details.title}</h1>
				<BlogEditor blog_id={blog_id} body={blog_body} />
			</div>
			
			<div className="lg:w-96 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Edit Blog</h2>

				<BlogDescriptionEdit blog_details={blog_details} />
			</div>

		</div>
	);
}