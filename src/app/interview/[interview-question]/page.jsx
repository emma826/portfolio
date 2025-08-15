import { Typography } from "@/components/root/topography";
import Toc from "@/components/root/toc";

export default async function InterviewQuestionPage({ params }) {
    const { interviewQuestion } = params;

    return (
        <div className="flex items-start gap-14">
            <div className="flex-[3] py-10">
                <Typography>
                    <h1 className="text-3xl font-bold -mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
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