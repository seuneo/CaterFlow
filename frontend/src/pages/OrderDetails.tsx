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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { User, Phone, Clock, MapPin, Package, Edit, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export default function OrderDetails({order, setActiveDialog}: any) {

    return <DialogContent>
        <DialogHeader>
    <DialogTitle>
        <div className="flex items-center justify-between">
        Order
       <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setActiveDialog('edit-order')}><Edit className="h-4 w-4" /> Edit</Button>
            <Button variant="outline" onClick={() => setActiveDialog('delete-order')}><Trash className="h-4 w-4" /> Delete</Button>
        </div> 
        </div>
    </DialogTitle>
    <DialogDescription>
      
    </DialogDescription>
    
    <Card>
      <CardHeader className='pb-3'>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {order.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              <Phone className="inline h-3 w-3 mr-1" />
              {order.contact}
            </p>
          </div>
          <Badge>
            {order.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{order.time}</span>
          <span className="text-muted-foreground">•</span>
          <span>{new Date(order.date).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="capitalize">{order.deliveryMode}</span>
          {order.deliveryMode === 'delivery' && order.deliveryAddress && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="truncate">{order.deliveryAddress}</span>
            </>
          )}
        </div>

          <>
            <div className="border-t pt-3">
              <p className="flex items-center gap-2 text-sm mb-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                 {order.orderList.length} Items
              </p>
              <ul className="space-y-1 ml-6">
                {order.orderList.map((item: any) => (
                  <li key={item.id} className="text-sm">
                    {item.quantity} {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {order.notes && (
              <div className="border-t pt-3">
                <p className="text-sm text-muted-foreground">Notes:</p>
                <p className="text-sm mt-1">{order.notes}</p>
              </div>
            )}
          </>
      </CardContent>
    </Card>
  
  </DialogHeader>
    </DialogContent>

}