import BlogEditor from "@/components/admin/blog_editor";
import { redirect } from "next/navigation";

export default async function Blog_idPage({ params }) {
  const { blog_id } = await params;

  if (!blog_id) {
    redirect("/admin/blogs");
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <BlogEditor blog_id={blog_id} />
    </div>
  );
}