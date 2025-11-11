import Calendar from "@/pages/Calendar"
import OrderPage from "@/pages/OrderPage"
import {useState} from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
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

export default function Admin({orders, setOrders}: {orders: Order[], setOrders: (orders: Order[]) => void | undefined}) {    
    
    
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const changeDate = (date: Date) => {
        setSelectedDate(date)
    }

    return <div className="bg-neutral-100 flex flex-wrap gap-4 p-4 w-full">
    <div className="flex-[1_1_300px] mx-auto sm:mx-0">
  <div className="flex justify-center">
    <Calendar orders={orders} changeDate={changeDate}/>
  </div>
</div>
    <div className="flex-[1_1_350px]">
      <Card>
        <CardHeader>
            <CardTitle>{selectedDate.toLocaleDateString()}</CardTitle>
            <CardDescription>{orders.filter(order => order.date.toDateString() === selectedDate.toDateString()).length} orders</CardDescription>
        </CardHeader>
        <CardContent>
            <OrderPage page="admin" orders={orders.filter(order => order.date.toDateString() === selectedDate.toDateString())} setOrders={setOrders}/>
            </CardContent>

    </Card>  
    </div>
    

    
    
      
    </div>
}