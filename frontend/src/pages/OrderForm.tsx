import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog"
  import { FieldGroup, 
    FieldSet, 
    FieldLegend, 
    FieldDescription, 
    Field,
    FieldLabel,
    FieldSeparator,
   } from "@/components/ui/field"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { CalendarIcon, ClockIcon, TrashIcon } from "lucide-react"
import { useState } from "react"



export default function OrderForm({order, setActiveDialog}: any) {




  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)





    return (
      <DialogContent className="w-full max-w-md max-h-[90vh] overflow-y-auto">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Customer Details</FieldLegend>
            <FieldDescription>
              Enter the customer details
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="customer-name">
                  Customer Name
                </FieldLabel>
                <Input className="text-sm"
                  id="customer-name"
                  placeholder="Enter Customer Name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="phone-number">
                  Phone Number
                </FieldLabel>
                <Input className="text-sm"
                  id="phone-number"
                  placeholder="Enter Phone Number"
                  required
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>

                  <FieldLabel htmlFor="date-picker" className="px-1">
                    Date
                  </FieldLabel>
                  <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>



                  </Field>
                  <Field>
                    <FieldLabel htmlFor="time-picker" className="px-1">Time</FieldLabel>

                   
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
                </Field>
                
              </div>

              <Field>
                <FieldLabel htmlFor="delivery-mode" className="px-1">Delivery Mode</FieldLabel>
                <Select defaultValue="Pickup">
                  <SelectTrigger id="delivery-mode" className="text-sm">
                    <SelectValue placeholder="Select Delivery Mode" />
                  </SelectTrigger>
                  <SelectContent className="text-sm">
                    <SelectItem value="Pickup" className="text-sm">Pickup</SelectItem>
                    <SelectItem value="Delivery" className="text-sm">Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Order Details</FieldLegend>
            <FieldDescription>
              Enter the order details
            </FieldDescription>
            <FieldGroup>
              <div className="grid grid-cols-4 gap-4">
      <Field className="col-span-2">

        <Input placeholder="Item Name" className="text-sm"/>
                    
                    
                  </Field>
                  <Field>
                    <Input placeholder="Qty" className="text-sm"/>

                  </Field>
                  <Field>
                    <Button variant="outline" type="button">Add Item</Button>
                  </Field>

                  {order.orderList.map((item: any) => (
                    < >
                      <div className="col-span-2 text-sm">{item.name}</div>
                      <div className="text-sm">{item.quantity}</div>
                      <Button variant="outline" type="button">
                        <TrashIcon />
                      </Button>
                    </>
                  ))}
  
              </div>
              
              
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="notes">
                  Notes
                </FieldLabel>
                <Textarea
                  id="notes"
                  placeholder="Add any additional comments"
                  className="text-sm"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </DialogContent>
    
    )
}