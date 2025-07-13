import { Card } from "@/components/ui/card"

import ProjectTable from "@/components/admin/projectTable";

export default function AdminProjectPage() {
    return (
        <>
            <h1 className="my-3 text-green-800 text-3xl lg:text-4xl font-bold text-center">Projects</h1>
            <Card className="max-w-xl mx-auto p-6 mb-8">
                <ProjectTable />
            </Card>
        </>
    )
}