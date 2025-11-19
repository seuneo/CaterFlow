import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    icon?: Icon
  }[]
  setCurrentPage: (page: string) => void

}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Orders</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuButton
              tooltip="New Order"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>New Order</span>
            </SidebarMenuButton>
        {items.map((item) => (
          
            <SidebarMenuItem>
              
              
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              
              
            </SidebarMenuItem>
          
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
