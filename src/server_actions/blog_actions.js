'use server'

import { query } from "@/dbh";

export async function get_admin_blogs() {
    try {
        const queryText = "SELECT * FROM portfolio_blogs ORDER BY id DESC";
        const { rows: blogs } = await query(queryText);
        return { success: true, blogs }
    } catch (error) {
        return { succes: false, message: "Database error" }
    }
}

export async function add_blogs(title, meta_description, featureImage) {
    let featured_image_name = "none"

    if (!title || !meta_description) {
        return { success: false, message: "All fields are required." };
    }

    if (featureImage) {
        const formData = new FormData();
        formData.append("file", featureImage);
        formData.append("category", "featured_img");

        let uploadResponse;
        try {
            uploadResponse = await fetch(`${process.env.STORAGE_SERVER}`, {
                method: "POST",
                body: formData,
            });
            if (!uploadResponse.ok) {
                return { success: false, message: "Failed to upload image." };
            }
            const uploadResult = await uploadResponse.json();
            featured_image_name = uploadResult.fileName;
        } catch (error) {
            console.error("Image upload error:", error);
            return { success: false, message: "Image upload failed." };
        }
    }

    const url = title.toLowerCase().replace(/\s+/g, "-");

    try {

        const queryText = "INSERT INTO portfolio_blogs (title, meta_description, featured_image, url) VALUES ($1, $2, $3, $4) RETURNING id";
        const values = [title, meta_description, featured_image_name, url];
        const { rows } = await query(queryText, values);
        const blogId = rows[0].id;

        return { success: true, message: "Blog created successfully", id: blogId }

    }
    catch (err) {
        console.error(err)
        return { success: false, message: "Database error." };
    }
}

export async function home_blog() {
    const sql = `
        SELECT * FROM portfolio_blogs
        ORDER BY created_at DESC LIMIT 4;
    `

    try {
        const res = await query(sql);
        return { success: true, blogs: res.rows };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return { success: false, message: "Database error." };
    }
}

export async function edit_admin_blog_description(title, meta_description, image, blog_id) {
    let featured_image_name;

    if (image) {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("category", "featured_img");

        let uploadResponse;
        try {
            uploadResponse = await fetch(`${process.env.STORAGE_SERVER}`, {
                method: "POST",
                body: formData,
            });
            if (!uploadResponse.ok) {
                return { success: false, message: "Failed to upload image." };
            }
            const uploadResult = await uploadResponse.json();
            featured_image_name = uploadResult.fileName;
        } catch (error) {
            console.error("Image upload error:", error);
            return { success: false, message: "Image upload failed." };
        }
    }

    let queryText;
    let values;

    if (featured_image_name !== undefined && featured_image_name !== null) {
        queryText = `
            UPDATE portfolio_blogs 
            SET title = $1, meta_description = $2, featured_image = $3 
            WHERE id = $4 
            RETURNING *;
        `;

        values = [title, meta_description, featured_image_name, blog_id]
    } else {
        queryText = `
            UPDATE portfolio_blogs 
            SET title = $1, meta_description = $2 
            WHERE id = $3 
            RETURNING *;
        `;

        values = [title, meta_description, blog_id]
    }

    try {
        const { rows } = await query(queryText, values);
        if (rows.length === 0) {
            return { success: false, error: "Blog not found." };
        }
        return { success: true, message: "Blog updated successfully.", blog: rows[0] };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Database error." };
    }
}