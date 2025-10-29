
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Calendar from "@/pages/Calendar"
import Admin from "@/pages/admin"
import Kitchen from "@/pages/kitchen"
import Delivery from "@/pages/Delivery"
import { useState } from "react"

export default function Dashboard() {

    const [currentPage, setCurrentPage] = useState("Admin");

  return (
    <SidebarProvider>
      <AppSidebar setCurrentPage={setCurrentPage} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="font-medium">Dashboard</h1>
        </header>

        {currentPage === "Admin" && <Admin />}
        {currentPage === "Kitchen" && <Kitchen />}
        {currentPage === "Delivery" && <Delivery />}
      </SidebarInset>
    </SidebarProvider>
  )
}
