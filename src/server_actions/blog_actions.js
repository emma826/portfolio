'use server'

import { query } from "@/dbh";

export async function get_admin_blogs() {
    try {
        const queryText = "SELECT * FROM portfolio_blogs ORDER BY id DESC";
        const { rows: blogs } = await query(queryText);
        return {success: true, blogs}
    } catch (error) {
        return {succes: false, message: "Database error"}
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

export async function add_blog_body(id, blog_body) {

}