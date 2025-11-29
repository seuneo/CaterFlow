"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendarWithOrders"


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

export default function Calendar18({orders, changeDate}: {orders: Order[], changeDate: (date: Date) => void}) {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date()
  )

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setDate(date)
      changeDate(date)
    }
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleDateChange}
      className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
      buttonVariant="ghost"
      orders={orders}
    />
  )
}
