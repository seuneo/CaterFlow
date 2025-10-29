import Calendar from "@/pages/Calendar"
import OrderPage from "@/pages/OrderPage"
export default function Admin() {    
    return <div className="flex flex-1 flex-col gap-4 p-4">
    <Calendar />
    <div>list of orders</div>

    <OrderPage />
    
      
    </div>
}