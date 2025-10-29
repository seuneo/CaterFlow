import Calendar from "@/pages/Calendar"
import OrderPage from "@/pages/OrderPage"
export default function Admin({orders, setOrders}: any) {    
    return <div className="flex flex-1 flex-col gap-4 p-4">
    <Calendar />
    <div>{orders.length} orders</div>

    <OrderPage orders={orders} setOrders={setOrders}/>
    
      
    </div>
}