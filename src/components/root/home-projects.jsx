import Image from "next/image"

export default function HomeProjects() {
    return (
        <>
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 overflow-hidden">
                <Image
                    src="/img/admin.jpg"
                    width={500}
                    height={500}
                    alt="Project"
                    className="mb-4"
                />
                <div className="p-2">
                    <h2 className="text-xl font-bold tracking-tight text-black dark:text-zinc-100 mb-2">Lorem ipsum dolor sit amet</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex numquam suscipit itaque modi omnis cumque?</p>
                </div>
            </div>
        </>
    )
}