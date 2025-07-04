import { AppSidebar } from "@/components/admin/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function AdminLayout ({children}) {
    return (
        <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-4">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    )
}