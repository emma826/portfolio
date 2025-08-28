'use server'
import { query } from "@/dbh"

export async function get_root_interview_category() {
    let interview_category = {};

    try {

        let questions;
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                questions = await query("SELECT category, url, question, created_at FROM interview_questions ORDER BY created_at DESC");
                break; // Exit loop if query succeeds
            } catch (error) {
                if (error.code === 'EAI_AGAIN' && attempt < 2) {
                    await new Promise(res => setTimeout(res, 1000)); // Wait before retrying
                } else {
                    throw error; // Re-throw if not transient or retries exhausted
                }
            }
        }

        const categories = [...new Set(questions.rows.map(q => q.category))];

        interview_category = categories.map(category => {
            const recentQuestions = questions.rows
                .filter(q => q.category === category)
                .slice(0, 6);
            return { category, recentQuestions };
        });

        return { success: true, interview_category, message: "Interview categories fetched successfully." };
    }
    catch (error) {
        console.error("Error fetching interview categories:", error);
        return { success: false, message: "Failed to fetch interview categories." };
    }
}

export async function get_admin_interview_questions() {
    try {

        const questions = 'SELECT id, category, question FROM interview_questions ORDER BY created_at DESC'
        const interviewQuery = await query(questions)

        return { success: true, questions: interviewQuery.rows }

    }
    catch (error) {
        return { success: false, message: 'failed to fetch questions' }
    }
}

export async function submit_admin_questions(questionPreview, metaDescription, question, questionImage, category) {

    let question_image_name = "#";

    if (!questionPreview || !metaDescription || !question || !category) {
        return { success: false, message: "Empty fields fill in the blank spaces" }
    }
    if (questionImage) {
        const formData = new FormData()
        formData.append('file', questionImage)
        formData.append('category', 'media')

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
            question_image_name = uploadResult.fileName || questionImage.name;
        } catch (error) {
            console.error("Image upload error:", error);
            return { success: false, message: "Image upload failed." };
        }
    }

    const url = slugify(questionPreview)

    try {

        const queryText = "INSERT INTO interview_questions(question_preview, meta_description, question, question_image, url, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
        let interviewQuery;
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                interviewQuery = await query(queryText, [questionPreview, metaDescription, question, question_image_name, url, category]);
                break; // Exit loop if query succeeds
            } catch (error) {
                if (error.code === 'EAI_AGAIN' && attempt < 2) {
                    await new Promise(res => setTimeout(res, 1000)); // Wait before retrying
                } else {
                    throw error; // Re-throw if not transient or retries exhausted
                }
            }
        }

        return { success: true, message: "Question submitted successfully", interviewQuestion: interviewQuery.rows[0] }

    } catch (error) {
        console.error(error)
        return { success: false, message: "Server error, please try again later" }
    }
}

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}