'use server'

import { query } from "@/dbh"

export async function add_projects(name, description, featureImage, github, liveDemo) {

    let featured_image_name = "none"

    // Validate inputs
    if (!name || !description || !github) {
        return { success: false, message: "All fields are required." };
    }

    if (!liveDemo) {
        liveDemo = "#";
    }

    if (featureImage) {
        const formData = new FormData();
        formData.append("file", featureImage);
        formData.append("category", "projects");

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

    // Prepare SQL query
    const sql = `
        INSERT INTO portfolio_projects (name, description, feature_image, github, live_demo)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;

    // Execute query
    return query(sql, [name, description, featured_image_name, github, liveDemo])
        .then(res => {
            return { success: true, id: res.rows[0].id, project: res.rows[0] };
        })
        .catch(err => {
            console.error("Error adding project:", err);
            return { success: false, message: "Database error." };
        });

}

export async function get_projects() {
    const sql = `
        SELECT * FROM portfolio_projects
        ORDER BY created_at DESC;
    `;

    try {
        const res = await query(sql);
        return { success: true, projects: res.rows };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return { success: false, message: "Database error." };
    }
}

export async function update_project(id, name, description, featureImage, github, liveDemo) {
    // Validate inputs
    if (!name || !description || !featureImage || !github) {
        return { success: false, message: "All fields are required." };
    }

    if (!liveDemo) {
        liveDemo = "#";
    }

    const formData = new FormData();
    formData.append("file", featureImage);
    formData.append("category", "projects");

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
        featureImage = uploadResult.fileName || featureImage.name;
    } catch (error) {
        console.error("Image upload error:", error);
        return { success: false, message: "Image upload failed." };
    }

    const sql = `
        UPDATE portfolio_projects
        SET name = $1, description = $2, feature_image = $3, github = $4, live_demo = $5
        WHERE id = $6;
    `;

    return query(sql, [name, description, featureImage, github, liveDemo, id])
        .then(res => {
            if (res.rowCount === 0) {
                return { success: false, message: "Project not found." };
            }
            return { success: true, message: "Project updated successfully." };
        })
        .catch(err => {
            console.error("Error updating project:", err);
            return { success: false, message: "Database error." };
        });
}

export async function delete_project(id) {
    const sql = `
        DELETE FROM portfolio_projects
        WHERE id = $1;
    `;

    return query(sql, [id])
        .then(res => {
            if (res.rowCount === 0) {
                return { success: false, message: "Project not found." };
            }
            return { success: true, message: "Project deleted successfully." };
        })
        .catch(err => {
            console.error("Error deleting project:", err);
            return { success: false, message: "Database error." };
        });
}
