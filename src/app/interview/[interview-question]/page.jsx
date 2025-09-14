import { Typography } from "@/components/root/topography";
import { query } from "@/dbh";
import Toc from "@/components/root/toc";
import { redirect } from "next/navigation";

async function get_interview_question(interviewQuestion) {
    try {
        const questionQuery = 'SELECT * FROM interview_questions WHERE url = $1';
        const res = await query(questionQuery, [interviewQuestion]);

        if (res.rows.length === 0) {
            return { success: false, message: "Interview question not found." };
        }
        return { success: true, content: res.rows[0] };
    }
    catch (error) {
        return { success: false, message: "Failed to fetch interview question." };
    }
}

export async function generateMetadata({ params }) {
    const { "interview-question": interviewQuestion } = await params;

    const {success, message, content} = await get_interview_question(interviewQuestion);

    return {
        title: success ? content.question_preview : "Interview Question Not Found",
        description: success ? content.meta_description : "The interview question you are looking for does not exist."
    };
}

export default async function InterviewQuestionPage({ params }) {
    const { "interview-question": interviewQuestion } = await params;
    const { success, message, content } = await get_interview_question(interviewQuestion);

    if (!success) {
        redirect("/interview-hub");
    }

    return (
        <div className="flex items-start gap-14">
            <div className="flex-[3] py-10">
                <Typography>
                    <h1 className="text-3xl font-bold -mt-2">{content.question}</h1>
                    <p className="-mt-6 text-muted-foreground">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nihil itaque repellat perspiciatis eligendi nisi velit sequi delectus laborum quos, maiores molestias consectetur. Ducimus voluptatum laborum quasi pariatur dolorem velit!
                    </p>
                    {/* <div>{res.content}</div> */}
                </Typography>
            </div>
            <Toc />
        </div>
    );
}