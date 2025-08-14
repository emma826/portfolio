'use server'
import { query } from "@/dbh"

export async function get_root_interview_category() {
    let interview_category = {};

    try {

        const questions = await query("SELECT category, question_preview, question, created_at FROM interview_questions ORDER BY created_at DESC");

        const categories = [...new Set(questions.rows.map(q => q.category))];

        interview_category = categories.map(category => {
            const recentQuestions = questions
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

export async function submit_admin_questions(questionPreview, question, questionImage, category) {
    return { success: false, message: "" }
}