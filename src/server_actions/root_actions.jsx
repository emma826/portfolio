'use server'

import { query } from "@/dbh";

export async function get_home_projects() {
    const sql = `
        SELECT * FROM portfolio_projects
        ORDER BY id DESC LIMIT 4;
    `;

    try {
        const res = await query(sql);
        return { success: true, projects: res.rows };
    } catch (error) {
        console.error("Error fetching home projects:", error);
        return { success: false, message: "Database error." };
    }
}