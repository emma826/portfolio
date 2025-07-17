import { query } from "@/dbh";

export async function POST(request) {
    try {
        const { blog_id, content } = await request.json();

        if (!blog_id || !content) {
            return new Response(JSON.stringify({ success: false, message: "Missing blog_id or content" }), { status: 400 });
        }

        // Update the blog content
        const sql = "UPDATE portfolio_blogs SET body = $1 WHERE id = $2";
        const result = await query(sql, [content, blog_id]);

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ success: true, message: "Blog updated" }), { status: 200 });
    } catch (error) {
        console.error("Publish error:", error);
        return new Response(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}
