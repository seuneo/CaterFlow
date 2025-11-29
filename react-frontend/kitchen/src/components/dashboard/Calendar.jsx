import CalendarNav from "./CalendarNav";
import Loader from "../Loader";
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

import {startOfToday, endOfToday, isToday, isSameWeek, isSameMonth, addMinutes, isSameDay, subMonths, addMonths, getYear, startOfMonth, startOfWeek, endOfWeek, endOfMonth, eachDayOfInterval, getMonth, parse} from 'date-fns';

import { useOrderBank } from "../../orders/order";

import WeekView from './WeekView.jsx'

function Calendar(){


  function back(){
if(showWeekCal== true){
    setShowCal(true);
    setWeekCal(false);
  }    
    }

  const [showCal, setShowCal] = useState(true);
  const [showWeekCal, setWeekCal] = useState(false);

  const [currentDate, setCurrent] = useState(new Date());
       
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   
   const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
 
   const currentMonth = months[getMonth(currentDate)];
   const currentYear = getYear(currentDate);
   const num = eachDayOfInterval({
     start: startOfWeek(startOfMonth(currentDate)),
     end: endOfWeek(endOfMonth(currentDate))
   })

   const [loading, setLoading] = useState(true);

   const {fetchOrdersByStore, orders} = useOrderBank();
     
     useEffect(() => {
       fetchOrdersByStore("suyacity")
       .finally(() => {
        setLoading(false);        
      })
     }, []);

     useEffect(
        () => {
        setOrdersMonth(
            orders?.filter((item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
     ).sort((a, b) => new Date(a.date) - new Date(b.date))
    )}, [currentMonth, orders]
    );

     const [ordersMonth, setOrdersMonth] = useState(
        orders?.filter( (item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
        )
        .sort((a, b) => new Date(a.date) - new Date(b.date))
      )


     function openWeekView(event){
      const {name} = event.target;
      setCurrent(event.target.attributes[0].value);
      setWeekCal(true);
      setShowCal(false);
  

     }

     if (loading) {
        return <Loader/>;
      }
  
    return <div class="daily-orders-page">

    { showCal &&<div>

       
     <div>
            <CalendarNav currentDate={currentDate} currentMonth={currentMonth} setCurrent={setCurrent} currentYear={currentYear}/>
            
            <div class="calendar">
            {days.map((day) => {
              return <div class="day-name"> {day} </div>

            })}
               { num.map((item)=>{
                  var c = "day-num";

                  if(ordersMonth?.filter((order)=>
                    isSameDay(item, order.date))[0]){
                      c="day-num-order-true"
                    }

                  if(isToday(item)){
                    c = "day-num-today";
                  }    
                
                return  <button name={item} onClick={openWeekView} class={c}>
                {item.getDate()}
              </button>
                
               }

               )}
            </div>
  </div>


  
  <div class="upcoming-orders-page">

    <div class="today-orders">

    
    <div class="today-header">TODAY</div>
    <div>
    {
        orders?.filter((order)=> isToday(new Date(order.date)))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((item)=> 
            {
              return <div class="upcoming-order-card">
              <div> {new Date(item?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div>  {item?.name} </div>
              <div>  {item?.deliveryMode} </div>
              <div>  {item?.orderList.length} items </div>
                 </div>
            } )
          }{
            !orders?.filter((order)=> isToday(new Date(order.date)))[0]
            && <div class="nothing-for-today">Nothing for today</div>
          }
        </div>

      </div>
  
      <div>
        <div class="upcoming-orders-title">Upcoming Orders</div>
        <div>
        {
        orders?.filter((order)=> new Date(order.date) > endOfToday())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((item)=> 
            {
              return <div class="upcoming-order-card">
              <div>{new Date(item?.date).getDate()}th </div>
              
              <div>  {new Date(item?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div> {item?.name}</div>
              <div> {item?.deliveryMode}</div>
              <div> {item?.orderList.length} items</div>    
                 </div>
              
            } )
          }
         </div> 
    </div>


  </div>
    
</div>}
{ showWeekCal && 
  <WeekView orders={ordersMonth} setOrders={setOrdersMonth} currentDate={currentDate} setCurrentDate={setCurrent}/>
}

        
</div>

}

export default Calendar;