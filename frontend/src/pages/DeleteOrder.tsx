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

  import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function DeleteOrder({selectedOrder, setActiveDialog}: any) {
    return (
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Order</DialogTitle>
                    <DialogDescription>Are you sure you want to delete this order?</DialogDescription>
                </DialogHeader>
                <DialogFooter> 
                    <Button variant="secondary" onClick={() => setActiveDialog(null)}>Cancel</Button>
                    <Button  onClick={() => setActiveDialog(null)}>Delete Order</Button>
                </DialogFooter>
            </DialogContent>
    )
}