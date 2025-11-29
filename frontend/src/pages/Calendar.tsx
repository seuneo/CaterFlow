"use client"

import * as React from "react"

import Calendar18 from "@/components/calendar-18"


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

export default function Calendar({orders, changeDate}: {orders: Order[], changeDate: (date: Date) => void}) {

  return (
    <Calendar18 orders={orders} changeDate={changeDate}/>
  )
}
