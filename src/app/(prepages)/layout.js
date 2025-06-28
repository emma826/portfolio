import Header from "@/components/root/header"
import Footer from "@/components/root/footer"

export default function PrepagesLayout({ children }) {
    return (
        <div className="flex h-full bg-white dark:bg-zinc-900">
            <div className="flex w-full">
                <div className="fixed inset-0 flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-8">
                        <div className="w-full bg-white dark:bg-zinc-900"></div>
                    </div>
                </div>

                <div className="relative flex w-full flex-col">
                    <Header />

                    {children}

                    <Footer />
                </div>
            </div>
        </div>
    )
}