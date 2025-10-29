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


export default function Kitchen({orders, setOrders}: any) {  
    
    const TabItems = [
        {value: "Ordered", label: "New"},
        {value: "Received", label: "Received"},
        {value: "In Progress", label: "In Progress"},
        {value: "Completed", label: "Completed"}
    ];

    return <div className="flex flex-1 flex-col gap-4 p-4">
    <Calendar />

    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="Ordered">
        <TabsList>
          {TabItems.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>{item.label}</TabsTrigger>
          ))}

        </TabsList>

        {TabItems.map((item) => (
            <TabsContent value={item.label}>
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <OrderPage status={item.value} orders={orders} setOrders={setOrders}/>           
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        ))}
        
      </Tabs>
    </div>
    
      
    </div>
}