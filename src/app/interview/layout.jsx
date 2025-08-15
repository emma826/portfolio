import Footer from "@/components/root/footer";
import InterviewHeader from "@/components/root/interview-header"
import InterviewLeftSidebar from "@/components/root/interview-left-sidebar";
import InterviewRightSidebar from "@/components/root/interview-right-sidebar";

export default function InterviewLayout({ children }) {
    return (
        <>
            <InterviewHeader />
            <main className="sm:container mx-auto w-[88vw] h-auto bg-white dark:bg-zinc-900">
                {children}
            </main>
        </>
    );
}