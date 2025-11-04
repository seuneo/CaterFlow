import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemTitle,
  } from "@/components/ui/item"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import OrderForm from "@/pages/OrderForm"
import DeleteOrder from "@/pages/DeleteOrder"
import OrderDetails from "@/pages/OrderDetails"

export default function OrderPage ({orders, setOrders}: any){

  const [activeDialog, setActiveDialog] = useState<'order-details' | 'edit-order' | 'delete-order' | null>(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orderDetails = <OrderDetails order={selectedOrder} setActiveDialog={setActiveDialog} />

  const editOrder = <OrderForm />
  const deleteOrder = <DeleteOrder selectedOrder={selectedOrder} setActiveDialog={setActiveDialog} />

    return <div className="flex w-full max-w-md flex-col gap-6">
        
    <ItemGroup className="gap-4">
      { orders.map((order: any) => (
        <Item key={order._id} variant="outline" role="listitem" onClick={() => {setActiveDialog('order-details'); setSelectedOrder(order)}}>
          
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {order.name} {" "}
                <span className="text-muted-foreground">{order.contact}</span>
              </ItemTitle>
              <ItemDescription>         
                  <span>5 items</span>
                  {" "}

                  <Badge className="bg-blue-500 text-white dark:bg-blue-600">
                      {order.status}
                  </Badge>
              </ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{order.time}</ItemDescription>
            </ItemContent>
          
          
        </Item>
      ))}
    </ItemGroup>

    <Dialog open={activeDialog != null}>
      {activeDialog === 'order-details' && orderDetails}
      {activeDialog === 'edit-order' && editOrder}
      {activeDialog === 'delete-order' && deleteOrder}

    </Dialog>


    
  
  </div>
}