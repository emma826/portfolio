import { query } from "@/dbh";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const offset = parseInt(searchParams.get('offset') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '12', 10);

    // Example query, adjust table/fields as needed
    const projects = await query(`SELECT * FROM portfolio_projects ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`);

    // Get total count
    const totalResult = await query(`SELECT COUNT(*) as count FROM portfolio_projects`);
    const total = totalResult[0]?.count || 0;
    const hasMore = offset + limit < total;

    return Response.json({
        success: true,
        projects: projects.rows,
        hasMore
    });
}