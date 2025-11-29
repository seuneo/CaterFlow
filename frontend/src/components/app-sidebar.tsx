"use client"

import * as React from "react"
import {
  IconSettings,
  IconTruckDelivery,
  IconToolsKitchen2,
  IconClipboardList,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@mail.com",
    avatar: "/avatar.jpg",
  },
  navMain: [
    {
      title: "Admin",
      icon: IconClipboardList,
    },
    {
      title: "Kitchen",
      icon: IconToolsKitchen2,
    },
    {
      title: "Delivery",
      icon: IconTruckDelivery,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      icon: IconSettings,
    }
  ],
}

export function AppSidebar({ setCurrentPage, ...props }: React.ComponentProps<typeof Sidebar> | any) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img src="caterflow-black.svg" alt="CaterFlow" className="!size-5" />
                <span className="text-base font-semibold">Cater Flow</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} setCurrentPage={setCurrentPage} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
