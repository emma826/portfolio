import BlogEditor from "@/components/admin/blog_editor";
import { redirect } from "next/navigation";
import { query } from "@/dbh";

export default async function Blog_idPage({ params }) {
	const { blog_id } = await params;
	let blog_body = ""

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
	}
	catch (error) {
		console.error("Error fetching blog:", error);
		redirect("/admin/blogs");
	}

	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
			<BlogEditor blog_id={blog_id} body={blog_body} />
		</div>
	);
}