'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { SearchIcon, UploadIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectLabel, SelectContent, SelectGroup, SelectItem, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"

import { get_admin_interview_questions, submit_admin_questions } from "@/server_actions/interview-actions"

export default async function InterviewHub() {
    const router = useRouter()
    const [questionPreview, setQuestionPreview] = useState("")
    const [question, setQuestion] = useState("")
    const [questionImage, setQuestionImage] = useState("")
    const [image, setImage] = useState("")
    const [questionCategory, setQuestionCategory] = useState("")
    const [questions, setQuestions] = useState([])
    const [questionId, setQuestionId] = useState("")

    useEffect(() => {
        get_blogs();
    }, [])

    async function get_blogs() {
        const { success, message, questions } = await get_admin_interview_questions()

        if (success) {
            setQuestions(questions)
        }
        else {
            toast(<div>{message}</div>)
        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setQuestionImage(file)
        }
        else {
            setImage(null)
        }
    };

    async function submitQuestions() {
        const { success, message, question } = await submit_admin_questions(questionPreview, question, questionImage, questionCategory)

        if (success) {
            return
        }
        else {
            toast(<div className="text-red-800">{message}</div>)
        }
    }


    return (
        <div>
            <h3 className="text-3xl font-semibold mb-2 text-primary">
                Blog Posts
            </h3>

            <div className="py-5 px-3 flex justify-between gap-2">
                <div className="flex-auto">
                    <div className="rounded-sm border w-80 border-gray-200 bg-white flex justify-between dark:border-gray-800 overflow-hidden dark:bg-white/[0.03]">
                        <Input type="text" style={{ outline: "none", border: "none" }} placeholder="Search..." className="border-none flex-auto rounded-none focus:ring-0" />
                        <SearchIcon className="block w-10 mt-1.5 cursor-pointer align-middle text-gray-500" />
                    </div>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger className="bg-green-800 cursor-pointer rounded-md py-2 px-2">
                            <Plus className="w-5 h-5 mx-auto text-white" />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle className="text-3xl border-b-gray-800 dark:border-b-gray-200 border-b-1 pb-4">Create Question</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 pb-4 pt-2 max-h-[400px]">

                                <div className="mb-2">
                                    <Input className="py-5" type="text" placeholder="Question Preview" value={questionPreview} onChange={(e) => setQuestionPreview(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <Textarea
                                        className={`resize-none h-32`}
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder="Question"
                                    />
                                </div>

                                {/* <Select></Select> */}

                                <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden dark:border-gray-800 dark:bg-white/[0.03]">
                                    <div className="relative upload_icon_holder">
                                        <Input type="file" className="absolute h-[500px] opacity-0" onChange={handleImageChange} />
                                        {image ? (
                                            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex justify-center items-center py-10 space-x-2">
                                                <UploadIcon className="w-6 h-6" />
                                                <span className="text-gray-500">Upload Image</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <DialogFooter>
                                <Button className="bg-green-800 hover:bg-green-300 cursor-pointer" onClick={submitQuestions}>Submit</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}