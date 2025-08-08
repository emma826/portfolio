import { query } from "@/dbh";

export async function POST(request) {
    try {
        const { project_id, content } = await request.json();

        if (!project_id || !content) {
            return new Response(JSON.stringify({ success: false, message: "Missing project_id or content" }), { status: 400 });
        }

        // Update the blog content
        const sql = "UPDATE portfolio_projects SET body = $1 WHERE id = $2";
        const result = await query(sql, [content, project_id]);

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ success: true, message: "Blog updated" }), { status: 200 });
    } catch (error) {
        console.error("Publish error:", error);
        return new Response(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}