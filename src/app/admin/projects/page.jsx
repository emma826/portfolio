import { Card } from "@/components/ui/card"

import ProjectTable from "@/components/admin/projectTable";

export default function AdminProjectPage() {
    return (
        <>
            <h3 className="text-3xl font-semibold mb-2 text-primary">
                Projects
            </h3>

            <ProjectTable />
        </>
    )
}