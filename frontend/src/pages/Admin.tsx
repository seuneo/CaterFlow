import Calendar from "@/pages/Calendar"
import mockOrders from '../mockOrders'

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemTitle,
  } from "@/components/ui/item"
  import { Badge } from "@/components/ui/badge"

export default function Admin() {    
    return <div className="flex flex-1 flex-col gap-4 p-4">
    <Calendar />
    <div>list of orders</div>
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {mockOrders.map((order) => (
          <Item key={order.name} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {order.name} {" "}
                  <span className="text-muted-foreground">{order.contact}</span>
                </ItemTitle>
                <ItemDescription>
                <ItemDescription>
                    <span>5 items</span>
                    {" "}

                    <Badge className="bg-blue-500 text-white dark:bg-blue-600">
                        {order.status}
                    </Badge>
                
                    
                </ItemDescription>
                </ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{order.time}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
      
    </div>
}