import { useEffect, useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import Calendar from './Calendar';
import CalendarMonthView from './CalendarMonthView';
import {startOfToday, endOfToday, isToday, isSameWeek, isSameMonth, addMinutes, isSameDay, subMonths, addMonths, getYear, startOfMonth, startOfWeek, endOfWeek, endOfMonth, eachDayOfInterval, getMonth, parse} from 'date-fns';
import { useOrderBank } from "../../orders/order";
import UpcomingOrdersView from './UpcomingOrdersView'
import WeekView from './WeekView';


function Dashboard (props){

    const location = useLocation();

    useEffect(() => {
      localStorage.setItem('lastRoute', location.pathname);
    }, [location]);

    //routes

    const [showDash, setDash] = useState(true);
    const [showWeekView, setWeekView] = useState(false);

    function openWeekView(event){
        setDash(false);
        setWeekView(true);
        setCurrent(event.target.name);
    }

    function openDash(){
        setDash(true);
        setWeekView(false);
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
    
       const [loading, setLoading] = useState(true);
    
       const {fetchOrdersByStore, orders} = useOrderBank();
         
         useEffect(() => {
           fetchOrdersByStore("suyacitycatering")
           .finally(() => {
            setLoading(false);        
          })
         }, []);
  
    
         useEffect(
            () => {
            setOrdersMonth(
                orders?.filter((order)=> order.type == "catering").filter((item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
         ).sort((a, b) => new Date(a.date) - new Date(b.date))
        )}, [currentMonth, orders]
        );
    
         const [ordersMonth, setOrdersMonth] = useState(
            orders?.filter((order)=> order.type == "catering").filter( (item)=> currentMonth == months[getMonth(item.date)] || isSameWeek((num[0]),item.date) || isSameWeek((num[num.length-1]),item.date)
            )
            .sort((a, b) => new Date(a.date) - new Date(b.date))
          )

return  <div class="dashboard">

{showDash &&
    <div>
 <DashboardNav setAuth={props.setAuth} setAdminAuth={props.setAdminAuth}/>
    
    <div class="dashboard-header">
    <div class="dashboard-location">
        Suya City Fieldgate
    </div> 
    <div class="dashboard-name">
        Hello, {localStorage.username}
    </div>
         
    </div>

    <CalendarMonthView num={num} setCurrent={setCurrent} currentDate={currentDate} openWeekView={openWeekView} ordersMonth={ordersMonth} currentMonth={currentMonth}/> 
    <UpcomingOrdersView currentMonth={currentMonth} orders={orders}/>
    </div>
     } 

     {
        showWeekView &&   <WeekView currentMonth={currentMonth} orders={ordersMonth} setOrders={setOrdersMonth} currentDate={currentDate} setCurrentDate={setCurrent} openDash={openDash}/>

     }

    </div>
}

export default Dashboard;


