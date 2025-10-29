import Calendar from "@/pages/Calendar"
import OrderPage from "@/pages/OrderPage"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { useState } from "react"

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

export default function Kitchen({orders, setOrders}: {orders: Order[], setOrders: (orders: Order[]) => void | undefined}) {  
    
    
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const changeDate = (date: Date) => {
        setSelectedDate(date)
    }

    const TabItems = [
        {value: "Pending", label: "Pending", amount: orders.filter(order => order.date.toDateString() === selectedDate.toDateString() && order.status === "Pending").length},
        {value: "Received", label: "Received", amount: orders.filter(order => order.date.toDateString() === selectedDate.toDateString() && order.status === "Received").length},
        {value: "In Progress", label: "In Progress", amount: orders.filter(order => order.date.toDateString() === selectedDate.toDateString() && order.status === "In Progress").length},
        {value: "Completed", label: "Completed", amount: orders.filter(order => order.date.toDateString() === selectedDate.toDateString() && order.status === "Completed").length}
    ];

    

    return <div className="flex flex-1 flex-col gap-4 p-4">
    <Calendar orders={orders} changeDate={changeDate}/>

    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="Received">
        <TabsList>
          {TabItems.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>{item.label} {" "} <span className="text-muted-foreground text-xs">{item.amount}</span></TabsTrigger>
          ))}

        </TabsList>

        {TabItems.map((item) => (
            <TabsContent value={item.label}>
          <Card>
            <CardHeader>
              <CardTitle>{selectedDate.toLocaleDateString()}</CardTitle>
              <CardDescription>
                {orders.filter(order => order.date.toDateString() === selectedDate.toDateString()).length} orders
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <OrderPage status={item.value} orders={orders.filter(order => order.date.toDateString() === selectedDate.toDateString() && order.status === item.value)} setOrders={setOrders}/>           
            </CardContent>
          </Card>
        </TabsContent>
        ))}
        
      </Tabs>
    </div>
    
      
    </div>
}