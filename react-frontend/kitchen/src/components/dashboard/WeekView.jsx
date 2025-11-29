import { isSameDay } from "date-fns";
import WeekViewNav from "./WeekViewNav.jsx";
import OrderCard from "./OrderCard.jsx";
import { useState, useEffect } from "react";
import DashboardNav from './DashboardNav.jsx';

function WeekView({currentDate, currentMonth, openDash, setCurrentDate, orders, setOrders}){

   //use effect to fetch orders for that week
   //add nav buttons

   const [statusNav, setStatusNav] = useState("Ordered");

   const dayOrders = orders.filter((item)=> {
      return isSameDay(currentDate, item.date);
     });

     const dayStatusOrders = dayOrders.filter((item)=>{
      if(statusNav == "Ordered"){
         if(item.status == "Ordered"){
             return item
         }   
      }
      else if(statusNav == "Received"){
         if(item.status == "Received"){
  
               return item 
         }

      }

      else if(statusNav == "In Progress"){
         
         if(item.status == "In Progress"){
  
               return item 
         }

      }

      else if(statusNav == "Completed"){
         if(item.status == "prepComplete" || item.status == "pickedUp" || item.status == "deliveryComplete")
         return item
      }  

   });

   const orderedOrders = dayOrders.filter((item)=>{
         if(item.status == "Ordered"){
             return item
         }   
  });

  const receivedOrders = dayOrders.filter((item)=>{
      if(item.status == "Received"){
            return item       
      }
});

const inprogressOrders = dayOrders.filter((item)=>{
      if(item.status == "In Progress"){
            return item
      }
});

const completedOrders = dayOrders.filter((item)=>{
      if(item.status == "prepComplete" || item.status == "pickedUp" || item.status == "deliveryComplete")
      return item  
});

   function changeStatus(event){
      const {name} = event.target;
      setStatusNav(name);
      
   }

   return <div class="week-view-page">
   <DashboardNav/>
   <button class="back-button" onClick={openDash}><span class="material-symbols-outlined">
    arrow_back_ios
    </span><div>Back</div></button>
    <div class="week-view-month">
    {currentMonth}

    </div> 
    
   <WeekViewNav orders={orders} currentDate={currentDate} setCurrent={setCurrentDate}/>
 
   <div>

{ dayOrders.length == 0 ? 
<div class="week-view-no-orders">
   No orders for the day

   </div>
:
<div>


<div class="orders-status-nav-pending">

<button name="Ordered" class={statusNav == "Ordered" ? "orders-status-nav-pending-current" : "orders-status-nav-pending-button"} onClick={changeStatus}>
! Pending Orders {orderedOrders.length}</button>

</div>



<div class="orders-status-nav"> 
<button name="Received" class={statusNav == "Received" ? "orders-status-nav-current" : "orders-status-nav-button"} onClick={changeStatus}>Received {receivedOrders.length}</button>
<button name="In Progress" class={statusNav == "In Progress" ? "orders-status-nav-current" : "orders-status-nav-button"} onClick={changeStatus}>In Progress {inprogressOrders.length}</button>
<button name="Completed" class={statusNav == "Completed" ? "orders-status-nav-current" : "orders-status-nav-button"} onClick={changeStatus}>Completed {completedOrders.length}</button>
</div>          

   <div class="week-view-order-list">{dayStatusOrders.map((item)=>{
      return <OrderCard setStatusNav={setStatusNav} statusNav={statusNav} order={item} setOrders={setOrders}/>
   })}
   </div> 
   </div>
  
}

   </div>

   </div>

}

export default WeekView;