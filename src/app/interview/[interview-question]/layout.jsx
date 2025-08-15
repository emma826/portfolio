import { Leftbar } from "@/components/root/leftbar"

export default function InterviewQuestionLayout({ children }) {
    return (
        <div className="flex items-start gap-14">
            <Leftbar key="leftbar" />
            <div className="flex-[4]">{children}</div>{" "}
        </div>
    )
}