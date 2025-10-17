import { useEffect, useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

import { useOrderBank } from "../../orders/order";

import CalendarMonthView from './CalendarMonthView';
import {startOfToday, endOfToday, isToday, isSameWeek, isSameMonth, addMinutes, isSameDay, subMonths, addMonths, getYear, startOfMonth, startOfWeek, endOfWeek, endOfMonth, eachDayOfInterval, getMonth, parse} from 'date-fns';


import AddOrderForm from './AddOrderForm';
import UpdateOrderForm from './UpdateOrderForm';
import OrderInfo from './OrderInfo'
import ConfirmBox from './ConfirmBox'
import DashboardHeader from './dashboardMenu/DashboardHeader';

import Loader from '../Loader'

function Dashboard (props){

    const location = useLocation();

    useEffect(() => {
      localStorage.setItem('lastRoute', location.pathname);
    }, [location]);

    //routes
    
       const [loading, setLoading] = useState(true);
    
       const {fetchOrders, deleteOrder, createOrder, orders, editOrder, fetchOrder} = useOrderBank();
       
         
         useEffect(() => {
           fetchOrders()
           .finally(() => {
            setLoading(false);        
          })
         }, []);

  
    //add orders from most recent to not
    //add archive
    
    const [currentId, setId] = useState("");

    async function removeOrder(){
        deleteOrder(currentId);
        setId("");
        closeConfirmDelete();
    }

    function showConfirmDelete(){
        setConfirmDelete(true);
        console.log(currentId);

    }

    function closeConfirmDelete(){
        setConfirmDelete(false);

    }

    const [toggleConfirmDelete, setConfirmDelete] = useState(false);

    

         function viewOrder(event){

    if (event.target.attributes[1].nodeValue == "edit"){
              setId(event.target.id);
              console.log(currentId)
              openUpdateOrder(event.target.id);
                            
            }
            else if (event.target.attributes[1].nodeValue == "delete"){
                setId(event.target.id);
                showConfirmDelete();
                
            }
         }

        const [orderForm, showOrderForm] = useState(false);

        function openOrderForm(){
          showOrderForm(true); 
        }

        const [updateOrder, showUpdateOrder] = useState(false);

        async function openUpdateOrder(){
          showUpdateOrder(true);       
        }

        
        const [currentDate, setCurrent] = useState(new Date());
   
       const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];

        const currentMonth = months[getMonth(currentDate)];
       const num = eachDayOfInterval({
         start: startOfWeek(startOfMonth(currentDate)),
         end: endOfWeek(endOfMonth(currentDate))
       })

       useEffect(
            () => {
            setOrdersMonth(
                orders?.filter((order)=> order.type == props.orderType).filter((item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
         ).sort((a, b) => new Date(a.date) - new Date(b.date))
        )}, [currentMonth, orders]
        );
    
         const [ordersMonth, setOrdersMonth] = useState(
            orders?.filter((order)=> order.type == props.orderType).filter( (item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
            )
            .sort((a, b) => new Date(a.date) - new Date(b.date))
          )
        
          const dayOrders = ordersMonth?.filter((item)=> {
      return isSameDay(currentDate, item.date);
     });

     const [addButton, setAddButton] = useState(true);

        if(loading){
          return <Loader/>;
        }

    return  <div class="dashboard flex justify-center">

    <DashboardHeader setAddButton={setAddButton} addButton={addButton} title={props.title} setAuth={props.setAuth} setAdminAuth={props.setAdminAuth}/>
  
  { addButton && <div class="add-order-button">
            <button onClick={openOrderForm}>Add Order +</button>
          </div>}
         
    <div class="dashboard-home">
        
      <CalendarMonthView num={num} setCurrent={setCurrent} currentDate={currentDate} ordersMonth={ordersMonth} currentMonth={currentMonth}/>
 
 <div>

 
        {dayOrders?.length == 0 ? 
        <div class="past-orders-list-no-orders">
        No Orders Yet
        </div> :
        <div class="past-orders-list">
          {dayOrders?.map((order)=> <OrderInfo viewOrder={viewOrder} order={order}/>)}
        </div>
        }
        </div>

    </div>
  
     
        

{ toggleConfirmDelete && <ConfirmBox yesButton={removeOrder} noButton={closeConfirmDelete} closeButton={closeConfirmDelete}/>
}

{orderForm && <AddOrderForm createOrder={createOrder} showOrderForm={showOrderForm}/>}
{updateOrder && <UpdateOrderForm currentId={currentId} showUpdateOrder={showUpdateOrder}/>}

    </div>
}

export default Dashboard;


