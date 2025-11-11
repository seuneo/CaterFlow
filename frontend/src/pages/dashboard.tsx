
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Admin from "@/pages/Admin"
import Kitchen from "@/pages/Kitchen"
import Delivery from "@/pages/Delivery"
import { useState, useEffect } from "react"
import mockOrders from '../mockOrders'

export default function Dashboard() {

    const [currentPage, setCurrentPage] = useState("Admin");
    const [orders, setOrders] = useState<Order[]>(mockOrders);

    interface Order {
      _id: number;
      name: string;
      contact: string;
      date: Date;
      time: string;
      deliveryMode: string;
      deliveryAddress?: string;
      status: string;
      orderList: { name: string; quantity: number | string }[];
      notes?: string;
      paymentStatus?: string;
    }

  return (
    <SidebarProvider>
      <AppSidebar setCurrentPage={setCurrentPage} />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4" >
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="font-medium">{currentPage}</h1>
        </header>

        {currentPage === "Admin" && <Admin orders={orders} setOrders={setOrders}/>}
        {currentPage === "Kitchen" && <Kitchen orders={orders} setOrders={setOrders}/>}
        {currentPage === "Delivery" && <Delivery orders={orders} setOrders={setOrders}/>}
      </SidebarInset>
    </SidebarProvider>
  )
}
