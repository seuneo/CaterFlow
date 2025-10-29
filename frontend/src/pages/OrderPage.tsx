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

import mockOrders from '../mockOrders'

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

export default function OrderPage (){

    return <div className="flex w-full max-w-md flex-col gap-6">
        
    <ItemGroup className="gap-4">
      {mockOrders.map((order) => (
          <Dialog key={order._id}>
        <DialogTrigger asChild>
        <Item key={order._id} variant="outline" role="listitem">
          
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
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
    <DialogTitle>Order</DialogTitle>
    <DialogDescription>
      {order.name} {order.contact}
    </DialogDescription>
    <Button variant="outline">Edit</Button>
    <Button variant="outline">Delete</Button>
  </DialogHeader>

    </DialogContent>

  </Dialog>
      ))}
    </ItemGroup>
    
  
  </div>
}